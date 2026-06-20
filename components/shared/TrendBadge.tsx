import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Trend } from "@/types/dashboard";

export function TrendBadge({ trend, value }: { trend: Trend; value: string }) {
  const Icon = trend === "up" ? ArrowUpRight : trend === "down" ? ArrowDownRight : ArrowRight;
  const variant = trend === "up" ? "success" : trend === "down" ? "warning" : "neutral";

  return (
    <Badge variant={variant} className="gap-1 tabular-nums">
      <Icon className="h-3.5 w-3.5" />
      {value}
    </Badge>
  );
}
