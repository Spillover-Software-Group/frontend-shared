import {
  Dialog as RACDialog,
  Heading as RACHeading,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function Dialog(props) {
  return (
    <RACDialog
      {...props}
      className={twMerge(
        "outline outline-0 p-4 [[data-placement]>&]:p-4 max-h-[inherit] overflow-auto relative",
        props.className,
      )}
    />
  );
}

export function Heading(props) {
  return (
    <RACHeading
      {...props}
      className={twMerge("text-lg font-medium text-slate-900", props.className)}
    />
  );
}
