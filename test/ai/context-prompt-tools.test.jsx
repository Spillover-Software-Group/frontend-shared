// The two tools that generate from a prompt the user writes instead of from
// text that already exists. They are the same form twice in production, so they
// are covered as a table: the difference between them is the type they send and
// the words on their button.
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import GenerateCaption from "@/ai/GenerateCaption";
import GenerateText from "@/ai/GenerateText";
import { renderWithEngage, stubEngage } from "../support/engage";

const CONTEXT = "A new seasonal menu";

const TOOLS = [
  {
    name: "GenerateText",
    Component: GenerateText,
    type: "text",
    button: "Generate Text",
  },
  {
    name: "GenerateCaption",
    Component: GenerateCaption,
    type: "post_caption",
    button: "Generate Caption",
  },
];

describe.each(TOOLS)("$name", (tool) => {
  const engage = stubEngage();

  const open = (onOptionSelected) =>
    renderWithEngage(<tool.Component onOptionSelected={onOptionSelected} />);

  const generate = async (context) => {
    await userEvent.type(
      screen.getByLabelText("Give us some context..."),
      context,
    );
    await userEvent.click(screen.getByRole("button", { name: tool.button }));
  };

  it("asks Engage for three takes on the context the user wrote", async () => {
    engage.willReply(["First take", "Second take", "Third take"]);

    await open();
    await generate(CONTEXT);
    await screen.findByText("First take");

    expect(engage.lastRequest.variables).toMatchObject({
      type: tool.type,
      message: CONTEXT,
      n: 3,
    });
  });

  it("asks for more context when what the user wrote is too short", async () => {
    await open();
    await generate("Menu");

    expect(
      await screen.findByText("Please provide some more context"),
    ).toBeInTheDocument();
  });

  it("asks Engage for nothing when the context is too short", async () => {
    await open();
    await generate("Menu");
    await screen.findByText("Please provide some more context");

    expect(engage.requests).toEqual([]);
  });

  it("offers every take Engage generated", async () => {
    engage.willReply(["First take", "Second take", "Third take"]);

    await open();
    await generate(CONTEXT);

    expect(await screen.findByText("Third take")).toBeInTheDocument();
    expect(screen.getByText("First take")).toBeInTheDocument();
  });

  it("invites the user to pick one of the takes or try again", async () => {
    engage.willReply(["First take"]);

    await open();
    await generate(CONTEXT);

    expect(
      await screen.findByText("Pick an option or try again for new options"),
    ).toBeInTheDocument();
  });

  it("hands the picked take to the host app with its own type", async () => {
    const onOptionSelected = vi.fn();
    engage.willReply(["First take", "Second take", "Third take"]);

    await open(onOptionSelected);
    await generate(CONTEXT);
    await userEvent.click(await screen.findByText("Second take"));

    expect(onOptionSelected).toHaveBeenCalledWith("Second take", tool.type);
  });

  it("refuses a second request while the first is still running", async () => {
    engage.willHang();

    await open();
    await generate(CONTEXT);

    expect(screen.getByRole("button", { name: tool.button })).toBeDisabled();
  });

  it("offers nothing before the user has asked for anything", async () => {
    await open();

    expect(
      screen.queryByText("Pick an option or try again for new options"),
    ).not.toBeInTheDocument();
  });
});
