import type { AiExecutiveInsight } from "@/types/dashboard";

export function getDefaultInsight(insights: AiExecutiveInsight[]) {
  return insights[0];
}

export function getInsightById(insights: AiExecutiveInsight[], questionId: string) {
  return insights.find((insight) => insight.questionId === questionId) ?? insights[0];
}
