"use client"

import { useState } from "react"
import { Download, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const extremeEvents = [
  {
    id: "1",
    type: "Drought",
    region: "Eastern",
    location: "Horn of Africa",
    startDate: "2025-01-15",
    endDate: "2025-04-20",
    severity: "Severe",
    impact: "High",
    affectedArea: "280,000 km²",
    affectedPopulation: "12.5 million",
  },
  {
    id: "2",
    type: "Flood",
    region: "Western",
    location: "Niger River Basin",
    startDate: "2025-03-10",
    endDate: "2025-03-25",
    severity: "Moderate",
    impact: "Medium",
    affectedArea: "45,000 km²",
    affectedPopulation: "2.8 million",
  },
  {
    id: "3",
    type: "Heat Wave",
    region: "Northern",
    location: "Sahel Region",
    startDate: "2025-02-05",
    endDate: "2025-02-18",
    severity: "Extreme",
    impact: "High",
    affectedArea: "320,000 km²",
    affectedPopulation: "8.2 million",
  },
  {
    id: "4",
    type: "Cyclone",
    region: "Southern",
    location: "Mozambique Coast",
    startDate: "2025-03-28",
    endDate: "2025-04-02",
    severity: "Severe",
    impact: "High",
    affectedArea: "75,000 km²",
    affectedPopulation: "3.5 million",
  },
  {
    id: "5",
    type: "Drought",
    region: "Southern",
    location: "Namibia/Botswana",
    startDate: "2025-01-10",
    endDate: "2025-05-15",
    severity: "Moderate",
    impact: "Medium",
    affectedArea: "180,000 km²",
    affectedPopulation: "1.8 million",
  },
]

export function ClimateExtremeEventsDashboard() {
  const [selectedEventType, setSelectedEventType] = useState("all")
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedView, setSelectedView] = useState("list")

  const filteredEvents = extremeEvents.filter(
    (event) =>
      (selectedEventType === "all" || event.type === selectedEventType) &&
      (selectedRegion === "all" || event.region === selectedRegion),
  )

  // Helper functions to get severity and impact classes
  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case "Extreme":
        return "bg-red-100 text-red-800"
      case "Severe":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-yellow-100 text-yellow-800"
    }
  }

  const getImpactClass = (impact: string) => {
    switch (impact) {
      case "High":
        return "bg-red-100 text-red-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-green-100 text-green-800"
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Select value={selectedEventType} onValueChange={setSelectedEventType}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Event type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Event Types</SelectItem>
              <SelectItem value="Drought">Drought</SelectItem>
              <SelectItem value="Flood">Flood</SelectItem>
              <SelectItem value="Heat Wave">Heat Wave</SelectItem>
              <SelectItem value="Cyclone">Cyclone</SelectItem>
              <SelectItem value="Wildfire">Wildfire</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedRegion} onValueChange={setSelectedRegion}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              <SelectItem value="Northern">Northern Region</SelectItem>
              <SelectItem value="Eastern">Eastern Region</SelectItem>
              <SelectItem value="Southern">Southern Region</SelectItem>
              <SelectItem value="Western">Western Region</SelectItem>
              <SelectItem value="Central">Central Region</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
        </div>

        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
          <Button>Add Event</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Extreme Events</CardTitle>
            <CardDescription>Current year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">+35% from previous year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Drought Events</CardTitle>
            <CardDescription>Current year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+50% from previous year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Flood Events</CardTitle>
            <CardDescription>Current year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+33% from previous year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Heat Waves</CardTitle>
            <CardDescription>Current year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">+25% from previous year</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Extreme Climate Events</CardTitle>
          <CardDescription>Recent extreme weather and climate events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Region</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>End Date</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Impact</TableHead>
                  <TableHead>Affected Population</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEvents.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell>{event.type}</TableCell>
                    <TableCell>{event.region}</TableCell>
                    <TableCell>{event.location}</TableCell>
                    <TableCell>{event.startDate}</TableCell>
                    <TableCell>{event.endDate}</TableCell>
                    <TableCell>
                      <div
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getSeverityClass(event.severity)}`}
                      >
                        {event.severity}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getImpactClass(event.impact)}`}
                      >
                        {event.impact}
                      </div>
                    </TableCell>
                    <TableCell>{event.affectedPopulation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
