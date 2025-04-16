"use client"

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const waterAllocationData = [
  { name: "Agriculture", value: 65, color: "#10b981" },
  { name: "Domestic", value: 15, color: "#3b82f6" },
  { name: "Industrial", value: 10, color: "#6366f1" },
  { name: "Energy", value: 5, color: "#f59e0b" },
  { name: "Environmental", value: 3, color: "#8b5cf6" },
  { name: "Other", value: 2, color: "#9ca3af" },
]

export function WaterAllocationChart() {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={waterAllocationData}
            cx="50%"
            cy="50%"
            labelLine={true}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {waterAllocationData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color || "#8884d8"} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
