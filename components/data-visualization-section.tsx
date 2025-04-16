"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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

const rainfallData = [
  { year: "1990", amount: 580 },
  { year: "1995", amount: 560 },
  { year: "2000", amount: 540 },
  { year: "2005", amount: 520 },
  { year: "2010", amount: 500 },
  { year: "2015", amount: 480 },
  { year: "2020", amount: 460 },
  { year: "2025", amount: 440 },
]

const waterStressData = [
  { region: "Northern", value: 75, fill: "#ef4444" },
  { region: "Eastern", value: 60, fill: "#f97316" },
  { region: "Southern", value: 45, fill: "#eab308" },
  { region: "Western", value: 80, fill: "#ef4444" },
  { region: "Central", value: 30, fill: "#22c55e" },
]

export function DataVisualizationSection() {
  const [activeTab, setActiveTab] = useState("temperature")

  return (
    <section id="data-insights" className="py-16 md:py-24 scroll-mt-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 mb-4">
            Data Insights
          </span>
          <h2 className="text-3xl font-bold tracking-tight">Visualizing Africa's Water & Climate Challenges</h2>
          <p className="mt-4 text-muted-foreground">
            Our platform transforms complex data into actionable insights through powerful visualizations
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="temperature">Temperature</TabsTrigger>
                <TabsTrigger value="rainfall">Rainfall</TabsTrigger>
                <TabsTrigger value="water-stress">Water Stress</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="temperature" className="space-y-4">
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

            <TabsContent value="rainfall" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Annual Rainfall Trends (1990-2025)</CardTitle>
                  <CardDescription>Declining rainfall patterns across Africa</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={rainfallData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis label={{ value: "Rainfall (mm)", angle: -90, position: "insideLeft" }} />
                      <Tooltip />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="amount"
                        name="Annual Rainfall"
                        stroke="#3b82f6"
                        fill="#3b82f6"
                        fillOpacity={0.6}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="water-stress" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Water Stress by Region</CardTitle>
                  <CardDescription>Water stress index across different regions of Africa</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={waterStressData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="region" />
                      <YAxis label={{ value: "Water Stress Index (%)", angle: -90, position: "insideLeft" }} />
                      <Tooltip />
                      <Legend />
                      <Bar
                        dataKey="value"
                        name="Water Stress Index"
                        fill={(entry) => entry.fill} // Use preprocessed `fill` property
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
