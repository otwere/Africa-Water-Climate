import type { ReactNode } from "react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { DashboardFooter } from "@/components/dashboard/dashboard-footer"
import { GlobalSearch } from "@/components/dashboard/global-search"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  // Mock user data - in a real app, this would come from authentication
  const user = {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    image: "/placeholder.svg?height=32&width=32&text=SJ",
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-900">
      <DashboardHeader>
        <GlobalSearch />
      </DashboardHeader>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <DashboardNav />
        </aside>
        <main className="relative py-6">
          <div className="mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6">{children}</div>
        </main>
      </div>
      <DashboardFooter />
    </div>
  )
}
