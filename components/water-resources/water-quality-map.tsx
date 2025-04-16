"use client"

import { useEffect, useRef } from "react"

interface WaterQualityMapProps {
  parameter: string
}

export function WaterQualityMap({ parameter }: WaterQualityMapProps) {
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

    // Define colors based on parameter
    let colorScale: { threshold: number; color: string }[] = []
    let parameterName = ""
    let unit = ""

    switch (parameter) {
      case "ph":
        colorScale = [
          { threshold: 6.0, color: "#ef4444" }, // Red - acidic
          { threshold: 6.5, color: "#f97316" }, // Orange
          { threshold: 7.0, color: "#22c55e" }, // Green - neutral
          { threshold: 7.5, color: "#f97316" }, // Orange
          { threshold: 8.0, color: "#ef4444" }, // Red - alkaline
        ]
        parameterName = "pH Level"
        unit = ""
        break
      case "turbidity":
        colorScale = [
          { threshold: 1.0, color: "#22c55e" }, // Green - very clear
          { threshold: 5.0, color: "#eab308" }, // Yellow
          { threshold: 10.0, color: "#f97316" }, // Orange
          { threshold: 20.0, color: "#ef4444" }, // Red - very turbid
        ]
        parameterName = "Turbidity"
        unit = "NTU"
        break
      case "dissolvedOxygen":
        colorScale = [
          { threshold: 4.0, color: "#ef4444" }, // Red - very low
          { threshold: 6.0, color: "#f97316" }, // Orange
          { threshold: 8.0, color: "#eab308" }, // Yellow
          { threshold: 10.0, color: "#22c55e" }, // Green - high
        ]
        parameterName = "Dissolved Oxygen"
        unit = "mg/L"
        break
      case "conductivity":
        colorScale = [
          { threshold: 200, color: "#22c55e" }, // Green - low
          { threshold: 400, color: "#eab308" }, // Yellow
          { threshold: 600, color: "#f97316" }, // Orange
          { threshold: 800, color: "#ef4444" }, // Red - high
        ]
        parameterName = "Conductivity"
        unit = "μS/cm"
        break
      case "tds":
        colorScale = [
          { threshold: 100, color: "#22c55e" }, // Green - low
          { threshold: 200, color: "#eab308" }, // Yellow
          { threshold: 300, color: "#f97316" }, // Orange
          { threshold: 400, color: "#ef4444" }, // Red - high
        ]
        parameterName = "Total Dissolved Solids"
        unit = "mg/L"
        break
      default:
        colorScale = [
          { threshold: 0, color: "#22c55e" },
          { threshold: 50, color: "#eab308" },
          { threshold: 75, color: "#f97316" },
          { threshold: 100, color: "#ef4444" },
        ]
    }

    // Sample data points for water quality monitoring stations
    const stations = [
      {
        name: "Lake Victoria",
        x: canvas.width * 0.6,
        y: canvas.height * 0.4,
        value:
          parameter === "ph"
            ? 7.2
            : parameter === "turbidity"
              ? 5.3
              : parameter === "dissolvedOxygen"
                ? 8.5
                : parameter === "conductivity"
                  ? 350
                  : 180,
      },
      {
        name: "Nile Basin",
        x: canvas.width * 0.55,
        y: canvas.height * 0.25,
        value:
          parameter === "ph"
            ? 6.8
            : parameter === "turbidity"
              ? 8.7
              : parameter === "dissolvedOxygen"
                ? 7.2
                : parameter === "conductivity"
                  ? 420
                  : 210,
      },
      {
        name: "Congo River",
        x: canvas.width * 0.45,
        y: canvas.height * 0.5,
        value:
          parameter === "ph"
            ? 7.5
            : parameter === "turbidity"
              ? 3.2
              : parameter === "dissolvedOxygen"
                ? 9.1
                : parameter === "conductivity"
                  ? 280
                  : 140,
      },
      {
        name: "Niger Delta",
        x: canvas.width * 0.3,
        y: canvas.height * 0.45,
        value:
          parameter === "ph"
            ? 6.5
            : parameter === "turbidity"
              ? 12.4
              : parameter === "dissolvedOxygen"
                ? 6.8
                : parameter === "conductivity"
                  ? 520
                  : 260,
      },
      {
        name: "Zambezi River",
        x: canvas.width * 0.55,
        y: canvas.height * 0.7,
        value:
          parameter === "ph"
            ? 7.1
            : parameter === "turbidity"
              ? 4.8
              : parameter === "dissolvedOxygen"
                ? 8.3
                : parameter === "conductivity"
                  ? 310
                  : 155,
      },
      {
        name: "Lake Chad",
        x: canvas.width * 0.45,
        y: canvas.height * 0.3,
        value:
          parameter === "ph"
            ? 7.3
            : parameter === "turbidity"
              ? 6.5
              : parameter === "dissolvedOxygen"
                ? 7.8
                : parameter === "conductivity"
                  ? 380
                  : 190,
      },
      {
        name: "Orange River",
        x: canvas.width * 0.45,
        y: canvas.height * 0.8,
        value:
          parameter === "ph"
            ? 6.9
            : parameter === "turbidity"
              ? 7.2
              : parameter === "dissolvedOxygen"
                ? 8.0
                : parameter === "conductivity"
                  ? 340
                  : 170,
      },
    ]

    // Draw stations
    stations.forEach((station) => {
      // Determine color based on value and color scale
      let color = colorScale[0].color
      for (let i = 0; i < colorScale.length; i++) {
        if (station.value <= colorScale[i].threshold) {
          color = colorScale[i].color
          break
        }
        if (i === colorScale.length - 1) {
          color = colorScale[i].color
        }
      }

      // Special case for pH which has an optimal range
      if (parameter === "ph") {
        if (station.value >= 6.5 && station.value <= 7.5) {
          color = "#22c55e" // Green for optimal pH
        } else if (station.value < 6.0 || station.value > 8.0) {
          color = "#ef4444" // Red for very acidic or very alkaline
        } else {
          color = "#f97316" // Orange for slightly off
        }
      }

      // Draw circle
      ctx.beginPath()
      ctx.arc(station.x, station.y, 12, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.globalAlpha = 0.7
      ctx.fill()
      ctx.globalAlpha = 1
      ctx.strokeStyle = "#fff"
      ctx.lineWidth = 1
      ctx.stroke()

      // Draw label
      ctx.font = "10px sans-serif"
      ctx.fillStyle = "#000"
      ctx.textAlign = "center"
      ctx.fillText(`${station.value}${unit}`, station.x, station.y + 4)

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
    ctx.fillText(`${parameterName} ${unit}`, 20, 30)

    colorScale.forEach((item, index) => {
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
        ctx.fillText(`< ${item.threshold}${unit}`, 45, y)
      } else {
        ctx.fillText(`< ${item.threshold}${unit}`, 45, y)
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
  }, [parameter])

  return (
    <div className="relative h-full w-full">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}
