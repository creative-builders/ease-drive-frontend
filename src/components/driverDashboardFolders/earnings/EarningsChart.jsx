import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useState } from "react";
import { Filter } from "../Filter";

const COLORS = {
  Paid: "#22c55e",      // green-500
  Pending: "#3b82f6",   // blue-500
  Cancelled: "#efd544ff", // yellow-ish
};

// Simple filter function
function filterEarningsByRange(data, range) {
  const today = new Date();

  // ⚡ In your real app, you'd filter by `date`. 
  // For now, we'll just return the same data (mock).
  if (range === "Daily") return data;
  if (range === "Weekly") return data;
  if (range === "Monthly") return data;

  return data;
}

function EarningsChart({ title, data }) {
  const [sortedItems, setSortedItems] = useState(data);

  return (
    <div className="p-4 bg-white rounded-xl shadow w-full h-[263px] ">
      {/* Header */}
      <div className="flex items-center justify-between ">
        <h2 className="lg:text-2xl text-sm font-semibold">{title}</h2>

        <Filter
          options={["Daily", "Weekly", "Monthly"]}
          itemsArray={data}
          title="Trip Type"
          onSort={(selected) => {
            const filtered = filterEarningsByRange(data, selected);
            setSortedItems(filtered);
          }}
        />
      </div>

      {/* Pie Chart */}
      <div className="w-[100%] h-[203px] flex justify-center relative items-center">
        <div className="absolute inset-0 z-0">
          <ResponsiveContainer width="100%" height="100%" className="piechart">
            <PieChart className="relative z-0">
              <Pie
                data={sortedItems}
                cy="50%"
                outerRadius={80}
                dataKey="value"
                labelLine={false}
                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = innerRadius + (outerRadius - innerRadius) / 2;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <text
                      x={x}
                      y={y}
                      fill="white"
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      {(percent * 100).toFixed(0)}%
                    </text>
                  );
                }}
              >
                {sortedItems.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend
                verticalAlign="top"
                align="center"
                iconType="circle"
                className="lg:text-xs text-[8px]"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export function DashboardEarningChart() {
  const chartData = [
    { name: "Paid", value: 32 },
    { name: "Pending", value: 12 },
    { name: "Cancelled", value: 56 },
  ];

  return (
    <div className="lg:w-[495px] lg:h-[263px] w-[380px] -z-1">
      <EarningsChart title="Earnings Analysis" data={chartData} />
    </div>
  );
}
