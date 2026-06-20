import { AlertTriangle, ShieldCheck } from "lucide-react";
import { ChartCard } from "@/components/shared/ChartCard";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { chartColors } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { BusinessHealthCategory } from "@/types/dashboard";

const healthTone = {
  Healthy: {
    bar: "bg-emerald-600",
    surface: "bg-emerald-50",
    border: "border-emerald-100",
    icon: "text-emerald-700"
  },
  Attention: {
    bar: "bg-amber-500",
    surface: "bg-amber-50",
    border: "border-amber-100",
    icon: "text-amber-700"
  },
  Risk: {
    bar: "bg-red-600",
    surface: "bg-red-50",
    border: "border-red-100",
    icon: "text-red-700"
  }
} satisfies Record<BusinessHealthCategory["category"], Record<string, string>>;

export function BusinessHealthOverview({ data }: { data: BusinessHealthCategory[] }) {
  return (
    <ChartCard
      title="Business Health Overview"
      description="Risk distribution across units, regions, and partner signals."
      className="xl:col-span-6"
    >
      <div className="overflow-hidden rounded-full bg-slate-100">
        <div className="flex h-4 w-full">
          {data.map((item) => (
            <div
              key={item.category}
              className={healthTone[item.category].bar}
              style={{ width: `${item.percentage}%` }}
              title={`${item.category}: ${item.percentage}%`}
            />
          ))}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {data.map((item) => (
          <div key={item.category} className="text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <span
                className={cn("h-2 w-2 rounded-full", healthTone[item.category].bar)}
                style={{
                  backgroundColor:
                    item.category === "Healthy"
                      ? chartColors.healthy
                      : item.category === "Attention"
                        ? chartColors.attention
                        : chartColors.risk
                }}
              />
              <span className="font-medium text-slate-700">{item.category}</span>
            </div>
            <p className="mt-1 font-semibold tabular-nums text-slate-950">{item.percentage}%</p>
          </div>
        ))}
      </div>

      <div className="mt-5 space-y-3">
        {data.map((item) => {
          const Icon = item.category === "Healthy" ? ShieldCheck : AlertTriangle;

          return (
            <section
              key={item.category}
              className={cn(
                "rounded-md border p-3",
                healthTone[item.category].surface,
                healthTone[item.category].border
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 gap-2">
                  <Icon className={cn("mt-0.5 h-4 w-4 shrink-0", healthTone[item.category].icon)} />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-semibold text-slate-950">{item.category}</p>
                      <StatusBadge status={item.category} />
                    </div>
                    <p className="mt-1 text-sm leading-5 text-slate-700">{item.summary}</p>
                  </div>
                </div>
                <p className="shrink-0 text-lg font-bold tabular-nums text-slate-950">
                  {item.percentage}%
                </p>
              </div>
              <div className="mt-3 grid gap-2 border-t border-white/70 pt-3 text-xs leading-5 text-slate-600 sm:grid-cols-2">
                <p>
                  <span className="font-semibold text-slate-700">Implication: </span>
                  {item.primaryRisk}
                </p>
                <p>
                  <span className="font-semibold text-slate-700">Action: </span>
                  {item.recommendedAction}
                </p>
              </div>
            </section>
          );
        })}
      </div>
    </ChartCard>
  );
}
