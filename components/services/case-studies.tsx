"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function CaseStudies() {
  const caseStudies = [
    {
      title: "Lake Victoria Basin Water Quality Monitoring",
      description:
        "Implemented a comprehensive water quality monitoring network across the Lake Victoria Basin, spanning Kenya, Uganda, and Tanzania.",
      image: "/placeholder.svg?height=400&width=600&text=Lake+Victoria+Case+Study",
      category: "Water Monitoring",
      results: [
        "50+ monitoring stations deployed",
        "Real-time data accessible to 3 countries",
        "30% improvement in pollution response time",
        "Informed policy changes in transboundary water management",
      ],
      link: "#",
    },
    {
      title: "Drought Early Warning System in the Horn of Africa",
      description:
        "Developed an integrated drought early warning system combining satellite data, ground measurements, and predictive modeling for Ethiopia and Somalia.",
      image: "/placeholder.svg?height=400&width=600&text=Drought+Warning+System",
      category: "Climate Resilience",
      results: [
        "3-month advance drought predictions",
        "Benefiting 2.5 million people across drought-prone regions",
        "Integrated with national disaster response systems",
        "45% improvement in humanitarian response preparation time",
      ],
      link: "#",
    },
    {
      title: "Urban Water Management in Dakar",
      description:
        "Partnered with Senegal's water utility to optimize urban water distribution and reduce losses in the greater Dakar metropolitan area.",
      image: "/placeholder.svg?height=400&width=600&text=Dakar+Water+Management",
      category: "Urban Solutions",
      results: [
        "Water loss reduction from 32% to 18%",
        "Digital monitoring of 85% of the distribution network",
        "15% increase in service reliability",
        "Data-driven investment planning for infrastructure upgrades",
      ],
      link: "#",
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
          <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
          <p className="text-lg text-muted-foreground">
            Explore how our services have helped organizations across Africa address critical water and climate
            challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <Badge variant="outline" className="mb-2">
                {study.category}
              </Badge>
              <h3 className="text-xl font-bold mb-2">{study.title}</h3>
              <p className="text-muted-foreground mb-4">{study.description}</p>

              <div className="mb-6">
                <h4 className="font-medium mb-2">Key Results:</h4>
                <ul className="space-y-1">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-green-500" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={study.link}>
                <Button variant="outline" className="group-hover:bg-blue-50 dark:group-hover:bg-blue-950">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
