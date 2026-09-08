import { CalendarDate } from "@internationalized/date";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Calendar } from "@/components/ui/Calendar";

function TripCalendar(props) {
  return (
    <Calendar
      aria-label="Trip"
      value={new CalendarDate(2026, 6, 15)}
      {...props}
    />
  );
}

// react-aria renders a second, offscreen "Next" button for screen readers, so
// the one in the header has to be picked out of the pair by its position.
function headerButton(name) {
  return screen.getAllByRole("button", { name })[0];
}

describe("Calendar", () => {
  it("names the month it is showing", () => {
    render(<TripCalendar />);

    expect(
      screen.getByRole("heading", { name: /June 2026/ }),
    ).toBeInTheDocument();
  });

  it("marks the day it was given as selected", () => {
    render(<TripCalendar />);

    expect(screen.getByRole("gridcell", { selected: true })).toHaveTextContent(
      "15",
    );
  });

  it("reports the day the user clicks", async () => {
    const onChange = vi.fn();
    render(<TripCalendar onChange={onChange} />);

    await userEvent.click(
      screen.getByRole("button", { name: /Tuesday, June 16, 2026/ }),
    );

    expect(onChange.mock.lastCall[0].toString()).toBe("2026-06-16");
  });

  it("moves to the following month on the next control", async () => {
    render(<TripCalendar />);

    await userEvent.click(headerButton("Next"));

    expect(
      screen.getByRole("heading", { name: /July 2026/ }),
    ).toBeInTheDocument();
  });

  it("moves to the preceding month on the previous control", async () => {
    render(<TripCalendar />);

    await userEvent.click(headerButton("Previous"));

    expect(
      screen.getByRole("heading", { name: /May 2026/ }),
    ).toBeInTheDocument();
  });

  it("leaves a day outside the allowed range unselectable", async () => {
    const onChange = vi.fn();
    render(
      <TripCalendar
        maxValue={new CalendarDate(2026, 6, 15)}
        onChange={onChange}
      />,
    );

    await userEvent.click(
      screen.getByRole("button", { name: /Tuesday, June 16, 2026/ }),
    );

    expect(onChange).not.toHaveBeenCalled();
  });

  it("shows the error message it is given", () => {
    render(<TripCalendar errorMessage="That date is taken." />);

    expect(screen.getByText("That date is taken.")).toBeInTheDocument();
  });
});
