"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "#",
    children: [
      { name: "Water Resources", href: "/services/water-resources" },
      { name: "Climate Data", href: "/services/climate-data" },
      { name: "Consulting", href: "/services/consulting" },
    ],
  },
  { name: "Data", href: "/data" },
  { name: "Research", href: "/research" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl font-bold bg-gradient-to-r from-water-blue-600 to-earth-green-600 bg-clip-text text-transparent">
                AfricaWater
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navigation.map((item) =>
                item.children ? (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-water-blue-600 dark:hover:text-water-blue-400",
                          isActive(item.href) && "text-water-blue-600 dark:text-water-blue-400",
                        )}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.name} asChild>
                          <Link href={child.href} className="w-full cursor-pointer">
                            {child.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-water-blue-600 dark:hover:text-water-blue-400 transition-colors",
                      isActive(item.href) && "text-water-blue-600 dark:text-water-blue-400",
                    )}
                  >
                    {item.name}
                  </Link>
                ),
              )}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-3">
              <Link href="/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-water-blue-600 to-earth-green-600 hover:from-water-blue-700 hover:to-earth-green-700 text-white">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-screen" : "max-h-0",
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 shadow-lg">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.name} className="space-y-1">
                <div className="px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300">{item.name}</div>
                <div className="pl-4 space-y-1 border-l-2 border-gray-200 dark:border-gray-700">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className={cn(
                        "block px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-water-blue-600 dark:hover:text-water-blue-400",
                        isActive(child.href) && "text-water-blue-600 dark:text-water-blue-400",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-water-blue-600 dark:hover:text-water-blue-400",
                  isActive(item.href) && "text-water-blue-600 dark:text-water-blue-400",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ),
          )}
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center px-3 space-x-3">
              <Link href="/login" className="w-full">
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
              </Link>
            </div>
            <div className="mt-3 px-3">
              <Link href="/register" className="w-full">
                <Button className="w-full bg-gradient-to-r from-water-blue-600 to-earth-green-600 hover:from-water-blue-700 hover:to-earth-green-700 text-white">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
