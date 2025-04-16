"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30 -z-10" />

      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern
              id="water-pattern"
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
              patternTransform="rotate(45)"
            >
              <rect width="100%" height="100%" fill="none" />
              <path
                d="M0 20 Q10 0 20 20 T40 20"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-blue-300 dark:text-blue-700"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#water-pattern)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Africa Water & Climate
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pioneering data-driven solutions for sustainable water resource management across the African continent
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span>Founded in 2015</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
              <span>25+ African Countries</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
              <div className="h-3 w-3 rounded-full bg-amber-500"></div>
              <span>100+ Research Projects</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
