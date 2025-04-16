"use client"

import type React from "react"

import { useState } from "react"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function NotificationSettings() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // Show success message
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Email Notifications</h3>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="email-data-updates" defaultChecked />
            <Label htmlFor="email-data-updates">Data updates and alerts</Label>
          </div>
          <p className="text-xs text-muted-foreground pl-6">
            Receive notifications when important water or climate data changes significantly
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="email-project-updates" defaultChecked />
            <Label htmlFor="email-project-updates">Project updates</Label>
          </div>
          <p className="text-xs text-muted-foreground pl-6">
            Receive notifications about changes to projects you're involved with
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="email-team-activity" defaultChecked />
            <Label htmlFor="email-team-activity">Team activity</Label>
          </div>
          <p className="text-xs text-muted-foreground pl-6">
            Receive notifications about actions taken by team members
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="email-system" defaultChecked />
            <Label htmlFor="email-system">System notifications</Label>
          </div>
          <p className="text-xs text-muted-foreground pl-6">
            Receive important system updates, maintenance notices, and security alerts
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Notification Frequency</h3>

        <RadioGroup defaultValue="daily">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="realtime" id="realtime" />
            <Label htmlFor="realtime">Real-time</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="daily" id="daily" />
            <Label htmlFor="daily">Daily digest</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="weekly" id="weekly" />
            <Label htmlFor="weekly">Weekly summary</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Mobile Notifications</h3>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="mobile-push" defaultChecked />
            <Label htmlFor="mobile-push">Enable push notifications</Label>
          </div>
          <p className="text-xs text-muted-foreground pl-6">Receive push notifications on your mobile device</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile-priority">Alert Priority Level</Label>
          <Select defaultValue="medium">
            <SelectTrigger id="mobile-priority">
              <SelectValue placeholder="Select priority level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high">High - All alerts</SelectItem>
              <SelectItem value="medium">Medium - Important alerts only</SelectItem>
              <SelectItem value="low">Low - Critical alerts only</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline">
          Reset to Defaults
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Save Preferences
        </Button>
      </div>
    </form>
  )
}
