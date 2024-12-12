import * as React from "react"
import { ResponsiveContainer } from "recharts"

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={`h-[200px] w-full ${className || ''}`} {...props}>
    {children}
  </div>
))
ChartContainer.displayName = "ChartContainer"

export { ChartContainer }
