"use client"

import { Quote } from "lucide-react"
import { motion } from "framer-motion"

export function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "This platform has transformed how we monitor water resources. The predictive analytics have helped us prevent water shortages in three communities.",
      author: "Dr. Joseph Mensah",
      role: "Water Resources Director, Ghana",
      avatar: "/placeholder.svg?height=48&width=48&text=JD",
    },
    {
      quote:
        "The collaborative tools have enabled unprecedented cooperation between our ministry and NGOs working in drought-affected regions.",
      author: "Prof. Amina Osman",
      role: "Environmental Minister, Kenya",
      avatar: "/placeholder.svg?height=48&width=48&text=AM",
    },
    {
      quote:
        "The data collection tools have standardized how we gather information, improving the quality and reliability of our climate models.",
      author: "Dr. Robert Ndlovu",
      role: "Climate Scientist, South Africa",
      avatar: "/placeholder.svg?height=48&width=48&text=RN",
    },
  ]

  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Trusted by Organizations Across Africa
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            See how our platform is helping address water and climate challenges
          </motion.p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur-sm p-6 shadow-sm border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Quote className="h-8 w-8 text-blue-300" />
              <p className="mt-4 text-muted-foreground">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt="User avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
