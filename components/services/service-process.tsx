"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, ClipboardCheck, FileSearch, MessageSquare, Settings, Users } from "lucide-react"

export function ServiceProcess() {
  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
      title: "Initial Consultation",
      description:
        "We begin with a thorough discussion of your needs, challenges, and objectives to understand your specific context.",
    },
    {
      icon: <FileSearch className="h-8 w-8 text-green-500" />,
      title: "Assessment & Analysis",
      description:
        "Our experts conduct a comprehensive assessment of your current situation, data availability, and resource requirements.",
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-amber-500" />,
      title: "Solution Design",
      description:
        "We develop a tailored solution that addresses your specific challenges and aligns with your organizational capabilities.",
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-500" />,
      title: "Implementation",
      description:
        "Our team works closely with yours to implement the solution, ensuring smooth integration with existing systems.",
    },
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: "Training & Capacity Building",
      description:
        "We provide comprehensive training to ensure your team can effectively utilize and maintain the implemented solutions.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-cyan-500" />,
      title: "Ongoing Support",
      description:
        "We offer continued technical support, updates, and optimization to ensure long-term success and sustainability.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Service Process</h2>
          <p className="text-lg text-muted-foreground">
            We follow a structured, collaborative approach to ensure that our services deliver maximum value and
            sustainable impact for your organization.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center"
              >
                <div className={`md:flex ${index % 2 === 0 ? "md:justify-end" : "md:order-2"}`}>
                  <div className="flex md:block">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-500 text-blue-500 z-10 relative">
                      {step.icon}
                    </div>
                    <div className="ml-6 md:ml-0 md:text-center md:mt-4">
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="mt-2 text-muted-foreground max-w-xs">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-20 transform -translate-x-1/2 hidden md:block">
                    <ArrowRight className="h-8 w-8 text-blue-500 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
