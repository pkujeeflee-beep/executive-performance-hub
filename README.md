# Executive Performance Hub

Portfolio-grade MVP for an executive business performance dashboard. The app uses mock data only and focuses on a polished dashboard experience for growth, forecast quality, regional execution, business unit performance, business health, partner performance, and preset executive insight summaries.

## Tech Stack

- Next.js 15
- TypeScript
- TailwindCSS
- shadcn/ui-style local components
- Recharts
- Lucide React

## Implemented Scope

- Dashboard header and executive reporting context
- KPI overview cards
- Business performance trend chart
- Regional performance chart
- Business unit performance table
- AI Executive Insights panel with preset mock insights
- Business Health Overview
- Partner Performance Center
- Mock data layer and formatting utilities
- Final screenshot and demo video deliverables

## Out of Scope

- Login/authentication
- Database
- API routes
- Real AI API integration
- Production data ingestion

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

## Delivery Assets

Screenshots and the demo video were prepared as separate Upwork delivery assets and are intentionally excluded from this public source repository.

The prepared asset set includes final screenshots under 10MB each and a 30-second MP4 demo video under 100MB.

## Notes

- The app is intentionally static and mock-data driven for portfolio demonstration.
- Security and performance checks were run before final delivery; internal scan artifacts are excluded from the public portfolio repository.
- A clean install may remove the currently extraneous `@emnapi/runtime` package listed by `npm ls`; it is not required by the app code.
