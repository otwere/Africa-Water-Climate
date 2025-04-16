"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Download, Eye, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface DataDetailsModalProps {
  title: string
  description: string
  children: React.ReactNode
  data: any
}

export function DataDetailsModal({ title, description, children, data }: DataDetailsModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <DialogTitle>{title}</DialogTitle>
            <Badge variant="outline" className="ml-2">
              {data.type}
            </Badge>
          </div>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="metadata">Metadata</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4 mt-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-lg border p-3">
                <div className="text-sm text-muted-foreground">Current Value</div>
                <div className="text-2xl font-bold">{data.currentValue}</div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="text-sm text-muted-foreground">Historical Avg</div>
                <div className="text-2xl font-bold">{data.historicalAvg}</div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="text-sm text-muted-foreground">Change</div>
                <div className={`text-2xl font-bold ${data.change > 0 ? "text-green-600" : "text-red-600"}`}>
                  {data.change > 0 ? "+" : ""}
                  {data.change}%
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="text-sm font-medium mb-2">Description</h4>
              <p className="text-sm text-muted-foreground">{data.detailedDescription}</p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium">Key Insights</h4>
                <Info className="h-4 w-4 text-muted-foreground" />
              </div>
              <ul className="space-y-2">
                {data.insights.map((insight: string, i: number) => (
                  <li key={i} className="text-sm flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-4 mt-4">
            <div className="rounded-lg border p-4">
              <h4 className="text-sm font-medium mb-4">Historical Trend</h4>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data.trendData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      activeDot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="metadata" className="space-y-4 mt-4">
            <div className="rounded-lg border p-4">
              <h4 className="text-sm font-medium mb-2">Data Source</h4>
              <p className="text-sm text-muted-foreground">{data.source}</p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="text-sm font-medium mb-2">Collection Method</h4>
              <p className="text-sm text-muted-foreground">{data.collectionMethod}</p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="text-sm font-medium mb-2">Last Updated</h4>
              <p className="text-sm text-muted-foreground">{data.lastUpdated}</p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="text-sm font-medium mb-2">Data Quality</h4>
              <div className="flex items-center gap-2">
                <div className="h-2 flex-1 rounded-full bg-gray-200">
                  <div className="h-full rounded-full bg-blue-600" style={{ width: `${data.qualityScore}%` }}></div>
                </div>
                <span className="text-sm font-medium">{data.qualityScore}%</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button variant="outline">
            <Eye className="mr-2 h-4 w-4" />
            View Full Report
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download Data
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
