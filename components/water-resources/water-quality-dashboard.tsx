"use client"

import { useState } from "react"
import { Download, Filter } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WaterQualityTable } from "@/components/water-resources/water-quality-table"
import { WaterQualityMap } from "@/components/water-resources/water-quality-map"

const waterQualityData = [
  { region: "Northern", ph: 7.2, turbidity: 5.3, dissolvedOxygen: 8.5, conductivity: 350, tds: 180 },
  { region: "Eastern", ph: 6.8, turbidity: 8.7, dissolvedOxygen: 7.2, conductivity: 420, tds: 210 },
  { region: "Southern", ph: 7.5, turbidity: 3.2, dissolvedOxygen: 9.1, conductivity: 280, tds: 140 },
  { region: "Western", ph: 6.5, turbidity: 12.4, dissolvedOxygen: 6.8, conductivity: 520, tds: 260 },
  { region: "Central", ph: 7.1, turbidity: 4.8, dissolvedOxygen: 8.3, conductivity: 310, tds: 155 },
]

export function WaterQualityDashboard() {
  const [selectedParameter, setSelectedParameter] = useState("ph")
  const [selectedView, setSelectedView] = useState("chart")

  const parameters = {
    ph: { name: "pH Level", unit: "", threshold: 7.0, color: "#3b82f6" },
    turbidity: { name: "Turbidity", unit: "NTU", threshold: 5.0, color: "#f59e0b" },
    dissolvedOxygen: { name: "Dissolved Oxygen", unit: "mg/L", threshold: 8.0, color: "#10b981" },
    conductivity: { name: "Conductivity", unit: "μS/cm", threshold: 400, color: "#6366f1" },
    tds: { name: "Total Dissolved Solids", unit: "mg/L", threshold: 200, color: "#8b5cf6" },
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Select value={selectedParameter} onValueChange={setSelectedParameter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select parameter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ph">pH Level</SelectItem>
              <SelectItem value="turbidity">Turbidity</SelectItem>
              <SelectItem value="dissolvedOxygen">Dissolved Oxygen</SelectItem>
              <SelectItem value="conductivity">Conductivity</SelectItem>
              <SelectItem value="tds">Total Dissolved Solids</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
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

          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm">Add New Data</Button>
        </div>
      </div>

      <Tabs value={selectedView} onValueChange={setSelectedView} className="space-y-4">
        <TabsList>
          <TabsTrigger value="chart">Chart</TabsTrigger>
          <TabsTrigger value="map">Map</TabsTrigger>
          <TabsTrigger value="table">Table</TabsTrigger>
        </TabsList>

        <TabsContent value="chart" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{parameters[selectedParameter as keyof typeof parameters].name} by Region</CardTitle>
              <CardDescription>
                Comparing {parameters[selectedParameter as keyof typeof parameters].name} across different regions
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={waterQualityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" />
                  <YAxis
                    label={{
                      value: `${parameters[selectedParameter as keyof typeof parameters].name} ${
                        parameters[selectedParameter as keyof typeof parameters].unit
                      }`,
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey={selectedParameter}
                    name={parameters[selectedParameter as keyof typeof parameters].name}
                    fill={parameters[selectedParameter as keyof typeof parameters].color}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Recommended threshold:{" "}
                <span className="font-medium">
                  {parameters[selectedParameter as keyof typeof parameters].threshold}{" "}
                  {parameters[selectedParameter as keyof typeof parameters].unit}
                </span>
              </p>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="map" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{parameters[selectedParameter as keyof typeof parameters].name} Distribution Map</CardTitle>
              <CardDescription>
                Geographic distribution of {parameters[selectedParameter as keyof typeof parameters].name} measurements
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[500px]">
              <WaterQualityMap parameter={selectedParameter} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="table" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Water Quality Data</CardTitle>
              <CardDescription>Detailed water quality parameters across all monitoring stations</CardDescription>
            </CardHeader>
            <CardContent>
              <WaterQualityTable />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
