"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function BackgroundDecoration() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-gradient-pattern" />

      <motion.div
        className="bg-blob bg-blob-1"
        animate={{
          x: scrollY * 0.05,
          y: scrollY * -0.03,
        }}
        transition={{ type: "spring", stiffness: 10 }}
      />

      <motion.div
        className="bg-blob bg-blob-2"
        animate={{
          x: scrollY * -0.04,
          y: scrollY * 0.02,
        }}
        transition={{ type: "spring", stiffness: 8 }}
      />

      <motion.div
        className="bg-blob bg-blob-3"
        animate={{
          x: scrollY * -0.02,
          y: scrollY * -0.01,
        }}
        transition={{ type: "spring", stiffness: 12 }}
      />

      <div className="bg-curve" />
    </div>
  )
}
