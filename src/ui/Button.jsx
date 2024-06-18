import { LoaderCircleIcon } from "lucide-react";
import { Button as RACButton, composeRenderProps } from "react-aria-components";
import { tv } from "tailwind-variants";

import { focusRing } from "@/utils";

const button = tv({
  extend: focusRing,
  base: "flex flex-row items-center justify-center gap-1.5 h-10 px-3 text-sm shadow-md pressed:shadow-none transition rounded-md cursor-pointer",
  variants: {
    variant: {
      primary:
        "bg-spillover-700 hover:bg-spillover-500 pressed:bg-spillover-400 text-white",
      secondary:
        "bg-gray-100 hover:bg-gray-200 pressed:bg-gray-300 text-gray-800 dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:pressed:bg-zinc-400 dark:text-zinc-100",
      destructive:
        "bg-orange-700 hover:bg-orange-800 pressed:bg-orange-900 text-white",
      icon: "text-gray-500 p-0 shadow-none",
    },
    isDisabled: {
      true: "bg-gray-100 dark:bg-zinc-800 text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText] border-black/5 dark:border-white/5 cursor-not-allowed",
    },
    isLoading: {
      true: "cursor-wait",
    },
    reverse: {
      true: "flex-row-reverse",
    },
    circle: {
      true: "rounded-full w-10 h-10",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export function Button({
  Icon,
  isLoading,
  reverse,
  circle,
  children,
  ...props
}) {
  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        button({
          ...renderProps,
          variant: props.variant,
          reverse: reverse,
          circle: circle,
          isLoading: isLoading,
          className,
        }),
      )}
    >
      {Icon &&
        (isLoading ? (
          <LoaderCircleIcon size={20} className="animate-spin" />
        ) : (
          <Icon size={20} />
        ))}
      {children}
    </RACButton>
  );
}
