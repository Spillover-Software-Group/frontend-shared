// The thirteen tools that are a `Helper` with a type and a loading message and
// nothing else. What distinguishes them is the request they send and the words
// they show, so they are covered once as a table rather than thirteen times as
// near-identical suites; `Helper` itself is tested in Helper.test.jsx.
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ContinueWriting from "@/ai/ContinueWriting";
import GenerateCommentReply from "@/ai/GenerateCommentReply";
import GenerateReviewReply from "@/ai/GenerateReviewReply";
import ImproveWriting from "@/ai/ImproveWriting";
import MakeFriendlier from "@/ai/MakeFriendlier";
import MakeFunnier from "@/ai/MakeFunnier";
import MakeLonger from "@/ai/MakeLonger";
import MakeMoreCasual from "@/ai/MakeMoreCasual";
import MakeMoreFormal from "@/ai/MakeMoreFormal";
import MakeShorter from "@/ai/MakeShorter";
import SpellCheck from "@/ai/SpellCheck";
import Summarize from "@/ai/Summarize";
import Translate from "@/ai/Translate";
import { renderWithEngage, stubEngage } from "../support/engage";

const SOURCE_TEXT = "Come and see us this weekend";

// `inserts` is the text the tool hands back to the host app when the user picks
// the reply "A generated reply", or null for a tool whose result is only there
// to be read.
const TOOLS = [
  {
    name: "MakeLonger",
    Component: MakeLonger,
    type: "make_longer",
    textProp: "text",
    loadingMsg: "Making text longer...",
    n: 1,
    offersRetry: true,
    inserts: "A generated reply",
  },
  {
    name: "MakeShorter",
    Component: MakeShorter,
    type: "make_shorter",
    textProp: "text",
    loadingMsg: "Making text shorter...",
    n: 1,
    offersRetry: true,
    inserts: "A generated reply",
  },
  {
    name: "MakeFriendlier",
    Component: MakeFriendlier,
    type: "make_friendlier",
    textProp: "text",
    loadingMsg: "Making text friendlier...",
    n: 1,
    offersRetry: true,
    inserts: "A generated reply",
  },
  {
    name: "MakeFunnier",
    Component: MakeFunnier,
    type: "make_funnier",
    textProp: "text",
    loadingMsg: "Making text funnier...",
    n: 1,
    offersRetry: true,
    inserts: "A generated reply",
  },
  {
    name: "MakeMoreCasual",
    Component: MakeMoreCasual,
    type: "make_more_casual",
    textProp: "text",
    loadingMsg: "Making more casual...",
    n: 1,
    offersRetry: true,
    inserts: "A generated reply",
  },
  {
    name: "MakeMoreFormal",
    Component: MakeMoreFormal,
    type: "make_more_formal",
    textProp: "text",
    loadingMsg: "Making more formal...",
    n: 1,
    offersRetry: true,
    inserts: "A generated reply",
  },
  {
    name: "ImproveWriting",
    Component: ImproveWriting,
    type: "improve_writing",
    textProp: "text",
    loadingMsg: "Improving writing...",
    n: 1,
    offersRetry: true,
    inserts: "A generated reply",
  },
  {
    name: "SpellCheck",
    Component: SpellCheck,
    type: "spellcheck",
    textProp: "text",
    loadingMsg: "Checking spelling...",
    n: 1,
    offersRetry: true,
    inserts: "A generated reply",
  },
  {
    name: "ContinueWriting",
    Component: ContinueWriting,
    type: "continue_writing",
    textProp: "text",
    loadingMsg: "Continuing your text...",
    n: 1,
    offersRetry: true,
    // The only tool that transforms the reply: it continues the text rather
    // than replacing it, so it hands back both halves joined.
    inserts: `${SOURCE_TEXT} A generated reply`,
  },
  {
    name: "GenerateReviewReply",
    Component: GenerateReviewReply,
    type: "review_reply",
    textProp: "message",
    loadingMsg: "Generating reply...",
    n: 3,
    offersRetry: true,
    inserts: "A generated reply",
  },
  {
    name: "GenerateCommentReply",
    Component: GenerateCommentReply,
    type: "comment_reply",
    textProp: "message",
    loadingMsg: "Generating reply...",
    n: 3,
    offersRetry: true,
    inserts: "A generated reply",
  },
  {
    name: "Translate",
    Component: Translate,
    type: "translate",
    textProp: "message",
    loadingMsg: "Translating...",
    n: 1,
    offersRetry: false,
    inserts: null,
  },
  {
    name: "Summarize",
    Component: Summarize,
    type: "summarize",
    textProp: "message",
    loadingMsg: "Summarizing...",
    n: 1,
    offersRetry: false,
    inserts: null,
  },
];

describe.each(TOOLS)("$name", (tool) => {
  const engage = stubEngage();

  const open = (onOptionSelected) =>
    renderWithEngage(
      <tool.Component
        {...{ [tool.textProp]: SOURCE_TEXT }}
        onOptionSelected={onOptionSelected}
      />,
    );

  it("asks Engage for its own kind of rewrite", async () => {
    engage.willReply(["A generated reply"]);

    await open();
    await screen.findByText("A generated reply");

    expect(engage.lastRequest.variables).toMatchObject({
      type: tool.type,
      message: SOURCE_TEXT,
      n: tool.n,
    });
  });

  it("shows its own message while it waits for Engage", async () => {
    engage.willHang();

    await open();

    expect(await screen.findByText(tool.loadingMsg)).toBeInTheDocument();
  });

  it("offers a retry only if it is meant to be run again", async () => {
    engage.willReply(["A generated reply"]);

    await open();
    await screen.findByText("A generated reply");

    expect(Boolean(screen.queryByRole("button", { name: "Retry" }))).toBe(
      tool.offersRetry,
    );
  });

  it("hands the picked reply to the host app in the form it inserts", async () => {
    const onOptionSelected = vi.fn();
    const expectedCalls = tool.inserts ? [[tool.inserts, tool.type]] : [];
    engage.willReply(["A generated reply"]);

    await open(onOptionSelected);
    await userEvent.click(await screen.findByText("A generated reply"));

    expect(onOptionSelected.mock.calls).toEqual(expectedCalls);
  });
});
