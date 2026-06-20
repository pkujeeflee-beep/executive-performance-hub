import type { Unit } from "@/types/dashboard";

export function formatMetricValue(value: number, unit: Unit) {
  if (unit === "$") {
    return `$${value.toFixed(1)}M`;
  }

  if (unit === "%") {
    return `${value.toFixed(value % 1 === 0 ? 0 : 1)}%`;
  }

  return value.toFixed(0);
}

export function formatCurrencyMillions(value: number) {
  return `$${value.toFixed(1)}M`;
}

export function toNumber(value: number | string | ReadonlyArray<number | string> | undefined) {
  const rawValue = Array.isArray(value) ? value[0] : value;
  const numericValue = Number(rawValue ?? 0);

  return Number.isFinite(numericValue) ? numericValue : 0;
}

export function formatPercent(value: number) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(value % 1 === 0 ? 0 : 1)}%`;
}

export function formatPointChange(value: number) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(value % 1 === 0 ? 0 : 1)} pts`;
}

export function formatScore(value: number) {
  return value.toFixed(0);
}
