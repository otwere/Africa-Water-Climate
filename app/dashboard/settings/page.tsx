import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserSettingsForm } from "@/components/forms/user-settings-form"
import { RoleManagementTable } from "@/components/dashboard/role-management-table"
import { NotificationSettings } from "@/components/forms/notification-settings"

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="roles">Role Management</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API Access</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Profile</CardTitle>
              <CardDescription>Update your personal information and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <UserSettingsForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Role-Based Access Control</CardTitle>
              <CardDescription>Manage user roles and permissions for your organization</CardDescription>
            </CardHeader>
            <CardContent>
              <RoleManagementTable />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Configure how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <NotificationSettings />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Access</CardTitle>
              <CardDescription>Manage API keys and access for integrations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md bg-muted p-4">
                <div className="font-mono text-sm">sk_live_51NzUNJDJ7bN6Ncw1RGBEMfhgTDpQzKlTkX9WzTlBhFYeJNgEZ</div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-muted-foreground">
                  This API key has full access to your account. Keep it secure and do not share it publicly.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Regenerate Key
                  </Button>
                  <Button variant="outline" size="sm">
                    Copy Key
                  </Button>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="mb-4 text-lg font-medium">API Usage</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Data Retrieval</span>
                    <span className="text-sm font-medium">2,345 requests</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Data Submission</span>
                    <span className="text-sm font-medium">1,287 requests</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Analytics</span>
                    <span className="text-sm font-medium">876 requests</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
