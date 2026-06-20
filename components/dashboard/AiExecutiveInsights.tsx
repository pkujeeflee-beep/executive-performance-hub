"use client";

import { Brain, CheckCircle2, Sparkles } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getDefaultInsight, getInsightById } from "@/lib/insights";
import { cn } from "@/lib/utils";
import type { AiExecutiveInsight } from "@/types/dashboard";

export function AiExecutiveInsights({ insights }: { insights: AiExecutiveInsight[] }) {
  const defaultInsight = getDefaultInsight(insights);
  const [selectedQuestionId, setSelectedQuestionId] = useState(defaultInsight.questionId);
  const selectedInsight = getInsightById(insights, selectedQuestionId);

  return (
    <Card className="flex min-h-[520px] flex-col bg-gradient-to-b from-white to-slate-50/80 p-5 xl:order-2 xl:col-span-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-blue-100 bg-blue-50 text-blue-700">
              <Sparkles className="h-4 w-4" />
            </span>
            <div>
              <h2 className="text-base font-semibold leading-6 text-slate-950">
                AI Executive Insights
              </h2>
              <p className="text-sm leading-5 text-slate-500">
                Generated from current dashboard signals
              </p>
            </div>
          </div>
        </div>
        <Badge variant={selectedInsight.riskLevel === "high" ? "danger" : "warning"}>
          {selectedInsight.riskLevel} risk
        </Badge>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {insights.map((insight) => (
          <Button
            key={insight.questionId}
            type="button"
            size="sm"
            variant={insight.questionId === selectedQuestionId ? "default" : "outline"}
            className={cn(
              "h-auto justify-start whitespace-normal px-2.5 py-1.5 text-left text-xs leading-4",
              insight.questionId === selectedQuestionId ? "shadow-none" : "bg-white"
            )}
            onClick={() => setSelectedQuestionId(insight.questionId)}
          >
            {insight.question}
          </Button>
        ))}
      </div>

      <div className="mt-5 flex flex-1 flex-col gap-4 border-t border-border pt-5">
        <InsightSection title="Executive Summary">
          <p className="text-sm leading-6 text-slate-700">{selectedInsight.executiveSummary}</p>
        </InsightSection>

        <InsightList title="Key Drivers" items={selectedInsight.keyDrivers} />
        <InsightList title="Opportunities" items={selectedInsight.opportunities} />
        <InsightList title="Risks" items={selectedInsight.risks} tone="risk" />

        <div className="mt-auto rounded-md border border-slate-200 bg-white p-3">
          <div className="mb-2 flex items-center gap-2">
            <Brain className="h-4 w-4 text-blue-700" />
            <p className="text-xs font-semibold uppercase leading-4 text-slate-500">
              Recommended Actions
            </p>
          </div>
          <div className="space-y-2">
            {selectedInsight.recommendedActions.map((action) => (
              <div key={action} className="flex gap-2 text-sm leading-5 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>{action}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <Badge variant="neutral">Confidence: {selectedInsight.confidence}</Badge>
          {selectedInsight.relatedMetrics.slice(0, 3).map((metric) => (
            <Badge key={metric} variant="primary">
              {metric}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}

function InsightSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <p className="mb-1.5 text-xs font-semibold uppercase leading-4 text-slate-500">{title}</p>
      {children}
    </section>
  );
}

function InsightList({
  title,
  items,
  tone = "default"
}: {
  title: string;
  items: string[];
  tone?: "default" | "risk";
}) {
  return (
    <InsightSection title={title}>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-5 text-slate-700">
            <span
              className={cn(
                "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                tone === "risk" ? "bg-red-500" : "bg-slate-400"
              )}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </InsightSection>
  );
}
