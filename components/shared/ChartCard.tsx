import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function ChartCard({
  title,
  description,
  children,
  className,
  action
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <SectionHeader title={title} description={description} action={action} />
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
