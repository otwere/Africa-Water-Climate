"use client"

import { motion } from "framer-motion"
import { Award, BarChart3, CloudRain, Database, FileText, Globe, Landmark, Users } from "lucide-react"

export function Timeline() {
  const milestones = [
    {
      year: "2015",
      title: "Foundation",
      description:
        "Africa Water & Climate platform established with initial funding from the African Development Bank and UN Environment Programme.",
      icon: <Landmark className="h-6 w-6" />,
      color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
    },
    {
      year: "2016",
      title: "First Data Collection Network",
      description: "Launched our first network of water monitoring stations across five countries in East Africa.",
      icon: <Database className="h-6 w-6" />,
      color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
    },
    {
      year: "2017",
      title: "Climate Research Initiative",
      description: "Began collaborative research on climate change impacts on water resources in the Sahel region.",
      icon: <CloudRain className="h-6 w-6" />,
      color: "bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200",
    },
    {
      year: "2018",
      title: "Data Platform Launch",
      description:
        "Released the first version of our integrated water and climate data platform, accessible to researchers and policymakers.",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
    },
    {
      year: "2019",
      title: "Pan-African Expansion",
      description:
        "Extended operations to 15 countries across all regions of Africa, with new partnerships in West and Southern Africa.",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200",
    },
    {
      year: "2020",
      title: "Community Engagement Program",
      description: "Launched initiatives to involve local communities in water monitoring and conservation efforts.",
      icon: <Users className="h-6 w-6" />,
      color: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
    },
    {
      year: "2021",
      title: "Major Research Publication",
      description:
        "Published groundbreaking research on climate change impacts on African water resources in Nature Climate Change.",
      icon: <FileText className="h-6 w-6" />,
      color: "bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200",
    },
    {
      year: "2023",
      title: "UN Recognition",
      description: "Received United Nations award for innovation in climate adaptation and water resource management.",
      icon: <Award className="h-6 w-6" />,
      color: "bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200",
    },
  ]

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
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-lg text-muted-foreground">
            Tracing our path from inception to becoming Africa's leading water and climate data platform
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-500 z-10" />

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:pl-0">
                  <div
                    className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium mb-2 ${milestone.color}`}
                  >
                    {milestone.icon}
                    <span className="ml-2">{milestone.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>

                {/* Empty div for layout on alternating sides */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
