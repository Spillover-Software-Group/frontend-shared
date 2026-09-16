import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Helper from "@/ai/Helper";
import { renderWithEngage, stubEngage } from "../support/engage";

describe("Helper", () => {
  const engage = stubEngage();

  it("asks Engage for its type of rewrite as soon as it opens", async () => {
    engage.willReply(["A rewrite"]);

    await renderWithEngage(<Helper type="make_longer" text="Some text" />);
    await screen.findByText("A rewrite");

    expect(engage.lastRequest.variables).toMatchObject({
      type: "make_longer",
      message: "Some text",
      n: 1,
    });
  });

  it("asks for as many rewrites as it was told to offer", async () => {
    engage.willReply(["One", "Two", "Three"]);

    await renderWithEngage(
      <Helper type="review_reply" text="A review" n={3} />,
    );
    await screen.findByText("Three");

    expect(engage.lastRequest.variables.n).toBe(3);
  });

  it("asks for nothing when there is no text to work on", async () => {
    await renderWithEngage(<Helper type="make_longer" text="   " />);

    expect(engage.requests).toEqual([]);
  });

  it("waits to be asked when it is not set to run on its own", async () => {
    await renderWithEngage(
      <Helper type="make_longer" text="Some text" autoRun={false} />,
    );

    expect(engage.requests).toEqual([]);
  });

  it("shows the message its tool gave it while the rewrite is running", async () => {
    engage.willHang();

    await renderWithEngage(
      <Helper
        type="make_longer"
        text="Some text"
        loadingMsg="Making text longer..."
      />,
    );

    expect(
      await screen.findByText("Making text longer..."),
    ).toBeInTheDocument();
  });

  it("falls back to a generic message when its tool gave it none", async () => {
    engage.willHang();

    await renderWithEngage(<Helper type="make_longer" text="Some text" />);

    expect(await screen.findByText("Loading...")).toBeInTheDocument();
  });

  it("offers every rewrite Engage generated", async () => {
    engage.willReply(["First take", "Second take"]);

    await renderWithEngage(
      <Helper type="make_longer" text="Some text" n={2} />,
    );

    expect(await screen.findByText("First take")).toBeInTheDocument();
    expect(screen.getByText("Second take")).toBeInTheDocument();
  });

  it("reports the rewrite the user picks along with its type", async () => {
    const onOptionSelected = vi.fn();
    engage.willReply(["A rewrite"]);

    await renderWithEngage(
      <Helper
        type="make_longer"
        text="Some text"
        onOptionSelected={onOptionSelected}
      />,
    );
    await userEvent.click(await screen.findByText("A rewrite"));

    expect(onOptionSelected).toHaveBeenCalledWith("A rewrite", "make_longer");
  });

  it("asks Engage again when the user retries", async () => {
    engage.willReply(["First take"]);
    engage.willReply(["Second take"]);

    await renderWithEngage(<Helper type="make_longer" text="Some text" />);
    await screen.findByText("First take");
    await userEvent.click(screen.getByRole("button", { name: "Retry" }));

    expect(await screen.findByText("Second take")).toBeInTheDocument();
  });

  it("offers no retry to a tool that only runs once", async () => {
    engage.willReply(["A translation"]);

    await renderWithEngage(
      <Helper type="translate" text="Some text" retry={false} />,
    );
    await screen.findByText("A translation");

    expect(
      screen.queryByRole("button", { name: "Retry" }),
    ).not.toBeInTheDocument();
  });

  it("offers no retry while a rewrite is still running", async () => {
    engage.willHang();

    await renderWithEngage(<Helper type="make_longer" text="Some text" />);
    await screen.findByText("Loading...");

    expect(
      screen.queryByRole("button", { name: "Retry" }),
    ).not.toBeInTheDocument();
  });

  it("shows the prompt its tool put above the rewrites", async () => {
    engage.willReply(["A rewrite"]);

    await renderWithEngage(
      <Helper type="make_longer" text="Some text">
        <p>Pick a version</p>
      </Helper>,
    );

    expect(await screen.findByText("Pick a version")).toBeInTheDocument();
  });

  it("offers a retry when Engage cannot be reached", async () => {
    engage.willNotConnect();

    await renderWithEngage(<Helper type="make_longer" text="Some text" />);

    expect(
      await screen.findByRole("button", { name: "Retry" }),
    ).toBeInTheDocument();
  });

  // The failure is swallowed in `useAI`'s catch and no caller reads the return
  // value, so the panel simply empties and the user is told nothing at all.
  // https://github.com/Spillover-Software-Group/frontend-shared/issues/9
  it("[BUG #9] says nothing about a request that never reached Engage", async () => {
    engage.willNotConnect();

    const { container } = await renderWithEngage(
      <Helper
        type="make_longer"
        text="Some text"
        loadingMsg="Making text longer..."
      />,
    );
    await screen.findByRole("button", { name: "Retry" });

    expect(container).toHaveTextContent(/^Retry$/);
  });

  it("recovers on a retry after Engage could not be reached", async () => {
    engage.willNotConnect();
    engage.willReply(["A rewrite"]);

    await renderWithEngage(<Helper type="make_longer" text="Some text" />);
    await userEvent.click(await screen.findByRole("button", { name: "Retry" }));

    expect(await screen.findByText("A rewrite")).toBeInTheDocument();
  });
});
