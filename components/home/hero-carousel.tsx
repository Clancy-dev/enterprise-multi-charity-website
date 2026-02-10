"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

const slides = [
  {
    image: "/images/hero-1.jpg",
    title: "Unite for Global Impact",
    subtitle: "One platform connecting thousands of charities with millions of generous hearts worldwide.",
  },
  {
    image: "/images/hero-2.jpg",
    title: "Every Child Deserves Education",
    subtitle: "Support organizations building schools, training teachers, and empowering young minds.",
  },
  {
    image: "/images/hero-3.jpg",
    title: "Healthcare Without Borders",
    subtitle: "Fund mobile clinics and telemedicine programs that bring healthcare to remote communities.",
  },
  {
    image: "/images/hero-4.jpg",
    title: "Protect Our Planet",
    subtitle: "Join the movement to restore ecosystems, plant forests, and fight climate change.",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.65)]" />
        </div>
      ))}

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="mx-auto max-w-3xl">
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className={`transition-all duration-700 ${
                index === current
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
              }`}
              style={{ display: index === current ? "block" : "none" }}
            >
              <h1 className="text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {slide.title}
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
                {slide.subtitle}
              </p>
            </div>
          ))}

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="h-12 px-8 text-base font-semibold"
            >
              <Link href="/charities" className="gap-2">
                Explore Charities
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-12 border-white/30 bg-white/10 px-8 text-base font-semibold text-white hover:bg-white/20 hover:text-white"
            >
              <Link href="/charities" className="gap-2">
                <Heart className="h-4 w-4" />
                Donate Now
              </Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 flex gap-2">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.image}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-10 bg-white"
                  : "w-4 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
