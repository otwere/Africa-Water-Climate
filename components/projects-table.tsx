import { Check, Clock } from "lucide-react"

import { Badge } from "@/components/ui/badge"

export function ProjectsTable() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <Badge className="bg-green-500">
            <Check className="mr-1 h-3 w-3" />
            Active
          </Badge>
          <div className="font-medium">Smart Water Monitoring</div>
          <div className="text-xs text-muted-foreground">Kenya, Tanzania</div>
        </div>
        <div className="text-sm text-muted-foreground">$1.2M</div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <Badge className="bg-green-500">
            <Check className="mr-1 h-3 w-3" />
            Active
          </Badge>
          <div className="font-medium">Drought Prediction System</div>
          <div className="text-xs text-muted-foreground">Ethiopia, Somalia</div>
        </div>
        <div className="text-sm text-muted-foreground">$850K</div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <Badge variant="outline" className="border-amber-500 text-amber-500">
            <Clock className="mr-1 h-3 w-3" />
            Planned
          </Badge>
          <div className="font-medium">Community Water Management</div>
          <div className="text-xs text-muted-foreground">Nigeria, Ghana</div>
        </div>
        <div className="text-sm text-muted-foreground">$650K</div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <Badge className="bg-green-500">
            <Check className="mr-1 h-3 w-3" />
            Active
          </Badge>
          <div className="font-medium">Aquifer Mapping Initiative</div>
          <div className="text-xs text-muted-foreground">South Africa, Namibia</div>
        </div>
        <div className="text-sm text-muted-foreground">$1.5M</div>
      </div>
    </div>
  )
}
