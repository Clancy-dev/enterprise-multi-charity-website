import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="bg-muted/50 py-20 lg:py-28" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="max-w-2xl text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Voices of Impact
          </h2>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Hear from donors, partners, and communities about how CharitySphere
            is making a difference.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="h-8 w-8 text-primary/30" />
              <p className="flex-1 text-sm leading-relaxed text-card-foreground">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-border pt-4">
                <Image
                  src={t.avatar || "/placeholder.svg"}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
