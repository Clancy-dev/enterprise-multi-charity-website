"use client";

import Link from "next/link";
import { useState } from "react";
import { Globe, Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Globe className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Charity Sphere
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/charities"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Charities
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/#testimonials"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Impact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" size="sm" asChild>
            <Link href="/charities">Explore Charities</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/charities" className="gap-1.5">
              <Heart className="h-4 w-4" />
              Donate Now
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-md md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-3">
            <Link
              href="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/charities"
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              onClick={() => setMobileOpen(false)}
            >
              Charities
            </Link>
            <Link
              href="/#about"
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#testimonials"
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              onClick={() => setMobileOpen(false)}
            >
              Impact
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/charities">Explore Charities</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/charities" className="gap-1.5">
                  <Heart className="h-4 w-4" />
                  Donate Now
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
