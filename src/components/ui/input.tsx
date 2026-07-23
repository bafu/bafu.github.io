import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Input — bottom-weighted hairline field. Focus turns the border gold.
 */
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = 'text', ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        'w-full rounded border border-border bg-transparent px-4 py-3 text-sm text-foreground',
        'placeholder:text-muted-foreground/70',
        'transition-colors duration-200 outline-none',
        'focus:border-beige-gold focus-visible:ring-0',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
)
Input.displayName = 'Input'

export { Input }
