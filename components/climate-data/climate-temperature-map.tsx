"use client"

import { useEffect, useRef } from "react"

export function ClimateTemperatureMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Draw a simplified Africa map outline
    ctx.beginPath()
    ctx.moveTo(canvas.width * 0.4, canvas.height * 0.1) // North Africa
    ctx.lineTo(canvas.width * 0.6, canvas.height * 0.1) // North Africa
    ctx.lineTo(canvas.width * 0.7, canvas.height * 0.3) // East Africa
    ctx.lineTo(canvas.width * 0.65, canvas.height * 0.7) // Southeast Africa
    ctx.lineTo(canvas.width * 0.5, canvas.height * 0.9) // South Africa
    ctx.lineTo(canvas.width * 0.3, canvas.height * 0.7) // Southwest Africa
    ctx.lineTo(canvas.width * 0.2, canvas.height * 0.4) // West Africa
    ctx.lineTo(canvas.width * 0.4, canvas.height * 0.1) // Back to North Africa
    ctx.strokeStyle = "#3b82f6"
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.fillStyle = "rgba(59, 130, 246, 0.1)"
    ctx.fill()

    // Temperature gradient colors
    const temperatureColors = [
      { temp: 20, color: "#10b981" }, // Cool - green
      { temp: 23, color: "#22d3ee" }, // Cool - cyan
      { temp: 26, color: "#eab308" }, // Moderate - yellow
      { temp: 29, color: "#f97316" }, // Warm - orange
      { temp: 32, color: "#ef4444" }, // Hot - red
    ]

    // Sample data points for temperature monitoring stations
    const stations = [
      { name: "Cairo", x: canvas.width * 0.5, y: canvas.height * 0.15, temp: 31.5 },
      { name: "Nairobi", x: canvas.width * 0.6, y: canvas.height * 0.4, temp: 25.2 },
      { name: "Lagos", x: canvas.width * 0.3, y: canvas.height * 0.4, temp: 28.7 },
      { name: "Kinshasa", x: canvas.width * 0.45, y: canvas.height * 0.5, temp: 27.3 },
      { name: "Cape Town", x: canvas.width * 0.45, y: canvas.height * 0.85, temp: 22.1 },
      { name: "Addis Ababa", x: canvas.width * 0.6, y: canvas.height * 0.3, temp: 24.5 },
      { name: "Dakar", x: canvas.width * 0.2, y: canvas.height * 0.3, temp: 29.8 },
      { name: "Johannesburg", x: canvas.width * 0.5, y: canvas.height * 0.8, temp: 21.3 },
    ]

    // Draw temperature gradient regions (simplified)
    ctx.beginPath()
    ctx.arc(canvas.width * 0.5, canvas.height * 0.15, canvas.width * 0.15, 0, Math.PI * 2)
    ctx.fillStyle = "rgba(239, 68, 68, 0.2)" // Red - hot
    ctx.fill()

    ctx.beginPath()
    ctx.arc(canvas.width * 0.3, canvas.height * 0.4, canvas.width * 0.12, 0, Math.PI * 2)
    ctx.fillStyle = "rgba(249, 115, 22, 0.2)" // Orange - warm
    ctx.fill()

    ctx.beginPath()
    ctx.arc(canvas.width * 0.6, canvas.height * 0.4, canvas.width * 0.12, 0, Math.PI * 2)
    ctx.fillStyle = "rgba(234, 179, 8, 0.2)" // Yellow - moderate
    ctx.fill()

    ctx.beginPath()
    ctx.arc(canvas.width * 0.45, canvas.height * 0.85, canvas.width * 0.12, 0, Math.PI * 2)
    ctx.fillStyle = "rgba(16, 185, 129, 0.2)" // Green - cool
    ctx.fill()

    // Draw stations
    stations.forEach((station) => {
      // Determine color based on temperature
      let color = temperatureColors[0].color
      for (let i = 0; i < temperatureColors.length; i++) {
        if (station.temp >= temperatureColors[i].temp) {
          color = temperatureColors[i].color
        }
      }

      // Draw circle
      ctx.beginPath()
      ctx.arc(station.x, station.y, 10, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.globalAlpha = 0.7
      ctx.fill()
      ctx.globalAlpha = 1
      ctx.strokeStyle = "#fff"
      ctx.lineWidth = 1
      ctx.stroke()

      // Draw temperature
      ctx.font = "10px sans-serif"
      ctx.fillStyle = "#000"
      ctx.textAlign = "center"
      ctx.fillText(`${station.temp}°C`, station.x, station.y + 4)

      // Draw station name
      ctx.font = "12px sans-serif"
      ctx.fillStyle = "#000"
      ctx.textAlign = "center"
      ctx.fillText(station.name, station.x, station.y + 25)
    })

    // Add legend
    ctx.font = "14px sans-serif"
    ctx.fillStyle = "#000"
    ctx.textAlign = "left"
    ctx.fillText("Temperature (°C)", 20, 30)

    temperatureColors.forEach((item, index) => {
      const y = 60 + index * 25

      // Draw color box
      ctx.fillStyle = item.color
      ctx.fillRect(20, y - 10, 15, 15)
      ctx.strokeStyle = "#fff"
      ctx.strokeRect(20, y - 10, 15, 15)

      // Draw label
      ctx.font = "12px sans-serif"
      ctx.fillStyle = "#000"
      ctx.textAlign = "left"
      if (index === 0) {
        ctx.fillText(`< ${item.temp}°C`, 45, y)
      } else {
        ctx.fillText(`≥ ${item.temp}°C`, 45, y)
      }
    })

    // Handle window resize
    const handleResize = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
        // Redraw everything (simplified for this example)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative h-full w-full">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}
