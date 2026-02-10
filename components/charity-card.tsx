import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { Charity } from "@/lib/data";
import { formatCurrency } from "@/lib/data";

export function CharityCard({ charity }: { charity: Charity }) {
  const progressPercent = Math.min(
    (charity.totalRaised / charity.targetAmount) * 100,
    100
  );

  return (
    <Link
      href={`/charities/${charity.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={charity.image || "/placeholder.svg"}
          alt={charity.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <Badge className="bg-primary text-primary-foreground">{charity.category}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold leading-snug text-card-foreground group-hover:text-primary transition-colors">
          {charity.name}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {charity.shortDescription}
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              <span className="font-semibold text-card-foreground">
                {formatCurrency(charity.totalRaised)}
              </span>{" "}
              raised
            </span>
            <span>
              Goal:{" "}
              <span className="font-semibold text-card-foreground">
                {formatCurrency(charity.targetAmount)}
              </span>
            </span>
          </div>
          <Progress value={progressPercent} className="h-1.5" />
        </div>
        <div className="flex items-center justify-between pt-1">
          <span className="text-xs text-muted-foreground">
            {charity.donorCount.toLocaleString()} donors
          </span>
          <span className="flex items-center gap-1 text-xs font-medium text-primary transition-colors group-hover:gap-2">
            View Details
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
