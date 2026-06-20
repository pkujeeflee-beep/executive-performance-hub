export type Trend = "up" | "down" | "stable";
export type Status = "healthy" | "attention" | "risk";
export type Unit = "$" | "%" | "score" | "count";
export type Confidence = "high" | "medium" | "low";

export interface ExecutiveKpi {
  id: string;
  label: string;
  currentValue: number;
  previousValue: number;
  comparisonLabel: string;
  changeValue: number;
  changePercent?: number;
  trend: Trend;
  status: Status;
  unit: Unit;
  description: string;
}

export interface PerformanceTrendPoint {
  month: "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun";
  actualPerformance: number;
  forecast: number;
  target: number;
  varianceToTarget: number;
  varianceToForecast: number;
  status: "ahead" | "on-track" | "behind";
}

export interface RegionalPerformance {
  regionName: string;
  revenue: number;
  growthRate: number;
  targetAchievement: number;
  performanceScore: number;
  status: "leading" | "stable" | "attention" | "risk";
}

export interface BusinessUnitPerformance {
  unitName: string;
  revenue: number;
  growth: number;
  margin: number;
  customerRetention: number;
  performanceScore: number;
  status: "strong" | "stable" | "underperforming";
}

export interface BusinessHealthCategory {
  category: "Healthy" | "Attention" | "Risk";
  percentage: number;
  count: number;
  summary: string;
  primaryRisk: string;
  recommendedAction: string;
}

export interface PartnerPerformance {
  partnerName: string;
  revenueContribution: number;
  growthRate: number;
  satisfactionScore: number;
  performanceScore: number;
  status: "strategic" | "stable" | "watch" | "risk";
  action: string;
}

export interface AiExecutiveInsight {
  questionId: string;
  question: string;
  executiveSummary: string;
  keyDrivers: string[];
  opportunities: string[];
  risks: string[];
  recommendedActions: string[];
  relatedMetrics: string[];
  riskLevel: "low" | "medium" | "high";
  confidence: Confidence;
}

export interface ExecutiveDashboardData {
  lastUpdated: string;
  reportingPeriod: string;
  kpis: ExecutiveKpi[];
  performanceTrend: PerformanceTrendPoint[];
  regionalPerformance: RegionalPerformance[];
  businessUnits: BusinessUnitPerformance[];
  businessHealth: BusinessHealthCategory[];
  partners: PartnerPerformance[];
  insights: AiExecutiveInsight[];
}
