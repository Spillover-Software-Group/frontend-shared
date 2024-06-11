import { DialogTrigger, Popover, PopoverProps } from "react-aria-components"

import { cn } from "@/lib/utils"

const PopoverTrigger = DialogTrigger

const _Popover = ({ className, offset = 4, ...props }: PopoverProps) => (
  <Popover
    offset={offset}
    className={(values) =>
      cn(
        "sfs-z-50 sfs-w-72 sfs-overflow-y-auto sfs-rounded-md sfs-border sfs-bg-popover sfs-p-4 sfs-text-popover-foreground sfs-shadow-md sfs-outline-none data-[entering]:sfs-animate-in data-[exiting]:sfs-animate-out data-[entering]:sfs-fade-in-0 data-[exiting]:sfs-fade-out-0 data-[exiting]:sfs-zoom-out-95 data-[placement=bottom]:sfs-slide-in-from-top-2 data-[placement=left]:sfs-slide-in-from-right-2 data-[placement=right]:sfs-slide-in-from-left-2 data-[placement=top]:sfs-slide-in-from-bottom-2",
        typeof className === "function" ? className(values) : className
      )
    }
    {...props}
  />
)

export { _Popover as Popover, PopoverTrigger }
