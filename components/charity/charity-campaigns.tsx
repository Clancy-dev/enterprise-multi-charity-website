import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { Campaign } from "@/lib/data";
import { formatCurrency } from "@/lib/data";

const statusStyles: Record<string, string> = {
  active: "bg-primary text-primary-foreground",
  completed: "bg-muted text-muted-foreground",
  upcoming: "bg-accent text-accent-foreground",
};

export function CharityCampaigns({ campaigns }: { campaigns: Campaign[] }) {
  if (campaigns.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-muted-foreground">
        No active campaigns at this time.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {campaigns.map((campaign) => {
        const pct = Math.min((campaign.raised / campaign.goal) * 100, 100);
        return (
          <div
            key={campaign.id}
            className="rounded-xl border border-border bg-card p-5 shadow-sm"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-card-foreground">
                    {campaign.title}
                  </h4>
                  <Badge className={statusStyles[campaign.status] ?? ""}>
                    {campaign.status}
                  </Badge>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {campaign.description}
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <Progress value={pct} className="h-2" />
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  <span className="font-semibold text-card-foreground">
                    {formatCurrency(campaign.raised)}
                  </span>{" "}
                  of {formatCurrency(campaign.goal)}
                </span>
                <span className="font-semibold text-primary">
                  {Math.round(pct)}%
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
