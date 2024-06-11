import { cva, type VariantProps } from "class-variance-authority"
import {
  Button as _Button,
  type ButtonProps as _ButtonProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  'sfs-inline-flex sfs-items-center sfs-justify-center sfs-whitespace-nowrap sfs-rounded-md sfs-text-sm sfs-font-medium sfs-ring-offset-background sfs-transition-colors focus-visible:sfs-outline-none focus-visible:sfs-ring-2 focus-visible:sfs-ring-ring focus-visible:sfs-ring-offset-2 data-[disabled]:sfs-pointer-events-none data-[disabled]:sfs-opacity-50 sfs-shadow-sm',
  { 
    variants: {
      variant: {
        default: 'sfs-bg-primary sfs-text-primary-foreground hover:sfs-bg-primary/90',
        destructive: 'sfs-bg-destructive sfs-text-destructive-foreground hover:sfs-bg-destructive/90',
        outline: 'sfs-border sfs-border-solid sfs-border-gray-300 sfs-bg-background hover:sfs-bg-accent hover:sfs-text-accent-foreground',
        secondary: 'sfs-bg-secondary sfs-text-secondary-foreground hover:sfs-bg-secondary/80',
        ghost: 'sfs-hover:bg-accent hover:sfs-text-accent-foreground',
        link: 'sfs-text-primary sfs-underline-offset-4 hover:sfs-underline'
      },
      size: {
        default: 'sfs-h-10 sfs-px-4 sfs-py-2', 
        sm: 'sfs-h-9 sfs-rounded-md sfs-px-3',
        lg: 'sfs-h-11 sfs-rounded-md sfs-px-8',
        icon: 'sfs-h-10 sfs-w-10' 
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends _ButtonProps,
  VariantProps<typeof buttonVariants> { }

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <_Button
      className={(values) =>
        cn(
          buttonVariants({
            variant,
            size,
            className:
              typeof className === "function" ? className(values) : className,
          })
        )
      }
      {...props}
    />
  )
}

export { Button, buttonVariants }
