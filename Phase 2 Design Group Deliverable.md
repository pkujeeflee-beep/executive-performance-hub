# Executive Performance Hub Phase 2 Design Group Deliverable

## Document Status

Status: Ready for Phase 2 engineering and code execution handoff

Owner: Design Group

Inputs:

- Phase 2 Workstream Plan
- Phase 2 Product Group Deliverables
- Executive Performance Hub Design Spec

Purpose: Translate the approved Phase 2 business story into layout, module design, visual hierarchy, screenshot direction, and implementation review criteria.

---

# 1. Design Objective

Phase 2 should make Executive Performance Hub feel like an AI-assisted executive reporting system, not only a polished BI dashboard.

The approved product story is:

```text
Business Performance -> Risk Detection -> AI Insight -> Recommended Management Action
```

The dashboard should communicate the following within 30 seconds:

- Overall revenue is growing.
- Growth momentum is slowing.
- Central Region and Horizon are the clearest risk areas.
- Partner execution is uneven, especially Nova Network.
- The AI layer converts dashboard data into practical management actions.

The experience should remain:

- Executive-friendly
- Calm
- Precise
- Data-dense but readable
- Modern B2B SaaS
- Premium but not decorative

Reference blend:

- Vercel for restraint, white surfaces, and sharp interface discipline.
- Linear for hierarchy, density, and product-grade clarity.
- Retool for practical dashboard credibility.
- Notion for readable structure and tables.
- Stripe for subtle polish and premium interaction detail.

Avoid:

- Marketing hero sections
- Decorative illustrations
- Neon colors
- Dark mode
- Overly colorful charts
- Large gradients
- Heavy shadows
- UI that feels like a toy chatbot

---

# 2. Phase 2 UI Layout Recommendation

Phase 2 should extend the current single-page dashboard. Do not introduce new pages or a separate AI view.

Recommended final page order:

```text
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

Design rationale:

- KPI Grid establishes current performance.
- Business Performance Trend proves the growth slowdown story.
- AI Executive Insights immediately translates data into interpretation and action.
- Regional Performance and Business Health Overview expose risk concentration.
- Business Unit Performance and Partner Performance Center support detailed management follow-up.

Desktop layout:

- Keep the existing max-width page shell.
- Continue using 12-column dashboard rows.
- AI Executive Insights must sit beside the main trend chart.
- Business Health Overview must sit beside Regional Performance.
- Partner Performance Center must sit beside Business Unit Performance.

Tablet layout:

- KPI Grid remains two columns.
- Analysis rows stack vertically.
- AI Executive Insights appears directly after Business Performance Trend.

Mobile layout:

```text
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

Mobile rationale:

- AI should appear early because it is the Phase 2 differentiator.
- Risk and action should be visible before long detail tables.

---

# 3. First Viewport Hierarchy

The first viewport should be optimized for executive scan speed.

Priority order:

1. Header status badge: "Growing, with attention areas."
2. KPI Grid: revenue, growth, forecast accuracy, margin, retention, and business health.
3. Business Performance Trend: April to June variance and weakening momentum.
4. AI Executive Insights: direct interpretation and recommended action.

The first viewport should answer:

- Is the business still healthy?
- Is growth momentum weakening?
- Which areas require leadership attention?
- What should management do next?

Implementation guidance:

- Keep the header concise.
- Do not add a marketing-style hero.
- Do not bury AI Insights below secondary charts on desktop.
- Use short explanatory copy only where it improves interpretation.
- Prefer status labels and concise summaries over long paragraphs.

---

# 4. AI Executive Insights Design

## Placement

Desktop:

- Primary analysis row, right side, 4 columns.
- Height should visually align with the Business Performance Trend card.

Tablet and mobile:

- Place directly after KPI Grid or directly after Business Performance Trend.

## Purpose

AI Executive Insights turns dashboard metrics into management interpretation and recommended action.

It should feel like an executive analyst panel, not a chatbot.

## Required Preset Questions

Use exactly the five approved product questions:

1. Why is growth slowing?
2. Which regions require attention?
3. What are the biggest risks?
4. Which business units underperformed?
5. What should leadership prioritize?

## Card Structure

```text
AI Executive Insights
Generated from current dashboard signals

Preset Question Pills
[Why is growth slowing?]
[Which regions require attention?]
[What are the biggest risks?]
[Which business units underperformed?]
[What should leadership prioritize?]

Executive Summary
Short paragraph

Key Drivers
2-3 bullets

Opportunities
1-2 bullets

Risks
1-2 bullets

Recommended Actions
2-3 action rows
```

## Visual Treatment

- Use a standard card with slightly stronger refinement than normal chart cards.
- Header may use a Lucide Sparkles, Brain, or BotMessageSquare icon.
- Use soft slate or blue-gray accents.
- Preset questions should be compact pill buttons.
- The selected question should use a clear active state.
- Response sections should use small labels, not large headings.
- Recommended actions should look like structured executive action items.

## Content Design Guidance

The visible default response should reinforce the approved product story:

```text
Executive Summary
The business remains in growth mode, but growth quality is weakening. Central Region, Horizon, and Nova Network require focused leadership attention.

Key Drivers
- Growth rate is slowing while revenue remains positive.
- Forecast accuracy declined from 91% to 87%.
- Horizon and Central Region are dragging momentum.

Opportunities
- Reallocate growth investment toward North Region, South Region, Nimbus, and Atlas.

Risks
- Nova Network partner execution may affect revenue contribution and customer experience.

Recommended Actions
- Run a leadership review for Central Region and Horizon.
- Review April to June variance against target and forecast.
- Set a partner improvement plan for Nova Network.
```

Avoid:

- Free-form chat input
- Generic AI wording
- Casual assistant tone
- Overconfident claims not visible in the dashboard
- Long paragraphs
- Purple-heavy AI styling

---

# 5. Business Health Overview Design

## Placement

Desktop:

- Secondary analysis row, right side, 6 columns.
- Pair with Regional Performance so users can connect geography and risk.

Tablet and mobile:

- Place after the primary trend and AI insight modules.

## Purpose

Business Health Overview gives leaders a fast risk distribution view across the business.

It should answer:

```text
How much of the business is healthy, needs attention, or is at risk?
```

## Required Categories

- Healthy
- Attention
- Risk

Each category must include:

- Percentage
- Short summary
- Main risk or opportunity
- Recommended management action

## Recommended Structure

```text
Business Health Overview
Risk distribution across business units, regions, and partner signals

Stacked Status Bar
[Healthy][Attention][Risk]

Healthy
Percentage
Summary
Action

Attention
Percentage
Summary
Action

Risk
Percentage
Summary
Action
```

## Visual Treatment

- Use a stacked horizontal bar as the primary visual.
- Use green, amber, and red only for semantic status.
- Keep each category row compact and readable.
- Put the recommended action in a concise action line.
- Use soft status backgrounds, not saturated blocks.

Recommended copy direction:

```text
Healthy
Investment candidates. North Region, South Region, Nimbus, and Atlas are stable enough to protect and expand.

Attention
Monitoring and coaching priorities. Forecast accuracy, retention, and selected regional momentum need review.

Risk
Leadership intervention priorities. Central Region, Horizon, and Nova Network require focused recovery actions.
```

Avoid:

- Pie chart as the primary visual
- Large empty chart areas
- Decorative progress graphics
- Too many colors
- Abstract health language without recommended action

---

# 6. Partner Performance Center Design

## Placement

Desktop:

- Detail row, right side, 5 columns.
- Pair with Business Unit Performance.

Tablet and mobile:

- Place after Business Unit Performance.

## Purpose

Partner Performance Center helps leadership evaluate external partner contribution and execution quality.

It should answer:

```text
Which partners are driving performance, and which partners need review?
```

## Required Partners

Use the five approved sample partners:

- Horizon Partners
- Vertex Consulting
- Prime Solutions
- Atlas Group
- Nova Network

## Required Fields

- Partner Name
- Revenue Contribution
- Growth Rate
- Satisfaction Score
- Performance Score
- Status
- Suggested Action

## Recommended Table Structure

For desktop:

```text
Partner
Contribution
Growth
Satisfaction
Score / Status
Suggested Action
```

For narrower widths:

```text
Partner
Contribution
Score / Status
Action
```

## Visual Treatment

- Use a compact ranking table.
- Show strongest and weakest partners clearly.
- Use a small progress indicator or score badge for Performance Score.
- Use soft status badges for partner status.
- Suggested Action should be short and specific.
- Table rows should remain clean and high-readability.

Status semantics:

```text
Strategic: protect and expand
Stable: maintain and monitor
Watchlist: review next cycle
Risk: leadership intervention
```

Recommended action examples:

```text
Horizon Partners: Expand account plan
Vertex Consulting: Protect performance
Prime Solutions: Review satisfaction
Atlas Group: Maintain cadence
Nova Network: Set improvement plan
```

Avoid:

- Decorative avatars unless they materially improve scanning.
- Bright partner colors.
- Dense paragraph descriptions in table rows.
- Too many columns on mobile.
- Hiding Nova Network risk in a low-contrast treatment.

---

# 7. Visual System Notes

Use the existing Phase 1 design system and extend it.

Base interface:

- Background: light slate surface.
- Cards: white, 1px border, 8px radius, subtle shadow.
- Typography: restrained, executive-friendly, tabular numbers for metrics.
- Charts: one primary blue, gray supporting series, semantic risk colors only.
- Tables: compact rows, strong numeric alignment, readable spacing.
- Badges: soft backgrounds, small labels, professional tone.
- Icons: Lucide only, 14-18px.

AI module accent:

- Use blue-gray or slate accents.
- A subtle white-to-slate card background is acceptable.
- Do not use purple-heavy AI styling.

Health status mapping:

```text
Healthy: green text on very soft green background
Attention: amber text on very soft amber background
Risk: red text on very soft red background
```

Partner status mapping:

```text
Strategic: blue or green soft badge
Stable: gray or green soft badge
Watchlist: amber soft badge
Risk: red soft badge
```

Card rules:

- Do not put cards inside cards.
- Do not use heavy shadows.
- Do not use large gradients.
- Do not increase border radius beyond the existing product system.
- Use spacing to create hierarchy instead of decorative dividers.

---

# 8. Upwork Portfolio Screenshot Plan

Prepare four Upwork-ready visual assets after implementation.

## Screenshot 1: Full Dashboard

Purpose:

- Show the complete portfolio-ready executive SaaS product.

Frame:

- Desktop full-page capture.
- Include top navigation, header, KPI grid, main trend, AI module, health overview, partner center, and tables.

Success criteria:

- The page feels complete and product-grade.
- No clipped cards.
- No awkward empty space.
- The full story is visible: performance, risk, AI insight, action.

## Screenshot 2: AI Insights Close-Up

Purpose:

- Communicate AI Automation and executive recommendation value.

Frame:

- Crop around Business Performance Trend and AI Executive Insights.
- Show one selected question and the response structure.

Success criteria:

- The selected question is one of the five approved questions.
- The response references growth slowdown, Central Region, Horizon, or Nova Network.
- Recommended actions are visible without scrolling inside the card.

## Screenshot 3: Business Health / Risk Close-Up

Purpose:

- Show risk detection and management triage.

Frame:

- Crop around Regional Performance and Business Health Overview.

Success criteria:

- Healthy, Attention, and Risk are readable.
- Central Region and Horizon risk signals are visually supported.
- Each health category includes a short action or management implication.

## Screenshot 4: Partner Performance Close-Up

Purpose:

- Show operational decision support and partner management value.

Frame:

- Crop around Business Unit Performance and Partner Performance Center.

Success criteria:

- Partner ranking is scannable.
- Horizon Partners and Vertex Consulting read as strong partners.
- Nova Network reads as the clearest partner risk.
- Suggested actions are visible.

---

# 9. Visual Review Checklist After Implementation

Design Group should review the implemented UI against these checks:

- AI Executive Insights appears in the primary analysis row on desktop.
- AI module uses all five approved preset questions.
- AI response structure includes Executive Summary, Key Drivers, Opportunities, Risks, and Recommended Actions.
- AI copy feels like executive analysis, not a chatbot.
- Business Health Overview uses Healthy, Attention, and Risk categories.
- Business Health Overview uses a stacked status bar, not a pie chart.
- Each health category includes percentage, summary, main implication, and action.
- Partner Performance Center ranks all five approved partners.
- Partner rows include contribution, growth, satisfaction, score, status, and suggested action.
- Nova Network is visually identifiable as a risk partner.
- The first viewport communicates performance, risk, AI interpretation, and recommended action.
- Card styling remains consistent with Phase 1.
- No marketing hero or decorative visual section was added.
- No dark mode, neon colors, heavy gradients, or oversized shadows were introduced.
- Text fits inside all cards at desktop, tablet, and mobile sizes.
- Table rows remain readable and do not feel cramped.
- Screenshots can be captured cleanly for Upwork portfolio use.

---

# 10. Handoff Summary

Design Group recommends implementing Phase 2 as a focused extension of the current dashboard:

- AI Executive Insights beside Business Performance Trend.
- Business Health Overview beside Regional Performance.
- Partner Performance Center beside Business Unit Performance.

The design should make the approved business story visible immediately:

```text
The business is still growing, but growth quality is weakening. Central Region, Horizon, and Nova Network require leadership attention. The AI layer turns those signals into clear management actions.
```

This completes the Phase 2 design goal: a premium executive SaaS demo that communicates AI-assisted reporting, risk detection, and leadership action without expanding scope beyond a single-page static mock-data product.
