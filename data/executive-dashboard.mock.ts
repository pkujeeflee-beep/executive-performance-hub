import type { ExecutiveDashboardData } from "@/types/dashboard";

export const executiveDashboardMock: ExecutiveDashboardData = {
  lastUpdated: "2026-06-20T09:30:00Z",
  reportingPeriod: "Jan-Jun 2026",
  kpis: [
    {
      id: "revenue",
      label: "Revenue",
      currentValue: 18.4,
      previousValue: 16.9,
      comparisonLabel: "vs previous period",
      changeValue: 1.5,
      changePercent: 8.9,
      trend: "up",
      status: "healthy",
      unit: "$",
      description: "Top-line performance remains ahead of the prior period."
    },
    {
      id: "growth-rate",
      label: "Growth Rate",
      currentValue: 11.2,
      previousValue: 14.6,
      comparisonLabel: "vs previous period",
      changeValue: -3.4,
      trend: "down",
      status: "attention",
      unit: "%",
      description: "Growth is positive, but momentum is slowing."
    },
    {
      id: "forecast-accuracy",
      label: "Forecast Accuracy",
      currentValue: 87,
      previousValue: 91,
      comparisonLabel: "vs previous period",
      changeValue: -4,
      trend: "down",
      status: "attention",
      unit: "%",
      description: "Forecast variance widened in the last two months."
    },
    {
      id: "operating-margin",
      label: "Operating Margin",
      currentValue: 22.5,
      previousValue: 24.1,
      comparisonLabel: "vs previous period",
      changeValue: -1.6,
      trend: "down",
      status: "attention",
      unit: "%",
      description: "Margin compression is emerging in mid-performing units."
    },
    {
      id: "customer-retention",
      label: "Customer Retention",
      currentValue: 89,
      previousValue: 92,
      comparisonLabel: "vs previous period",
      changeValue: -3,
      trend: "down",
      status: "attention",
      unit: "%",
      description: "Retention remains strong but has declined from prior period."
    },
    {
      id: "business-health-score",
      label: "Business Health Score",
      currentValue: 78,
      previousValue: 82,
      comparisonLabel: "vs previous period",
      changeValue: -4,
      trend: "down",
      status: "attention",
      unit: "score",
      description: "Overall health is acceptable with rising execution risk."
    }
  ],
  performanceTrend: [
    { month: "Jan", actualPerformance: 2.6, forecast: 2.5, target: 2.6, varianceToTarget: 0, varianceToForecast: 0.1, status: "on-track" },
    { month: "Feb", actualPerformance: 2.8, forecast: 2.7, target: 2.8, varianceToTarget: 0, varianceToForecast: 0.1, status: "on-track" },
    { month: "Mar", actualPerformance: 3.1, forecast: 3, target: 3.1, varianceToTarget: 0, varianceToForecast: 0.1, status: "ahead" },
    { month: "Apr", actualPerformance: 3, forecast: 3.2, target: 3.3, varianceToTarget: -0.3, varianceToForecast: -0.2, status: "behind" },
    { month: "May", actualPerformance: 3.3, forecast: 3.5, target: 3.6, varianceToTarget: -0.3, varianceToForecast: -0.2, status: "behind" },
    { month: "Jun", actualPerformance: 3.6, forecast: 3.9, target: 4, varianceToTarget: -0.4, varianceToForecast: -0.3, status: "behind" }
  ],
  regionalPerformance: [
    { regionName: "North Region", revenue: 4.8, growthRate: 16, targetAchievement: 104, performanceScore: 88, status: "leading" },
    { regionName: "South Region", revenue: 4.1, growthRate: 13, targetAchievement: 101, performanceScore: 84, status: "leading" },
    { regionName: "East Region", revenue: 3.5, growthRate: 9, targetAchievement: 96, performanceScore: 76, status: "stable" },
    { regionName: "West Region", revenue: 3.2, growthRate: 4, targetAchievement: 89, performanceScore: 68, status: "attention" },
    { regionName: "Central Region", revenue: 2.8, growthRate: -2, targetAchievement: 83, performanceScore: 59, status: "risk" }
  ],
  businessUnits: [
    { unitName: "Nimbus", revenue: 5.2, growth: 18, margin: 27, customerRetention: 93, performanceScore: 91, status: "strong" },
    { unitName: "Atlas", revenue: 4.6, growth: 14, margin: 25, customerRetention: 91, performanceScore: 86, status: "strong" },
    { unitName: "Vertex", revenue: 3.7, growth: 8, margin: 22, customerRetention: 88, performanceScore: 76, status: "stable" },
    { unitName: "Nova", revenue: 2.9, growth: 3, margin: 19, customerRetention: 84, performanceScore: 67, status: "stable" },
    { unitName: "Horizon", revenue: 2, growth: -5, margin: 16, customerRetention: 79, performanceScore: 54, status: "underperforming" }
  ],
  businessHealth: [
    {
      category: "Healthy",
      percentage: 56,
      count: 14,
      summary: "Core regions and strongest business units remain stable enough to protect and expand.",
      primaryRisk: "Investment capacity should stay focused on proven performers.",
      recommendedAction: "Reallocate growth investment toward North Region, South Region, Nimbus, and Atlas."
    },
    {
      category: "Attention",
      percentage: 31,
      count: 8,
      summary: "Forecast accuracy, retention, and selected regional momentum need management review.",
      primaryRisk: "Growth quality may weaken further if variance and retention pressure continue.",
      recommendedAction: "Create a monthly variance review between actual performance, forecast, and target."
    },
    {
      category: "Risk",
      percentage: 13,
      count: 3,
      summary: "Central Region, Horizon, and Nova Network require focused recovery actions.",
      primaryRisk: "Execution gaps may affect revenue contribution and customer experience.",
      recommendedAction: "Set a 30-day recovery plan for underperforming regions, units, and partners."
    }
  ],
  partners: [
    {
      partnerName: "Horizon Partners",
      revenueContribution: 2.4,
      growthRate: 15,
      satisfactionScore: 92,
      performanceScore: 89,
      status: "strategic",
      action: "Expand account plan"
    },
    {
      partnerName: "Vertex Consulting",
      revenueContribution: 2.1,
      growthRate: 11,
      satisfactionScore: 88,
      performanceScore: 83,
      status: "strategic",
      action: "Protect performance"
    },
    {
      partnerName: "Prime Solutions",
      revenueContribution: 1.8,
      growthRate: 4,
      satisfactionScore: 76,
      performanceScore: 70,
      status: "watch",
      action: "Review satisfaction"
    },
    {
      partnerName: "Atlas Group",
      revenueContribution: 1.6,
      growthRate: 7,
      satisfactionScore: 81,
      performanceScore: 74,
      status: "stable",
      action: "Maintain cadence"
    },
    {
      partnerName: "Nova Network",
      revenueContribution: 1.2,
      growthRate: -3,
      satisfactionScore: 68,
      performanceScore: 58,
      status: "risk",
      action: "Set improvement plan"
    }
  ],
  insights: [
    {
      questionId: "growth-slowing",
      question: "Why is growth slowing?",
      executiveSummary: "The business remains in growth mode, but growth quality is weakening. Central Region, Horizon, and Nova Network require focused leadership attention.",
      keyDrivers: [
        "Growth rate declined from 14.6% to 11.2% while revenue remained positive.",
        "Forecast accuracy fell from 91% to 87%, with April to June behind plan.",
        "Central Region and Horizon are dragging momentum below the strongest performers."
      ],
      opportunities: [
        "Reallocate growth investment toward North Region, South Region, Nimbus, and Atlas.",
        "Use the June run rate to reset the next planning cycle with tighter assumptions."
      ],
      risks: [
        "Nova Network partner execution may affect revenue contribution and customer experience.",
        "Margin and retention pressure may spread if Horizon is not stabilized."
      ],
      recommendedActions: [
        "Run a leadership review for Central Region and Horizon.",
        "Review April to June variance against target and forecast.",
        "Set a partner improvement plan for Nova Network."
      ],
      relatedMetrics: ["Growth Rate", "Forecast Accuracy", "Central Region", "Horizon", "Nova Network"],
      riskLevel: "medium",
      confidence: "high"
    },
    {
      questionId: "regions-attention",
      question: "Which regions require attention?",
      executiveSummary: "West Region needs monitoring and Central Region requires intervention. North and South remain the clearest regional investment candidates.",
      keyDrivers: [
        "Central Region is below target at 83% achievement with -2% growth.",
        "West Region is at 89% target achievement with slower 4% growth.",
        "North and South are both above target and remain the regional benchmarks."
      ],
      opportunities: [
        "Use North and South operating patterns as the recovery template.",
        "Shift short-cycle commercial support into West and Central."
      ],
      risks: [
        "Central Region may continue to dilute portfolio growth if recovery is delayed.",
        "West Region could move from attention to risk without improved momentum."
      ],
      recommendedActions: [
        "Assign Central Region to a 30-day recovery plan.",
        "Review West Region pipeline quality in the next leadership cadence.",
        "Protect North and South capacity while recovery work begins."
      ],
      relatedMetrics: ["Central Region", "West Region", "Target Achievement", "Growth Rate"],
      riskLevel: "medium",
      confidence: "high"
    },
    {
      questionId: "biggest-risks",
      question: "What are the biggest risks?",
      executiveSummary: "The biggest risks are weakening growth quality, lower forecast accuracy, Horizon underperformance, Central Region weakness, and Nova Network partner execution.",
      keyDrivers: [
        "Five of six executive KPIs are in attention status.",
        "Horizon has the lowest business unit score at 54.",
        "Nova Network has the weakest partner score at 58 and negative growth."
      ],
      opportunities: [
        "Focus leadership actions on the smallest set of visible execution gaps.",
        "Turn the dashboard into the recurring monthly risk review baseline."
      ],
      risks: [
        "Forecast misses may reduce confidence in planning decisions.",
        "Weak partner satisfaction may create downstream retention pressure."
      ],
      recommendedActions: [
        "Create a monthly variance review between actual, forecast, and target.",
        "Investigate margin compression in Nova and Horizon.",
        "Add partner performance review to the monthly leadership cadence."
      ],
      relatedMetrics: ["Forecast Accuracy", "Business Health Score", "Horizon", "Central Region", "Nova Network"],
      riskLevel: "high",
      confidence: "high"
    },
    {
      questionId: "units-underperformed",
      question: "Which business units underperformed?",
      executiveSummary: "Horizon is the clear underperformer, while Nova is stable but showing weaker growth, margin, and retention than Nimbus and Atlas.",
      keyDrivers: [
        "Horizon has -5% growth, 16% margin, and 79% retention.",
        "Nova has only 3% growth and a 67 performance score.",
        "Nimbus and Atlas remain strong performers with higher growth and margin."
      ],
      opportunities: [
        "Protect Nimbus and Atlas with expansion and retention programs.",
        "Use Vertex as the middle benchmark for Nova recovery."
      ],
      risks: [
        "Horizon may continue to dilute overall growth and margin.",
        "Nova may become a larger attention area if retention weakens further."
      ],
      recommendedActions: [
        "Set a 30-day Horizon recovery plan.",
        "Investigate margin compression in Nova and Horizon.",
        "Reallocate enablement support toward the weakest units."
      ],
      relatedMetrics: ["Horizon", "Nova", "Margin", "Customer Retention", "Performance Score"],
      riskLevel: "medium",
      confidence: "high"
    },
    {
      questionId: "leadership-prioritize",
      question: "What should leadership prioritize?",
      executiveSummary: "Leadership should prioritize targeted recovery over broad reporting: stabilize Central Region and Horizon, improve forecast quality, and intervene with Nova Network.",
      keyDrivers: [
        "Revenue is growing, but the quality indicators are trending down.",
        "Risk is concentrated in a small number of regions, units, and partners.",
        "Healthy areas provide investment candidates while recovery work happens."
      ],
      opportunities: [
        "Use healthy areas as growth engines while fixing execution gaps.",
        "Create a repeatable executive reporting baseline from this dashboard."
      ],
      risks: [
        "If attention areas are not managed, risk may spread into retention and margin.",
        "Partner underperformance may reduce commercial execution quality."
      ],
      recommendedActions: [
        "Run a leadership review for Central Region, Horizon, and Nova Network.",
        "Review forecast assumptions for the next planning cycle.",
        "Reassess health distribution monthly to confirm whether risk is improving."
      ],
      relatedMetrics: ["Revenue", "Growth Rate", "Forecast Accuracy", "Business Health Score", "Partner Score"],
      riskLevel: "medium",
      confidence: "high"
    }
  ]
};
