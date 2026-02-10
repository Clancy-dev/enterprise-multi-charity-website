import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CharityHero } from "@/components/charity/charity-hero";
import { CharityCampaigns } from "@/components/charity/charity-campaigns";
import { CharityEvents } from "@/components/charity/charity-events";
import { CharityGallery } from "@/components/charity/charity-gallery";
import { CharityContact } from "@/components/charity/charity-contact";
import { DonationForm } from "@/components/charity/donation-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BackButton } from "@/components/charity/back-button";
import { charities } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return charities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const charity = charities.find((c) => c.slug === slug);
  if (!charity) return { title: "Charity Not Found | CharitySphere" };

  return {
    title: `${charity.name} | CharitySphere Enterprise`,
    description: charity.shortDescription,
  };
}

export default async function CharityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const charity = charities.find((c) => c.slug === slug);

  if (!charity) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 pt-4 lg:px-8">
          <BackButton />
        </div>
        <CharityHero charity={charity} />

        <section className="py-10 lg:py-14">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    About {charity.name}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {charity.fullDescription}
                  </p>
                </div>

                <Tabs defaultValue="campaigns" className="w-full">
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="campaigns">
                      Campaigns ({charity.campaigns.length})
                    </TabsTrigger>
                    <TabsTrigger value="events">
                      Events ({charity.events.length})
                    </TabsTrigger>
                    <TabsTrigger value="gallery">
                      Gallery ({charity.gallery.length})
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="campaigns" className="mt-6">
                    <CharityCampaigns campaigns={charity.campaigns} />
                  </TabsContent>
                  <TabsContent value="events" className="mt-6">
                    <CharityEvents events={charity.events} />
                  </TabsContent>
                  <TabsContent value="gallery" className="mt-6">
                    <CharityGallery
                      gallery={charity.gallery}
                      name={charity.name}
                    />
                  </TabsContent>
                </Tabs>
              </div>

              <div className="flex flex-col gap-6">
                <DonationForm charity={charity} />
                <CharityContact charity={charity} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
