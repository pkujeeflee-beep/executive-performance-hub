# Executive Performance Hub Phase 2 Engineering Action Plan

## Document Status

Status: Ready for development handoff

Owner: Engineering Group

Audience: Code Execution / Development Group

Source documents:

- `Phase 2 Workstream Plan.md`
- `Phase 2 Product Group Deliverables.md`
- `Phase 2 Design Group Deliverable.md`
- Current Phase 1 codebase

Purpose: Convert Phase 2 product and design handoff into a precise development action plan and build instruction set.

---

# 1. Phase 2 Engineering Scope

Phase 2 upgrades the current Phase 1 dashboard from a strong BI-style executive dashboard into an AI-assisted executive reporting system.

The approved story is:

```txt
Business Performance -> Risk Detection -> AI Insight -> Recommended Management Action
```

Phase 2 must add exactly three modules:

1. AI Executive Insights
2. Business Health Overview
3. Partner Performance Center

The implementation must preserve:

- Single-page dashboard
- Static mock data only
- Existing Next.js 15 App Router structure
- Existing TypeScript, TailwindCSS, shadcn/ui, Recharts, and Lucide React stack
- Existing enterprise SaaS visual system

Do not add:

- Authentication
- Database
- Supabase
- Backend services
- Real OpenAI calls
- Real API integration
- Multi-page navigation
- Admin configuration
- File upload
- Custom dashboard builder
- Complex filters
- Real client data

---

# 2. Current Codebase Baseline

The current Phase 1 implementation already contains:

```txt
/app
  layout.tsx
  page.tsx
  globals.css

/components/dashboard
  BusinessPerformanceTrend.tsx
  BusinessUnitPerformanceTable.tsx
  DashboardHeader.tsx
  ExecutiveDashboard.tsx
  KpiCard.tsx
  KpiGrid.tsx
  RegionalPerformanceChart.tsx
  TopNavigation.tsx

/components/shared
  ChartCard.tsx
  ProgressBar.tsx
  SectionHeader.tsx
  StatusBadge.tsx
  TrendBadge.tsx

/components/ui
  badge.tsx
  button.tsx
  card.tsx

/data
  executive-dashboard.mock.ts

/types
  dashboard.ts

/lib
  constants.ts
  formatters.ts
  utils.ts
```

Phase 1 already covers:

- Executive KPI Overview
- Business Performance Trend
- Regional Performance
- Business Unit Performance
- Static mock data
- Existing dashboard shell

Phase 2 should extend this structure rather than replace it.

---

# 3. Required Information Architecture Update

Update the page order to match the Phase 2 design handoff.

Desktop order:

```txt
Top Navigation
Dashboard Header
KPI Grid
Primary Analysis Row
├── Business Performance Trend, 8 columns
└── AI Executive Insights, 4 columns
Secondary Analysis Row
├── Regional Performance, 6 columns
└── Business Health Overview, 6 columns
Detail Row
├── Business Unit Performance, 7 columns
└── Partner Performance Center, 5 columns
```

Mobile order:

```txt
Top Navigation
Dashboard Header
KPI Grid
AI Executive Insights
Business Performance Trend
Business Health Overview
Regional Performance
Business Unit Performance
Partner Performance Center
```

Implementation note:

- Desktop can use CSS grid ordering.
- Mobile should prioritize AI Insights before deeper analytical tables because AI is the Phase 2 differentiator.

---

# 4. File-Level Development Tasks

## 4.1 Update Types

Modify:

```txt
types/dashboard.ts
```

Add these types and interfaces:

```ts
export type Confidence = "high" | "medium" | "low";

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
```

Extend `ExecutiveDashboardData`:

```ts
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

## 4.2 Update Mock Data

Modify:

```txt
data/executive-dashboard.mock.ts
```

Add:

- `businessHealth`
- `partners`
- `insights`

Business Health required data:

```txt
Healthy: 56%
Attention: 31%
Risk: 13%
```

Partner data:

```txt
Horizon Partners: 2.4M, +15%, satisfaction 92, score 89, strategic
Vertex Consulting: 2.1M, +11%, satisfaction 88, score 83, strategic or stable
Prime Solutions: 1.8M, +4%, satisfaction 76, score 70, watch
Atlas Group: 1.6M, +7%, satisfaction 81, score 74, stable
Nova Network: 1.2M, -3%, satisfaction 68, score 58, risk
```

AI insight questions must be exactly:

1. Why is growth slowing?
2. Which regions require attention?
3. What are the biggest risks?
4. Which business units underperformed?
5. What should leadership prioritize?

Each insight must include:

- Executive Summary
- Key Drivers
- Opportunities
- Risks
- Recommended Actions
- Related Metrics
- Risk Level
- Confidence

The default visible answer should reinforce:

```txt
The business remains in growth mode, but growth quality is weakening. Central Region, Horizon, and Nova Network require focused leadership attention.
```

## 4.3 Add Insight Helper

Create:

```txt
lib/insights.ts
```

Recommended functions:

```ts
import type { AiExecutiveInsight } from "@/types/dashboard";

export function getDefaultInsight(insights: AiExecutiveInsight[]) {
  return insights[0];
}

export function getInsightById(
  insights: AiExecutiveInsight[],
  questionId: string
) {
  return insights.find((insight) => insight.questionId === questionId) ?? insights[0];
}
```

Keep this helper static. Do not add network calls.

## 4.4 Update Constants

Modify:

```txt
lib/constants.ts
```

Add status labels for:

```txt
strategic
watch
risk
Healthy
Attention
Risk
```

Add or reuse semantic colors:

```txt
healthy / strategic: green or blue-green soft treatment
attention / watch: amber soft treatment
risk: red soft treatment
stable: gray or green soft treatment
```

## 4.5 Add AI Executive Insights Component

Create:

```txt
components/dashboard/AiExecutiveInsights.tsx
```

Requirements:

- Client component using React state.
- Uses preset question buttons only.
- No text input.
- No chat composer.
- No API calls.
- Uses all five approved questions.
- Displays selected insight response.
- Response sections:
  - Executive Summary
  - Key Drivers
  - Opportunities
  - Risks
  - Recommended Actions
- Uses a Lucide icon such as `Sparkles`, `Brain`, or `BotMessageSquare`.
- Uses compact pill buttons with clear selected state.
- Keeps copy concise and executive-grade.

Desktop placement:

- Primary analysis row
- Right side
- 4 columns
- Visually aligned with Business Performance Trend

Mobile placement:

- Directly after KPI Grid

## 4.6 Add Business Health Overview Component

Create:

```txt
components/dashboard/BusinessHealthOverview.tsx
```

Requirements:

- Shows Healthy, Attention, Risk categories.
- Uses a stacked horizontal status bar.
- Shows percentage for each segment.
- Shows summary, primary risk or implication, and recommended action for each category.
- Uses semantic soft backgrounds.
- Does not use a pie chart.
- Does not use decorative progress graphics.

Desktop placement:

- Secondary analysis row
- Right side
- 6 columns
- Paired with Regional Performance

Mobile placement:

- After AI Insights and Business Performance Trend

## 4.7 Add Partner Performance Center Component

Create:

```txt
components/dashboard/PartnerPerformanceTable.tsx
```

Requirements:

- Ranks all five approved partners.
- Columns:
  - Partner
  - Contribution
  - Growth
  - Satisfaction
  - Score / Status
  - Suggested Action
- Shows strongest and weakest partners clearly.
- Nova Network must be visually identifiable as a risk.
- Uses compact status badges and score/progress treatment.
- Keeps row text short and specific.
- Mobile should avoid cramped columns; collapse to the most important columns if needed.

Desktop placement:

- Detail row
- Right side
- 5 columns
- Paired with Business Unit Performance

Mobile placement:

- After Business Unit Performance

## 4.8 Update Dashboard Composition

Modify:

```txt
components/dashboard/ExecutiveDashboard.tsx
```

Current layout:

```txt
KPI Grid
Business Performance Trend + Regional Performance
Business Unit Performance
```

Required Phase 2 layout:

```txt
KPI Grid
Business Performance Trend + AI Executive Insights
Regional Performance + Business Health Overview
Business Unit Performance + Partner Performance Center
```

Pass new data props:

```tsx
<AiExecutiveInsights insights={data.insights} />
<BusinessHealthOverview data={data.businessHealth} />
<PartnerPerformanceTable data={data.partners} />
```

Use responsive classes so the desktop grid matches:

```txt
Business Performance Trend: xl:col-span-8
AI Executive Insights: xl:col-span-4
Regional Performance: xl:col-span-6
Business Health Overview: xl:col-span-6
Business Unit Performance: xl:col-span-7
Partner Performance Center: xl:col-span-5
```

---

# 5. Component Design Rules

Use the existing Phase 1 visual system:

- Background: light slate surface
- Cards: white, 1px border, 8px radius, subtle shadow
- Typography: restrained and executive-friendly
- Numbers: tabular alignment
- Charts: blue primary, gray support series, semantic colors only for status
- Tables: compact rows, readable spacing, strong numeric alignment
- Icons: Lucide only, 14-18px

Do not introduce:

- Marketing hero section
- Decorative illustration
- Dark mode
- Neon color
- Heavy gradient
- Heavy shadow
- Purple-heavy AI styling
- Card inside card
- Toy chatbot styling

---

# 6. Implementation Sequence

## Step 1: Data Contract

1. Extend `types/dashboard.ts`.
2. Extend `data/executive-dashboard.mock.ts`.
3. Add `lib/insights.ts`.
4. Extend `lib/constants.ts`.
5. Run `npm run typecheck`.

Exit criteria:

- `ExecutiveDashboardData` includes Phase 2 data.
- Mock data satisfies all required Phase 2 fields.
- Typecheck passes or only reports issues directly caused by components not yet wired.

## Step 2: Build New Modules

1. Create `AiExecutiveInsights.tsx`.
2. Create `BusinessHealthOverview.tsx`.
3. Create `PartnerPerformanceTable.tsx`.
4. Reuse existing shared components where possible:
   - `ChartCard`
   - `ProgressBar`
   - `SectionHeader`
   - `StatusBadge`
   - `Button`
   - `Badge`

Exit criteria:

- Each component renders from typed props.
- No business data is hardcoded inside components.
- No `any`.
- No API calls.

## Step 3: Wire Dashboard Layout

1. Update `ExecutiveDashboard.tsx` imports.
2. Replace the current two-row layout with the Phase 2 layout.
3. Verify desktop column spans.
4. Verify mobile order places AI early.

Exit criteria:

- All Phase 2 modules appear on the page.
- Existing Phase 1 modules still render correctly.
- Single-page structure is preserved.

## Step 4: UI Polish

1. Align AI card height with Business Performance Trend on desktop.
2. Keep Business Health visually paired with Regional Performance.
3. Keep Partner Performance visually paired with Business Unit Performance.
4. Make Nova Network risk visible but not visually noisy.
5. Ensure recommended actions are visible and concise.
6. Test text wrapping at mobile widths.

Exit criteria:

- First viewport communicates performance, risk, AI interpretation, and action.
- No text overlap.
- No horizontal overflow.
- No cramped table rows.

## Step 5: QA and Screenshots

Run:

```bash
npm run lint
npm run typecheck
npm run build
```

Then update screenshots for:

1. Full dashboard
2. AI Insights close-up
3. Business Health / Risk close-up
4. Partner Performance close-up

If using Playwright, save outputs under the existing screenshot output folder.

Exit criteria:

- Lint passes.
- Typecheck passes.
- Production build passes.
- Main page renders.
- Screenshot set is updated.

---

# 7. Product Acceptance Checklist

AI Executive Insights is complete when:

- It includes exactly the five approved preset questions.
- It uses preset buttons only.
- It has no free-form chat input.
- It explains visible dashboard data.
- It includes Executive Summary, Key Drivers, Opportunities, Risks, and Recommended Actions.
- It makes the demo feel more valuable than a normal dashboard.

Business Health Overview is complete when:

- It shows Healthy, Attention, and Risk categories.
- It uses a stacked horizontal status bar.
- It makes business health understandable at a glance.
- It explains why risk exists.
- It gives a management action for each category.

Partner Performance Center is complete when:

- It ranks the five approved partners.
- It shows revenue contribution, growth, satisfaction, performance score, status, and action.
- It makes Horizon Partners and Vertex Consulting read as strong.
- It makes Nova Network read as the clearest partner risk.
- It supports commercial decision-making, not just reporting.

---

# 8. Engineering QA Checklist

Scope:

- Single page only.
- Static mock data only.
- No backend.
- No database.
- No real AI.
- No real API.

Architecture:

- New types live in `types/dashboard.ts`.
- New mock data lives in `data/executive-dashboard.mock.ts`.
- Static insight selection helper lives in `lib/insights.ts`.
- Components are placed under `components/dashboard`.
- Shared UI patterns remain under `components/shared` or `components/ui`.

Code quality:

- No `any`.
- No duplicated mock data.
- No hardcoded Phase 2 business data inside components.
- Props are typed.
- Components are readable and focused.

Responsive:

- Desktop uses the approved 12-column composition.
- Tablet stacks cleanly.
- Mobile puts AI Insights early.
- Tables remain readable.
- No overflow or text overlap.

Validation:

- `npm run lint` passes.
- `npm run typecheck` passes.
- `npm run build` passes.

---

# 9. Build Execution Prompt for Development Group

```txt
You are the Code Execution / Development Group for Executive Performance Hub Phase 2.

Read and follow:
- Phase 2 Workstream Plan.md
- Phase 2 Product Group Deliverables.md
- Phase 2 Design Group Deliverable.md
- Phase 2 Engineering Action Plan.md

Goal:
Upgrade the current Phase 1 dashboard into the approved Phase 2 AI-assisted executive reporting demo.

Strict scope:
- Add exactly three modules:
  1. AI Executive Insights
  2. Business Health Overview
  3. Partner Performance Center
- Use static mock data only.
- Preserve the single-page dashboard.
- Preserve the existing Next.js 15, TypeScript, TailwindCSS, shadcn/ui, Recharts, and Lucide React stack.

Do not add:
- Authentication
- Supabase
- Database
- Backend services
- Real OpenAI calls
- Real API integration
- New pages
- Admin configuration
- File upload
- Custom dashboard builder
- Complex filters
- Real client data

Implementation tasks:

1. Update `types/dashboard.ts`.
   - Add BusinessHealthCategory.
   - Add PartnerPerformance.
   - Add AiExecutiveInsight.
   - Add Confidence.
   - Extend ExecutiveDashboardData with businessHealth, partners, and insights.

2. Update `data/executive-dashboard.mock.ts`.
   - Add businessHealth data:
     Healthy 56%, Attention 31%, Risk 13%.
   - Add partner data:
     Horizon Partners, Vertex Consulting, Prime Solutions, Atlas Group, Nova Network.
   - Add all five approved AI insight questions:
     Why is growth slowing?
     Which regions require attention?
     What are the biggest risks?
     Which business units underperformed?
     What should leadership prioritize?
   - Each AI response must include:
     Executive Summary, Key Drivers, Opportunities, Risks, Recommended Actions, Related Metrics, Risk Level, Confidence.

3. Create `lib/insights.ts`.
   - Add static helper functions for default and selected insight lookup.
   - Do not add API calls.

4. Update `lib/constants.ts`.
   - Add partner status labels and status color support for strategic, stable, watch, risk.
   - Reuse existing semantic color direction.

5. Create `components/dashboard/AiExecutiveInsights.tsx`.
   - Client component.
   - Uses preset question buttons only.
   - No free-form input.
   - No chatbot composer.
   - No network request.
   - Displays selected insight response sections:
     Executive Summary, Key Drivers, Opportunities, Risks, Recommended Actions.
   - Use Lucide icon and compact executive styling.

6. Create `components/dashboard/BusinessHealthOverview.tsx`.
   - Shows Healthy, Attention, Risk.
   - Uses stacked horizontal status bar.
   - Shows percentage, summary, primary risk or implication, and recommended action.
   - No pie chart.

7. Create `components/dashboard/PartnerPerformanceTable.tsx`.
   - Ranks all five partners.
   - Shows Partner, Contribution, Growth, Satisfaction, Score / Status, Suggested Action.
   - Make Nova Network visibly risk.
   - Keep mobile readable.

8. Update `components/dashboard/ExecutiveDashboard.tsx`.
   - New desktop layout:
     Business Performance Trend, 8 columns + AI Executive Insights, 4 columns.
     Regional Performance, 6 columns + Business Health Overview, 6 columns.
     Business Unit Performance, 7 columns + Partner Performance Center, 5 columns.
   - Mobile layout should place AI Insights directly after KPI Grid.

9. Polish UI.
   - Keep existing enterprise SaaS visual system.
   - No marketing hero.
   - No decorative illustrations.
   - No dark mode.
   - No neon.
   - No heavy shadows.
   - No purple-heavy AI styling.
   - No card-inside-card layout.

10. Validate.
   - Run `npm run lint`.
   - Run `npm run typecheck`.
   - Run `npm run build`.
   - Fix all errors before completion.

11. Screenshot.
   - Capture or update:
     Full dashboard.
     AI Insights close-up.
     Business Health / Risk close-up.
     Partner Performance close-up.

Completion definition:
- All three Phase 2 modules are implemented.
- The approved business story is visible:
  The business is still growing, but growth quality is weakening. Central Region, Horizon, and Nova Network require leadership attention. The AI layer turns those signals into clear management actions.
- The app remains single-page and static.
- Lint, typecheck, and production build pass.
- The demo is ready for design review and screenshot packaging.
```

---

# 10. Final Handoff

Engineering Group confirms Phase 2 can be implemented without backend infrastructure.

The development group should focus only on the approved static dashboard extension:

```txt
AI Executive Insights + Business Health Overview + Partner Performance Center
```

This is the work required to complete the Phase 2 promise:

```txt
We help business leaders automate reporting, detect performance risks, and turn data into executive actions.
```
