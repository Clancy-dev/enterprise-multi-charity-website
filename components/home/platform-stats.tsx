"use client";

import { useEffect, useRef, useState } from "react";
import { DollarSign, Megaphone, Building2, Users } from "lucide-react";

const stats = [
  {
    label: "Total Donations Raised",
    value: 34842500,
    prefix: "$",
    suffix: "",
    format: "currency",
    icon: DollarSign,
  },
  {
    label: "Campaigns Launched",
    value: 190,
    prefix: "",
    suffix: "+",
    format: "number",
    icon: Megaphone,
  },
  {
    label: "Charity Organizations",
    value: 147,
    prefix: "",
    suffix: "",
    format: "number",
    icon: Building2,
  },
  {
    label: "Global Donors",
    value: 184790,
    prefix: "",
    suffix: "",
    format: "number",
    icon: Users,
  },
];

function formatStat(value: number, format: string): string {
  if (format === "currency") {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
    return value.toLocaleString();
  }
  if (value >= 1000) return value.toLocaleString();
  return value.toString();
}

function AnimatedCounter({
  value,
  prefix,
  suffix,
  format,
}: {
  value: number;
  prefix: string;
  suffix: string;
  format: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const stepValue = value / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += stepValue;
            if (current >= value) {
              setCount(value);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
      {prefix}
      {formatStat(count, format)}
      {suffix}
    </div>
  );
}

export function PlatformStats() {
  return (
    <section className="py-20 lg:py-28" id="stats">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Platform Impact
          </span>
          <h2 className="max-w-2xl text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Together We Are Creating Lasting Change
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                format={stat.format}
              />
              <p className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
