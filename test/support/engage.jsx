// The one harness for components that talk to the Engage GraphQL API.
//
// It renders the real providers and the real query documents and stubs only the
// network, so a test asserts the request that actually left the app instead of a
// call on a mocked hook. Every test that needs Engage uses this; none of them
// builds its own client or its own fake.
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import { EngageProvider } from "@/hooks/useEngage";
import { OptionsProvider } from "@/hooks/useOptions";

const DEFAULT_OPTIONS = {
  senalysisBusinessId: "senalysis-business-1",
  spilloverBusinessId: "spillover-business-1",
};

function jsonResponse(payload) {
  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}

function replyPayload(replies, errors) {
  return { data: { generateAiReply: { replies, errors } } };
}

// Installs the network stub for the surrounding suite and hands back the
// requests Engage received plus the replies it is going to give.
function stubEngage() {
  const requests = [];
  const responders = [];

  beforeEach(() => {
    requests.length = 0;
    responders.length = 0;

    vi.stubGlobal(
      "fetch",
      vi.fn(async (url, init) => {
        const { operationName, variables, query } = JSON.parse(init.body);
        requests.push({ url: String(url), operationName, variables, query });

        const responder = responders.shift();

        if (!responder) {
          throw new Error(
            `Engage received an unexpected ${operationName} request. Queue a reply for it in the test.`,
          );
        }

        // Awaited so a responder that throws rejects the request the way a
        // failed fetch does, rather than throwing into Apollo's link.
        return await responder();
      }),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  return {
    requests,

    get lastRequest() {
      return requests.at(-1);
    },

    // Engage generates the replies and reports no problem with them.
    willReply(replies) {
      responders.push(() => jsonResponse(replyPayload(replies, [])));
    },

    // The mutation runs but the field reports errors of its own.
    willReplyWithErrors(errors, replies = null) {
      responders.push(() =>
        jsonResponse(
          replyPayload(
            replies,
            errors.map((message) => ({ message })),
          ),
        ),
      );
    },

    // The request reaches Engage and the whole operation is rejected.
    willRefuse(message) {
      responders.push(() => jsonResponse({ errors: [{ message }] }));
    },

    // The request never reaches Engage at all.
    willNotConnect() {
      responders.push(() => {
        throw new TypeError("Failed to fetch");
      });
    },

    // The request stays in flight until the test answers it, so the test can
    // look at what is on screen while it is running.
    willHang() {
      let release;
      const held = new Promise((resolve) => {
        release = resolve;
      });

      responders.push(() => held);

      return {
        reply(replies) {
          release(jsonResponse(replyPayload(replies, [])));
        },
      };
    },
  };
}

// Renders `ui` under the providers a consumer mounts it under. Engage builds its
// Apollo client in an effect and shows a placeholder meanwhile, so nothing below
// it exists until that placeholder is gone.
async function renderWithEngage(ui, options = {}) {
  const result = render(
    <OptionsProvider options={{ ...DEFAULT_OPTIONS, ...options }}>
      <EngageProvider mode="development">{ui}</EngageProvider>
    </OptionsProvider>,
  );

  const placeholder = screen.queryByText("Initializing...");
  if (placeholder) await waitForElementToBeRemoved(placeholder);

  return result;
}

export { renderWithEngage, stubEngage };
