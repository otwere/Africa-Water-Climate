import Link from "next/link"
import { Bell, Globe, Menu, MessageSquare } from "lucide-react"
import type { ReactNode } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { UserAccountNav } from "@/components/dashboard/user-account-nav"
import { Badge } from "@/components/ui/badge"
import { NotificationsPopover } from "@/components/dashboard/notifications-popover"
import { MessagesPopover } from "@/components/dashboard/messages-popover"
import { ThemeToggle } from "@/components/theme-toggle"

interface DashboardHeaderProps {
  children?: ReactNode
}

export function DashboardHeader({ children }: DashboardHeaderProps) {
  // Mock user data - in a real app, this would come from authentication
  const user = {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    image: "/placeholder.svg?height=32&width=32&text=SJ",
  }

  return (
    <header className="sticky top-0 z-40 border-b bg-white dark:bg-slate-900 shadow-sm">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-4 md:gap-8">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[320px]">
              <div className="flex items-center gap-2 pt-4">
                <Globe className="h-5 w-5 text-blue-600" />
                <span className="font-bold">AfricaWaterData</span>
              </div>
              <div className="mt-8">
                <DashboardNav />
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="hidden items-center gap-2 md:flex">
            <Globe className="h-5 w-5 text-blue-600" />
            <span className="font-bold">AfricaWaterData</span>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <MessagesPopover>
              <Button variant="ghost" size="icon" className="relative">
                <MessageSquare className="h-5 w-5" />
                <Badge
                  className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center"
                  variant="destructive"
                >
                  3
                </Badge>
                <span className="sr-only">Messages</span>
              </Button>
            </MessagesPopover>
            <NotificationsPopover>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center">5</Badge>
                <span className="sr-only">Notifications</span>
              </Button>
            </NotificationsPopover>
          </div>
          {children}
          <UserAccountNav user={user} />
        </div>
      </div>
    </header>
  )
}
