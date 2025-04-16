import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ClimateTemperatureDashboard } from "@/components/climate-data/climate-temperature-dashboard"
import { ClimatePrecipitationDashboard } from "@/components/climate-data/climate-precipitation-dashboard"
import { ClimateExtremeEventsDashboard } from "@/components/climate-data/climate-extreme-events-dashboard"
import { ClimateChangeIndicatorsDashboard } from "@/components/climate-data/climate-change-indicators-dashboard"

export default function ClimateDataPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Climate Data</h1>
        <p className="text-muted-foreground">
          Monitor and analyze temperature, precipitation, extreme events, and climate change indicators.
        </p>
      </div>

      <Tabs defaultValue="temperature" className="space-y-4">
        <TabsList>
          <TabsTrigger value="temperature">Temperature</TabsTrigger>
          <TabsTrigger value="precipitation">Precipitation</TabsTrigger>
          <TabsTrigger value="extreme-events">Extreme Events</TabsTrigger>
          <TabsTrigger value="climate-change">Climate Change</TabsTrigger>
        </TabsList>

        <TabsContent value="temperature" className="space-y-4">
          <ClimateTemperatureDashboard />
        </TabsContent>

        <TabsContent value="precipitation" className="space-y-4">
          <ClimatePrecipitationDashboard />
        </TabsContent>

        <TabsContent value="extreme-events" className="space-y-4">
          <ClimateExtremeEventsDashboard />
        </TabsContent>

        <TabsContent value="climate-change" className="space-y-4">
          <ClimateChangeIndicatorsDashboard />
        </TabsContent>
      </Tabs>
    </div>
  )
}
