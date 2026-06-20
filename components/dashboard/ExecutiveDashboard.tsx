import { BusinessPerformanceTrend } from "@/components/dashboard/BusinessPerformanceTrend";
import { AiExecutiveInsights } from "@/components/dashboard/AiExecutiveInsights";
import { BusinessHealthOverview } from "@/components/dashboard/BusinessHealthOverview";
import { BusinessUnitPerformanceTable } from "@/components/dashboard/BusinessUnitPerformanceTable";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { KpiGrid } from "@/components/dashboard/KpiGrid";
import { PartnerPerformanceTable } from "@/components/dashboard/PartnerPerformanceTable";
import { RegionalPerformanceChart } from "@/components/dashboard/RegionalPerformanceChart";
import { TopNavigation } from "@/components/dashboard/TopNavigation";
import type { ExecutiveDashboardData } from "@/types/dashboard";

export function ExecutiveDashboard({ data }: { data: ExecutiveDashboardData }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNavigation reportingPeriod={data.reportingPeriod} />
      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <DashboardHeader lastUpdated={data.lastUpdated} />
        <KpiGrid kpis={data.kpis} />
        <section className="grid items-start gap-6 xl:grid-cols-12">
          <AiExecutiveInsights insights={data.insights} />
          <BusinessPerformanceTrend data={data.performanceTrend} />
        </section>
        <section className="grid items-start gap-6 xl:grid-cols-12">
          <RegionalPerformanceChart data={data.regionalPerformance} />
          <BusinessHealthOverview data={data.businessHealth} />
        </section>
        <section className="grid items-start gap-6 xl:grid-cols-12">
          <BusinessUnitPerformanceTable data={data.businessUnits} />
          <PartnerPerformanceTable data={data.partners} />
        </section>
      </main>
    </div>
  );
}
