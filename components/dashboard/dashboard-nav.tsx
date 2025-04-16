"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  ClipboardList,
  CloudRain,
  Cog,
  Database,
  FileSpreadsheet,
  Globe,
  Home,
  Map,
  MessageSquare,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function DashboardNav() {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Overview",
      href: "/dashboard",
      icon: <Home className="mr-2 h-4 w-4" />,
    },
    {
      title: "Data Collection",
      href: "/dashboard/data-collection",
      icon: <FileSpreadsheet className="mr-2 h-4 w-4" />,
    },
    {
      title: "Water Resources",
      href: "/dashboard/water-resources",
      icon: <CloudRain className="mr-2 h-4 w-4" />,
    },
    {
      title: "Climate Data",
      href: "/dashboard/climate-data",
      icon: <Globe className="mr-2 h-4 w-4" />,
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: <BarChart3 className="mr-2 h-4 w-4" />,
    },
    {
      title: "Maps",
      href: "/dashboard/maps",
      icon: <Map className="mr-2 h-4 w-4" />,
    },
    {
      title: "Projects",
      href: "/dashboard/projects",
      icon: <ClipboardList className="mr-2 h-4 w-4" />,
    },
    {
      title: "Collaboration",
      href: "/dashboard/collaboration",
      icon: <MessageSquare className="mr-2 h-4 w-4" />,
    },
    {
      title: "Data Repository",
      href: "/dashboard/repository",
      icon: <Database className="mr-2 h-4 w-4" />,
    },
    {
      title: "Team",
      href: "/dashboard/team",
      icon: <Users className="mr-2 h-4 w-4" />,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: <Cog className="mr-2 h-4 w-4" />,
    },
  ]

  return (
    <nav className="hidden w-full flex-col gap-2 md:flex">
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant={pathname === item.href ? "secondary" : "ghost"}
          className={cn("justify-start", pathname === item.href && "bg-muted font-medium")}
          asChild
        >
          <Link href={item.href}>
            {item.icon}
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  )
}
