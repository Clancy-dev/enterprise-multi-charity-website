"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { CharityCard } from "@/components/charity-card";
import { charities } from "@/lib/data";

function CharitiesGridInner() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";
  const category = searchParams.get("category") || "All";
  const sort = searchParams.get("sort") || "featured";

  let filtered = charities.filter((c) => {
    const matchesQuery =
      !query ||
      c.name.toLowerCase().includes(query) ||
      c.shortDescription.toLowerCase().includes(query) ||
      c.category.toLowerCase().includes(query);
    const matchesCategory =
      category === "All" || c.category === category;
    return matchesQuery && matchesCategory;
  });

  switch (sort) {
    case "most-funded":
      filtered = filtered.sort((a, b) => b.totalRaised - a.totalRaised);
      break;
    case "most-donors":
      filtered = filtered.sort((a, b) => b.donorCount - a.donorCount);
      break;
    case "newest":
      filtered = filtered.sort(
        (a, b) => Number.parseInt(b.founded) - Number.parseInt(a.founded)
      );
      break;
    case "name":
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      filtered = filtered.sort(
        (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      );
  }

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 py-20 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
          <span className="text-2xl text-muted-foreground">?</span>
        </div>
        <h3 className="text-lg font-semibold text-foreground">
          No charities found
        </h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Try adjusting your search terms or filters to discover more
          organizations.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="mb-6 text-sm text-muted-foreground">
        Showing{" "}
        <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
        {filtered.length === 1 ? "charity" : "charities"}
        {query && (
          <>
            {" "}
            for &ldquo;
            <span className="font-semibold text-foreground">{query}</span>
            &rdquo;
          </>
        )}
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((charity) => (
          <CharityCard key={charity.id} charity={charity} />
        ))}
      </div>
    </div>
  );
}

export function CharitiesGrid() {
  return (
    <Suspense
      fallback={
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`skeleton-${i}`}
              className="h-80 animate-pulse rounded-xl border border-border bg-muted"
            />
          ))}
        </div>
      }
    >
      <CharitiesGridInner />
    </Suspense>
  );
}
