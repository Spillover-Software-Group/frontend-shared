import { CalendarDate } from "@internationalized/date";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { DateRangePicker } from "@/components/ui/DateRangePicker";

const june = {
  start: new CalendarDate(2026, 6, 10),
  end: new CalendarDate(2026, 6, 12),
};

describe("DateRangePicker", () => {
  it("shows the start of the range it was given", () => {
    render(<DateRangePicker label="Reporting period" value={june} />);

    expect(
      screen.getByRole("spinbutton", { name: /day, Start Date/ }),
    ).toHaveTextContent("10");
  });

  it("shows the end of the range it was given", () => {
    render(<DateRangePicker label="Reporting period" value={june} />);

    expect(
      screen.getByRole("spinbutton", { name: /day, End Date/ }),
    ).toHaveTextContent("12");
  });

  it("keeps the calendar out of the document until it is opened", () => {
    render(<DateRangePicker label="Reporting period" value={june} />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("opens a calendar on the month of the range when its trigger is pressed", async () => {
    render(<DateRangePicker label="Reporting period" value={june} />);

    await userEvent.click(screen.getByRole("button"));

    expect(
      await screen.findByRole("heading", { name: /June 2026/ }),
    ).toBeInTheDocument();
  });

  it("reports the range the user picks in the calendar", async () => {
    const onChange = vi.fn();
    render(
      <DateRangePicker
        label="Reporting period"
        value={june}
        onChange={onChange}
      />,
    );

    await userEvent.click(screen.getByRole("button"));
    await userEvent.click(
      await screen.findByRole("button", { name: /Monday, June 1, 2026/ }),
    );
    await userEvent.click(
      screen.getByRole("button", { name: /Wednesday, June 3, 2026/ }),
    );

    expect(onChange.mock.lastCall[0].start.toString()).toBe("2026-06-01");
  });

  it("shows its error message once it is invalid", () => {
    render(
      <DateRangePicker
        label="Reporting period"
        value={june}
        isInvalid
        errorMessage="Pick a shorter period."
      />,
    );

    expect(screen.getByText("Pick a shorter period.")).toBeInTheDocument();
  });

  it("renders the children it is given inside the calendar", async () => {
    render(
      <DateRangePicker label="Reporting period" value={june}>
        <p>Up to 90 days</p>
      </DateRangePicker>,
    );

    await userEvent.click(screen.getByRole("button"));

    expect(await screen.findByText("Up to 90 days")).toBeInTheDocument();
  });
});
