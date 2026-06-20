import { CalendarDays, Download, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TopNavigation({ reportingPeriod }: { reportingPeriod: string }) {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-950 text-sm font-semibold text-white">
            EP
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold leading-5 text-slate-950">
              Executive Performance Hub
            </p>
            <p className="truncate text-xs leading-4 text-slate-500">Global business portfolio</p>
          </div>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" size="sm">
            <CalendarDays className="h-4 w-4" />
            {reportingPeriod}
          </Button>
          <Button variant="outline" size="sm">All Regions</Button>
          <Button variant="ghost" size="icon" aria-label="Refresh dashboard">
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Export dashboard">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
