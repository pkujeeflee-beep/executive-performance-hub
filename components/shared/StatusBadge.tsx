import { Badge } from "@/components/ui/badge";
import { statusLabels } from "@/lib/constants";

type BadgeTone = "neutral" | "success" | "warning" | "danger" | "primary";

const toneByStatus: Record<string, BadgeTone> = {
  healthy: "success",
  leading: "success",
  strong: "success",
  strategic: "success",
  stable: "neutral",
  attention: "warning",
  watch: "warning",
  risk: "danger",
  underperforming: "danger",
  Healthy: "success",
  Attention: "warning",
  Risk: "danger"
};

export function StatusBadge({ status, label }: { status: string; label?: string }) {
  const displayLabel =
    label ??
    statusLabels[status as keyof typeof statusLabels] ??
    status
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <Badge variant={toneByStatus[status] ?? "neutral"}>
      {displayLabel}
    </Badge>
  );
}
