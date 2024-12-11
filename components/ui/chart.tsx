import * as React from "react"
import { ResponsiveContainer } from "recharts"

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className="h-[200px] w-full" {...props} />
))
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className="rounded-lg border bg-background p-2 shadow-sm"
    {...props}
  />
))
ChartTooltip.displayName = "ChartTooltip"

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className="grid gap-2" {...props} />
))
ChartTooltipContent.displayName = "ChartTooltipContent"

export { ChartContainer, ChartTooltip, ChartTooltipContent }
