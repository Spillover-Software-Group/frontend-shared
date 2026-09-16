import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TextField } from "@/components/ui/TextField";

describe("TextField", () => {
  it("labels its input with the label it is given", () => {
    render(<TextField label="Business name" />);

    expect(screen.getByLabelText("Business name")).toHaveRole("textbox");
  });

  it("records what the user types", async () => {
    render(<TextField label="Business name" />);

    await userEvent.type(screen.getByLabelText("Business name"), "Cafe Rio");

    expect(screen.getByLabelText("Business name")).toHaveValue("Cafe Rio");
  });

  it("reports each change to onChange", async () => {
    const onChange = vi.fn();
    render(<TextField label="Business name" onChange={onChange} />);

    await userEvent.type(screen.getByLabelText("Business name"), "Ca");

    expect(onChange).toHaveBeenLastCalledWith("Ca");
  });

  it("describes its input with the description it is given", () => {
    render(
      <TextField label="Business name" description="Shown on your page." />,
    );

    expect(screen.getByRole("textbox")).toHaveAccessibleDescription(
      "Shown on your page.",
    );
  });

  it("shows its error message once it is invalid", () => {
    render(
      <TextField
        label="Business name"
        isInvalid
        errorMessage="Enter a business name."
      />,
    );

    expect(screen.getByText("Enter a business name.")).toBeInTheDocument();
  });

  it("refuses input while it is disabled", () => {
    render(<TextField label="Business name" isDisabled />);

    expect(screen.getByLabelText("Business name")).toBeDisabled();
  });
});
