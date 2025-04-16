import { BarChart3, CloudRain, Database, LineChart, MapPin, TrendingUp, Users } from "lucide-react"
import { DashboardCard } from "@/components/dashboard/dashboard-card"
import { RecentActivities } from "@/components/dashboard/recent-activities"
import { DataExportButton } from "@/components/dashboard/data-export-button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">Filter</Button>
          <DataExportButton dataType="Dashboard data" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard title="Total Water Sources" icon={<Database className="h-4 w-4 text-blue-500" />}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold">1,248</p>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Database className="h-6 w-6 text-blue-500" />
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="Average Water Quality" icon={<TrendingUp className="h-4 w-4 text-green-500" />}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold">87%</p>
              <p className="text-xs text-muted-foreground">+3% from last month</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-green-500" />
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="Rainfall Data Points" icon={<CloudRain className="h-4 w-4 text-blue-500" />}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold">24,389</p>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
              <CloudRain className="h-6 w-6 text-blue-500" />
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="Active Projects" icon={<Users className="h-4 w-4 text-purple-500" />}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold">42</p>
              <p className="text-xs text-muted-foreground">+5 new this month</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Users className="h-6 w-6 text-purple-500" />
            </div>
          </div>
        </DashboardCard>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <DashboardCard className="md:col-span-4">
          <Tabs defaultValue="water" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="water">Water Resources</TabsTrigger>
              <TabsTrigger value="climate">Climate Data</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>
            <TabsContent value="water" className="space-y-4">
              <div className="h-[300px] flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-md">
                <LineChart className="h-16 w-16 text-muted-foreground/50" />
                <span className="ml-2 text-muted-foreground">Water Resources Chart</span>
              </div>
            </TabsContent>
            <TabsContent value="climate" className="space-y-4">
              <div className="h-[300px] flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-md">
                <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
                <span className="ml-2 text-muted-foreground">Climate Data Chart</span>
              </div>
            </TabsContent>
            <TabsContent value="projects" className="space-y-4">
              <div className="h-[300px] flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-md">
                <Users className="h-16 w-16 text-muted-foreground/50" />
                <span className="ml-2 text-muted-foreground">Projects Chart</span>
              </div>
            </TabsContent>
          </Tabs>
        </DashboardCard>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest updates from your team</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentActivities />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard title="Water Quality Alerts" description="Critical issues requiring attention">
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-md bg-red-50 p-3">
              <div className="mt-0.5 h-2 w-2 rounded-full bg-red-500" />
              <div>
                <p className="text-sm font-medium">High turbidity detected</p>
                <p className="text-xs text-muted-foreground">Lake Victoria region - 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-md bg-amber-50 p-3">
              <div className="mt-0.5 h-2 w-2 rounded-full bg-amber-500" />
              <div>
                <p className="text-sm font-medium">pH levels outside normal range</p>
                <p className="text-xs text-muted-foreground">Nairobi Basin - 5 hours ago</p>
              </div>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="Climate Forecasts" description="Upcoming weather patterns">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CloudRain className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-sm font-medium">Heavy rainfall expected</p>
                  <p className="text-xs text-muted-foreground">Eastern Region</p>
                </div>
              </div>
              <p className="text-sm font-medium">Next 48h</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CloudRain className="h-5 w-5 text-amber-500" />
                <div>
                  <p className="text-sm font-medium">Drought conditions</p>
                  <p className="text-xs text-muted-foreground">Southern Region</p>
                </div>
              </div>
              <p className="text-sm font-medium">Ongoing</p>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="Resource Distribution" description="Water allocation by region">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <MapPin className="h-5 w-5 text-blue-500" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Northern Region</p>
                  <p className="text-sm font-medium">28%</p>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-slate-100">
                  <div className="h-2 w-[28%] rounded-full bg-blue-500" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-5 w-5 text-green-500" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Eastern Region</p>
                  <p className="text-sm font-medium">42%</p>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-slate-100">
                  <div className="h-2 w-[42%] rounded-full bg-green-500" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-5 w-5 text-amber-500" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Southern Region</p>
                  <p className="text-sm font-medium">30%</p>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-slate-100">
                  <div className="h-2 w-[30%] rounded-full bg-amber-500" />
                </div>
              </div>
            </div>
          </div>
        </DashboardCard>
      </div>
    </div>
  )
}
