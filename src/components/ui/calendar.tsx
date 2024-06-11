import * as React from "react"
import { getLocalTimeZone, today } from "@internationalized/date"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarCellProps,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridBodyProps,
  CalendarGridHeader,
  CalendarGridHeaderProps,
  CalendarGridProps,
  CalendarHeaderCell,
  CalendarHeaderCellProps,
  Heading,
  RangeCalendar,
  RangeCalendarStateContext,
} from "react-aria-components"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const _Calendar = Calendar

const _RangeCalendar = RangeCalendar

const _CalendarHeading = ({
  ...props
}: React.HTMLAttributes<HTMLHeadElement>) => (
  <header className="sfs-relative sfs-flex sfs-items-center sfs-justify-center sfs-pt-1" {...props}>
    <Heading className="sfs-text-sm sfs-font-medium" />
    <div className="sfs-flex sfs-items-center">
      <Button
        slot="next"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "sfs-h-7 sfs-w-7 sfs-bg-transparent sfs-p-0 sfs-opacity-50 data-[hovered]:sfs-opacity-100",
          "sfs-absolute sfs-right-1 sfs-text-popover-foreground"
        )}
      >
        <ChevronRight className="sfs-h-4 sfs-w-4" />
      </Button>
      <Button
        slot="previous"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "sfs-h-7 sfs-w-7 sfs-bg-transparent sfs-p-0 sfs-opacity-50 data-[hovered]:sfs-opacity-100",
          "sfs-absolute sfs-left-1 sfs-text-popover-foreground"
        )}
      >
        <ChevronLeft className="sfs-h-4 sfs-w-4" />
      </Button>
    </div>
  </header>
)

const _CalendarGrid = ({ className, ...props }: CalendarGridProps) => (
  <CalendarGrid
    className={cn("sfs-mt-4 sfs-w-full sfs-border-collapse sfs-space-y-1", className)}
    {...props}
  />
)

const _CalendarGridHeader = ({
  className,
  ...props
}: CalendarGridHeaderProps) => (
  <CalendarGridHeader className={cn("[&>tr]:sfs-flex", className)} {...props} />
)

const _CalendarHeaderCell = ({
  className,
  ...props
}: CalendarHeaderCellProps) => (
  <CalendarHeaderCell
    className={cn(
      "sfs-w-9 sfs-rounded-md sfs-text-[0.8rem] sfs-font-normal sfs-text-muted-foreground",
      className
    )}
    {...props}
  />
)

const _CalendarGridBody = ({ className, ...props }: CalendarGridBodyProps) => (
  <CalendarGridBody
    className={cn(
      "[&>tr>td]:sfs-p-0 [&>tr]:sfs-mt-2 [&>tr]:sfs-flex [&>tr]:sfs-w-full",
      "[&>tr>td:first-child>div]:sfs-rounded-l-md [&>tr>td:last-child>div]:sfs-rounded-r-md",
      className
    )}
    {...props}
  />
)

const _CalendarCell = ({ className, date, ...props }: CalendarCellProps) => {
  const isRange = Boolean(React.useContext(RangeCalendarStateContext))
  return (
    <CalendarCell
      className={(values) =>
        cn(
          "sfs-inline-flex sfs-h-9 sfs-w-9 sfs-items-center sfs-justify-center sfs-whitespace-nowrap sfs-rounded-md sfs-p-0 sfs-text-sm sfs-font-normal sfs-ring-offset-background sfs-transition-colors data-[disabled]:sfs-pointer-events-none data-[hovered]:sfs-bg-accent data-[hovered]:sfs-text-accent-foreground data-[disabled]:sfs-opacity-50 data-[selected]:sfs-opacity-100",
          date.compare(today(getLocalTimeZone())) === 0 &&
            "sfs-bg-accent sfs-text-accent-foreground",
          values.isDisabled && "sfs-text-muted-foreground sfs-opacity-50",
          values.isFocusVisible &&
            values.isFocused &&
            "sfs-outline-none sfs-ring-2 sfs-ring-ring sfs-ring-offset-2",
          values.isSelected &&
            isRange &&
            "sfs-rounded-none sfs-bg-accent sfs-text-accent-foreground",
          ((values.isSelected && !isRange) ||
            values.isSelectionStart ||
            values.isSelectionEnd) &&
            "sfs-rounded-md sfs-bg-primary sfs-text-primary-foreground data-[focused]:sfs-bg-primary data-[hovered]:sfs-bg-primary data-[focused]:sfs-text-primary-foreground data-[hovered]:sfs-text-primary-foreground",
          values.isOutsideMonth &&
            "sfs-text-muted-foreground sfs-opacity-50 data-[selected]:sfs-bg-accent/50 data-[selected]:sfs-text-muted-foreground data-[selected]:sfs-opacity-30",
          typeof className === "function" ? className(values) : className
        )
      }
      date={date}
      {...props}
    />
  )
}

export {
  _Calendar as Calendar,
  _CalendarCell as CalendarCell,
  _CalendarGrid as CalendarGrid,
  _CalendarGridBody as CalendarGridBody,
  _CalendarGridHeader as CalendarGridHeader,
  _CalendarHeaderCell as CalendarHeaderCell,
  _CalendarHeading as CalendarHeading,
  _RangeCalendar as RangeCalendar,
}
