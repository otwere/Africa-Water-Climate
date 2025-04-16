"use client"

import type React from "react"

import { useState } from "react"
import { Check, MessageSquare, Search, Send } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface MessagesPopoverProps {
  children: React.ReactNode
}

export function MessagesPopover({ children }: MessagesPopoverProps) {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("recent")

  // Mock message data
  const messages = [
    {
      id: 1,
      user: {
        name: "Michael Okafor",
        avatar: "/placeholder.svg?height=32&width=32&text=MO",
        initials: "MO",
        online: true,
      },
      message: "Can you review the latest water quality report?",
      time: "10 min ago",
      unread: true,
    },
    {
      id: 2,
      user: {
        name: "Amina Hassan",
        avatar: "/placeholder.svg?height=32&width=32&text=AH",
        initials: "AH",
        online: false,
      },
      message: "I've updated the drought early warning system dashboard",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 3,
      user: {
        name: "David Mensah",
        avatar: "/placeholder.svg?height=32&width=32&text=DM",
        initials: "DM",
        online: true,
      },
      message: "When can we discuss the water conservation initiative?",
      time: "3 hours ago",
      unread: true,
    },
    {
      id: 4,
      user: {
        name: "Grace Nkosi",
        avatar: "/placeholder.svg?height=32&width=32&text=GN",
        initials: "GN",
        online: false,
      },
      message: "The climate data for Southern Africa has been processed",
      time: "Yesterday",
      unread: false,
    },
    {
      id: 5,
      user: {
        name: "Robert Ndlovu",
        avatar: "/placeholder.svg?height=32&width=32&text=RN",
        initials: "RN",
        online: false,
      },
      message: "Let's schedule a meeting to discuss the rainfall patterns",
      time: "2 days ago",
      unread: false,
    },
  ]

  const unreadCount = messages.filter((m) => m.unread).length

  const filteredMessages =
    activeTab === "recent"
      ? messages
      : activeTab === "unread"
        ? messages.filter((m) => m.unread)
        : messages.filter((m) => m.user.online)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-[380px] p-0" align="end">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h3 className="font-medium">Messages</h3>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-8 text-xs">
              Mark all as read
            </Button>
          </div>
        </div>
        <div className="p-2 border-b">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search messages..." className="pl-8" />
          </div>
        </div>
        <Tabs defaultValue="recent" className="w-full" onValueChange={setActiveTab}>
          <div className="border-b">
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
              <TabsTrigger
                value="recent"
                className={cn(
                  "rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none",
                )}
              >
                Recent
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
                value="online"
                className={cn(
                  "rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none",
                )}
              >
                Online
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="recent" className="p-0">
            <ScrollArea className="h-[300px]">
              {filteredMessages.length > 0 ? (
                <div className="divide-y">
                  {filteredMessages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex items-start gap-3 p-4 hover:bg-muted/50 cursor-pointer",
                        message.unread && "bg-muted/30",
                      )}
                    >
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={message.user.avatar || "/placeholder.svg"} alt={message.user.name} />
                          <AvatarFallback>{message.user.initials}</AvatarFallback>
                        </Avatar>
                        {message.user.online && (
                          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
                        )}
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className={cn("text-sm font-medium", message.unread && "font-semibold")}>
                            {message.user.name}
                          </h4>
                          <span className="text-xs text-muted-foreground">{message.time}</span>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-1">{message.message}</p>
                      </div>
                      {message.unread && <div className="mt-1 h-2 w-2 rounded-full bg-primary" />}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex h-full flex-col items-center justify-center p-4">
                  <MessageSquare className="h-10 w-10 text-muted-foreground/50" />
                  <h4 className="mt-2 text-lg font-medium">No messages</h4>
                  <p className="text-sm text-muted-foreground">Start a conversation!</p>
                </div>
              )}
            </ScrollArea>
          </TabsContent>
          <TabsContent value="unread" className="p-0">
            <ScrollArea className="h-[300px]">
              {filteredMessages.length > 0 ? (
                <div className="divide-y">
                  {filteredMessages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex items-start gap-3 p-4 hover:bg-muted/50 cursor-pointer",
                        message.unread && "bg-muted/30",
                      )}
                    >
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={message.user.avatar || "/placeholder.svg"} alt={message.user.name} />
                          <AvatarFallback>{message.user.initials}</AvatarFallback>
                        </Avatar>
                        {message.user.online && (
                          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
                        )}
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-semibold">{message.user.name}</h4>
                          <span className="text-xs text-muted-foreground">{message.time}</span>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-1">{message.message}</p>
                      </div>
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex h-full flex-col items-center justify-center p-4">
                  <Check className="h-10 w-10 text-muted-foreground/50" />
                  <h4 className="mt-2 text-lg font-medium">All caught up!</h4>
                  <p className="text-sm text-muted-foreground">No unread messages</p>
                </div>
              )}
            </ScrollArea>
          </TabsContent>
          <TabsContent value="online" className="p-0">
            <ScrollArea className="h-[300px]">
              {filteredMessages.length > 0 ? (
                <div className="divide-y">
                  {filteredMessages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex items-start gap-3 p-4 hover:bg-muted/50 cursor-pointer",
                        message.unread && "bg-muted/30",
                      )}
                    >
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={message.user.avatar || "/placeholder.svg"} alt={message.user.name} />
                          <AvatarFallback>{message.user.initials}</AvatarFallback>
                        </Avatar>
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className={cn("text-sm font-medium", message.unread && "font-semibold")}>
                            {message.user.name}
                          </h4>
                          <span className="text-xs text-muted-foreground">{message.time}</span>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-1">{message.message}</p>
                      </div>
                      {message.unread && <div className="mt-1 h-2 w-2 rounded-full bg-primary" />}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex h-full flex-col items-center justify-center p-4">
                  <MessageSquare className="h-10 w-10 text-muted-foreground/50" />
                  <h4 className="mt-2 text-lg font-medium">No online contacts</h4>
                  <p className="text-sm text-muted-foreground">Check back later</p>
                </div>
              )}
            </ScrollArea>
          </TabsContent>
        </Tabs>
        <div className="border-t p-2">
          <div className="flex items-center gap-2">
            <Input placeholder="Type a message..." className="h-9" />
            <Button size="icon" className="h-9 w-9">
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
