import { cn } from "@/lib/utils";

export function ProgressBar({
  value,
  tone = "primary"
}: {
  value: number;
  tone?: "primary" | "success" | "warning" | "danger";
}) {
  const toneClass = {
    primary: "bg-blue-600",
    success: "bg-emerald-600",
    warning: "bg-amber-500",
    danger: "bg-red-600"
  }[tone];

  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
      <div
        className={cn("h-full rounded-full", toneClass)}
        style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
      />
    </div>
  );
}
