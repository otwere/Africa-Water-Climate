import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"

interface FancyButtonProps extends ButtonProps {
  gradient?: boolean
}

export function FancyButton({ className, gradient = false, ...props }: FancyButtonProps) {
  return (
    <Button
      className={cn(
        "btn-fancy rounded-full font-medium",
        gradient && "bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500",
        className,
      )}
      {...props}
    />
  )
}
