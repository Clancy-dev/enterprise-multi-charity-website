import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { FeaturedCharities } from "@/components/home/featured-charities";
import { SearchDiscovery } from "@/components/home/search-discovery";
import { PlatformStats } from "@/components/home/platform-stats";
import { AboutSection } from "@/components/home/about-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { PartnersSection } from "@/components/home/partners-section";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroCarousel />
        <FeaturedCharities />
        <SearchDiscovery />
        <PlatformStats />
        <AboutSection />
        <TestimonialsSection />
        <PartnersSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  );
}
