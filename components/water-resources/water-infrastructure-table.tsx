"use client"

import { useState } from "react"
import { ArrowUpDown, Download, Eye, MoreHorizontal, Pencil } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const infrastructureData = [
  {
    id: "1",
    name: "Lake Victoria Dam",
    type: "Dam",
    region: "Eastern",
    capacity: "250,000 m³",
    status: "Operational",
    condition: "Good",
    lastInspection: "2025-03-15",
    constructionYear: 2010,
  },
  {
    id: "2",
    name: "Nairobi Water Treatment Plant",
    type: "Treatment Plant",
    region: "Eastern",
    capacity: "120,000 m³/day",
    status: "Operational",
    condition: "Fair",
    lastInspection: "2025-02-20",
    constructionYear: 2008,
  },
  {
    id: "3",
    name: "Niger River Pumping Station",
    type: "Pumping Station",
    region: "Western",
    capacity: "85,000 m³/day",
    status: "Operational",
    condition: "Good",
    lastInspection: "2025-03-28",
    constructionYear: 2015,
  },
  {
    id: "4",
    name: "Cairo Distribution Network",
    type: "Distribution Network",
    region: "Northern",
    capacity: "350,000 m³/day",
    status: "Operational",
    condition: "Fair",
    lastInspection: "2025-01-10",
    constructionYear: 2005,
  },
  {
    id: "5",
    name: "Zambezi Reservoir",
    type: "Reservoir",
    region: "Southern",
    capacity: "500,000 m³",
    status: "Operational",
    condition: "Good",
    lastInspection: "2025-04-05",
    constructionYear: 2012,
  },
  {
    id: "6",
    name: "Khartoum Water Tower",
    type: "Water Tower",
    region: "Northern",
    capacity: "75,000 m³",
    status: "Under Maintenance",
    condition: "Poor",
    lastInspection: "2025-03-01",
    constructionYear: 1998,
  },
  {
    id: "7",
    name: "Lagos Desalination Plant",
    type: "Desalination Plant",
    region: "Western",
    capacity: "50,000 m³/day",
    status: "Operational",
    condition: "Excellent",
    lastInspection: "2025-04-10",
    constructionYear: 2020,
  },
]

export function WaterInfrastructureTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredData = infrastructureData.filter(
    (item) =>
      (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.region.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (typeFilter === "all" || item.type === typeFilter) &&
      (statusFilter === "all" || item.status === statusFilter),
  )

  // Helper functions to get status and condition classes
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Operational":
        return "bg-green-100 text-green-800"
      case "Under Maintenance":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-red-100 text-red-800"
    }
  }

  const getConditionClass = (condition: string) => {
    switch (condition) {
      case "Excellent":
      case "Good":
        return "bg-green-100 text-green-800"
      case "Fair":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-red-100 text-red-800"
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Input
            placeholder="Search infrastructure..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-[250px]"
          />

          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Dam">Dam</SelectItem>
              <SelectItem value="Treatment Plant">Treatment Plant</SelectItem>
              <SelectItem value="Pumping Station">Pumping Station</SelectItem>
              <SelectItem value="Distribution Network">Distribution Network</SelectItem>
              <SelectItem value="Reservoir">Reservoir</SelectItem>
              <SelectItem value="Water Tower">Water Tower</SelectItem>
              <SelectItem value="Desalination Plant">Desalination Plant</SelectItem>
            </SelectContent>
          </Select>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="Operational">Operational</SelectItem>
              <SelectItem value="Under Maintenance">Under Maintenance</SelectItem>
              <SelectItem value="Non-operational">Non-operational</SelectItem>
              <SelectItem value="Under Construction">Under Construction</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm">Add Infrastructure</Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <div className="flex items-center space-x-1">
                  <Button variant="ghost" size="sm" className="p-0 hover:bg-transparent">
                    Name
                    <ArrowUpDown className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>Capacity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Condition</TableHead>
              <TableHead>Last Inspection</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.region}</TableCell>
                <TableCell>{item.capacity}</TableCell>
                <TableCell>
                  <div
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusClass(item.status)}`}
                  >
                    {item.status}
                  </div>
                </TableCell>
                <TableCell>
                  <div
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getConditionClass(item.condition)}`}
                  >
                    {item.condition}
                  </div>
                </TableCell>
                <TableCell>{item.lastInspection}</TableCell>
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
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        Download Report
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
