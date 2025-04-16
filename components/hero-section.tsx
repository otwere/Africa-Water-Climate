"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { BarChart3, Database, CloudRain } from "lucide-react"
import { BackgroundDecoration } from "@/components/layout/background-decoration"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }
  }, [])

  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/videos/water-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-emerald-900/80" />
      </div>

      {/* Background decoration */}
      <BackgroundDecoration className="absolute inset-0 z-0 opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight flex flex-wrap justify-center lg:justify-start">
              Africa&apos;s Premier{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-emerald-300 ml-2">
                Water & Climate
              </span>{" "}
              Data Platform
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0">
              Empowering sustainable water resource management across Africa with comprehensive data, advanced
              analytics, and climate insights for a water-secure future.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* <Link href="/register">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-water-blue-500 to-earth-green-500 hover:from-water-blue-600 hover:to-earth-green-600 text-white font-medium px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link> */}
              {/* <Link href="/dashboard/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 font-medium px-8 py-6 rounded-lg backdrop-blur-sm transition-all duration-300 text-lg"
                >
                  View Demo
                </Button>
              </Link> */}
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                { icon: Database, text: "500+ Water Sources", color: "from-blue-400 to-blue-600" },
                { icon: CloudRain, text: "50+ Years of Climate Data", color: "from-emerald-400 to-emerald-600" },
                { icon: BarChart3, text: "Real-time Analytics", color: "from-cyan-400 to-cyan-600" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm"
                >
                  <div className={`p-3 rounded-full bg-gradient-to-r ${item.color}`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="mt-2 text-sm font-medium text-white text-center">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative mt-10">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-500 opacity-70 blur-lg"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                <img
                  src="/images/dashboard-preview.png"
                  alt=""
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 flex items-center justify-center">
                    <CloudRain className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Rainfall Forecast</p>
                    <p className="text-emerald-300 text-sm">+15% this season</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
                    <Database className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Water Quality</p>
                    <p className="text-blue-300 text-sm">98% safe sources</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
