import { ChartCard } from "@/components/shared/ChartCard";
import { ProgressBar } from "@/components/shared/ProgressBar";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { formatCurrencyMillions, formatPercent, formatScore } from "@/lib/formatters";
import { cn } from "@/lib/utils";
import type { PartnerPerformance } from "@/types/dashboard";

export function PartnerPerformanceTable({ data }: { data: PartnerPerformance[] }) {
  const sortedPartners = [...data].sort((a, b) => b.performanceScore - a.performanceScore);

  return (
    <ChartCard
      title="Partner Performance Center"
      description="Ranked contribution, execution quality, and suggested partner actions."
      className="xl:col-span-5"
    >
      <div className="space-y-3">
        {sortedPartners.map((partner, index) => (
          <section
            key={partner.partnerName}
            className={cn(
              "border-b border-border pb-3 last:border-b-0",
              partner.status === "risk" ? "rounded-md bg-red-50/70 p-3" : ""
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-100 text-xs font-semibold tabular-nums text-slate-600">
                  {index + 1}
                </span>
                <div className="min-w-0">
                  <p className="font-medium leading-5 text-slate-950">{partner.partnerName}</p>
                  <p className="mt-0.5 text-xs leading-4 text-slate-500">
                    {formatCurrencyMillions(partner.revenueContribution)} contribution · Satisfaction{" "}
                    {partner.satisfactionScore}
                  </p>
                </div>
              </div>
              <StatusBadge status={partner.status} />
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto]">
              <div>
                <div className="mb-1.5 flex items-center justify-between text-xs text-slate-500">
                  <span>Performance score</span>
                  <span className="font-semibold tabular-nums text-slate-900">
                    {formatScore(partner.performanceScore)}
                  </span>
                </div>
                <ProgressBar
                  value={partner.performanceScore}
                  tone={
                    partner.status === "risk"
                      ? "danger"
                      : partner.status === "watch"
                        ? "warning"
                        : "success"
                  }
                />
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs sm:min-w-40">
                <div>
                  <p className="font-semibold uppercase leading-4 text-slate-500">Growth</p>
                  <p
                    className={cn(
                      "mt-1 font-semibold tabular-nums",
                      partner.growthRate < 0 ? "text-red-700" : "text-emerald-700"
                    )}
                  >
                    {formatPercent(partner.growthRate)}
                  </p>
                </div>
                <div>
                  <p className="font-semibold uppercase leading-4 text-slate-500">Action</p>
                  <p className="mt-1 font-medium text-slate-700">{partner.action}</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </ChartCard>
  );
}
