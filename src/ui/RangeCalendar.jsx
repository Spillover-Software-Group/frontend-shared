import {
  RangeCalendar as AriaRangeCalendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  Text,
} from "react-aria-components";

import { tv } from "tailwind-variants";

import { CalendarGridHeader, CalendarHeader } from "./Calendar";
import { focusRing } from "@/utils";

const cell = tv({
  extend: focusRing,
  base: "w-full h-full flex items-center justify-center rounded-full forced-color-adjust-none text-zinc-900 dark:text-zinc-200",
  variants: {
    selectionState: {
      none: "group-hover:bg-gray-100 dark:group-hover:bg-zinc-700 group-pressed:bg-gray-200 dark:group-pressed:bg-zinc-600",
      middle: [
        "group-hover:bg-spillover-200 dark:group-hover:bg-spillover-900 forced-colors:group-hover:bg-[Highlight]",
        "group-invalid:group-hover:bg-red-200 dark:group-invalid:group-hover:bg-red-900 forced-colors:group-invalid:group-hover:bg-[Mark] text-white",
        "group-pressed:bg-spillover-300 dark:group-pressed:bg-spillover-800 forced-colors:group-pressed:bg-[Highlight] forced-colors:text-[HighlightText]",
        "group-invalid:group-pressed:bg-red-300 dark:group-invalid:group-pressed:bg-red-800 forced-colors:group-invalid:group-pressed:bg-[Mark]",
      ],
      cap: "bg-spillover-600 group-invalid:bg-red-600 forced-colors:bg-[Highlight] forced-colors:group-invalid:bg-[Mark] text-white forced-colors:text-[HighlightText]",
    },
    isDisabled: {
      true: "text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]",
    },
  },
});

export function RangeCalendar({ errorMessage, children, ...props }) {
  return (
    <AriaRangeCalendar {...props}>
      <CalendarHeader />
      {children}
      <CalendarGrid className="[&_td]:px-0">
        <CalendarGridHeader />
        <CalendarGridBody>
          {(date) => (
            <CalendarCell
              date={date}
              className="group w-9 h-9 text-sm outline outline-0 cursor-default outside-month:text-gray-300 selected:bg-spillover-100 dark:selected:bg-spillover-700/30 forced-colors:selected:bg-[Highlight] invalid:selected:bg-red-100 dark:invalid:selected:bg-red-700/30 forced-colors:invalid:selected:bg-[Mark] [td:first-child_&]:rounded-s-full selection-start:rounded-s-full [td:last-child_&]:rounded-e-full selection-end:rounded-e-full"
            >
              {({
                formattedDate,
                isSelected,
                isSelectionStart,
                isSelectionEnd,
                isFocusVisible,
                isDisabled,
              }) => (
                <span
                  className={cell({
                    selectionState:
                      isSelected && (isSelectionStart || isSelectionEnd)
                        ? "cap"
                        : isSelected
                          ? "middle"
                          : "none",
                    isDisabled,
                    isFocusVisible,
                  })}
                >
                  {formattedDate}
                </span>
              )}
            </CalendarCell>
          )}
        </CalendarGridBody>
      </CalendarGrid>
      {errorMessage && (
        <Text slot="errorMessage" className="text-sm text-red-600">
          {errorMessage}
        </Text>
      )}
    </AriaRangeCalendar>
  );
}
