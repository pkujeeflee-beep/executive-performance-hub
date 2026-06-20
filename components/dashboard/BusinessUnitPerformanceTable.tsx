import { ChartCard } from "@/components/shared/ChartCard";
import { ProgressBar } from "@/components/shared/ProgressBar";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { formatCurrencyMillions, formatPercent, formatScore } from "@/lib/formatters";
import type { BusinessUnitPerformance } from "@/types/dashboard";

export function BusinessUnitPerformanceTable({ data }: { data: BusinessUnitPerformance[] }) {
  return (
    <ChartCard
      title="Business Unit Performance"
      description="Contribution, growth, margin, retention, and composite score by unit."
      className="xl:col-span-7"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] table-fixed border-separate border-spacing-0">
          <colgroup>
            <col className="w-[17%]" />
            <col className="w-[12%]" />
            <col className="w-[11%]" />
            <col className="w-[10%]" />
            <col className="w-[13%]" />
            <col className="w-[17%]" />
            <col className="w-[20%]" />
          </colgroup>
          <thead>
            <tr className="text-left text-xs font-semibold uppercase leading-4 text-slate-500">
              <th className="border-b border-border py-3 pr-3">Business Unit</th>
              <th className="border-b border-border px-3">Revenue</th>
              <th className="border-b border-border px-3">Growth</th>
              <th className="border-b border-border px-3">Margin</th>
              <th className="border-b border-border px-3">Retention</th>
              <th className="border-b border-border px-3">Score</th>
              <th className="border-b border-border pl-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((unit) => (
              <tr key={unit.unitName} className="text-sm leading-5 text-slate-700">
                <td className="border-b border-border py-4 pr-3">
                  <span className="font-medium text-slate-950">{unit.unitName}</span>
                </td>
                <td className="border-b border-border px-3 tabular-nums">
                  {formatCurrencyMillions(unit.revenue)}
                </td>
                <td className="border-b border-border px-3 tabular-nums">
                  <span className={unit.growth < 0 ? "text-red-700" : "text-emerald-700"}>
                    {formatPercent(unit.growth)}
                  </span>
                </td>
                <td className="border-b border-border px-3 tabular-nums">{unit.margin}%</td>
                <td className="border-b border-border px-3 tabular-nums">{unit.customerRetention}%</td>
                <td className="border-b border-border px-3">
                  <div className="flex items-center gap-2">
                    <ProgressBar
                      value={unit.performanceScore}
                      tone={
                        unit.status === "underperforming"
                          ? "danger"
                          : unit.status === "stable"
                            ? "warning"
                            : "success"
                      }
                    />
                    <span className="w-8 text-right tabular-nums text-slate-900">
                      {formatScore(unit.performanceScore)}
                    </span>
                  </div>
                </td>
                <td className="border-b border-border pl-3">
                  <StatusBadge status={unit.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ChartCard>
  );
}
