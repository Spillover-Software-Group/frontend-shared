import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AITextHelpers } from "@/ai/AITextHelpers";
import { renderWithEngage, stubEngage } from "../support/engage";

const TEXT = "Come and see us this weekend";
const MESSAGE = "The service was great";

describe("AITextHelpers", () => {
  const engage = stubEngage();

  it("offers every tool it has when it is not told which to show", async () => {
    await renderWithEngage(<AITextHelpers text={TEXT} message={MESSAGE} />);

    expect(screen.getByText("Make Funnier")).toBeInTheDocument();
    expect(screen.getByText("Fix Spelling & Grammar")).toBeInTheDocument();
  });

  it("offers only the tools it was told to show", async () => {
    await renderWithEngage(
      <AITextHelpers text={TEXT} message={MESSAGE} tools={["Translate"]} />,
    );

    expect(screen.getByText("Translate")).toBeInTheDocument();
    expect(screen.queryByText("Make Funnier")).not.toBeInTheDocument();
  });

  it("runs the tool the user picks on the text it was given", async () => {
    engage.willReply(["A longer version"]);

    await renderWithEngage(
      <AITextHelpers text={TEXT} message={MESSAGE} tools={["MakeLonger"]} />,
    );
    await userEvent.click(screen.getByText("Make Longer"));
    await screen.findByText("A longer version");

    expect(engage.lastRequest.variables).toMatchObject({
      type: "make_longer",
      message: TEXT,
    });
  });

  it("runs a tool that works on a message against the message", async () => {
    engage.willReply(["Le service était excellent"]);

    await renderWithEngage(
      <AITextHelpers text={TEXT} message={MESSAGE} tools={["Translate"]} />,
    );
    await userEvent.click(screen.getByText("Translate"));
    await screen.findByText("Le service était excellent");

    expect(engage.lastRequest.variables).toMatchObject({
      type: "translate",
      message: MESSAGE,
    });
  });

  it("hands the rewrite the user picks to the host app", async () => {
    const onOptionSelected = vi.fn();
    engage.willReply(["A longer version"]);

    await renderWithEngage(
      <AITextHelpers
        text={TEXT}
        message={MESSAGE}
        tools={["MakeLonger"]}
        onOptionSelected={onOptionSelected}
      />,
    );
    await userEvent.click(screen.getByText("Make Longer"));
    await userEvent.click(await screen.findByText("A longer version"));

    expect(onOptionSelected).toHaveBeenCalledWith(
      "A longer version",
      "make_longer",
    );
  });

  it("asks Engage for nothing until a tool is opened", async () => {
    await renderWithEngage(<AITextHelpers text={TEXT} message={MESSAGE} />);

    expect(engage.requests).toEqual([]);
  });

  it("calls the close handler it was given from the close control", async () => {
    const onCloseButtonClick = vi.fn();
    const { container } = await renderWithEngage(
      <AITextHelpers
        text={TEXT}
        message={MESSAGE}
        tools={["Translate"]}
        onCloseButtonClick={onCloseButtonClick}
      />,
    );

    // The close control is a plain div, so it can only be found by position.
    await userEvent.click(container.querySelector("header > div:last-child"));

    expect(onCloseButtonClick).toHaveBeenCalledTimes(1);
  });
});
