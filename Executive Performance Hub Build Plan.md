# Executive Performance Hub Build Plan

## Source Documents

This development plan is based on:

- `Executive Performance Hub PRD Final.md`
- `Executive Performance Hub Design Spec.md`
- `Technical Specification.md`

The MVP scope is frozen:

Executive Performance Hub MVP = single-page executive performance dashboard + static mock data + preset AI Executive Insights.

Do not add authentication, backend services, database, real AI integration, real API integration, multi-page routing, exports, uploads, alerts, admin configuration, or drill-down pages.

---

# 1. Information Architecture

```txt
Executive Performance Hub
├── Top Navigation
│   ├── Product name
│   ├── Dashboard scope
│   ├── Date range selector
│   ├── Region / business unit filter
│   └── Refresh / export visual actions only
│
└── Dashboard Page
    ├── Header Summary
    │   ├── Page title
    │   ├── Executive status badge
    │   └── Last updated timestamp
    │
    ├── Executive KPI Overview
    │   └── 6 KPI cards
    │
    ├── Primary Analysis
    │   ├── Business Performance Trend
    │   └── AI Executive Insights
    │
    ├── Secondary Analysis
    │   ├── Regional Performance
    │   └── Business Health Overview
    │
    └── Detail Analysis
        ├── Business Unit Performance
        └── Partner Performance Center
```

The first viewport should answer:

- Is performance on track?
- Is growth improving or slowing?
- Where are the risks?
- What should leadership inspect next?

---

# 2. Folder Structure

```txt
/app
  layout.tsx
  page.tsx
  globals.css

/components
  /dashboard
    ExecutiveDashboard.tsx
    TopNavigation.tsx
    DashboardHeader.tsx
    KpiGrid.tsx
    KpiCard.tsx
    BusinessPerformanceTrend.tsx
    RegionalPerformanceChart.tsx
    BusinessHealthOverview.tsx
    BusinessUnitPerformanceTable.tsx
    PartnerPerformanceTable.tsx
    AiExecutiveInsights.tsx
  /shared
    ChartCard.tsx
    StatusBadge.tsx
    TrendBadge.tsx
    ProgressBar.tsx
    SectionHeader.tsx
  /ui
    shadcn components

/data
  executive-dashboard.mock.ts

/types
  dashboard.ts

/lib
  formatters.ts
  insights.ts
  constants.ts
  utils.ts
```

---

# 3. Component Tree

```txt
app/page.tsx
└── ExecutiveDashboard
    ├── TopNavigation
    ├── DashboardHeader
    ├── KpiGrid
    │   └── KpiCard x6
    ├── BusinessPerformanceTrend
    │   └── Recharts LineChart
    ├── AiExecutiveInsights
    │   ├── Preset question buttons
    │   └── Structured insight response
    ├── RegionalPerformanceChart
    │   └── Recharts horizontal BarChart
    ├── BusinessHealthOverview
    │   ├── Stacked health bar
    │   └── Health category rows
    ├── BusinessUnitPerformanceTable
    └── PartnerPerformanceTable
```

---

# 4. TypeScript Interfaces

```ts
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
```

---

# 5. Mock Data Structure

```ts
export const executiveDashboardMock: ExecutiveDashboardData = {
  lastUpdated: "2026-06-20T09:30:00Z",
  reportingPeriod: "Jan-Jun 2026",
  kpis: [],
  performanceTrend: [],
  regionalPerformance: [],
  businessUnits: [],
  businessHealth: [],
  partners: [],
  insights: [],
};
```

Mock data must support this coherent business story:

- Overall business is growing.
- Growth momentum is slowing.
- North Region and South Region are leading.
- Central Region requires leadership attention.
- Nimbus and Atlas are the strongest business units.
- Horizon is underperforming.
- Nova Network is the weakest partner.
- Business Health Score remains acceptable but is trending down.

Required KPI values:

| KPI | Current | Previous | Change | Status |
|---|---:|---:|---:|---|
| Revenue | $18.4M | $16.9M | +8.9% | healthy |
| Growth Rate | 11.2% | 14.6% | -3.4 pts | attention |
| Forecast Accuracy | 87% | 91% | -4 pts | attention |
| Operating Margin | 22.5% | 24.1% | -1.6 pts | attention |
| Customer Retention | 89% | 92% | -3 pts | attention |
| Business Health Score | 78 | 82 | -4 | attention |

Required business performance trend:

| Month | Actual | Forecast | Target |
|---|---:|---:|---:|
| Jan | 2.6M | 2.5M | 2.6M |
| Feb | 2.8M | 2.7M | 2.8M |
| Mar | 3.1M | 3.0M | 3.1M |
| Apr | 3.0M | 3.2M | 3.3M |
| May | 3.3M | 3.5M | 3.6M |
| Jun | 3.6M | 3.9M | 4.0M |

Required regional performance:

| Region | Revenue | Growth | Target Achievement | Score | Status |
|---|---:|---:|---:|---:|---|
| North Region | 4.8M | +16% | 104% | 88 | leading |
| South Region | 4.1M | +13% | 101% | 84 | leading |
| East Region | 3.5M | +9% | 96% | 76 | stable |
| West Region | 3.2M | +4% | 89% | 68 | attention |
| Central Region | 2.8M | -2% | 83% | 59 | risk |

Required business unit performance:

| Unit | Revenue | Growth | Margin | Retention | Score |
|---|---:|---:|---:|---:|---:|
| Nimbus | 5.2M | +18% | 27% | 93% | 91 |
| Atlas | 4.6M | +14% | 25% | 91% | 86 |
| Vertex | 3.7M | +8% | 22% | 88% | 76 |
| Nova | 2.9M | +3% | 19% | 84% | 67 |
| Horizon | 2.0M | -5% | 16% | 79% | 54 |

Required business health data:

| Category | Percentage | Summary |
|---|---:|---|
| Healthy | 56% | Core business units and leading regions remain strong |
| Attention | 31% | Growth and margin pressure emerging in mid-performing areas |
| Risk | 13% | Central Region and Horizon require leadership intervention |

Required partner performance:

| Partner | Revenue Contribution | Growth | Satisfaction | Score |
|---|---:|---:|---:|---:|
| Horizon Partners | 2.4M | +15% | 92 | 89 |
| Vertex Consulting | 2.1M | +11% | 88 | 83 |
| Prime Solutions | 1.8M | +4% | 76 | 70 |
| Atlas Group | 1.6M | +7% | 81 | 74 |
| Nova Network | 1.2M | -3% | 68 | 58 |

Required AI insight questions:

1. Why is growth slowing?
2. Which regions require attention?
3. What are the biggest risks?
4. Which business units underperformed?
5. What should leadership prioritize?

Each AI insight response must include:

- Executive Summary
- Key Drivers
- Opportunities
- Risks
- Recommended Actions

---

# 6. Development Plan

## Phase 1: Foundation

Set up the application foundation and data contract.

Tasks:

1. Initialize or verify Next.js 15, TypeScript, TailwindCSS, and shadcn/ui.
2. Add Lucide React and Recharts.
3. Create the folder structure.
4. Define all dashboard interfaces in `types/dashboard.ts`.
5. Create centralized mock data in `data/executive-dashboard.mock.ts`.
6. Create `lib/formatters.ts` for currency, percentage, score, and trend formatting.
7. Create `lib/constants.ts` for chart colors, status labels, and dashboard labels.
8. Create `lib/insights.ts` for selecting preset AI insight responses from mock data.
9. Implement global styling tokens from the design spec.
10. Build the shell layout with top navigation, dashboard header, page container, and responsive 12-column grid.

Acceptance criteria:

- App renders a basic dashboard shell.
- TypeScript interfaces are complete.
- Mock data is centralized.
- No business data is hardcoded in presentation components.

## Phase 2: Dashboard Modules

Build all PRD modules.

Tasks:

1. Implement `DashboardHeader`.
2. Implement `KpiGrid` and `KpiCard`.
3. Implement `BusinessPerformanceTrend` using Recharts LineChart.
4. Implement `AiExecutiveInsights` with preset question state.
5. Implement `RegionalPerformanceChart` using a horizontal bar chart.
6. Implement `BusinessHealthOverview` using a stacked horizontal status bar.
7. Implement `BusinessUnitPerformanceTable`.
8. Implement `PartnerPerformanceTable`.
9. Implement shared components:
   - `ChartCard`
   - `StatusBadge`
   - `TrendBadge`
   - `ProgressBar`
   - `SectionHeader`

Acceptance criteria:

- All seven PRD modules are visible.
- All required fields are represented.
- Charts have readable labels, tooltips, and restrained colors.
- AI insight buttons update the response panel.
- Tables are compact, readable, and responsive.

## Phase 3: Polish, QA, and Review

Bring the dashboard to portfolio quality.

Tasks:

1. Tune spacing, typography, card heights, and grid behavior.
2. Verify desktop, tablet, and mobile responsive states.
3. Add empty states where relevant.
4. Confirm no text overlaps or horizontal overflow.
5. Ensure visual style matches enterprise SaaS references: Vercel, Linear, Notion, Retool, Stripe.
6. Check all frozen PRD scope rules.
7. Run `npm run lint`.
8. Run `npm run build`.
9. Fix all lint, TypeScript, build, layout, and accessibility issues.
10. Perform final code review against the PRD and design spec.

Acceptance criteria:

- First-time visitor can understand performance within 30 seconds.
- AI insights provide credible recommendations within 2 minutes.
- Dashboard looks production-ready and presentation-ready.
- No out-of-scope features are introduced.

---

# 7. Build Execution Instructions

```txt
You are a Staff-level full-stack engineer. Build the Executive Performance Hub MVP in the current workspace.

Use:
- Next.js 15
- TypeScript
- TailwindCSS
- shadcn/ui
- Recharts
- Lucide React
- React Hooks
- Static mock data only

Strict scope:
- Build one single-page executive dashboard.
- Do not add authentication.
- Do not add Supabase.
- Do not add backend services.
- Do not add real OpenAI calls.
- Do not add real API integrations.
- Do not add routing beyond the main dashboard page.
- Do not add export workflows, uploads, alerts, admin, or drill-down pages.

Implement this structure:
- /app
- /components/dashboard
- /components/shared
- /data
- /types
- /lib

Create:
1. Information hierarchy:
   - Top Navigation
   - Header Summary
   - Executive KPI Overview
   - Business Performance Trend
   - AI Executive Insights
   - Regional Performance
   - Business Health Overview
   - Business Unit Performance
   - Partner Performance Center

2. Data model:
   - Define all interfaces in /types/dashboard.ts.
   - Put all mock data in /data/executive-dashboard.mock.ts.
   - Use the PRD mock values:
     Revenue $18.4M, Growth Rate 11.2%, Forecast Accuracy 87%, Operating Margin 22.5%, Customer Retention 89%, Business Health Score 78.
   - Trend months Jan-Jun with actual, forecast, target.
   - Regions: North, South, East, West, Central.
   - Business units: Nimbus, Atlas, Vertex, Nova, Horizon.
   - Partners: Horizon Partners, Vertex Consulting, Prime Solutions, Atlas Group, Nova Network.
   - AI preset questions:
     Why is growth slowing?
     Which regions require attention?
     What are the biggest risks?
     Which business units underperformed?
     What should leadership prioritize?

3. UI requirements:
   - Enterprise SaaS dashboard quality.
   - White background, light gray surfaces, crisp borders, subtle shadows.
   - 8px card radius.
   - No dark mode.
   - No neon colors.
   - No marketing hero.
   - No decorative illustrations.
   - No card-inside-card layout.
   - Desktop-first 12-column layout.
   - Tablet and mobile must stack cleanly.

4. Components:
   - ExecutiveDashboard
   - TopNavigation
   - DashboardHeader
   - KpiGrid
   - KpiCard
   - BusinessPerformanceTrend
   - AiExecutiveInsights
   - RegionalPerformanceChart
   - BusinessHealthOverview
   - BusinessUnitPerformanceTable
   - PartnerPerformanceTable
   - ChartCard
   - StatusBadge
   - TrendBadge
   - ProgressBar
   - SectionHeader

5. Chart rules:
   - Business Performance Trend: line chart with Actual, Forecast, Target.
   - Actual line blue and strongest.
   - Forecast dashed slate.
   - Target thin light gray.
   - Regional Performance: horizontal bar chart.
   - Business Health: stacked horizontal status bar.
   - Include tooltips, legends where useful, and readable axis formatting.

6. AI Insights:
   - Use preset buttons only.
   - No free-form chat input.
   - Selected question updates the response.
   - Each response includes Executive Summary, Key Drivers, Opportunities, Risks, Recommended Actions.
   - Keep tone executive, concise, and credible.

7. Quality gates:
   - All components typed.
   - No `any`.
   - No duplicated mock data.
   - No hardcoded business data inside components.
   - No broken responsive layout.
   - No overlapping text.
   - Run `npm run lint`.
   - Run `npm run build`.
   - Fix all errors before completion.

Final output should be a production-ready, portfolio-quality Executive Performance Hub MVP matching the frozen PRD and design spec.
```

---

# 8. Code Review Checklist

Review the implementation against these criteria:

1. Scope control
   - Single page only.
   - No auth, database, real API, or real AI.
   - No out-of-scope modules.

2. Architecture
   - Data is centralized in `/data`.
   - Types are centralized in `/types`.
   - Formatting and insight helpers are in `/lib`.
   - Components are small and focused.

3. TypeScript
   - No `any`.
   - Props are typed.
   - Mock data satisfies `ExecutiveDashboardData`.

4. UI quality
   - Enterprise SaaS visual style.
   - No marketing hero.
   - No neon, dark mode, heavy gradients, or decorative illustrations.
   - No card-inside-card layout.
   - 8px card radius.
   - Tables and charts are readable.

5. Responsiveness
   - Desktop uses 12-column dashboard layout.
   - Tablet stacks cleanly.
   - Mobile uses single-column layout.
   - No overflow or text overlap.

6. PRD coverage
   - Six KPI cards are implemented.
   - Business Performance Trend is implemented.
   - Regional Performance is implemented.
   - Business Unit Performance is implemented.
   - Business Health Overview is implemented.
   - Partner Performance Center is implemented.
   - AI Executive Insights is implemented.

7. Validation
   - `npm run lint` passes.
   - `npm run build` passes.
   - Any existing tests pass if present.
