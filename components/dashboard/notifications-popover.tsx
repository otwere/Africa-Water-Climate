"use client"

import type React from "react"

import { useState } from "react"
import { Check, Clock, Info } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface NotificationsPopoverProps {
  children: React.ReactNode
}

export function NotificationsPopover({ children }: NotificationsPopoverProps) {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  // Mock notification data
  const notifications = [
    {
      id: 1,
      title: "New water quality data available",
      description: "Lake Victoria region data has been updated",
      time: "2 hours ago",
      read: false,
      type: "info",
    },
    {
      id: 2,
      title: "Critical alert: Drought warning",
      description: "Drought conditions detected in Eastern Region",
      time: "5 hours ago",
      read: false,
      type: "alert",
    },
    {
      id: 3,
      title: "Project update: Water Conservation Initiative",
      description: "New milestone achieved in water conservation project",
      time: "Yesterday",
      read: true,
      type: "update",
    },
    {
      id: 4,
      title: "System maintenance scheduled",
      description: "Planned downtime on June 15th from 2-4 AM UTC",
      time: "2 days ago",
      read: true,
      type: "system",
    },
    {
      id: 5,
      title: "New team member added",
      description: "Grace Nkosi has joined your team",
      time: "3 days ago",
      read: true,
      type: "team",
    },
  ]

  const unreadCount = notifications.filter((n) => !n.read).length

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "alert":
        return <span className="h-2 w-2 rounded-full bg-red-500" />
      case "update":
        return <span className="h-2 w-2 rounded-full bg-green-500" />
      case "system":
        return <span className="h-2 w-2 rounded-full bg-yellow-500" />
      case "team":
        return <span className="h-2 w-2 rounded-full bg-purple-500" />
      default:
        return <span className="h-2 w-2 rounded-full bg-blue-500" />
    }
  }

  const filteredNotifications =
    activeTab === "all"
      ? notifications
      : activeTab === "unread"
        ? notifications.filter((n) => !n.read)
        : notifications.filter((n) => n.read)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-[380px] p-0" align="end">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h3 className="font-medium">Notifications</h3>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-8 text-xs">
              Mark all as read
            </Button>
          </div>
        </div>
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="border-b">
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
              <TabsTrigger
                value="all"
                className={cn(
                  "rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none",
                )}
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="unread"
                className={cn(
                  "rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none",
                )}
              >
                Unread{" "}
                <span className="ml-1 rounded-full bg-primary px-1.5 py-0.5 text-xs text-white">{unreadCount}</span>
              </TabsTrigger>
              <TabsTrigger
                value="read"
                className={cn(
                  "rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none",
                )}
              >
                Read
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="all" className="p-0">
            <ScrollArea className="h-[300px]">
              {filteredNotifications.length > 0 ? (
                <div className="divide-y">
                  {filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={cn(
                        "flex items-start gap-3 p-4 hover:bg-muted/50",
                        !notification.read && "bg-muted/30",
                      )}
                    >
                      <div className="mt-1">{getNotificationIcon(notification.type)}</div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className={cn("text-sm font-medium", !notification.read && "font-semibold")}>
                            {notification.title}
                          </h4>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                            {!notification.read && (
                              <Button variant="ghost" size="icon" className="h-6 w-6">
                                <Check className="h-3 w-3" />
                                <span className="sr-only">Mark as read</span>
                              </Button>
                            )}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">{notification.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex h-full flex-col items-center justify-center p-4">
                  <Clock className="h-10 w-10 text-muted-foreground/50" />
                  <h4 className="mt-2 text-lg font-medium">No notifications</h4>
                  <p className="text-sm text-muted-foreground">You're all caught up!</p>
                </div>
              )}
            </ScrollArea>
          </TabsContent>
          <TabsContent value="unread" className="p-0">
            <ScrollArea className="h-[300px]">
              {filteredNotifications.length > 0 ? (
                <div className="divide-y">
                  {filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={cn(
                        "flex items-start gap-3 p-4 hover:bg-muted/50",
                        !notification.read && "bg-muted/30",
                      )}
                    >
                      <div className="mt-1">{getNotificationIcon(notification.type)}</div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className={cn("text-sm font-medium", !notification.read && "font-semibold")}>
                            {notification.title}
                          </h4>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                            {!notification.read && (
                              <Button variant="ghost" size="icon" className="h-6 w-6">
                                <Check className="h-3 w-3" />
                                <span className="sr-only">Mark as read</span>
                              </Button>
                            )}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">{notification.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex h-full flex-col items-center justify-center p-4">
                  <Check className="h-10 w-10 text-muted-foreground/50" />
                  <h4 className="mt-2 text-lg font-medium">All caught up!</h4>
                  <p className="text-sm text-muted-foreground">No unread notifications</p>
                </div>
              )}
            </ScrollArea>
          </TabsContent>
          <TabsContent value="read" className="p-0">
            <ScrollArea className="h-[300px]">
              {filteredNotifications.length > 0 ? (
                <div className="divide-y">
                  {filteredNotifications.map((notification) => (
                    <div key={notification.id} className="flex items-start gap-3 p-4 hover:bg-muted/50">
                      <div className="mt-1">{getNotificationIcon(notification.type)}</div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium">{notification.title}</h4>
                          <span className="text-xs text-muted-foreground">{notification.time}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{notification.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex h-full flex-col items-center justify-center p-4">
                  <Info className="h-10 w-10 text-muted-foreground/50" />
                  <h4 className="mt-2 text-lg font-medium">No read notifications</h4>
                  <p className="text-sm text-muted-foreground">You haven't read any notifications yet</p>
                </div>
              )}
            </ScrollArea>
          </TabsContent>
        </Tabs>
        <div className="border-t p-2">
          <Button variant="outline" size="sm" className="w-full">
            View all notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
