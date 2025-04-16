"use client"

import { useState } from "react"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ClimateTemperatureMap } from "@/components/climate-data/climate-temperature-map"

const temperatureData = [
  { year: "1990", average: 24.2, min: 18.5, max: 32.8 },
  { year: "1995", average: 24.5, min: 18.7, max: 33.1 },
  { year: "2000", average: 24.8, min: 18.9, max: 33.5 },
  { year: "2005", average: 25.2, min: 19.1, max: 33.9 },
  { year: "2010", average: 25.6, min: 19.3, max: 34.2 },
  { year: "2015", average: 26.0, min: 19.5, max: 34.6 },
  { year: "2020", average: 26.4, min: 19.7, max: 35.0 },
  { year: "2025", average: 26.8, min: 19.9, max: 35.4 },
]

const monthlyTemperatureData = [
  { month: "Jan", current: 25.2, historical: 24.5 },
  { month: "Feb", current: 25.8, historical: 25.0 },
  { month: "Mar", current: 26.5, historical: 25.5 },
  { month: "Apr", current: 27.2, historical: 26.0 },
  { month: "May", current: 27.8, historical: 26.5 },
  { month: "Jun", current: 28.5, historical: 27.0 },
  { month: "Jul", current: 29.0, historical: 27.5 },
  { month: "Aug", current: 28.8, historical: 27.3 },
  { month: "Sep", current: 28.2, historical: 26.8 },
  { month: "Oct", current: 27.5, historical: 26.2 },
  { month: "Nov", current: 26.8, historical: 25.5 },
  { month: "Dec", current: 25.5, historical: 24.8 },
]

export function ClimateTemperatureDashboard() {
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedTimeframe, setSelectedTimeframe] = useState("annual")
  const [selectedView, setSelectedView] = useState("chart")

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
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="seasonal">Seasonal</SelectItem>
              <SelectItem value="annual">Annual</SelectItem>
              <SelectItem value="decadal">Decadal</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2">
          <Button variant="outline">Download Data</Button>
          <Button>Add New Data</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Temperature</CardTitle>
            <CardDescription>Current annual average</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">26.8°C</div>
            <p className="text-xs text-muted-foreground">+2.6°C from 1990 baseline</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Maximum Temperature</CardTitle>
            <CardDescription>Annual maximum average</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">35.4°C</div>
            <p className="text-xs text-muted-foreground">+2.6°C from 1990 baseline</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Minimum Temperature</CardTitle>
            <CardDescription>Annual minimum average</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">19.9°C</div>
            <p className="text-xs text-muted-foreground">+1.4°C from 1990 baseline</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Temperature Anomaly</CardTitle>
            <CardDescription>Deviation from baseline</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2.1°C</div>
            <p className="text-xs text-muted-foreground">Above pre-industrial levels</p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedView} onValueChange={setSelectedView} className="space-y-4">
        <TabsList>
          <TabsTrigger value="chart">Chart</TabsTrigger>
          <TabsTrigger value="map">Map</TabsTrigger>
          <TabsTrigger value="comparison">Comparison</TabsTrigger>
        </TabsList>

        <TabsContent value="chart" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Temperature Trends (1990-2025)</CardTitle>
              <CardDescription>Average, minimum, and maximum temperature trends over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={temperatureData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis label={{ value: "Temperature (°C)", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="average"
                    name="Average Temperature"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="max"
                    name="Maximum Temperature"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="min"
                    name="Minimum Temperature"
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

        <TabsContent value="map" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Temperature Distribution Map</CardTitle>
              <CardDescription>Geographic distribution of temperature measurements</CardDescription>
            </CardHeader>
            <CardContent className="h-[500px]">
              <ClimateTemperatureMap />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current vs. Historical Monthly Temperatures</CardTitle>
              <CardDescription>Comparison of current year temperatures with historical averages</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyTemperatureData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis label={{ value: "Temperature (°C)", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="current"
                    name="Current Year"
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
      </Tabs>
    </div>
  )
}
