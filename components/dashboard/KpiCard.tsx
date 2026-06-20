import { Card } from "@/components/ui/card";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { TrendBadge } from "@/components/shared/TrendBadge";
import { formatMetricValue, formatPointChange, formatPercent } from "@/lib/formatters";
import type { ExecutiveKpi } from "@/types/dashboard";

export function KpiCard({ kpi }: { kpi: ExecutiveKpi }) {
  const trendValue =
    kpi.changePercent !== undefined
      ? formatPercent(kpi.changePercent)
      : kpi.unit === "score"
        ? `${kpi.changeValue > 0 ? "+" : ""}${kpi.changeValue.toFixed(0)}`
        : formatPointChange(kpi.changeValue);

  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase leading-4 text-slate-500">{kpi.label}</p>
          <p className="mt-2 text-3xl font-bold leading-10 tabular-nums text-slate-950">
            {formatMetricValue(kpi.currentValue, kpi.unit)}
          </p>
        </div>
        <StatusBadge status={kpi.status} />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <TrendBadge trend={kpi.trend} value={trendValue} />
        <span className="text-xs leading-4 text-slate-500">{kpi.comparisonLabel}</span>
      </div>
      <p className="mt-3 text-sm leading-5 text-slate-600">{kpi.description}</p>
    </Card>
  );
}
