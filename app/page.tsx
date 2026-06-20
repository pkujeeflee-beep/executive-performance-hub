import { ExecutiveDashboard } from "@/components/dashboard/ExecutiveDashboard";
import { executiveDashboardMock } from "@/data/executive-dashboard.mock";

export default function Home() {
  return <ExecutiveDashboard data={executiveDashboardMock} />;
}
