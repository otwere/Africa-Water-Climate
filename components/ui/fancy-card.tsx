import type React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface FancyCardProps {
  className?: string
  children: React.ReactNode
}

export function FancyCard({ className, children }: FancyCardProps) {
  return <Card className={cn("card backdrop-blur-sm bg-white/70 dark:bg-black/40", className)}>{children}</Card>
}

export const FancyCardHeader = CardHeader
export const FancyCardTitle = CardTitle
export const FancyCardDescription = CardDescription
export const FancyCardContent = CardContent
export const FancyCardFooter = CardFooter
