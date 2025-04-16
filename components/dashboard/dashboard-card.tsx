import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"

interface DashboardCardProps {
  className?: string
  children: ReactNode
  title?: string
  description?: string
  icon?: ReactNode
  footer?: ReactNode
  noPadding?: boolean
}

export function DashboardCard({
  className,
  children,
  title,
  description,
  icon,
  footer,
  noPadding = false,
}: DashboardCardProps) {
  return (
    <Card
      className={cn(
        "bg-white/90 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200/70 dark:border-slate-700/50 shadow-sm",
        className,
      )}
    >
      {(title || description || icon) && (
        <CardHeader className={cn("flex flex-row items-center justify-between pb-2", !description && "pb-0")}>
          {title && <CardTitle className="text-sm font-medium">{title}</CardTitle>}
          {icon && <div className="h-4 w-4 text-primary">{icon}</div>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className={cn(noPadding && "p-0")}>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  )
}
