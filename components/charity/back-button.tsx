"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => router.back()}
      className="gap-2 text-muted-foreground hover:text-foreground"
    >
      <ArrowLeft className="h-4 w-4" />
      <span>Back</span>
    </Button>
  );
}
