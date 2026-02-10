"use client";

import React from "react"

import { useRouter, useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/lib/data";
import { Suspense } from "react";

function CharitiesFilterInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentQuery = searchParams.get("q") || "";
  const currentCategory = searchParams.get("category") || "All";
  const currentSort = searchParams.get("sort") || "featured";

  function updateParams(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "All" && value !== "featured") {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/charities?${params.toString()}`);
  }

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const q = formData.get("q") as string;
    updateParams("q", q);
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <form onSubmit={handleSearch} className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          name="q"
          type="search"
          placeholder="Search charities..."
          defaultValue={currentQuery}
          className="h-11 pl-10"
        />
      </form>

      <div className="flex gap-3">
        <Select
          defaultValue={currentCategory}
          onValueChange={(v) => updateParams("category", v)}
        >
          <SelectTrigger className="h-11 w-[180px]">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          defaultValue={currentSort}
          onValueChange={(v) => updateParams("sort", v)}
        >
          <SelectTrigger className="h-11 w-[160px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="most-funded">Most Funded</SelectItem>
            <SelectItem value="most-donors">Most Donors</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="name">Name A-Z</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export function CharitiesFilter() {
  return (
    <Suspense fallback={<div className="h-11" />}>
      <CharitiesFilterInner />
    </Suspense>
  );
}
