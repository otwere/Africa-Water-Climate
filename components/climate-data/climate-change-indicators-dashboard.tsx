"use client"

import { useState } from "react"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const temperatureAnomalyData = [
  { year: "1980", anomaly: 0.2 },
  { year: "1985", anomaly: 0.3 },
  { year: "1990", anomaly: 0.5 },
  { year: "1995", anomaly: 0.6 },
  { year: "2000", anomaly: 0.8 },
  { year: "2005", anomaly: 1.0 },
  { year: "2010", anomaly: 1.3 },
  { year: "2015", anomaly: 1.6 },
  { year: "2020", anomaly: 1.8 },
  { year: "2025", anomaly: 2.1 },
]

const seaLevelRiseData = [
  { year: "1980", rise: 0 },
  { year: "1985", rise: 12 },
  { year: "1990", rise: 25 },
  { year: "1995", rise: 38 },
  { year: "2000", rise: 52 },
  { year: "2005", rise: 68 },
  { year: "2010", rise: 85 },
  { year: "2015", rise: 105 },
  { year: "2020", rise: 125 },
  { year: "2025", rise: 148 },
]

const carbonEmissionsData = [
  { year: "1980", emissions: 18.5 },
  { year: "1985", emissions: 19.8 },
  { year: "1990", emissions: 22.3 },
  { year: "1995", emissions: 23.7 },
  { year: "2000", emissions: 25.2 },
  { year: "2005", emissions: 28.9 },
  { year: "2010", emissions: 33.1 },
  { year: "2015", emissions: 35.6 },
  { year: "2020", emissions: 34.8 },
  { year: "2025", emissions: 36.2 },
]

export function ClimateChangeIndicatorsDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("all")
  const [selectedIndicator, setSelectedIndicator] = useState("temperature")

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="10years">Last 10 Years</SelectItem>
              <SelectItem value="20years">Last 20 Years</SelectItem>
              <SelectItem value="50years">Last 50 Years</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedIndicator} onValueChange={setSelectedIndicator}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select indicator" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="temperature">Temperature Anomaly</SelectItem>
              <SelectItem value="sealevel">Sea Level Rise</SelectItem>
              <SelectItem value="carbon">Carbon Emissions</SelectItem>
              <SelectItem value="ice">Ice Sheet Mass</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2">
          <Button variant="outline">Download Data</Button>
          <Button>Generate Report</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Temperature Anomaly</CardTitle>
            <CardDescription>Above pre-industrial levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2.1°C</div>
            <p className="text-xs text-muted-foreground">+0.3°C from 5 years ago</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Sea Level Rise</CardTitle>
            <CardDescription>Since 1980</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">148 mm</div>
            <p className="text-xs text-muted-foreground">+23 mm from 5 years ago</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Carbon Emissions</CardTitle>
            <CardDescription>Annual global emissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">36.2 Gt</div>
            <p className="text-xs text-muted-foreground">+1.4 Gt from 5 years ago</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Ice Sheet Mass</CardTitle>
            <CardDescription>Change since 1980</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-4,320 Gt</div>
            <p className="text-xs text-muted-foreground">-580 Gt from 5 years ago</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="temperature" className="space-y-4">
        <TabsList>
          <TabsTrigger value="temperature">Temperature</TabsTrigger>
          <TabsTrigger value="sealevel">Sea Level</TabsTrigger>
          <TabsTrigger value="carbon">Carbon Emissions</TabsTrigger>
        </TabsList>

        <TabsContent value="temperature" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Global Temperature Anomaly</CardTitle>
              <CardDescription>Temperature change relative to pre-industrial levels (1850-1900)</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={temperatureAnomalyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis label={{ value: "Temperature Anomaly (°C)", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="anomaly"
                    name="Temperature Anomaly"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sealevel" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Global Mean Sea Level Rise</CardTitle>
              <CardDescription>Sea level rise since 1980 (mm)</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={seaLevelRiseData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis label={{ value: "Sea Level Rise (mm)", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="rise"
                    name="Sea Level Rise"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="carbon" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Global Carbon Emissions</CardTitle>
              <CardDescription>Annual carbon dioxide emissions (Gt CO₂)</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={carbonEmissionsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis label={{ value: "Carbon Emissions (Gt CO₂)", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="emissions"
                    name="Carbon Emissions"
                    stroke="#10b981"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
