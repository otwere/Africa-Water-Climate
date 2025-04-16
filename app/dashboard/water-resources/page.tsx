import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WaterQualityDashboard } from "@/components/water-resources/water-quality-dashboard"
import { WaterQuantityDashboard } from "@/components/water-resources/water-quantity-dashboard"
import { WaterInfrastructureTable } from "@/components/water-resources/water-infrastructure-table"
import { WaterAllocationChart } from "@/components/water-resources/water-allocation-chart"

export default function WaterResourcesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Water Resources</h1>
        <p className="text-muted-foreground">
          Monitor and analyze water quality, quantity, infrastructure, and allocation across regions.
        </p>
      </div>

      <Tabs defaultValue="quality" className="space-y-4">
        <TabsList>
          <TabsTrigger value="quality">Water Quality</TabsTrigger>
          <TabsTrigger value="quantity">Water Quantity</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          <TabsTrigger value="allocation">Water Allocation</TabsTrigger>
        </TabsList>

        <TabsContent value="quality" className="space-y-4">
          <WaterQualityDashboard />
        </TabsContent>

        <TabsContent value="quantity" className="space-y-4">
          <WaterQuantityDashboard />
        </TabsContent>

        <TabsContent value="infrastructure" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Water Infrastructure</CardTitle>
              <CardDescription>Monitor and manage water infrastructure across regions</CardDescription>
            </CardHeader>
            <CardContent>
              <WaterInfrastructureTable />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="allocation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Water Allocation by Sector</CardTitle>
              <CardDescription>Track water usage and allocation across different sectors</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <WaterAllocationChart />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
