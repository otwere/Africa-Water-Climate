import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataCollectionForm } from "@/components/forms/data-collection-form"
import { DataCollectionHistory } from "@/components/dashboard/data-collection-history"

export default function DataCollectionPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Data Collection</h1>
        <p className="text-muted-foreground">Enter and manage water and climate data for your regions.</p>
      </div>

      <Tabs defaultValue="new-entry" className="space-y-4">
        <TabsList>
          <TabsTrigger value="new-entry">New Entry</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="new-entry" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Water & Climate Data Entry</CardTitle>
              <CardDescription>Enter new water resource and climate data for your region</CardDescription>
            </CardHeader>
            <CardContent>
              <DataCollectionForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Data Collection History</CardTitle>
              <CardDescription>View and manage your previously submitted data entries</CardDescription>
            </CardHeader>
            <CardContent>
              <DataCollectionHistory />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Data Collection Templates</CardTitle>
              <CardDescription>Create and manage templates for faster data entry</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Water Quality Assessment</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-xs text-muted-foreground">
                      Template for collecting water quality parameters including pH, turbidity, and contaminants.
                    </p>
                  </CardContent>
                  <CardContent className="flex justify-end gap-2 pt-0">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button size="sm">Use</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Rainfall Measurement</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-xs text-muted-foreground">
                      Template for recording precipitation data including amount, duration, and intensity.
                    </p>
                  </CardContent>
                  <CardContent className="flex justify-end gap-2 pt-0">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button size="sm">Use</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Groundwater Monitoring</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-xs text-muted-foreground">
                      Template for tracking groundwater levels, recharge rates, and extraction volumes.
                    </p>
                  </CardContent>
                  <CardContent className="flex justify-end gap-2 pt-0">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button size="sm">Use</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
