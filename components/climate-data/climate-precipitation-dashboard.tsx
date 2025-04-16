"use client"

import { useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const monthlyRainfallData = [
  { month: "Jan", current: 45, historical: 50 },
  { month: "Feb", current: 65, historical: 60 },
  { month: "Mar", current: 50, historical: 55 },
  { month: "Apr", current: 80, historical: 85 },
  { month: "May", current: 45, historical: 50 },
  { month: "Jun", current: 30, historical: 40 },
  { month: "Jul", current: 25, historical: 35 },
  { month: "Aug", current: 40, historical: 45 },
  { month: "Sep", current: 65, historical: 70 },
  { month: "Oct", current: 70, historical: 75 },
  { month: "Nov", current: 50, historical: 55 },
  { month: "Dec", current: 35, historical: 40 },
]

const regionalRainfallData = [
  { region: "Northern", current: 320, historical: 380 },
  { region: "Eastern", current: 580, historical: 620 },
  { region: "Southern", current: 450, historical: 480 },
  { region: "Western", current: 720, historical: 750 },
  { region: "Central", current: 520, historical: 550 },
]

export function ClimatePrecipitationDashboard() {
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedTimeframe, setSelectedTimeframe] = useState("annual")
  const [selectedView, setSelectedView] = useState("monthly")

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
            <CardTitle className="text-sm font-medium">Annual Rainfall</CardTitle>
            <CardDescription>Current annual total</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">534 mm</div>
            <p className="text-xs text-muted-foreground">-12% from historical average</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Rainy Days</CardTitle>
            <CardDescription>Days with precipitation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78 days</div>
            <p className="text-xs text-muted-foreground">-8 days from historical average</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Rainfall Intensity</CardTitle>
            <CardDescription>Average per rainy day</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6.8 mm/day</div>
            <p className="text-xs text-muted-foreground">+0.5 mm/day from historical average</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Drought Index</CardTitle>
            <CardDescription>Standardized Precipitation Index</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-1.2</div>
            <p className="text-xs text-muted-foreground">Moderate drought conditions</p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedView} onValueChange={setSelectedView} className="space-y-4">
        <TabsList>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="regional">Regional</TabsTrigger>
          <TabsTrigger value="seasonal">Seasonal</TabsTrigger>
        </TabsList>

        <TabsContent value="monthly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Rainfall Comparison</CardTitle>
              <CardDescription>Current year vs. historical average monthly rainfall</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyRainfallData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis label={{ value: "Rainfall (mm)", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="current" name="Current Year" fill="#3b82f6" />
                  <Bar dataKey="historical" name="Historical Average" fill="#9ca3af" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="regional" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Regional Rainfall Comparison</CardTitle>
              <CardDescription>Current year vs. historical average rainfall by region</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regionalRainfallData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" />
                  <YAxis label={{ value: "Annual Rainfall (mm)", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="current" name="Current Year" fill="#3b82f6" />
                  <Bar dataKey="historical" name="Historical Average" fill="#9ca3af" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seasonal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Seasonal Rainfall Patterns</CardTitle>
              <CardDescription>Rainfall distribution across seasons</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Seasonal rainfall data will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
