import { getLocalTimeZone, today } from "@internationalized/date";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {
  PresetDateRangeSelector,
  usePresetDateRangeSelector,
} from "@/components/ui/PresetDateRangeSelector";

// The real caller pairs the hook with the selector, so drive both together.
function ReportPeriod({ defaultPreset, onChange }) {
  const { presetDateRangeProps } = usePresetDateRangeSelector({
    defaultPreset,
    onChange,
  });

  return <PresetDateRangeSelector label="Period" {...presetDateRangeProps} />;
}

function lastRange(onChange) {
  const [, dateRange] = onChange.mock.lastCall;
  return dateRange;
}

describe("PresetDateRangeSelector", () => {
  it("shows the preset it was opened on", () => {
    render(<ReportPeriod defaultPreset="last7Days" onChange={vi.fn()} />);

    expect(
      screen.getByRole("button", { name: /Last 7 Days/ }),
    ).toBeInTheDocument();
  });

  it("offers every preset once it is opened", async () => {
    render(<ReportPeriod defaultPreset="custom" onChange={vi.fn()} />);

    await userEvent.click(screen.getByRole("button", { name: /Period/ }));

    expect(await screen.findAllByRole("option")).toHaveLength(14);
  });

  it("reports the preset the user picks", async () => {
    const onChange = vi.fn();
    render(<ReportPeriod defaultPreset="custom" onChange={onChange} />);

    await userEvent.click(screen.getByRole("button", { name: /Period/ }));
    await userEvent.click(
      await screen.findByRole("option", { name: "This Month" }),
    );

    expect(onChange.mock.lastCall[0]).toBe("thisMonth");
  });
});

describe("usePresetDateRangeSelector", () => {
  it("reports the preset it is given on mount", () => {
    const onChange = vi.fn();
    render(<ReportPeriod defaultPreset="yesterday" onChange={onChange} />);

    expect(onChange.mock.lastCall[0]).toBe("yesterday");
  });

  it("reports no range at all for the custom preset", () => {
    const onChange = vi.fn();
    render(<ReportPeriod defaultPreset="custom" onChange={onChange} />);

    expect(lastRange(onChange)).toBeNull();
  });

  it("resolves yesterday to the single day before today", () => {
    const onChange = vi.fn();
    const yesterday = today(getLocalTimeZone()).subtract({ days: 1 });
    render(<ReportPeriod defaultPreset="yesterday" onChange={onChange} />);

    expect(lastRange(onChange)).toEqual({ start: yesterday, end: yesterday });
  });

  it("resolves last 7 days to the week ending today", () => {
    const onChange = vi.fn();
    const todayDate = today(getLocalTimeZone());
    render(<ReportPeriod defaultPreset="last7Days" onChange={onChange} />);

    expect(lastRange(onChange)).toEqual({
      start: todayDate.subtract({ days: 7 }),
      end: todayDate,
    });
  });

  it("resolves this month to the first of the month up to today", () => {
    const onChange = vi.fn();
    const todayDate = today(getLocalTimeZone());
    render(<ReportPeriod defaultPreset="thisMonth" onChange={onChange} />);

    expect(lastRange(onChange)).toEqual({
      start: todayDate.set({ day: 1 }),
      end: todayDate,
    });
  });

  it("resolves the previous month to that whole month", () => {
    const onChange = vi.fn();
    const previousMonth = today(getLocalTimeZone())
      .set({ day: 1 })
      .subtract({ months: 1 });
    render(<ReportPeriod defaultPreset="previousMonth" onChange={onChange} />);

    expect(lastRange(onChange)).toEqual({
      start: previousMonth,
      end: previousMonth.set({
        day: previousMonth.calendar.getDaysInMonth(previousMonth),
      }),
    });
  });

  it("resolves the previous year to that whole year", () => {
    const onChange = vi.fn();
    const previousYear = today(getLocalTimeZone()).year - 1;
    render(<ReportPeriod defaultPreset="previousYear" onChange={onChange} />);

    expect(lastRange(onChange).start.toString()).toBe(`${previousYear}-01-01`);
    expect(lastRange(onChange).end.toString()).toBe(`${previousYear}-12-31`);
  });
});
