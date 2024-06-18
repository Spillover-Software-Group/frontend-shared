import { CalendarIcon } from "lucide-react";
import { DateRangePicker as AriaDateRangePicker } from "react-aria-components";

import { Button } from "./Button";
import { DateInput } from "./DateField";
import { Dialog } from "./Dialog";
import { Description, FieldError, FieldGroup, Label } from "./Field";
import { Popover } from "./Popover";
import { RangeCalendar } from "./RangeCalendar";
import { composeTailwindRenderProps } from "@/utils";

export function DateRangePicker({
	label,
	description,
	errorMessage,
	children,
	...props
}) {
	return (
		<AriaDateRangePicker
			{...props}
			className={composeTailwindRenderProps(
				props.className,
				"group flex flex-col gap-1",
			)}
		>
			{label && <Label>{label}</Label>}
			<FieldGroup className="min-w-[208px] w-auto">
				<DateInput slot="start" className="px-2 py-1.5 text-sm" />
				<span
					aria-hidden="true"
					className="text-gray-800 dark:text-zinc-200 forced-colors:text-[ButtonText] group-disabled:text-gray-200 group-disabled:dark:text-zinc-600 group-disabled:forced-colors:text-[GrayText]"
				>
					–
				</span>
				<DateInput slot="end" className="flex-1 px-2 py-1.5 text-sm" />
				<Button variant="icon" Icon={CalendarIcon} />
			</FieldGroup>
			{description && <Description>{description}</Description>}
			<FieldError>{errorMessage}</FieldError>
			<Popover>
				<Dialog>
					<RangeCalendar>{children}</RangeCalendar>
				</Dialog>
			</Popover>
		</AriaDateRangePicker>
	);
}
