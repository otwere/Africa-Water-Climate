"use client"

import { motion } from "framer-motion"
import { BarChart3, CloudRain, Database, FileSpreadsheet, Globe, LineChart, MapPin, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export function ServicesList() {
  const [activeTab, setActiveTab] = useState("data")

  const services = {
    data: [
      {
        icon: <Database className="h-10 w-10 text-blue-500" />,
        title: "Water Resource Monitoring",
        description:
          "Comprehensive monitoring of surface and groundwater resources using state-of-the-art sensors and satellite data.",
        features: [
          "Real-time water level monitoring",
          "Water quality assessment",
          "Groundwater monitoring networks",
          "Satellite-based water body tracking",
        ],
      },
      {
        icon: <FileSpreadsheet className="h-10 w-10 text-green-500" />,
        title: "Data Collection & Management",
        description:
          "Standardized protocols for collecting, validating, and managing water and climate data across diverse environments.",
        features: [
          "Mobile data collection tools",
          "Quality assurance protocols",
          "Historical data digitization",
          "Secure cloud storage solutions",
        ],
      },
      {
        icon: <CloudRain className="h-10 w-10 text-cyan-500" />,
        title: "Climate Data Services",
        description:
          "Collection and analysis of climate data to understand patterns, trends, and impacts on water resources.",
        features: [
          "Weather station networks",
          "Precipitation monitoring",
          "Temperature trend analysis",
          "Extreme weather event tracking",
        ],
      },
    ],
    analytics: [
      {
        icon: <BarChart3 className="h-10 w-10 text-purple-500" />,
        title: "Advanced Analytics",
        description:
          "Transform raw data into actionable insights using statistical analysis, machine learning, and AI.",
        features: [
          "Trend analysis and forecasting",
          "Anomaly detection",
          "Risk assessment modeling",
          "Scenario planning tools",
        ],
      },
      {
        icon: <LineChart className="h-10 w-10 text-indigo-500" />,
        title: "Climate Modeling",
        description: "Develop and apply climate models to predict future conditions and inform adaptation strategies.",
        features: [
          "Downscaled climate projections",
          "Drought prediction systems",
          "Flood risk modeling",
          "Climate change impact assessment",
        ],
      },
      {
        icon: <MapPin className="h-10 w-10 text-red-500" />,
        title: "Geospatial Analysis",
        description: "Visualize and analyze spatial patterns in water resources and climate data across Africa.",
        features: [
          "GIS mapping services",
          "Remote sensing analysis",
          "Watershed delineation",
          "Spatial vulnerability assessment",
        ],
      },
    ],
    consulting: [
      {
        icon: <Users className="h-10 w-10 text-amber-500" />,
        title: "Policy Advisory",
        description: "Evidence-based guidance for governments and organizations on water resource management policies.",
        features: [
          "Policy development support",
          "Regulatory framework assessment",
          "Transboundary water governance",
          "Climate adaptation policy",
        ],
      },
      {
        icon: <Globe className="h-10 w-10 text-emerald-500" />,
        title: "Capacity Building",
        description: "Training and knowledge transfer to build local expertise in water and climate data management.",
        features: [
          "Technical training programs",
          "Institutional capacity assessment",
          "Knowledge exchange platforms",
          "Educational resources development",
        ],
      },
      {
        icon: <Database className="h-10 w-10 text-blue-500" />,
        title: "Project Design & Implementation",
        description: "End-to-end support for water and climate projects, from concept to execution and evaluation.",
        features: [
          "Project feasibility studies",
          "Implementation planning",
          "Monitoring and evaluation",
          "Impact assessment",
        ],
      },
    ],
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Service Offerings</h2>
          <p className="text-lg text-muted-foreground">
            We provide a comprehensive suite of services to address the complex challenges of water resource management
            in the context of climate change across Africa.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="data">Data Services</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="consulting">Consulting</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(services).map(([key, serviceList]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceList.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <div className="mb-4">{service.icon}</div>
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
