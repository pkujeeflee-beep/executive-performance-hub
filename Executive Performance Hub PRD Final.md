# Executive Performance Hub PRD Final

## Document Status

Status: Frozen

Version: Final

Product: Executive Performance Hub

Purpose: This document is the final product requirement baseline for the MVP. Future work should follow this scope without adding new modules, pages, backend systems, authentication, real data integrations, or real AI integrations.

---

# 1. Product Vision

Executive Performance Hub is a modern business intelligence platform for executives, business leaders, and decision-makers.

The platform transforms business data into actionable insights through executive dashboards, performance analytics, and AI-powered recommendations.

Its purpose is to help leaders quickly understand business performance, identify risks, discover opportunities, and make better decisions.

---

# 2. Target Users

## Primary Users

- CEO
- Founder
- Managing Director
- Business Director
- Operations Director
- Commercial Director

## Secondary Users

- Business Analysts
- Strategy Teams
- Operations Teams

---

# 3. Core Business Questions

The product must help answer:

- How is the business performing?
- Are we meeting growth targets?
- Which business units are performing best?
- Which regions require attention?
- What are the biggest risks?
- What actions should leadership take?

---

# 4. Product Goal

The MVP should help a first-time visitor understand business performance, growth trends, strategic risks, and business health within 30 seconds.

It should help leadership identify recommended actions within 2 minutes.

---

# 5. MVP Scope

The MVP is a single-page executive dashboard using static mock data.

## In Scope

1. Executive KPI Overview
2. Business Performance Trend
3. Regional Performance
4. Business Unit Performance
5. Business Health Overview
6. Partner Performance Center
7. AI Executive Insights
8. Static mock data
9. Desktop-first responsive design
10. Portfolio-quality enterprise SaaS UI

## Out of Scope

- Authentication
- User roles and permissions
- Backend services
- Database
- Real API integration
- Real AI integration
- Multi-page navigation
- Drill-down detail pages
- Report export
- Admin configuration
- Data upload
- Custom dashboard builder
- Alerts or notifications

## MVP Freeze Statement

Final MVP scope: Single-page executive performance dashboard + static mock data + preset AI Executive Insights.

---

# 6. Module Priority

## P0 - Must Have

| Priority | Module | Reason |
|---|---|---|
| P0-1 | Executive KPI Overview | Provides immediate executive-level performance snapshot |
| P0-2 | Business Performance Trend | Shows actual performance against forecast and target |
| P0-3 | AI Executive Insights | Converts dashboard data into recommended leadership actions |
| P0-4 | Business Health Overview | Summarizes overall risk distribution |

## P1 - Important

| Priority | Module | Reason |
|---|---|---|
| P1-1 | Regional Performance | Identifies geographic performance gaps |
| P1-2 | Business Unit Performance | Explains contribution, margin, growth, and retention by unit |
| P1-3 | Partner Performance Center | Adds external partner execution view |

## P2 - Not Included in MVP

- Custom filters
- Drill-down detail pages
- Real-time AI chat
- Data source connections
- Admin panel
- Export workflows

---

# 7. User Flow

1. User opens Executive Performance Hub.
2. User reviews six executive KPI cards.
3. User checks actual performance against forecast and target.
4. User reviews regional performance to identify weak areas.
5. User compares business unit performance.
6. User checks overall business health distribution.
7. User reviews partner performance ranking.
8. User selects a preset AI insight question.
9. User reads executive summary, drivers, opportunities, risks, and recommended actions.
10. User understands current business priorities.

---

# 8. Functional Requirements

## Module 1 - Executive KPI Overview

The dashboard must display six KPI cards:

- Revenue
- Growth Rate
- Forecast Accuracy
- Operating Margin
- Customer Retention
- Business Health Score

Each KPI must include:

- Current value
- Previous period comparison
- Trend indicator
- Change percentage or change value
- Status

### Core Fields

| Field | Description |
|---|---|
| id | Unique KPI identifier |
| label | KPI name |
| currentValue | Current metric value |
| previousValue | Previous period value |
| comparisonLabel | Comparison period label |
| changeValue | Absolute change |
| changePercent | Percentage change |
| trend | up, down, or stable |
| status | healthy, attention, or risk |
| unit | $, %, score, or count |
| description | Short executive explanation |

## Module 2 - Business Performance Trend

The dashboard must show an interactive line chart comparing:

- Actual Performance
- Forecast
- Target

The period must cover:

- Jan
- Feb
- Mar
- Apr
- May
- Jun

### Core Fields

| Field | Description |
|---|---|
| month | Month label |
| actualPerformance | Actual business performance value |
| forecast | Forecast value |
| target | Target value |
| varianceToTarget | Difference from target |
| varianceToForecast | Difference from forecast |
| status | ahead, on-track, or behind |

## Module 3 - Regional Performance

The dashboard must show regional revenue and growth rate for:

- North Region
- South Region
- East Region
- West Region
- Central Region

The module must make it easy to identify leading and underperforming regions.

### Core Fields

| Field | Description |
|---|---|
| regionName | Region name |
| revenue | Regional revenue |
| growthRate | Regional growth rate |
| targetAchievement | Target achievement percentage |
| performanceScore | Regional performance score |
| status | leading, stable, attention, or risk |

## Module 4 - Business Unit Performance

The dashboard must show a performance table for:

- Nimbus
- Atlas
- Vertex
- Nova
- Horizon

Columns:

- Revenue
- Growth
- Margin
- Customer Retention
- Performance Score

### Core Fields

| Field | Description |
|---|---|
| unitName | Business unit name |
| revenue | Business unit revenue |
| growth | Growth rate |
| margin | Operating margin |
| customerRetention | Customer retention rate |
| performanceScore | Composite performance score |
| status | strong, stable, or underperforming |

## Module 5 - Business Health Overview

The dashboard must show business health distribution across:

- Healthy
- Attention
- Risk

It must include:

- Percentage distribution
- Business summary

### Core Fields

| Field | Description |
|---|---|
| category | Healthy, Attention, or Risk |
| percentage | Percentage distribution |
| count | Number of business objects in the category |
| summary | Executive summary of the category |
| primaryRisk | Main risk or concern |
| recommendedAction | Recommended management action |

## Module 6 - Partner Performance Center

The dashboard must show a ranked partner table.

Columns:

- Partner Name
- Revenue Contribution
- Growth Rate
- Satisfaction Score
- Performance Score

Sample partners:

- Horizon Partners
- Vertex Consulting
- Prime Solutions
- Atlas Group
- Nova Network

### Core Fields

| Field | Description |
|---|---|
| partnerName | Partner name |
| revenueContribution | Revenue contributed by partner |
| growthRate | Partner growth rate |
| satisfactionScore | Partner satisfaction score |
| performanceScore | Composite partner score |
| status | strategic, stable, watch, or risk |
| action | Suggested management action |

## Module 7 - AI Executive Insights

The dashboard must include preset AI insight questions:

- Why is growth slowing?
- Which regions require attention?
- What are the biggest risks?
- Which business units underperformed?
- What should leadership prioritize?

Each mock AI response must include:

- Executive Summary
- Key Drivers
- Opportunities
- Risks
- Recommended Actions

### Core Fields

| Field | Description |
|---|---|
| questionId | Unique question identifier |
| question | Preset executive question |
| executiveSummary | Short executive-level conclusion |
| keyDrivers | Main factors behind the insight |
| opportunities | Business opportunities |
| risks | Business risks |
| recommendedActions | Recommended leadership actions |
| relatedMetrics | Metrics connected to the insight |
| riskLevel | low, medium, or high |
| confidence | high, medium, or low |

---

# 9. Mock Data Design

## Mock Data Principles

- Data must support a coherent executive business story.
- KPI, trend, region, business unit, partner, health, and AI insight data must be logically consistent.
- The dataset should be compact but realistic.
- The story should show positive overall business performance with clear localized risks.

## Business Story

The business is still growing, but growth momentum is slowing. North Region and South Region are leading. Central Region and Horizon require leadership attention. Nimbus and Atlas are the strongest business units. Nova Network is the weakest partner. Business Health Score remains acceptable but is trending down.

## KPI Mock Data

| KPI | Current | Previous | Change | Status |
|---|---:|---:|---:|---|
| Revenue | $18.4M | $16.9M | +8.9% | healthy |
| Growth Rate | 11.2% | 14.6% | -3.4 pts | attention |
| Forecast Accuracy | 87% | 91% | -4 pts | attention |
| Operating Margin | 22.5% | 24.1% | -1.6 pts | attention |
| Customer Retention | 89% | 92% | -3 pts | attention |
| Business Health Score | 78 | 82 | -4 | attention |

## Business Performance Trend Mock Data

| Month | Actual | Forecast | Target |
|---|---:|---:|---:|
| Jan | 2.6M | 2.5M | 2.6M |
| Feb | 2.8M | 2.7M | 2.8M |
| Mar | 3.1M | 3.0M | 3.1M |
| Apr | 3.0M | 3.2M | 3.3M |
| May | 3.3M | 3.5M | 3.6M |
| Jun | 3.6M | 3.9M | 4.0M |

## Regional Performance Mock Data

| Region | Revenue | Growth | Target Achievement | Score | Status |
|---|---:|---:|---:|---:|---|
| North Region | 4.8M | +16% | 104% | 88 | leading |
| South Region | 4.1M | +13% | 101% | 84 | leading |
| East Region | 3.5M | +9% | 96% | 76 | stable |
| West Region | 3.2M | +4% | 89% | 68 | attention |
| Central Region | 2.8M | -2% | 83% | 59 | risk |

## Business Unit Mock Data

| Unit | Revenue | Growth | Margin | Retention | Score |
|---|---:|---:|---:|---:|---:|
| Nimbus | 5.2M | +18% | 27% | 93% | 91 |
| Atlas | 4.6M | +14% | 25% | 91% | 86 |
| Vertex | 3.7M | +8% | 22% | 88% | 76 |
| Nova | 2.9M | +3% | 19% | 84% | 67 |
| Horizon | 2.0M | -5% | 16% | 79% | 54 |

## Business Health Mock Data

| Category | Percentage | Summary |
|---|---:|---|
| Healthy | 56% | Core business units and leading regions remain strong |
| Attention | 31% | Growth and margin pressure emerging in mid-performing areas |
| Risk | 13% | Central Region and Horizon require leadership intervention |

## Partner Performance Mock Data

| Partner | Revenue Contribution | Growth | Satisfaction | Score |
|---|---:|---:|---:|---:|
| Horizon Partners | 2.4M | +15% | 92 | 89 |
| Vertex Consulting | 2.1M | +11% | 88 | 83 |
| Prime Solutions | 1.8M | +4% | 76 | 70 |
| Atlas Group | 1.6M | +7% | 81 | 74 |
| Nova Network | 1.2M | -3% | 68 | 58 |

---

# 10. AI Insight Templates

## Preset Questions

1. Why is growth slowing?
2. Which regions require attention?
3. What are the biggest risks?
4. Which business units underperformed?
5. What should leadership prioritize?

## Response Template

Each response must follow this format:

1. Executive Summary
2. Key Drivers
3. Opportunities
4. Risks
5. Recommended Actions

## Example Response: Why is growth slowing?

### Executive Summary

Growth remains positive, but momentum is slowing due to weaker performance in Central Region, lower contribution from Horizon, and declining customer retention. The business is still healthy overall, but near-term execution risks are increasing.

### Key Drivers

- Central Region declined by 2% and achieved only 83% of target.
- Horizon business unit declined by 5%.
- Customer retention dropped from 92% to 89%.
- Forecast accuracy fell from 91% to 87%.
- Operating margin decreased by 1.6 percentage points.

### Opportunities

- North Region and South Region remain strong growth engines.
- Nimbus and Atlas can absorb additional commercial investment.
- Top-tier partner performance remains healthy.

### Risks

- Continued decline in Horizon may drag total growth.
- Lower retention may reduce future recurring revenue.
- Forecast misses may create planning and resource allocation issues.

### Recommended Actions

- Run leadership review for Central Region and Horizon.
- Reallocate growth investment toward Nimbus, Atlas, North Region, and South Region.
- Create retention recovery plan for at-risk customers.
- Review forecast assumptions for the next planning cycle.
- Set partner improvement plan for Nova Network.

---

# 11. Design Requirements

The product must feel like a modern executive SaaS product.

## Visual Direction

- Clean
- Executive-friendly
- Premium
- White background
- Light gray surfaces
- Modern typography
- Minimalist layout
- No dark mode
- No gaming style
- No neon colors

## Reference Quality

- Stripe
- Linear
- Notion
- Retool
- HubSpot

---

# 12. Technical Constraints

The product must align with the technical specification:

- Next.js 15
- TypeScript
- TailwindCSS
- shadcn/ui
- Recharts
- Lucide React
- React Hooks
- Static Mock Data
- Vercel deployment

Expected structure:

- /app
- /components
- /data
- /types
- /lib

---

# 13. Success Criteria

The MVP is successful if:

- A first-time visitor understands business performance within 30 seconds.
- The application feels like a real enterprise SaaS product.
- The AI insights provide credible executive recommendations.
- The data story is coherent across KPI, trend, region, business unit, partner, and health modules.
- The product is portfolio-quality and presentation-ready.

---

# 14. Freeze Rules

## Frozen Items

After this document is locked, do not add:

- New pages
- New modules
- Login or permissions
- Backend services
- Database
- Real AI
- Real API
- Data upload
- Export features
- Custom reports
- Deep drill-down analysis

## Allowed Adjustments

Only the following changes are allowed:

- Copy refinement
- Mock data number tuning
- UI visual polish
- Chart presentation improvements
- Field naming consistency

## Final Lock

PRD Status: Frozen

The final MVP is locked as:

Executive Performance Hub MVP = Single-page executive performance dashboard + static mock data + preset AI Executive Insights.
