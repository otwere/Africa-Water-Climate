"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { format } from "date-fns"
import { CalendarIcon, Loader2, MapPin, Upload, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { FancyButton } from "@/components/ui/fancy-button"
import { toast } from "@/hooks/use-toast"

const formSchema = z.object({
  region: z.string().min(1, { message: "Please select a region" }),
  location: z.string().min(3, { message: "Location must be at least 3 characters" }),
  coordinates: z
    .object({
      latitude: z.string().optional(),
      longitude: z.string().optional(),
    })
    .optional(),
  date: z.date({ required_error: "Please select a date" }),
  collector: z.string().min(2, { message: "Please enter your name" }),
  waterQuality: z
    .object({
      ph: z.number().min(0).max(14).optional(),
      turbidity: z.number().min(0).optional(),
      dissolvedOxygen: z.number().min(0).optional(),
      conductivity: z.number().min(0).optional(),
      temperature: z.number().optional(),
      tds: z.number().min(0).optional(),
    })
    .optional(),
  waterQuantity: z
    .object({
      waterLevel: z.number().optional(),
      flowRate: z.number().optional(),
      extractionVolume: z.number().optional(),
      rechargeRate: z.number().optional(),
    })
    .optional(),
  climateData: z
    .object({
      maxTemp: z.number().optional(),
      minTemp: z.number().optional(),
      avgTemp: z.number().optional(),
      rainfall: z.number().min(0).optional(),
      humidity: z.number().min(0).max(100).optional(),
      windSpeed: z.number().min(0).optional(),
      windDirection: z.string().optional(),
    })
    .optional(),
  photos: z.array(z.string()).optional(),
  notes: z.string().optional(),
  useGPS: z.boolean().default(false),
  sendAlerts: z.boolean().default(true),
})

type FormValues = z.infer<typeof formSchema>

export function AdvancedDataCollectionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState("water-quality")
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([])
  const [locationRequested, setLocationRequested] = useState(false)
  const [attemptedToGetCurrentLocation, setAttemptedToGetCurrentLocation] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      region: "",
      location: "",
      coordinates: {
        latitude: "",
        longitude: "",
      },
      date: new Date(),
      collector: "",
      waterQuality: {
        ph: 7.0,
        turbidity: 0,
        dissolvedOxygen: 0,
        conductivity: 0,
        temperature: 25,
        tds: 0,
      },
      waterQuantity: {
        waterLevel: 0,
        flowRate: 0,
        extractionVolume: 0,
        rechargeRate: 0,
      },
      climateData: {
        maxTemp: 0,
        minTemp: 0,
        avgTemp: 0,
        rainfall: 0,
        humidity: 50,
        windSpeed: 0,
        windDirection: "",
      },
      photos: [],
      notes: "",
      useGPS: false,
      sendAlerts: true,
    },
  })

  useEffect(() => {
    if (form.watch("useGPS") && !attemptedToGetCurrentLocation) {
      setAttemptedToGetCurrentLocation(true)
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            form.setValue("coordinates.latitude", position.coords.latitude.toString())
            form.setValue("coordinates.longitude", position.coords.longitude.toString())
            toast({
              title: "Location detected",
              description: `Lat: ${position.coords.latitude}, Long: ${position.coords.longitude}`,
            })
          },
          (error) => {
            toast({
              title: "Error detecting location",
              description: error.message,
              variant: "destructive",
            })
          },
        )
      } else {
        toast({
          title: "Geolocation not supported",
          description: "Your browser does not support geolocation",
          variant: "destructive",
        })
      }
    }
  }, [form.watch("useGPS"), form, attemptedToGetCurrentLocation])

  function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    console.log(values)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Data submitted successfully",
        description: "Your water and climate data has been recorded.",
      })
      form.reset()
      setUploadedPhotos([])
    }, 2000)
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    // Simulate file upload
    const newPhotos = Array.from(files).map((file) => {
      // In a real app, you would upload the file to a server and get a URL
      return URL.createObjectURL(file)
    })

    setUploadedPhotos([...uploadedPhotos, ...newPhotos])
  }

  const removePhoto = (index: number) => {
    const newPhotos = [...uploadedPhotos]
    newPhotos.splice(index, 1)
    setUploadedPhotos(newPhotos)
  }

  const useCurrentLocation = () => {
    setLocationRequested(true)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="region"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Region</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select region" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="northern">Northern Region</SelectItem>
                        <SelectItem value="eastern">Eastern Region</SelectItem>
                        <SelectItem value="southern">Southern Region</SelectItem>
                        <SelectItem value="western">Western Region</SelectItem>
                        <SelectItem value="central">Central Region</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specific Location</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Lake Victoria, Nairobi Basin" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <div className="flex items-center justify-between">
                  <FormLabel>Coordinates</FormLabel>
                  <FormField
                    control={form.control}
                    name="useGPS"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={(checked) => {
                              field.onChange(checked)
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">Use GPS</FormLabel>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <FormField
                    control={form.control}
                    name="coordinates.latitude"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Latitude" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="coordinates.longitude"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Longitude" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="button" variant="outline" size="sm" className="mt-2" onClick={useCurrentLocation}>
                  <MapPin className="mr-2 h-4 w-4" />
                  Detect Location
                </Button>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Collection Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="collector"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Data Collector</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="water-quality">Water Quality</TabsTrigger>
            <TabsTrigger value="water-quantity">Water Quantity</TabsTrigger>
            <TabsTrigger value="climate-data">Climate Data</TabsTrigger>
          </TabsList>

          <TabsContent value="water-quality" className="space-y-6 pt-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Water Quality Parameters</h3>

                  <div className="grid gap-6 md:grid-cols-3">
                    <FormField
                      control={form.control}
                      name="waterQuality.ph"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>pH Level (0-14)</FormLabel>
                          <div className="flex flex-col space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Acidic</span>
                              <span className="text-sm font-medium">{field.value}</span>
                              <span className="text-sm">Alkaline</span>
                            </div>
                            <FormControl>
                              <Slider
                                min={0}
                                max={14}
                                step={0.1}
                                value={[field.value || 7]}
                                onValueChange={(values) => field.onChange(values[0])}
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="waterQuality.turbidity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Turbidity (NTU)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.1"
                              placeholder="e.g., 5.3"
                              {...field}
                              onChange={(e) => field.onChange(Number.parseFloat(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="waterQuality.dissolvedOxygen"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dissolved Oxygen (mg/L)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.1"
                              placeholder="e.g., 8.5"
                              {...field}
                              onChange={(e) => field.onChange(Number.parseFloat(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-3">
                    <FormField
                      control={form.control}
                      name="waterQuality.conductivity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Conductivity (μS/cm)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="e.g., 350"
                              {...field}
                              onChange={(e) => field.onChange(Number.parseFloat(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="waterQuality.temperature"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Water Temperature (°C)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.1"
                              placeholder="e.g., 22.5"
                              {...field}
                              onChange={(e) => field.onChange(Number.parseFloat(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="waterQuality.tds"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Total Dissolved Solids (mg/L)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="e.g., 180"
                              {...field}
                              onChange={(e) => field.onChange(Number.parseFloat(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="water-quantity" className="space-y-6 pt-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Water Quantity Measurements</h3>

                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="waterQuantity.waterLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Water Level (m)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="e.g., 12.45"
                              {...field}
                              onChange={(e) => field.onChange(Number.parseFloat(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="waterQuantity.flowRate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Flow Rate (m³/s)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="e.g., 3.25"
                              {...field}
                              onChange={(e) => field.onChange(Number.parseFloat(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="waterQuantity.extractionVolume"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Extraction Volume (m³/day)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="e.g., 1500"
                              {...field}
                              onChange={(e) => field.onChange(Number.parseFloat(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="waterQuantity.rechargeRate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Recharge Rate (mm/day)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.1"
                              placeholder="e.g., 2.5"
                              {...field}
                              onChange={(e) => field.onChange(Number.parseFloat(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="climate-data" className="space-y-6 pt-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Climate Parameters</h3>

                  <div className="grid gap-6 md:grid-cols-3">
                    <FormField
                      control={form.control}
                      name="climateData.maxTemp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Maximum Temperature (°C)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.1"
                              placeholder="e.g., 32.5"
                              {...field}
                              onChange={(e) => field.onChange(Number.parseFloat(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="climateData.minTemp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Minimum Temperature (°C)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.1"
                              placeholder="e.g., 18.2"
                              {...field}
                              onChange={(e) => field.onChange(Number.parseFloat(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="climateData.avgTemp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Average Temperature (°C)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.1"
                              placeholder="e.g., 25.7"
                              {...field}
                              onChange={(e) => field.onChange(Number.parseFloat(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-3">
                    <FormField
                      control={form.control}
                      name="climateData.rainfall"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Rainfall Amount (mm)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.1"
                              placeholder="e.g., 25.5"
                              {...field}
                              onChange={(e) => field.onChange(Number.parseFloat(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="climateData.humidity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Relative Humidity (%)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="e.g., 65"
                              {...field}
                              onChange={(e) => field.onChange(Number.parseFloat(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="climateData.windSpeed"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Wind Speed (km/h)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.1"
                              placeholder="e.g., 12.5"
                              {...field}
                              onChange={(e) => field.onChange(Number.parseFloat(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-1">
                    <FormField
                      control={form.control}
                      name="climateData.windDirection"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Wind Direction</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select direction" />
                              </SelectTrigger>
                            </FormControl>
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
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <FormLabel>Photos</FormLabel>
                <FormDescription>Upload photos of the collection site (optional)</FormDescription>
                <div className="mt-2">
                  <div className="flex items-center gap-4">
                    <label className="flex h-32 w-32 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 hover:bg-gray-50">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="mb-1 h-6 w-6 text-gray-400" />
                        <p className="text-xs text-gray-500">Upload</p>
                      </div>
                      <input type="file" className="hidden" accept="image/*" multiple onChange={handlePhotoUpload} />
                    </label>

                    {uploadedPhotos.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {uploadedPhotos.map((photo, index) => (
                          <div key={index} className="relative h-32 w-32">
                            <img
                              src={photo || "/placeholder.svg"}
                              alt={`Uploaded ${index + 1}`}
                              className="h-full w-full rounded-lg object-cover"
                            />
                            <button
                              type="button"
                              className="absolute right-1 top-1 rounded-full bg-black/50 p-1 text-white hover:bg-black/70"
                              onClick={() => removePhoto(index)}
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Notes</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter any additional observations or notes"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sendAlerts"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Send Alerts</FormLabel>
                      <FormDescription>Send alerts if measurements exceed critical thresholds</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline">
            Save as Draft
          </Button>
          <FancyButton type="submit" disabled={isSubmitting} gradient>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit Data
          </FancyButton>
        </div>
      </form>
    </Form>
  )
}
