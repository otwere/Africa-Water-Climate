import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivities() {
  const activities = [
    {
      id: 1,
      user: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=32&width=32&text=SJ",
        initials: "SJ",
      },
      action: "added new water quality data for",
      target: "Lake Victoria region",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: {
        name: "Michael Okafor",
        avatar: "/placeholder.svg?height=32&width=32&text=MO",
        initials: "MO",
      },
      action: "created a new project",
      target: "Drought Early Warning System",
      time: "5 hours ago",
    },
    {
      id: 3,
      user: {
        name: "Amina Hassan",
        avatar: "/placeholder.svg?height=32&width=32&text=AH",
        initials: "AH",
      },
      action: "generated a report on",
      target: "Annual Rainfall Patterns",
      time: "Yesterday",
    },
    {
      id: 4,
      user: {
        name: "David Mensah",
        avatar: "/placeholder.svg?height=32&width=32&text=DM",
        initials: "DM",
      },
      action: "invited you to collaborate on",
      target: "Water Conservation Initiative",
      time: "2 days ago",
    },
    {
      id: 5,
      user: {
        name: "Grace Nkosi",
        avatar: "/placeholder.svg?height=32&width=32&text=GN",
        initials: "GN",
      },
      action: "updated climate data for",
      target: "Southern Africa Region",
      time: "3 days ago",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm">
              <span className="font-medium">{activity.user.name}</span> {activity.action}{" "}
              <span className="font-medium">{activity.target}</span>
            </p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
