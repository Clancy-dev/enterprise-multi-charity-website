import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Make a Difference?
            </h2>
            <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-primary-foreground/80">
              Whether you are a donor looking to support meaningful causes or a
              charity seeking to expand your reach, CharitySphere is your
              gateway to global impact.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="h-12 px-8 text-base font-semibold"
            >
              <Link href="/charities" className="gap-2">
                Start Donating
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-12 border-primary-foreground/30 bg-transparent px-8 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/#about" className="gap-2">
                <Building2 className="h-4 w-4" />
                Register Your Charity
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
