import { Shield, Globe, BarChart3, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Charities",
    description:
      "Every organization on our platform undergoes rigorous verification to ensure legitimacy and accountability.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Connect with charities operating in over 50 countries, spanning every major humanitarian sector.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description:
      "Track every donation with real-time progress updates and comprehensive impact reports.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption, role-based access controls, and PCI-compliant payment processing.",
  },
];

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28" id="about">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              About the Platform
            </span>
            <h2 className="mt-4 text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Enterprise Standard for Humanitarian Giving
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              CharitySphere Enterprise is more than a donation platform. It is a
              comprehensive ecosystem designed to connect, empower, and scale
              humanitarian organizations worldwide. Built for NGO networks,
              foundations, and alliances that demand enterprise-grade reliability.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-card-foreground">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
