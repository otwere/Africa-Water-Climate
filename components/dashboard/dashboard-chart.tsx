"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    month: "Jan",
    northRegion: 45,
    eastRegion: 55,
    southRegion: 75,
    westRegion: 32,
  },
  {
    month: "Feb",
    northRegion: 52,
    eastRegion: 48,
    southRegion: 70,
    westRegion: 36,
  },
  {
    month: "Mar",
    northRegion: 49,
    eastRegion: 52,
    southRegion: 65,
    westRegion: 40,
  },
  {
    month: "Apr",
    northRegion: 62,
    eastRegion: 58,
    southRegion: 68,
    westRegion: 45,
  },
  {
    month: "May",
    northRegion: 55,
    eastRegion: 62,
    southRegion: 72,
    westRegion: 48,
  },
  {
    month: "Jun",
    northRegion: 71,
    eastRegion: 70,
    southRegion: 78,
    westRegion: 52,
  },
  {
    month: "Jul",
    northRegion: 58,
    eastRegion: 66,
    southRegion: 82,
    westRegion: 49,
  },
  {
    month: "Aug",
    northRegion: 67,
    eastRegion: 72,
    southRegion: 86,
    westRegion: 55,
  },
  {
    month: "Sep",
    northRegion: 60,
    eastRegion: 68,
    southRegion: 80,
    westRegion: 58,
  },
  {
    month: "Oct",
    northRegion: 73,
    eastRegion: 75,
    southRegion: 76,
    westRegion: 62,
  },
  {
    month: "Nov",
    northRegion: 65,
    eastRegion: 70,
    southRegion: 72,
    westRegion: 56,
  },
  {
    month: "Dec",
    northRegion: 67,
    eastRegion: 63,
    southRegion: 70,
    westRegion: 50,
  },
]

export function DashboardChart() {
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
        <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="northRegion"
          stroke="#3b82f6"
          strokeWidth={2}
          activeDot={{
            r: 6,
            style: { fill: "#3b82f6", opacity: 0.25 },
          }}
        />
        <Line
          type="monotone"
          dataKey="eastRegion"
          stroke="#16a34a"
          strokeWidth={2}
          activeDot={{
            r: 6,
            style: { fill: "#16a34a", opacity: 0.25 },
          }}
        />
        <Line
          type="monotone"
          dataKey="southRegion"
          stroke="#eab308"
          strokeWidth={2}
          activeDot={{
            r: 6,
            style: { fill: "#eab308", opacity: 0.25 },
          }}
        />
        <Line
          type="monotone"
          dataKey="westRegion"
          stroke="#ef4444"
          strokeWidth={2}
          activeDot={{
            r: 6,
            style: { fill: "#ef4444", opacity: 0.25 },
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
