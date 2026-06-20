# Executive Performance Hub Design Spec

## 1. Design Direction

Executive Performance Hub should feel like a real enterprise SaaS product, not a dashboard demo or marketing landing page.

The visual direction is an executive operating console: calm, precise, premium, data-dense, and action-oriented. The interface should help a first-time visitor understand business performance, growth trends, strategic risks, and business health within 30 seconds.

Reference blend:

- Vercel provides the base: white surfaces, black-gray typography, precise spacing, minimal buttons, and strong restraint.
- Linear provides the structure: clean hierarchy, compact sections, crisp borders, fast-scanning layouts, and a focused product feel.
- Notion provides content organization: readable tables, simple grouping, and low-friction information architecture.
- Retool provides dashboard credibility: dense but controlled data layouts, practical filters, charts, and operational tables.
- Stripe provides polish: refined micro-interactions, soft accent color, subtle elevation, and premium detail.

Avoid:

- Marketing-style hero sections
- Decorative illustrations
- Dark mode
- Neon colors
- Glassmorphism
- Heavy shadows
- Oversized rounded cards
- Card-inside-card layouts
- Large gradient backgrounds
- Overly colorful chart palettes

## 2. Information Hierarchy

The dashboard should organize information from executive summary to analytical detail.

Priority order:

1. Global context: product name, reporting period, scope, filters, and last updated timestamp.
2. Executive status: short performance summary and high-level business health signal.
3. KPI overview: six primary metrics that define current performance.
4. Primary analysis: business performance trend compared with forecast and target.
5. AI insight: structured interpretation of the current data and recommended actions.
6. Operational breakdown: regional, business unit, partner, and health analysis.
7. Detail tables: ranked performance details for scanning and comparison.

The first viewport should answer:

- Is performance on track?
- Is growth improving or slowing?
- Where are the risks?
- What should leadership inspect next?

## 3. Homepage Layout

Use a desktop-first 12-column grid with responsive stacking on smaller screens.

Recommended page structure:

```text
Top Navigation
├── Product name
├── Dashboard scope
├── Date range selector
├── Region or business unit filter
└── Export / refresh action

Main Dashboard
├── Header Summary
│   ├── Page title
│   ├── Executive status badge
│   └── Last updated timestamp
│
├── KPI Grid
│   └── Six KPI cards
│
├── Primary Analysis Row
│   ├── Business Performance Trend, 8 columns
│   └── AI Executive Insights, 4 columns
│
├── Secondary Analysis Row
│   ├── Regional Performance, 6 columns
│   └── Business Health Overview, 6 columns
│
└── Detail Row
    ├── Business Unit Performance, 7 columns
    └── Partner Performance Center, 5 columns
```

Responsive behavior:

- Desktop: 12-column grid with side-by-side analysis cards.
- Tablet: two-column KPI grid and stacked chart rows.
- Mobile: single-column layout with KPI cards first, then AI insight, then charts and tables.

Top navigation should be quiet and functional. It should not compete with the dashboard content.

## 4. KPI Area Design

The KPI area is the main executive scanning layer.

KPI cards:

- Revenue
- Growth Rate
- Forecast Accuracy
- Operating Margin
- Customer Retention
- Business Health Score

Recommended layout:

- Desktop: 3 columns x 2 rows.
- Tablet: 2 columns x 3 rows.
- Mobile: 1 column x 6 rows.

KPI card anatomy:

```text
Metric label
Primary value
Trend badge
Comparison context
```

Example:

```text
Revenue
$42.8M
+12.4%
vs previous period
```

Visual rules:

- Metric label: small, muted, medium weight.
- Primary value: largest element in the card.
- Trend badge: compact, semantic, and lightly colored.
- Comparison context: short and secondary.
- Use tabular numbers for clean financial alignment.
- Do not place dense charts inside KPI cards.

Recommended emphasis:

- Business Health Score can use a slightly stronger status treatment.
- Forecast Accuracy and Operating Margin should include clear positive, warning, or risk semantics.
- Revenue should appear first and feel like the primary business metric.

## 5. Chart Layout Design

Charts should be analytical and restrained. They should explain performance, not decorate the page.

### Business Performance Trend

Primary chart, 8 columns on desktop.

Chart type:

- Line chart with three series.

Series:

- Actual Performance: primary blue, strongest line.
- Forecast: slate gray or blue-gray, dashed line.
- Target: light gray, thin line.

Behavior:

- Tooltip should show actual, forecast, target, and variance.
- Legend should be compact and placed near the chart header.
- Y-axis should use abbreviated values.
- X-axis should show Jan through Jun.

Footer insight row:

- Best month
- Largest variance
- Current run rate

### Regional Performance

Chart type:

- Horizontal bar chart.

Rules:

- Sort regions by revenue or performance score.
- Use one primary bar color.
- Show growth rate as a right-aligned label or compact badge.
- Use warning or danger only for underperformance.

### Business Health Overview

Chart type:

- Stacked horizontal status bar.

Segments:

- Healthy
- Attention
- Risk

Supporting rows:

- Healthy percentage and short summary.
- Attention percentage and short summary.
- Risk percentage and short summary.

Avoid pie charts unless the design needs a compact secondary visual. A stacked bar is easier to compare and feels more SaaS-native.

### Tables

Business Unit Performance:

- Product-like data table.
- Columns: Business Unit, Revenue, Growth, Margin, Customer Retention, Performance Score.
- Row height: 52-60px.
- Forecast or score values may use compact progress indicators.

Partner Performance Center:

- Ranking table.
- Columns: Partner Name, Revenue Contribution, Growth Rate, Satisfaction Score, Performance Score.
- Score should use a compact badge or progress bar.
- Underperforming partners should use subtle amber or red status treatment.

## 6. AI Executive Insight Module

The AI module should feel like an executive analyst panel, not a chatbot toy.

Recommended placement:

- Desktop: right side of the primary analysis row, 4 columns.
- Tablet and mobile: directly after KPI cards or after the primary trend chart.

Module structure:

```text
AI Executive Insights
Based on current dashboard data

Preset Questions
Why is growth slowing?
Which regions require attention?
What are the biggest risks?
Which business units underperformed?
What should leadership prioritize?

Response
Executive Summary
Key Drivers
Risks
Recommended Actions
```

Interaction model:

- Use preset question buttons, not a free-form chat input for MVP.
- The selected question updates the response area.
- Responses should be concise, structured, and executive-friendly.

Response design:

- Executive Summary: one short paragraph.
- Key Drivers: 2-3 bullet points.
- Risks: 1-2 specific risk statements.
- Recommended Actions: 2-3 short action items.

Visual treatment:

- Slightly more refined than standard cards.
- Use a subtle surface gradient from white to off-white if needed.
- Header may use a Lucide icon such as Sparkles or Brain.
- Keep AI accent minimal and professional.

## 7. Color System

Overall palette:

- White and cool gray surfaces.
- Near-black primary text.
- Blue as the main accent.
- Semantic colors only for status and risk.

Base colors:

```css
--background: #F8FAFC;
--surface: #FFFFFF;
--surface-muted: #F3F4F6;
--border: #E5E7EB;
--border-strong: #D1D5DB;
--text-primary: #111827;
--text-secondary: #4B5563;
--text-muted: #6B7280;
```

Primary accent:

```css
--primary: #2563EB;
--primary-soft: #EFF6FF;
--primary-border: #BFDBFE;
```

Status colors:

```css
--success: #15803D;
--success-soft: #ECFDF3;
--warning: #B45309;
--warning-soft: #FFFBEB;
--danger: #B91C1C;
--danger-soft: #FEF2F2;
--neutral: #374151;
--neutral-soft: #F3F4F6;
```

Chart colors:

```css
--chart-actual: #2563EB;
--chart-forecast: #64748B;
--chart-target: #CBD5E1;
--chart-positive: #16A34A;
--chart-warning: #D97706;
--chart-risk: #DC2626;
```

Color rules:

- Use blue for the main action and primary data series.
- Use gray for secondary series, borders, and supporting text.
- Use green, amber, and red only when communicating status.
- Do not assign a different bright color to every chart category.

## 8. Typography

Recommended font:

```css
font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Type scale:

```css
Page title: 28px / 36px / 700
Section title: 16px / 24px / 600
Card label: 12px / 16px / 500
KPI value: 30px / 38px / 700
Body: 14px / 22px / 400
Table header: 12px / 16px / 600
Table cell: 14px / 20px / 400
Badge: 12px / 16px / 500
```

Rules:

- Use tabular numbers for KPIs, tables, and chart labels.
- Do not use negative letter spacing.
- Keep headings restrained.
- Let data values, not oversized titles, create emphasis.
- Use muted labels to create hierarchy without adding visual clutter.

## 9. Spacing System

Use a 4px-based spacing system.

```css
4px: xs
8px: sm
12px: md
16px: base
20px: lg
24px: xl
32px: 2xl
40px: 3xl
48px: 4xl
```

Layout spacing:

```css
Desktop page padding: 32px
Tablet page padding: 24px
Mobile page padding: 16px
Major section gap: 24px
Grid gap: 16px
Card padding: 20-24px
Table cell padding: 12px 16px
```

Recommended dimensions:

```css
Top navigation height: 64px
KPI card min-height: 132px
Primary chart card min-height: 420px
AI insight card min-height: 420px
Secondary chart card min-height: 340px
Table card min-height: 360px
```

Spacing principles:

- Use consistent vertical rhythm across sections.
- Keep dense tables compact but readable.
- Use whitespace to separate groups, not decorative dividers.
- Avoid large empty hero-like areas.

## 10. Card Design System

Cards should feel precise, light, and product-grade.

Base card:

```css
background: #FFFFFF;
border: 1px solid #E5E7EB;
border-radius: 8px;
box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
```

Card rules:

- Use 8px radius by default.
- Keep shadows subtle.
- Prefer borders over heavy elevation.
- Do not place cards inside cards.
- Do not use large decorative gradients.
- Keep card headers stable and predictable.

Card header:

```text
Title
Optional subtitle
Optional compact action
```

Header typography:

- Title: 16px, semibold.
- Subtitle: 13px, muted.
- Actions: icon button or compact text button.

KPI card:

```css
padding: 20px;
min-height: 132px;
```

Chart card:

```css
padding: 24px;
min-height: 420px;
```

Table card:

```css
padding: 0;
overflow: hidden;
```

AI insight card:

```css
border-color: #D8DEE8;
background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
```

Hover and interaction:

- Buttons and filter controls may use subtle background changes.
- Cards should not jump or scale aggressively on hover.
- Table rows may use a light gray hover state.
- Active question buttons in the AI module should have a clear selected state.

## 11. Component Guidance

Recommended UI components:

- Top navigation
- Date range selector
- Filter button group
- KPI card
- Trend badge
- Chart card
- Data table
- Status badge
- Progress indicator
- AI insight panel
- Empty and loading states

Icon usage:

- Use Lucide icons.
- Icons should be 14-18px.
- Use icons to support scanability, not decoration.
- Prefer icon buttons for actions like export, refresh, and filter.

Button style:

- Primary button: black or primary blue depending on context.
- Secondary button: white surface with gray border.
- Ghost button: transparent with subtle hover.

## 12. Portfolio Quality Bar

The final dashboard should look production-ready at first glance.

Quality checks:

- The first viewport communicates performance clearly.
- KPI hierarchy is instantly scannable.
- Tables feel like real SaaS tables, not placeholder lists.
- Charts use restrained colors and clear labels.
- AI insight feels useful and executive-grade.
- Layout remains stable across desktop, tablet, and mobile.
- No text overlaps or cramped card content.
- The product feels closer to Vercel, Linear, Retool, Notion, and Stripe than to a generic admin template.
