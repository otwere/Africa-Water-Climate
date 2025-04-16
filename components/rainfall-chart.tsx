"use client"

import { Bar, BarChart, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "Jan",
    rainfall: 40,
  },
  {
    name: "Feb",
    rainfall: 65,
  },
  {
    name: "Mar",
    rainfall: 50,
  },
  {
    name: "Apr",
    rainfall: 80,
  },
  {
    name: "May",
    rainfall: 45,
  },
  {
    name: "Jun",
    rainfall: 30,
  },
  {
    name: "Jul",
    rainfall: 25,
  },
  {
    name: "Aug",
    rainfall: 40,
  },
  {
    name: "Sep",
    rainfall: 65,
  },
  {
    name: "Oct",
    rainfall: 70,
  },
  {
    name: "Nov",
    rainfall: 50,
  },
  {
    name: "Dec",
    rainfall: 35,
  },
]

export function RainfallChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <Bar
          dataKey="rainfall"
          style={{
            fill: "var(--theme-primary)",
            opacity: 0.8,
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
