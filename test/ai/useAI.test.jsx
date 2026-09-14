import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

import { useGenerateAIReply } from "@/ai/useAI";
import { renderWithEngage, stubEngage } from "../support/engage";

function Probe({ type = "make_longer", message = "Some text", options }) {
  const [generateAIReply, { generatedOptions, loading }] = useGenerateAIReply();
  const [returned, setReturned] = useState("nothing yet");

  const run = async () => {
    setReturned(await generateAIReply(type, message, options));
  };

  return (
    <>
      <button type="button" onClick={run}>
        Run
      </button>
      {loading && <p>Generating</p>}
      <p>Returned {JSON.stringify(returned)}</p>
      <ul>
        {generatedOptions?.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
    </>
  );
}

async function runProbe(props = {}, options = {}) {
  await renderWithEngage(<Probe {...props} />, options);
  await userEvent.click(screen.getByRole("button", { name: "Run" }));
}

describe("useGenerateAIReply", () => {
  const engage = stubEngage();

  it("asks Engage for the reply with the operation the schema exposes", async () => {
    engage.willReply(["A longer version"]);

    await runProbe();

    expect(engage.lastRequest.operationName).toBe("GenerateAIReply");
  });

  it("sends the type, the message and the business ids it was given", async () => {
    engage.willReply(["A longer version"]);

    await runProbe({ type: "make_shorter", message: "Please shorten me" });

    expect(engage.lastRequest.variables).toEqual({
      type: "make_shorter",
      message: "Please shorten me",
      senalysisBusinessId: "senalysis-business-1",
      spilloverBusinessId: "spillover-business-1",
      n: 1,
    });
  });

  it("takes the business ids from the options the host app provides", async () => {
    engage.willReply(["A longer version"]);

    await runProbe(
      {},
      {
        senalysisBusinessId: "other-senalysis-business",
        spilloverBusinessId: "other-spillover-business",
      },
    );

    expect(engage.lastRequest.variables).toMatchObject({
      senalysisBusinessId: "other-senalysis-business",
      spilloverBusinessId: "other-spillover-business",
    });
  });

  it("asks for as many replies as the caller wants", async () => {
    engage.willReply(["One", "Two", "Three"]);

    await runProbe({ options: { n: 3 } });

    expect(engage.lastRequest.variables.n).toBe(3);
  });

  it("hands the generated replies back to the caller", async () => {
    engage.willReply(["First take", "Second take"]);

    await runProbe();

    expect(
      await screen.findByText('Returned ["First take","Second take"]'),
    ).toBeInTheDocument();
  });

  it("exposes the generated replies as options", async () => {
    engage.willReply(["First take", "Second take"]);

    await runProbe();

    expect(await screen.findByText("Second take")).toBeInTheDocument();
  });

  it("reports it is generating while the request is in flight", async () => {
    engage.willHang();

    await runProbe();

    expect(await screen.findByText("Generating")).toBeInTheDocument();
  });

  it("stops reporting it is generating once the replies arrive", async () => {
    const inFlight = engage.willHang();

    await runProbe();
    await screen.findByText("Generating");
    inFlight.reply(["A longer version"]);

    expect(await screen.findByText("A longer version")).toBeInTheDocument();
    expect(screen.queryByText("Generating")).not.toBeInTheDocument();
  });

  it("logs every error the reply came back with", async () => {
    // The hook logs each error, so the run is only silent if the test takes it.
    const logged = vi.spyOn(console, "error").mockImplementation(() => {});
    engage.willReplyWithErrors(["Out of credit", "Message too long"]);

    await runProbe();
    await screen.findByText("Returned null");

    expect(logged.mock.calls).toEqual([
      ["AI Error: Out of credit"],
      ["AI Error: Message too long"],
    ]);
  });

  it("hands back nothing when Engage refuses the whole operation", async () => {
    engage.willRefuse("Type is not supported");

    await runProbe();

    expect(await screen.findByText("Returned null")).toBeInTheDocument();
  });

  it("hands back nothing when Engage cannot be reached", async () => {
    engage.willNotConnect();

    await runProbe();

    expect(await screen.findByText("Returned null")).toBeInTheDocument();
  });

  it("stops reporting it is generating when Engage cannot be reached", async () => {
    engage.willNotConnect();

    await runProbe();
    await screen.findByText("Returned null");

    expect(screen.queryByText("Generating")).not.toBeInTheDocument();
  });
});
