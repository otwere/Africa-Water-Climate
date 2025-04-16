"use client"

import { useState } from "react"
import { ArrowUpDown, Download, Eye, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const waterQualityData = [
  {
    id: "1",
    stationId: "LV-001",
    stationName: "Lake Victoria - North Shore",
    region: "Eastern",
    date: "2025-04-10",
    ph: 7.2,
    turbidity: 5.3,
    dissolvedOxygen: 8.5,
    conductivity: 350,
    tds: 180,
    temperature: 24.5,
    status: "Normal",
  },
  {
    id: "2",
    stationId: "NB-023",
    stationName: "Nile Basin - Blue Nile",
    region: "Northern",
    date: "2025-04-09",
    ph: 6.8,
    turbidity: 8.7,
    dissolvedOxygen: 7.2,
    conductivity: 420,
    tds: 210,
    temperature: 26.2,
    status: "Warning",
  },
  {
    id: "3",
    stationId: "CR-105",
    stationName: "Congo River - Central Basin",
    region: "Central",
    date: "2025-04-08",
    ph: 7.5,
    turbidity: 3.2,
    dissolvedOxygen: 9.1,
    conductivity: 280,
    tds: 140,
    temperature: 25.8,
    status: "Normal",
  },
  {
    id: "4",
    stationId: "ND-078",
    stationName: "Niger Delta - Coastal Point",
    region: "Western",
    date: "2025-04-07",
    ph: 6.5,
    turbidity: 12.4,
    dissolvedOxygen: 6.8,
    conductivity: 520,
    tds: 260,
    temperature: 27.5,
    status: "Critical",
  },
  {
    id: "5",
    stationId: "ZR-042",
    stationName: "Zambezi River - Victoria Falls",
    region: "Southern",
    date: "2025-04-06",
    ph: 7.1,
    turbidity: 4.8,
    dissolvedOxygen: 8.3,
    conductivity: 310,
    tds: 155,
    temperature: 23.9,
    status: "Normal",
  },
  {
    id: "6",
    stationId: "LC-019",
    stationName: "Lake Chad - Southern Basin",
    region: "Northern",
    date: "2025-04-05",
    ph: 7.3,
    turbidity: 6.5,
    dissolvedOxygen: 7.8,
    conductivity: 380,
    tds: 190,
    temperature: 28.1,
    status: "Warning",
  },
  {
    id: "7",
    stationId: "OR-056",
    stationName: "Orange River - Upington",
    region: "Southern",
    date: "2025-04-04",
    ph: 6.9,
    turbidity: 7.2,
    dissolvedOxygen: 8.0,
    conductivity: 340,
    tds: 170,
    temperature: 22.4,
    status: "Normal",
  },
]

export function WaterQualityTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortColumn, setSortColumn] = useState("date")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const filteredData = waterQualityData.filter(
    (item) =>
      item.stationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.stationId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.region.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const sortedData = [...filteredData].sort((a, b) => {
    const aValue = a[sortColumn as keyof typeof a]
    const bValue = b[sortColumn as keyof typeof b]

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
    }

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue
    }

    return 0
  })

  // Helper function to get status class
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Normal":
        return "bg-green-100 text-green-800"
      case "Warning":
        return "bg-yellow-100 text-yellow-800"
      case "Critical":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            placeholder="Search stations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-8"
          />
        </div>
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">
                <Checkbox />
              </TableHead>
              <TableHead className="w-[100px]">
                <div className="flex items-center space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 hover:bg-transparent"
                    onClick={() => handleSort("stationId")}
                  >
                    ID
                    <ArrowUpDown className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 hover:bg-transparent"
                    onClick={() => handleSort("stationName")}
                  >
                    Station Name
                    <ArrowUpDown className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 hover:bg-transparent"
                    onClick={() => handleSort("region")}
                  >
                    Region
                    <ArrowUpDown className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 hover:bg-transparent"
                    onClick={() => handleSort("date")}
                  >
                    Date
                    <ArrowUpDown className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 hover:bg-transparent"
                    onClick={() => handleSort("ph")}
                  >
                    pH
                    <ArrowUpDown className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 hover:bg-transparent"
                    onClick={() => handleSort("turbidity")}
                  >
                    Turbidity
                    <ArrowUpDown className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 hover:bg-transparent"
                    onClick={() => handleSort("dissolvedOxygen")}
                  >
                    DO
                    <ArrowUpDown className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 hover:bg-transparent"
                    onClick={() => handleSort("conductivity")}
                  >
                    Conductivity
                    <ArrowUpDown className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 hover:bg-transparent"
                    onClick={() => handleSort("status")}
                  >
                    Status
                    <ArrowUpDown className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{item.stationId}</TableCell>
                <TableCell>{item.stationName}</TableCell>
                <TableCell>{item.region}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.ph}</TableCell>
                <TableCell>{item.turbidity}</TableCell>
                <TableCell>{item.dissolvedOxygen}</TableCell>
                <TableCell>{item.conductivity}</TableCell>
                <TableCell>
                  <div
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusClass(item.status)}`}
                  >
                    {item.status}
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
                        <Download className="mr-2 h-4 w-4" />
                        Download Data
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
