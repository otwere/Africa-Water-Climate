"use client"

import type React from "react"

import { useState } from "react"
import { CalendarIcon, Loader2 } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export function DataCollectionForm() {
  const [date, setDate] = useState<Date>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // Reset form or show success message
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Tabs defaultValue="water" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="water">Water Resources</TabsTrigger>
          <TabsTrigger value="climate">Climate Data</TabsTrigger>
        </TabsList>

        <TabsContent value="water" className="space-y-6 pt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="region">Region</Label>
              <Select required>
                <SelectTrigger id="region">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="north">Northern Region</SelectItem>
                  <SelectItem value="east">Eastern Region</SelectItem>
                  <SelectItem value="south">Southern Region</SelectItem>
                  <SelectItem value="west">Western Region</SelectItem>
                  <SelectItem value="central">Central Region</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="location">Specific Location</Label>
              <Input id="location" placeholder="e.g., Lake Victoria, Nairobi Basin" required />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="date">Collection Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="collector">Data Collector</Label>
              <Input id="collector" placeholder="Your name" required />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Water Quality Parameters</h3>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="grid gap-2">
                <Label htmlFor="ph">pH Level</Label>
                <Input id="ph" type="number" step="0.1" placeholder="e.g., 7.2" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="turbidity">Turbidity (NTU)</Label>
                <Input id="turbidity" type="number" step="0.1" placeholder="e.g., 5.3" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="dissolved-oxygen">Dissolved Oxygen (mg/L)</Label>
                <Input id="dissolved-oxygen" type="number" step="0.1" placeholder="e.g., 8.5" />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="grid gap-2">
                <Label htmlFor="conductivity">Conductivity (μS/cm)</Label>
                <Input id="conductivity" type="number" placeholder="e.g., 350" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="temperature">Water Temperature (°C)</Label>
                <Input id="temperature" type="number" step="0.1" placeholder="e.g., 22.5" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="total-dissolved-solids">Total Dissolved Solids (mg/L)</Label>
                <Input id="total-dissolved-solids" type="number" placeholder="e.g., 180" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Water Quantity</h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="water-level">Water Level (m)</Label>
                <Input id="water-level" type="number" step="0.01" placeholder="e.g., 12.45" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="flow-rate">Flow Rate (m³/s)</Label>
                <Input id="flow-rate" type="number" step="0.01" placeholder="e.g., 3.25" />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="extraction-volume">Extraction Volume (m³/day)</Label>
                <Input id="extraction-volume" type="number" placeholder="e.g., 1500" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="recharge-rate">Recharge Rate (mm/day)</Label>
                <Input id="recharge-rate" type="number" step="0.1" placeholder="e.g., 2.5" />
              </div>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="water-notes">Additional Notes</Label>
            <Textarea
              id="water-notes"
              placeholder="Enter any additional observations or notes about the water resources"
              className="min-h-[100px]"
            />
          </div>
        </TabsContent>

        <TabsContent value="climate" className="space-y-6 pt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="climate-region">Region</Label>
              <Select required>
                <SelectTrigger id="climate-region">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="north">Northern Region</SelectItem>
                  <SelectItem value="east">Eastern Region</SelectItem>
                  <SelectItem value="south">Southern Region</SelectItem>
                  <SelectItem value="west">Western Region</SelectItem>
                  <SelectItem value="central">Central Region</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="climate-location">Specific Location</Label>
              <Input id="climate-location" placeholder="e.g., Nairobi, Addis Ababa" required />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="climate-date">Collection Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="climate-collector">Data Collector</Label>
              <Input id="climate-collector" placeholder="Your name" required />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Temperature Data</h3>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="grid gap-2">
                <Label htmlFor="max-temp">Maximum Temperature (°C)</Label>
                <Input id="max-temp" type="number" step="0.1" placeholder="e.g., 32.5" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="min-temp">Minimum Temperature (°C)</Label>
                <Input id="min-temp" type="number" step="0.1" placeholder="e.g., 18.2" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="avg-temp">Average Temperature (°C)</Label>
                <Input id="avg-temp" type="number" step="0.1" placeholder="e.g., 25.7" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Precipitation Data</h3>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="grid gap-2">
                <Label htmlFor="rainfall">Rainfall Amount (mm)</Label>
                <Input id="rainfall" type="number" step="0.1" placeholder="e.g., 25.5" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="rainfall-duration">Rainfall Duration (hours)</Label>
                <Input id="rainfall-duration" type="number" step="0.1" placeholder="e.g., 3.5" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="rainfall-intensity">Rainfall Intensity (mm/hr)</Label>
                <Input id="rainfall-intensity" type="number" step="0.1" placeholder="e.g., 7.3" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Other Climate Parameters</h3>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="grid gap-2">
                <Label htmlFor="humidity">Relative Humidity (%)</Label>
                <Input id="humidity" type="number" placeholder="e.g., 65" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="wind-speed">Wind Speed (km/h)</Label>
                <Input id="wind-speed" type="number" step="0.1" placeholder="e.g., 12.5" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="wind-direction">Wind Direction</Label>
                <Select>
                  <SelectTrigger id="wind-direction">
                    <SelectValue placeholder="Select direction" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="n">North</SelectItem>
                    <SelectItem value="ne">Northeast</SelectItem>
                    <SelectItem value="e">East</SelectItem>
                    <SelectItem value="se">Southeast</SelectItem>
                    <SelectItem value="s">South</SelectItem>
                    <SelectItem value="sw">Southwest</SelectItem>
                    <SelectItem value="w">West</SelectItem>
                    <SelectItem value="nw">Northwest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="solar-radiation">Solar Radiation (W/m²)</Label>
                <Input id="solar-radiation" type="number" placeholder="e.g., 850" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="evaporation">Evaporation Rate (mm/day)</Label>
                <Input id="evaporation" type="number" step="0.1" placeholder="e.g., 4.2" />
              </div>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="climate-notes">Additional Notes</Label>
            <Textarea
              id="climate-notes"
              placeholder="Enter any additional observations or notes about the climate conditions"
              className="min-h-[100px]"
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Submit Data
        </Button>
      </div>
    </form>
  )
}
