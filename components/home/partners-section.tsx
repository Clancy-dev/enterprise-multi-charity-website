import { partners } from "@/lib/data";

export function PartnersSection() {
  return (
    <section className="py-20 lg:py-28" id="partners">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Partners
          </span>
          <h2 className="max-w-2xl text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Global Institutions
          </h2>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            We partner with leading organizations, foundations, and
            institutions to amplify impact worldwide.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
          {partners.map((p) => (
            <div
              key={p.id}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-lg font-bold text-muted-foreground">
                {p.logo}
              </div>
              <span className="text-center text-xs font-medium text-muted-foreground">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
