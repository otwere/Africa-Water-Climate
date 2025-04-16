"use client"

import { useState } from "react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const waterLevelData = [
  { month: "Jan", surfaceWater: 120, groundwater: 85, rainfall: 45 },
  { month: "Feb", surfaceWater: 132, groundwater: 83, rainfall: 55 },
  { month: "Mar", surfaceWater: 145, groundwater: 80, rainfall: 60 },
  { month: "Apr", surfaceWater: 155, groundwater: 78, rainfall: 65 },
  { month: "May", surfaceWater: 165, groundwater: 75, rainfall: 70 },
  { month: "Jun", surfaceWater: 150, groundwater: 73, rainfall: 40 },
  { month: "Jul", surfaceWater: 140, groundwater: 70, rainfall: 30 },
  { month: "Aug", surfaceWater: 130, groundwater: 68, rainfall: 25 },
  { month: "Sep", surfaceWater: 125, groundwater: 65, rainfall: 35 },
  { month: "Oct", surfaceWater: 135, groundwater: 70, rainfall: 50 },
  { month: "Nov", surfaceWater: 140, groundwater: 75, rainfall: 55 },
  { month: "Dec", surfaceWater: 130, groundwater: 80, rainfall: 45 },
]

const flowRateData = [
  { month: "Jan", actual: 45, historical: 50 },
  { month: "Feb", actual: 52, historical: 55 },
  { month: "Mar", actual: 49, historical: 60 },
  { month: "Apr", actual: 62, historical: 65 },
  { month: "May", actual: 55, historical: 70 },
  { month: "Jun", actual: 40, historical: 60 },
  { month: "Jul", actual: 35, historical: 55 },
  { month: "Aug", actual: 30, historical: 50 },
  { month: "Sep", actual: 40, historical: 55 },
  { month: "Oct", actual: 45, historical: 60 },
  { month: "Nov", actual: 50, historical: 55 },
  { month: "Dec", actual: 48, historical: 50 },
]

export function WaterQuantityDashboard() {
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedTimeframe, setSelectedTimeframe] = useState("year")

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Select value={selectedRegion} onValueChange={setSelectedRegion}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              <SelectItem value="northern">Northern Region</SelectItem>
              <SelectItem value="eastern">Eastern Region</SelectItem>
              <SelectItem value="southern">Southern Region</SelectItem>
              <SelectItem value="western">Western Region</SelectItem>
              <SelectItem value="central">Central Region</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">Last Month</SelectItem>
              <SelectItem value="quarter">Last Quarter</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
              <SelectItem value="5year">Last 5 Years</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button>Generate Report</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Surface Water Level</CardTitle>
            <CardDescription>Current average level</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">138.5 m</div>
            <p className="text-xs text-muted-foreground">-5.2% from historical average</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Groundwater Level</CardTitle>
            <CardDescription>Current average depth</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75.3 m</div>
            <p className="text-xs text-muted-foreground">-12.8% from historical average</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Flow Rate</CardTitle>
            <CardDescription>Average river flow</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45.8 m³/s</div>
            <p className="text-xs text-muted-foreground">-18.2% from historical average</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Rainfall</CardTitle>
            <CardDescription>Monthly average</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48.3 mm</div>
            <p className="text-xs text-muted-foreground">-8.5% from historical average</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="water-levels" className="space-y-4">
        <TabsList>
          <TabsTrigger value="water-levels">Water Levels</TabsTrigger>
          <TabsTrigger value="flow-rates">Flow Rates</TabsTrigger>
          <TabsTrigger value="extraction">Water Extraction</TabsTrigger>
          <TabsTrigger value="forecasts">Forecasts</TabsTrigger>
        </TabsList>

        <TabsContent value="water-levels" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Water Level Trends</CardTitle>
              <CardDescription>Surface water, groundwater, and rainfall comparison</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={waterLevelData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="surfaceWater"
                    name="Surface Water (m)"
                    stackId="1"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="groundwater"
                    name="Groundwater (m)"
                    stackId="2"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="rainfall"
                    name="Rainfall (mm)"
                    stackId="3"
                    stroke="#6366f1"
                    fill="#6366f1"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="flow-rates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>River Flow Rates</CardTitle>
              <CardDescription>Actual vs. historical average flow rates</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={flowRateData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis label={{ value: "Flow Rate (m³/s)", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="actual"
                    name="Actual Flow Rate"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="historical"
                    name="Historical Average"
                    stroke="#9ca3af"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="extraction" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Water Extraction by Sector</CardTitle>
              <CardDescription>Monthly water extraction volumes by sector</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Water extraction data will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forecasts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Water Availability Forecasts</CardTitle>
              <CardDescription>Projected water availability for the next 12 months</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Water availability forecasts will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
