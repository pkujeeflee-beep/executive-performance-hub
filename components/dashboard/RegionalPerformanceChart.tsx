"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { ChartCard } from "@/components/shared/ChartCard";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { chartColors, statusLabels } from "@/lib/constants";
import { formatCurrencyMillions, formatPercent } from "@/lib/formatters";
import type { RegionalPerformance } from "@/types/dashboard";

export function RegionalPerformanceChart({ data }: { data: RegionalPerformance[] }) {
  const sortedData = [...data].sort((a, b) => b.revenue - a.revenue);

  return (
    <ChartCard
      title="Regional Performance"
      description="Revenue contribution and growth by region."
      className="xl:col-span-6"
    >
      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={sortedData} layout="vertical" margin={{ left: 12, right: 24 }}>
            <CartesianGrid stroke={chartColors.grid} horizontal={false} />
            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
              tick={{ fill: chartColors.text, fontSize: 12 }}
              tickFormatter={(value) => `$${value}M`}
            />
            <YAxis
              type="category"
              dataKey="regionName"
              width={104}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#334155", fontSize: 12 }}
            />
            <Tooltip
              formatter={(value: number, name: string) => [
                name === "revenue" ? formatCurrencyMillions(value) : value,
                name
              ]}
              contentStyle={{ borderRadius: 8, borderColor: "#E5E7EB" }}
            />
            <Bar dataKey="revenue" radius={[0, 6, 6, 0]} barSize={24} isAnimationActive={false}>
              {sortedData.map((entry) => (
                <Cell
                  key={entry.regionName}
                  fill={entry.status === "risk" ? chartColors.risk : entry.status === "attention" ? chartColors.warning : chartColors.actual}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 divide-y divide-border border-t border-border">
        {sortedData.map((region) => (
          <div key={region.regionName} className="flex items-center justify-between gap-3 py-3">
            <div>
              <p className="text-sm font-medium text-slate-900">{region.regionName}</p>
              <p className="text-xs text-slate-500">
                Growth {formatPercent(region.growthRate)} · Target {region.targetAchievement}%
              </p>
            </div>
            <StatusBadge status={region.status} label={statusLabels[region.status]} />
          </div>
        ))}
      </div>
    </ChartCard>
  );
}
