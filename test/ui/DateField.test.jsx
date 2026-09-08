import { CalendarDate } from "@internationalized/date";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { DateField } from "@/components/ui/DateField";

describe("DateField", () => {
  it("shows the date it was given across its segments", () => {
    render(
      <DateField label="Opened on" value={new CalendarDate(2026, 6, 15)} />,
    );

    expect(screen.getByRole("group", { name: "Opened on" })).toHaveTextContent(
      "6/15/2026",
    );
  });

  it("shows a placeholder for every segment when it has no value", () => {
    render(<DateField label="Opened on" />);

    expect(screen.getByRole("group", { name: "Opened on" })).toHaveTextContent(
      "mm/dd/yyyy",
    );
  });

  it("raises the segment under the cursor on ArrowUp", async () => {
    const onChange = vi.fn();
    render(
      <DateField
        label="Opened on"
        value={new CalendarDate(2026, 6, 15)}
        onChange={onChange}
      />,
    );

    await userEvent.click(screen.getByRole("spinbutton", { name: /month/i }));
    await userEvent.keyboard("{ArrowUp}");

    expect(onChange.mock.lastCall[0].toString()).toBe("2026-07-15");
  });

  it("takes a typed date into its value", async () => {
    const onChange = vi.fn();
    render(<DateField label="Opened on" onChange={onChange} />);

    await userEvent.click(screen.getByRole("spinbutton", { name: /month/i }));
    await userEvent.keyboard("06152026");

    expect(onChange.mock.lastCall[0].toString()).toBe("2026-06-15");
  });

  it("describes the field with the description it is given", () => {
    render(<DateField label="Opened on" description="Local time." />);

    expect(
      screen.getByRole("group", { name: "Opened on" }),
    ).toHaveAccessibleDescription("Local time.");
  });

  it("shows its error message once it is invalid", () => {
    render(
      <DateField label="Opened on" isInvalid errorMessage="Pick a date." />,
    );

    expect(screen.getByText("Pick a date.")).toBeInTheDocument();
  });

  it("refuses changes while it is disabled", async () => {
    const onChange = vi.fn();
    render(
      <DateField
        label="Opened on"
        value={new CalendarDate(2026, 6, 15)}
        isDisabled
        onChange={onChange}
      />,
    );

    await userEvent.click(screen.getByRole("group", { name: "Opened on" }));
    await userEvent.keyboard("{ArrowUp}");

    expect(onChange).not.toHaveBeenCalled();
  });
});
