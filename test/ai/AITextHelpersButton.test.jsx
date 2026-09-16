import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AITextHelpersButton } from "@/ai/AITextHelpersButton";
import { renderWithEngage, stubEngage } from "../support/engage";

const TEXT = "Come and see us this weekend";

async function openHelpers(props = {}) {
  await renderWithEngage(
    <AITextHelpersButton text={TEXT} tools={["MakeLonger"]} {...props} />,
  );
  await userEvent.click(
    screen.getByRole("button", { name: "AI Text Helpers" }),
  );
}

describe("AITextHelpersButton", () => {
  const engage = stubEngage();

  it("keeps the helpers out of the document until it is pressed", async () => {
    await renderWithEngage(
      <AITextHelpersButton text={TEXT} tools={["MakeLonger"]} />,
    );

    expect(screen.queryByText("Make Longer")).not.toBeInTheDocument();
  });

  it("shows the helpers it was given when it is pressed", async () => {
    await openHelpers();

    expect(await screen.findByText("Make Longer")).toBeInTheDocument();
  });

  // The button keeps its own accessible name whatever it is given to show, so
  // this asserts the visible label rather than the name.
  it("shows the label it was given beside its icon", async () => {
    await renderWithEngage(
      <AITextHelpersButton text={TEXT} tools={["MakeLonger"]}>
        Rewrite
      </AITextHelpersButton>,
    );

    expect(
      screen.getByRole("button", { name: "AI Text Helpers" }),
    ).toHaveTextContent("Rewrite");
  });

  it("runs the tool the user opens on the text it was given", async () => {
    engage.willReply(["A longer version"]);

    await openHelpers();
    await userEvent.click(await screen.findByText("Make Longer"));
    await screen.findByText("A longer version");

    expect(engage.lastRequest.variables).toMatchObject({
      type: "make_longer",
      message: TEXT,
    });
  });

  it("hands the rewrite the user picks to the host app", async () => {
    const onOptionSelected = vi.fn();
    engage.willReply(["A longer version"]);

    await openHelpers({ onOptionSelected });
    await userEvent.click(await screen.findByText("Make Longer"));
    await userEvent.click(await screen.findByText("A longer version"));

    expect(onOptionSelected).toHaveBeenCalledWith(
      "A longer version",
      "make_longer",
    );
  });

  it("stays open when the user clicks outside it", async () => {
    await openHelpers();
    await screen.findByText("Make Longer");

    await userEvent.click(document.body);

    expect(screen.getByText("Make Longer")).toBeInTheDocument();
  });
});
