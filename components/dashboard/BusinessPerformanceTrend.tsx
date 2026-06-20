"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { ChartCard } from "@/components/shared/ChartCard";
import { Badge } from "@/components/ui/badge";
import { chartColors } from "@/lib/constants";
import { formatCurrencyMillions } from "@/lib/formatters";
import type { PerformanceTrendPoint } from "@/types/dashboard";

export function BusinessPerformanceTrend({ data }: { data: PerformanceTrendPoint[] }) {
  const bestMonth = data.reduce((best, item) =>
    item.actualPerformance > best.actualPerformance ? item : best
  );
  const largestVariance = data.reduce((largest, item) =>
    Math.abs(item.varianceToTarget) > Math.abs(largest.varianceToTarget) ? item : largest
  );
  const currentRunRate = data[data.length - 1]?.actualPerformance ?? 0;

  return (
    <ChartCard
      title="Business Performance Trend"
      description="Actual performance compared with forecast and target."
      className="xl:order-1 xl:col-span-8"
      action={<Badge variant="neutral">Jan-Jun</Badge>}
    >
      <div className="h-[340px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ left: 0, right: 20, top: 10, bottom: 0 }}>
            <CartesianGrid stroke={chartColors.grid} strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: chartColors.text, fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: chartColors.text, fontSize: 12 }}
              tickFormatter={(value) => `$${value}M`}
            />
            <Tooltip
              formatter={(value: number, name: string) => [formatCurrencyMillions(value), name]}
              labelClassName="font-medium text-slate-900"
              contentStyle={{
                borderRadius: 8,
                borderColor: "#E5E7EB",
                boxShadow: "0 12px 28px rgba(15, 23, 42, 0.08)"
              }}
            />
            <Line
              type="monotone"
              dataKey="actualPerformance"
              name="Actual Performance"
              stroke={chartColors.actual}
              strokeWidth={3}
              dot={{ r: 4 }}
              isAnimationActive={false}
            />
            <Line
              type="monotone"
              dataKey="forecast"
              name="Forecast"
              stroke={chartColors.forecast}
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              isAnimationActive={false}
            />
            <Line
              type="monotone"
              dataKey="target"
              name="Target"
              stroke={chartColors.target}
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid gap-3 border-t border-border pt-4 sm:grid-cols-3">
        <TrendStat label="Best month" value={bestMonth.month} detail={formatCurrencyMillions(bestMonth.actualPerformance)} />
        <TrendStat label="Largest variance" value={largestVariance.month} detail={formatCurrencyMillions(largestVariance.varianceToTarget)} />
        <TrendStat label="Current run rate" value={formatCurrencyMillions(currentRunRate)} detail="June actual" />
      </div>
    </ChartCard>
  );
}

function TrendStat({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase leading-4 text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold leading-5 tabular-nums text-slate-950">{value}</p>
      <p className="text-xs leading-4 text-slate-500">{detail}</p>
    </div>
  );
}
