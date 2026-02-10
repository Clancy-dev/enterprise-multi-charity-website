import Image from "next/image";
import { MapPin, Calendar, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { Charity } from "@/lib/data";
import { formatCurrency } from "@/lib/data";

export function CharityHero({ charity }: { charity: Charity }) {
  const progressPercent = Math.min(
    (charity.totalRaised / charity.targetAmount) * 100,
    100
  );
  const remaining = charity.targetAmount - charity.totalRaised;

  return (
    <section className="relative">
      <div className="relative h-[50vh] min-h-[350px] w-full overflow-hidden">
        <Image
          src={charity.bannerImage || "/placeholder.svg"}
          alt={charity.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.7)]" />
      </div>

      <div className="relative z-10 mx-auto -mt-24 max-w-7xl px-4 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8 lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-primary text-primary-foreground">
                  {charity.category}
                </Badge>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  Founded {charity.founded}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {charity.location}
                </span>
              </div>
              <h1 className="mt-4 text-balance font-serif text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
                {charity.name}
              </h1>
              <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
                {charity.mission}
              </p>

              {charity.website && (
                <a
                  href={charity.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  <Globe className="h-4 w-4" />
                  Visit Website
                </a>
              )}
            </div>

            <div className="w-full shrink-0 lg:w-80">
              <div className="rounded-xl border border-border bg-background p-6">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Total Raised
                    </p>
                    <p className="text-3xl font-bold text-primary">
                      {formatCurrency(charity.totalRaised)}
                    </p>
                  </div>
                  <Progress value={progressPercent} className="h-2" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Goal:{" "}
                      <span className="font-semibold text-card-foreground">
                        {formatCurrency(charity.targetAmount)}
                      </span>
                    </span>
                    <span className="text-muted-foreground">
                      {Math.round(progressPercent)}%
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-4 text-sm">
                    <div className="text-center">
                      <p className="font-semibold text-card-foreground">
                        {charity.donorCount.toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground">Donors</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-card-foreground">
                        {charity.campaignCount}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Campaigns
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-card-foreground">
                        {formatCurrency(remaining > 0 ? remaining : 0)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Remaining
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
