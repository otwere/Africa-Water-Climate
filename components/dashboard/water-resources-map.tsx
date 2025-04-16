"use client"

import { useEffect, useRef } from "react"

export function WaterResourcesMap() {
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

    // Draw water stress indicators
    const regions = [
      { x: canvas.width * 0.45, y: canvas.height * 0.2, radius: 15, color: "#ef4444", label: "High" }, // North
      { x: canvas.width * 0.6, y: canvas.height * 0.4, radius: 12, color: "#f97316", label: "Medium" }, // East
      { x: canvas.width * 0.5, y: canvas.height * 0.6, radius: 10, color: "#eab308", label: "Low" }, // Central
      { x: canvas.width * 0.3, y: canvas.height * 0.5, radius: 14, color: "#ef4444", label: "High" }, // West
      { x: canvas.width * 0.5, y: canvas.height * 0.8, radius: 8, color: "#22c55e", label: "Very Low" }, // South
    ]

    regions.forEach((region) => {
      // Draw circle
      ctx.beginPath()
      ctx.arc(region.x, region.y, region.radius, 0, Math.PI * 2)
      ctx.fillStyle = region.color
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
      ctx.fillText(region.label, region.x, region.y + region.radius + 12)
    })

    // Add legend
    const legendItems = [
      { color: "#ef4444", label: "High Stress" },
      { color: "#f97316", label: "Medium Stress" },
      { color: "#eab308", label: "Low Stress" },
      { color: "#22c55e", label: "Very Low Stress" },
    ]

    const legendX = canvas.width * 0.05
    const legendY = canvas.height * 0.05

    legendItems.forEach((item, index) => {
      const y = legendY + index * 20

      // Draw color box
      ctx.fillStyle = item.color
      ctx.fillRect(legendX, y, 12, 12)
      ctx.strokeStyle = "#fff"
      ctx.strokeRect(legendX, y, 12, 12)

      // Draw label
      ctx.font = "12px sans-serif"
      ctx.fillStyle = "#000"
      ctx.textAlign = "left"
      ctx.fillText(item.label, legendX + 20, y + 10)
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
