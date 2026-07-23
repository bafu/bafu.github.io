import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Tabs — dependency-free (no Radix). Selected tab is marked by a single
 * beige-gold underline; the rest stay muted. Controlled or uncontrolled.
 */
interface TabsContextValue {
  value: string
  setValue: (v: string) => void
}
const TabsContext = React.createContext<TabsContextValue | null>(null)

function useTabs() {
  const ctx = React.useContext(TabsContext)
  if (!ctx) throw new Error('Tabs components must be used within <Tabs>')
  return ctx
}

interface TabsProps {
  value?: string
  defaultValue?: string
  onValueChange?: (v: string) => void
  className?: string
  children: React.ReactNode
}

function Tabs({ value, defaultValue, onValueChange, className, children }: TabsProps) {
  const [internal, setInternal] = React.useState(defaultValue ?? '')
  const current = value ?? internal
  const setValue = React.useCallback(
    (v: string) => {
      if (value === undefined) setInternal(v)
      onValueChange?.(v)
    },
    [value, onValueChange]
  )
  return (
    <TabsContext.Provider value={{ value: current, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  )
}

const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="tablist"
      className={cn(
        'flex gap-8 border-b border-border text-xs uppercase tracking-[0.18em]',
        className
      )}
      {...props}
    />
  )
)
TabsList.displayName = 'TabsList'

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, ...props }, ref) => {
    const { value: active, setValue } = useTabs()
    const selected = active === value
    return (
      <button
        ref={ref}
        role="tab"
        type="button"
        aria-selected={selected}
        onClick={() => setValue(value)}
        className={cn(
          '-mb-px border-b-2 pb-3 font-medium transition-colors duration-200',
          selected
            ? 'border-beige-gold text-foreground'
            : 'border-transparent text-muted-foreground hover:text-foreground',
          className
        )}
        {...props}
      />
    )
  }
)
TabsTrigger.displayName = 'TabsTrigger'

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, ...props }, ref) => {
    const { value: active } = useTabs()
    if (active !== value) return null
    return (
      <div
        ref={ref}
        role="tabpanel"
        className={cn('tab-content-enter', className)}
        {...props}
      />
    )
  }
)
TabsContent.displayName = 'TabsContent'

export { Tabs, TabsList, TabsTrigger, TabsContent }
