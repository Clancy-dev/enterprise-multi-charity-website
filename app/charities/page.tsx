import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CharitiesFilter } from "@/components/charities-filter";
import { CharitiesGrid } from "@/components/charities-grid";

export const metadata: Metadata = {
  title: "Browse Charities | CharitySphere Enterprise",
  description:
    "Discover and support verified charity organizations across education, healthcare, environment, hunger relief, and more.",
};

export default function CharitiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-primary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h1 className="text-balance font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
                Explore Charity Organizations
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/80">
                Browse our curated directory of verified charities making an
                impact across the globe.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-14">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <CharitiesFilter />
            <div className="mt-8">
              <CharitiesGrid />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
