import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Dialog, Heading } from "@/components/ui/Dialog";
import { Modal } from "@/components/ui/Modal";

function ConfirmModal(props) {
  return (
    <Modal {...props}>
      <Dialog>
        <Heading slot="title">Delete this location</Heading>
        <p>This cannot be undone.</p>
      </Dialog>
    </Modal>
  );
}

describe("Modal", () => {
  it("renders nothing while it is closed", () => {
    render(<ConfirmModal isOpen={false} />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("shows the dialog it wraps while it is open", () => {
    render(<ConfirmModal isOpen />);

    expect(
      screen.getByRole("dialog", { name: "Delete this location" }),
    ).toBeInTheDocument();
  });

  it("asks to close when Escape is pressed", async () => {
    const onOpenChange = vi.fn();
    render(<ConfirmModal isOpen onOpenChange={onOpenChange} />);

    await userEvent.keyboard("{Escape}");

    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("stays open on Escape when it is not dismissable", async () => {
    render(<ConfirmModal isOpen isKeyboardDismissDisabled />);

    await userEvent.keyboard("{Escape}");

    expect(
      screen.getByRole("dialog", { name: "Delete this location" }),
    ).toBeInTheDocument();
  });
});
