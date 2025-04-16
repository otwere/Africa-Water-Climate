"use client"

import { motion } from "framer-motion"
import { DropletIcon, Globe, LineChart, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function MissionVision() {
  const values = [
    {
      icon: <DropletIcon className="h-8 w-8 text-blue-500" />,
      title: "Water Security",
      description: "Ensuring sustainable access to safe water for all communities across Africa",
    },
    {
      icon: <LineChart className="h-8 w-8 text-green-500" />,
      title: "Data-Driven Decisions",
      description: "Empowering stakeholders with accurate, timely information for effective resource management",
    },
    {
      icon: <Globe className="h-8 w-8 text-amber-500" />,
      title: "Climate Resilience",
      description: "Building adaptive capacity to address changing climate patterns and extreme weather events",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-purple-500" />,
      title: "Collaborative Action",
      description: "Fostering partnerships across sectors and borders for integrated water solutions",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              To transform water resource management across Africa through comprehensive data collection, advanced
              analytics, and collaborative knowledge sharing that empowers communities, governments, and organizations
              to make informed decisions in the face of climate change.
            </p>
            <p className="text-lg text-muted-foreground">
              We work at the intersection of technology, environmental science, and community engagement to create
              sustainable solutions that address Africa's unique water challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-muted-foreground mb-6">
              An Africa where water resources are equitably managed, climate resilience is strengthened, and data-driven
              approaches lead to sustainable development and improved quality of life for all.
            </p>
            <p className="text-lg text-muted-foreground">
              We envision a continent where technology and traditional knowledge work in harmony to protect precious
              water resources for current and future generations.
            </p>
          </motion.div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-2">{value.icon}</div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
