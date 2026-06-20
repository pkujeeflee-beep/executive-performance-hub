import { Activity, Clock3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function DashboardHeader({ lastUpdated }: { lastUpdated: string }) {
  const formattedDate = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(lastUpdated));

  return (
    <section className="flex flex-col gap-5 border-b border-border pb-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge variant="primary" className="gap-1.5">
            <Activity className="h-3.5 w-3.5" />
            Portfolio status: On track with attention areas
          </Badge>
        </div>
        <h1 className="text-3xl font-bold leading-9 tracking-normal text-slate-950">
          Executive Performance Overview
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Monitor growth, forecast quality, regional execution, and business unit contribution across
          the current reporting period.
        </p>
      </div>
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Clock3 className="h-4 w-4" />
        <span>Last updated {formattedDate}</span>
      </div>
    </section>
  );
}
