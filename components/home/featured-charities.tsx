import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CharityCard } from "@/components/charity-card";
import { charities } from "@/lib/data";

export function FeaturedCharities() {
  const featured = charities.filter((c) => c.featured).slice(0, 4);

  return (
    <section className="py-20 lg:py-28" id="charities">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Featured Organizations
          </span>
          <h2 className="max-w-2xl text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted Charities Making Real Impact
          </h2>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Discover verified organizations driving change across education,
            healthcare, environment, and humanitarian relief worldwide.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((charity) => (
            <CharityCard key={charity.id} charity={charity} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg" asChild className="gap-2 bg-transparent">
            <Link href="/charities">
              See More Charities
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
