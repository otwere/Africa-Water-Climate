"use client"

import { motion } from "framer-motion"

export function PartnerLogos() {
  const partners = [
    { name: "UN Environment", logo: "/placeholder.svg?height=40&width=120&text=UN+Environment" },
    { name: "African Development Bank", logo: "/placeholder.svg?height=40&width=120&text=AfDB" },
    { name: "World Bank", logo: "/placeholder.svg?height=40&width=120&text=World+Bank" },
    { name: "USAID", logo: "/placeholder.svg?height=40&width=120&text=USAID" },
    { name: "Water Aid", logo: "/placeholder.svg?height=40&width=120&text=Water+Aid" },
    { name: "African Union", logo: "/placeholder.svg?height=40&width=120&text=AU" },
  ]

  return (
    <section className="py-12 border-b">
      <div className="container">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-muted-foreground">TRUSTED BY LEADING ORGANIZATIONS</p>
        </div>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {partners.map((partner, index) => (
            <div key={index} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="h-10 w-auto object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
