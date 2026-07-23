import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Badge — mono, letterspaced, pill with a hairline border.
 * `gold` variant is the single accented state.
 */
const badgeVariants = cva(
  'inline-flex items-center rounded-full border font-mono uppercase tracking-[0.12em] transition-colors',
  {
    variants: {
      variant: {
        default: 'border-border text-muted-foreground',
        gold: 'border-beige-gold/50 text-beige-gold',
        solid: 'border-foreground bg-foreground text-background',
      },
      size: {
        sm: 'px-2.5 py-0.5 text-[0.6rem]',
        md: 'px-3 py-1 text-[0.65rem]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
