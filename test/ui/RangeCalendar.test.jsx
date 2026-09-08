import { CalendarDate } from "@internationalized/date";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { RangeCalendar } from "@/components/ui/RangeCalendar";

const june = {
  start: new CalendarDate(2026, 6, 10),
  end: new CalendarDate(2026, 6, 12),
};

describe("RangeCalendar", () => {
  it("names the month it is showing", () => {
    render(<RangeCalendar aria-label="Stay" value={june} />);

    expect(
      screen.getByRole("heading", { name: /June 2026/ }),
    ).toBeInTheDocument();
  });

  it("marks every day of the range it was given as selected", () => {
    render(<RangeCalendar aria-label="Stay" value={june} />);

    expect(screen.getAllByRole("gridcell", { selected: true })).toHaveLength(3);
  });

  it("reports the range the user picks", async () => {
    const onChange = vi.fn();
    render(
      <RangeCalendar aria-label="Stay" value={june} onChange={onChange} />,
    );

    await userEvent.click(
      screen.getByRole("button", { name: /Monday, June 1, 2026/ }),
    );
    await userEvent.click(
      screen.getByRole("button", { name: /Wednesday, June 3, 2026/ }),
    );

    expect(onChange.mock.lastCall[0].start.toString()).toBe("2026-06-01");
    expect(onChange.mock.lastCall[0].end.toString()).toBe("2026-06-03");
  });

  it("renders the children it is given above the grid", () => {
    render(
      <RangeCalendar aria-label="Stay" value={june}>
        <p>Pick a check in date</p>
      </RangeCalendar>,
    );

    expect(screen.getByText("Pick a check in date")).toBeInTheDocument();
  });

  it("shows the error message it is given", () => {
    render(
      <RangeCalendar
        aria-label="Stay"
        value={june}
        errorMessage="That range is taken."
      />,
    );

    expect(screen.getByText("That range is taken.")).toBeInTheDocument();
  });
});
