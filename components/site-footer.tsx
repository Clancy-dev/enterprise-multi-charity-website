import Link from "next/link";
import { Globe } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Globe className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                CharitySphere
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A global humanitarian platform connecting donors with verified
              charities worldwide. Together, we create lasting impact.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Platform
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/charities"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Browse Charities
                </Link>
              </li>
              <li>
                <Link
                  href="/#stats"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Our Impact
                </Link>
              </li>
              <li>
                <Link
                  href="/#partners"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonials"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              For Organizations
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <span className="text-sm text-muted-foreground">
                  Register Your Charity
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Admin Dashboard
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Reporting Tools
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  API Documentation
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-muted-foreground">
                info@charitysphere.org
              </li>
              <li className="text-sm text-muted-foreground">
                +1 (800) 555-GIVE
              </li>
              <li className="text-sm text-muted-foreground">
                100 Impact Plaza, Suite 400
                <br />
                New York, NY 10001
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            2026 CharitySphere Enterprise. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </span>
            <span className="text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </span>
            <span className="text-xs text-muted-foreground hover:text-foreground">
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
