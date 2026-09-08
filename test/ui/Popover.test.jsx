import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, DialogTrigger } from "react-aria-components";

import { Dialog } from "@/components/ui/Dialog";
import { Popover } from "@/components/ui/Popover";

function HelpPopover(props) {
  return (
    <DialogTrigger>
      <Button>Help</Button>
      <Popover {...props}>
        <Dialog aria-label="Help">Call us on 555 0100.</Dialog>
      </Popover>
    </DialogTrigger>
  );
}

describe("Popover", () => {
  it("keeps its content out of the document until the trigger is pressed", () => {
    render(<HelpPopover />);

    expect(screen.queryByText("Call us on 555 0100.")).not.toBeInTheDocument();
  });

  it("shows its content when the trigger is pressed", async () => {
    render(<HelpPopover />);

    await userEvent.click(screen.getByRole("button", { name: "Help" }));

    expect(await screen.findByText("Call us on 555 0100.")).toBeInTheDocument();
  });

  it("closes again when Escape is pressed", async () => {
    render(<HelpPopover />);

    await userEvent.click(screen.getByRole("button", { name: "Help" }));
    await screen.findByText("Call us on 555 0100.");
    await userEvent.keyboard("{Escape}");

    expect(screen.queryByText("Call us on 555 0100.")).not.toBeInTheDocument();
  });

  it("draws an arrow when it is asked for one", async () => {
    render(<HelpPopover showArrow />);

    await userEvent.click(screen.getByRole("button", { name: "Help" }));

    expect(await screen.findByTitle("Popover arrow")).toBeInTheDocument();
  });

  it("draws no arrow by default", async () => {
    render(<HelpPopover />);

    await userEvent.click(screen.getByRole("button", { name: "Help" }));
    await screen.findByText("Call us on 555 0100.");

    expect(screen.queryByTitle("Popover arrow")).not.toBeInTheDocument();
  });
});
