import { render, screen } from "@testing-library/react";

import { Dialog, Heading } from "@/components/ui/Dialog";

describe("Dialog", () => {
  it("takes its accessible name from the heading in its title slot", () => {
    render(
      <Dialog>
        <Heading slot="title">Delete this location</Heading>
      </Dialog>,
    );

    expect(
      screen.getByRole("dialog", { name: "Delete this location" }),
    ).toBeInTheDocument();
  });

  it("renders its children inside the dialog", () => {
    render(
      <Dialog>
        <Heading slot="title">Delete this location</Heading>
        <p>This cannot be undone.</p>
      </Dialog>,
    );

    expect(
      screen.getByRole("dialog", { name: "Delete this location" }),
    ).toHaveTextContent("This cannot be undone.");
  });
});

describe("Heading", () => {
  it("renders as a heading at the level it is given", () => {
    render(<Heading level={3}>Billing</Heading>);

    expect(
      screen.getByRole("heading", { level: 3, name: "Billing" }),
    ).toBeInTheDocument();
  });
});
