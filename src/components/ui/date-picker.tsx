import { getLocalTimeZone } from "@internationalized/date"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import {
  DatePicker,
  DateRangePicker,
  DateRangePickerProps,
  DateValue,
  Dialog,
  DialogProps,
  Group,
  GroupProps,
  PopoverProps,
  RangeCalendarProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Popover } from "@/components/ui/popover"

const _DatePicker = DatePicker

const _DateRangePicker = DateRangePicker

export interface _DatePickerButtonProps extends GroupProps {
  date?: DateValue
}

const _DatePickerButton = ({ date, ...props }: _DatePickerButtonProps) => (
  <Group {...props}>
    <Button
      variant="outline"
      className={cn(
        "sfs-w-[280px] sfs-justify-start sfs-text-left sfs-font-normal",
        !date && "sfs-text-muted-foreground"
      )}
    >
      <CalendarIcon className="sfs-mr-2 sfs-h-4 sfs-w-4" />

      {date ? (
        format(date?.toDate(getLocalTimeZone()), "PPP")
      ) : (
        <span>Pick a date</span>
      )}
    </Button>
  </Group>
)

export interface _DateRangePickerButtonProps extends GroupProps {
  date?: DateRangePickerProps<DateValue>["value"]
}

const _DateRangePickerButton = ({
  date,
  ...props
}: _DateRangePickerButtonProps) => (
  <Group {...props}>
    <Button
      variant="outline"
      className={cn(
        "sfs-w-[280px] sfs-justify-start sfs-text-left sfs-font-normal",
        !date && "sfs-text-muted-foreground"
      )}
    >
      <CalendarIcon className="sfs-mr-2 sfs-h-4 sfs-w-4" />

      {date?.end ? (
        <>
          {format(date.start.toDate(getLocalTimeZone()), "LLL dd, y")} -{" "}
          {format(date.end.toDate(getLocalTimeZone()), "LLL dd, y")}
        </>
      ) : (
        <span>Pick a date</span>
      )}
    </Button>
  </Group>
)

const _DatePickerContent = ({
  className,
  popoverClassName,
  ...props
}: DialogProps & { popoverClassName?: PopoverProps["className"] }) => (
  <Popover
    className={(values) =>
      cn(
        "sfs-w-auto sfs-p-3",
        typeof popoverClassName === "function"
          ? popoverClassName(values)
          : popoverClassName
      )
    }
  >
    <Dialog
      className={cn(
        "sfs-flex sfs-w-full sfs-flex-col sfs-space-y-4 sfs-outline-none sm:sfs-flex-row sm:sfs-space-x-4 sm:sfs-space-y-0",
        className
      )}
      {...props}
    />
  </Popover>
)

export {
  _DatePicker as DatePicker,
  _DatePickerButton as DatePickerButton,
  _DatePickerContent as DatePickerContent,
  _DateRangePicker as DateRangePicker,
  _DateRangePickerButton as DateRangePickerButton,
}
