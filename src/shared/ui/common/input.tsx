import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/lib/utils/cn-merge'

const inputVariants = cva(
  'bg-white file:bg-transparent dark:border-slate-800 dark:placeholder:text-slate-400 flex h-10 w-full rounded-md border px-3 py-2 text-[15px] file:border-0 file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border-0 border-b-[1px] border-b-gray-500 rounded-none px-0 py-2 placeholder:text-gray-500 bg-opacity-0',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
