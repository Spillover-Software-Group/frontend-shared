import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Select, SelectItem } from "@/components/ui/Select";

function PlanSelect(props) {
  return (
    <Select label="Plan" {...props}>
      <SelectItem id="basic">Basic</SelectItem>
      <SelectItem id="pro">Pro</SelectItem>
    </Select>
  );
}

describe("Select", () => {
  it("keeps its options out of the document until it is opened", () => {
    render(<PlanSelect />);

    expect(
      screen.queryByRole("option", { name: "Pro" }),
    ).not.toBeInTheDocument();
  });

  it("lists its options once the trigger is pressed", async () => {
    render(<PlanSelect />);

    await userEvent.click(screen.getByRole("button", { name: /Plan/ }));

    expect(
      await screen.findByRole("option", { name: "Pro" }),
    ).toBeInTheDocument();
  });

  it("opens from the keyboard when the trigger has focus", async () => {
    render(<PlanSelect />);

    await userEvent.tab();
    await userEvent.keyboard("{ArrowDown}");

    expect(
      await screen.findByRole("option", { name: "Basic" }),
    ).toBeInTheDocument();
  });

  it("shows the option the user picked as its value", async () => {
    render(<PlanSelect />);

    await userEvent.click(screen.getByRole("button", { name: /Plan/ }));
    await userEvent.click(await screen.findByRole("option", { name: "Pro" }));

    expect(screen.getByRole("button", { name: /Pro/ })).toBeInTheDocument();
  });

  it("reports the key of the option the user picked", async () => {
    const onSelectionChange = vi.fn();
    render(<PlanSelect onSelectionChange={onSelectionChange} />);

    await userEvent.click(screen.getByRole("button", { name: /Plan/ }));
    await userEvent.click(await screen.findByRole("option", { name: "Pro" }));

    expect(onSelectionChange).toHaveBeenCalledWith("pro");
  });

  it("shows the selected key it is given without any interaction", () => {
    render(<PlanSelect selectedKey="basic" />);

    expect(screen.getByRole("button", { name: /Basic/ })).toBeInTheDocument();
  });

  it("describes its trigger with the description it is given", () => {
    render(<PlanSelect description="Changes take effect next month." />);

    expect(
      screen.getByRole("button", { name: /Plan/ }),
    ).toHaveAccessibleDescription("Changes take effect next month.");
  });

  it("shows its error message once it is invalid", () => {
    render(<PlanSelect isInvalid errorMessage="Pick a plan." />);

    expect(screen.getByText("Pick a plan.")).toBeInTheDocument();
  });

  it("cannot be opened while it is disabled", async () => {
    render(<PlanSelect isDisabled />);

    await userEvent.click(screen.getByRole("button", { name: /Plan/ }));

    expect(
      screen.queryByRole("option", { name: "Pro" }),
    ).not.toBeInTheDocument();
  });
});
