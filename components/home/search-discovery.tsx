"use client";

import React from "react"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/lib/data";

export function SearchDiscovery() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/charities?q=${encodeURIComponent(query.trim())}`);
    }
  }

  function handleCategory(cat: string) {
    if (cat === "All") {
      router.push("/charities");
    } else {
      router.push(`/charities?category=${encodeURIComponent(cat)}`);
    }
  }

  return (
    <section className="bg-muted/50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Find a Cause That Matters to You
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Search from hundreds of verified charity organizations by name or
            browse by category.
          </p>

          <form onSubmit={handleSearch} className="mt-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search charities by name, mission, or cause..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-14 rounded-xl border-border bg-background pl-12 pr-4 text-base shadow-sm"
              />
            </div>
          </form>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.filter((c) => c !== "All").map((cat) => (
              <button key={cat} type="button" onClick={() => handleCategory(cat)}>
                <Badge
                  variant="secondary"
                  className="cursor-pointer px-3 py-1.5 text-xs font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {cat}
                </Badge>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
