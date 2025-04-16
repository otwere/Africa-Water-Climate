"use client";;
import {
  BarChart3,
  CloudRain,
  Database,
  FileSpreadsheet,
  LineChart,
  MapPin,
  Share2,
  ShieldCheck,
  Users,
} from "lucide-react"
import { motion } from "framer-motion"

export function FeatureHighlights() {
  const features = [
    {
      icon: <Database className="h-10 w-10 text-blue-500" />,
      title: "Centralized Data Repository",
      description: "Store and access all water and climate data in one secure location",
    },
    {
      icon: <FileSpreadsheet className="h-10 w-10 text-green-500" />,
      title: "Standardized Data Collection",
      description: "Consistent forms and protocols for high-quality data gathering",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-purple-500" />,
      title: "Advanced Analytics",
      description: "AI-powered insights and trend analysis for informed decision making",
    },
    {
      icon: <CloudRain className="h-10 w-10 text-blue-400" />,
      title: "Climate Modeling",
      description: "Predictive forecasting of rainfall patterns and drought conditions",
    },
    {
      icon: <MapPin className="h-10 w-10 text-red-500" />,
      title: "Geospatial Mapping",
      description: "Visualize water resources and infrastructure across regions",
    },
    {
      icon: <Users className="h-10 w-10 text-amber-500" />,
      title: "Role-Based Access",
      description: "Secure, permission-based system for different stakeholders",
    },
    {
      icon: <LineChart className="h-10 w-10 text-emerald-500" />,
      title: "Real-time Monitoring",
      description: "Live tracking of key water metrics and climate indicators",
    },
    {
      icon: <Share2 className="h-10 w-10 text-indigo-500" />,
      title: "Collaboration Tools",
      description: "Share insights and coordinate responses across organizations",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-slate-500" />,
      title: "Data Security",
      description: "Enterprise-grade protection for sensitive environmental data",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center rounded-2xl border bg-white/70 dark:bg-black/40 backdrop-blur-sm p-6 text-center shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
          variants={item}
        >
          <div className="mb-4 rounded-full bg-muted p-3">{feature.icon}</div>
          <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
