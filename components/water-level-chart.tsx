"use client"

import { Line, LineChart, ResponsiveContainer } from "recharts"

const data = [
  {
    water: 45,
  },
  {
    water: 52,
  },
  {
    water: 49,
  },
  {
    water: 62,
  },
  {
    water: 55,
  },
  {
    water: 71,
  },
  {
    water: 58,
  },
  {
    water: 67,
  },
  {
    water: 60,
  },
  {
    water: 73,
  },
  {
    water: 65,
  },
  {
    water: 67,
  },
]

export function WaterLevelChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
        <Line
          type="monotone"
          strokeWidth={2}
          dataKey="water"
          activeDot={{
            r: 6,
            style: { fill: "var(--theme-primary)", opacity: 0.25 },
          }}
          style={{
            stroke: "var(--theme-primary)",
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
