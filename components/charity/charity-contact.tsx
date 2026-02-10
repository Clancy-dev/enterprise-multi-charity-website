import { Mail, Phone, MapPin, Globe, ExternalLink } from "lucide-react";
import type { Charity } from "@/lib/data";

export function CharityContact({ charity }: { charity: Charity }) {
  const contactItems = [
    { icon: Mail, label: "Email", value: charity.email, href: `mailto:${charity.email}` },
    { icon: Phone, label: "Phone", value: charity.phone, href: `tel:${charity.phone}` },
    { icon: MapPin, label: "Address", value: charity.address },
    { icon: Globe, label: "Website", value: charity.website, href: charity.website, external: true },
  ];

  const socialLinks = Object.entries(charity.social).filter(([, url]) => !!url);

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
        <h4 className="mb-4 font-semibold text-card-foreground">
          Contact Information
        </h4>
        <div className="flex flex-col gap-3">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="flex items-start gap-3">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm text-card-foreground">{item.value}</p>
                </div>
              </div>
            );

            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="rounded-lg p-1 transition-colors hover:bg-muted"
                >
                  {content}
                  {item.external && (
                    <ExternalLink className="ml-auto h-3.5 w-3.5 text-muted-foreground" />
                  )}
                </a>
              );
            }

            return (
              <div key={item.label} className="p-1">
                {content}
              </div>
            );
          })}
        </div>
      </div>

      {socialLinks.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <h4 className="mb-4 font-semibold text-card-foreground">
            Social Media
          </h4>
          <div className="flex flex-wrap gap-2">
            {socialLinks.map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-card-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Globe className="h-3.5 w-3.5" />
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
