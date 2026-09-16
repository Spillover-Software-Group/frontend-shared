import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ComboBox, ComboBoxItem } from "@/components/ui/ComboBox";

function LocationComboBox(props) {
  return (
    <ComboBox label="Location" {...props}>
      <ComboBoxItem id="downtown">Downtown</ComboBoxItem>
      <ComboBoxItem id="airport">Airport</ComboBoxItem>
    </ComboBox>
  );
}

describe("ComboBox", () => {
  it("labels its input with the label it is given", () => {
    render(<LocationComboBox />);

    expect(
      screen.getByRole("combobox", { name: "Location" }),
    ).toBeInTheDocument();
  });

  it("lists its options once the trigger is pressed", async () => {
    render(<LocationComboBox />);

    await userEvent.click(screen.getByRole("button"));

    expect(
      await screen.findByRole("option", { name: "Airport" }),
    ).toBeInTheDocument();
  });

  it("narrows the options down to what the user typed", async () => {
    render(<LocationComboBox />);

    await userEvent.type(screen.getByRole("combobox"), "air");

    await screen.findByRole("option", { name: "Airport" });

    expect(
      screen.queryByRole("option", { name: "Downtown" }),
    ).not.toBeInTheDocument();
  });

  it("puts the option the user picked into its input", async () => {
    render(<LocationComboBox />);

    await userEvent.click(screen.getByRole("button"));
    await userEvent.click(
      await screen.findByRole("option", { name: "Airport" }),
    );

    expect(screen.getByRole("combobox")).toHaveValue("Airport");
  });

  it("reports the key of the option the user picked", async () => {
    const onSelectionChange = vi.fn();
    render(<LocationComboBox onSelectionChange={onSelectionChange} />);

    await userEvent.click(screen.getByRole("button"));
    await userEvent.click(
      await screen.findByRole("option", { name: "Airport" }),
    );

    expect(onSelectionChange).toHaveBeenCalledWith("airport");
  });

  it("offers no clear control until something is selected", () => {
    render(<LocationComboBox isClearable />);

    expect(screen.getAllByRole("button")).toHaveLength(1);
  });

  it("empties the input when the clear control is pressed", async () => {
    render(<LocationComboBox isClearable defaultSelectedKey="airport" />);

    // Neither the clear control nor the dropdown trigger carries an accessible
    // name, so they can only be told apart by their order in the group.
    const [clear] = screen.getAllByRole("button");
    await userEvent.click(clear);

    expect(screen.getByRole("combobox")).toHaveValue("");
  });

  it("describes its input with the description it is given", () => {
    render(<LocationComboBox description="Where the review came from." />);

    expect(screen.getByRole("combobox")).toHaveAccessibleDescription(
      "Where the review came from.",
    );
  });

  it("shows its error message once it is invalid", () => {
    render(<LocationComboBox isInvalid errorMessage="Pick a location." />);

    expect(screen.getByText("Pick a location.")).toBeInTheDocument();
  });
});
