"use client"

import { useState } from "react"
import { CalendarIcon, Download, Eye, MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export function DataCollectionHistory() {
  const [date, setDate] = useState<Date>()

  const entries = [
    {
      id: "1",
      date: "2025-04-10",
      region: "Eastern Region",
      location: "Lake Victoria",
      type: "Water Quality",
      collector: "John Doe",
      status: "Verified",
    },
    {
      id: "2",
      date: "2025-04-08",
      region: "Northern Region",
      location: "Sahel Zone",
      type: "Climate Data",
      collector: "Sarah Johnson",
      status: "Pending Review",
    },
    {
      id: "3",
      date: "2025-04-05",
      region: "Southern Region",
      location: "Zambezi River",
      type: "Water Quantity",
      collector: "Michael Okafor",
      status: "Verified",
    },
    {
      id: "4",
      date: "2025-04-03",
      region: "Western Region",
      location: "Niger Delta",
      type: "Water Quality",
      collector: "Amina Hassan",
      status: "Verified",
    },
    {
      id: "5",
      date: "2025-04-01",
      region: "Central Region",
      location: "Congo Basin",
      type: "Climate Data",
      collector: "David Mensah",
      status: "Needs Correction",
    },
  ]

  // Helper function to get status class
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Verified":
        return "bg-green-100 text-green-800"
      case "Pending Review":
        return "bg-yellow-100 text-yellow-800"
      case "Needs Correction":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("w-full justify-start text-left sm:w-auto", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Filter by date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>

          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="water-quality">Water Quality</SelectItem>
              <SelectItem value="water-quantity">Water Quantity</SelectItem>
              <SelectItem value="climate">Climate Data</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              <SelectItem value="north">Northern Region</SelectItem>
              <SelectItem value="east">Eastern Region</SelectItem>
              <SelectItem value="south">Southern Region</SelectItem>
              <SelectItem value="west">Western Region</SelectItem>
              <SelectItem value="central">Central Region</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export Data
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Collector</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell>{entry.date}</TableCell>
                <TableCell>{entry.region}</TableCell>
                <TableCell>{entry.location}</TableCell>
                <TableCell>{entry.type}</TableCell>
                <TableCell>{entry.collector}</TableCell>
                <TableCell>
                  <div
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusClass(entry.status)}`}
                  >
                    {entry.status}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit Entry
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete Entry
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
