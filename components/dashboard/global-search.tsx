"use client"

import { useState, useEffect } from "react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"

export function GlobalSearch() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = (command: () => void) => {
    setOpen(false)
    command()
  }

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">Search...</span>
        <span className="sr-only">Search</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search across the platform..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard"))}>
              <span>Dashboard</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/water-resources"))}>
              <span>Water Resources</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/climate-data"))}>
              <span>Climate Data</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/analytics"))}>
              <span>Analytics</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/projects"))}>
              <span>Projects</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Reports">
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/reports/water-quality"))}>
              <span>Water Quality Report</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/reports/climate-trends"))}>
              <span>Climate Trends Report</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/reports/drought-forecast"))}>
              <span>Drought Forecast Report</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Tools">
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/tools/data-export"))}>
              <span>Data Export Tool</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/tools/visualization"))}>
              <span>Visualization Builder</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/tools/api-access"))}>
              <span>API Access</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
