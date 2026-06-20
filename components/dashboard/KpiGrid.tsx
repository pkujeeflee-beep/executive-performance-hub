import { KpiCard } from "@/components/dashboard/KpiCard";
import type { ExecutiveKpi } from "@/types/dashboard";

export function KpiGrid({ kpis }: { kpis: ExecutiveKpi[] }) {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {kpis.map((kpi) => (
        <KpiCard key={kpi.id} kpi={kpi} />
      ))}
    </section>
  );
}
