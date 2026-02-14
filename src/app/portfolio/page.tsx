import type { Metadata } from "next";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { PORTFOLIO_PAGE_QUERY, PORTFOLIO_PROPERTIES_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";

export const metadata: Metadata = {
  title: "Portfolio",
};

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=700&q=80",
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=700&q=80",
  "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=700&q=80",
];

export default async function PortfolioPage() {
  const [{ data: page }, { data: properties }] = await Promise.all([
    sanityFetch({ query: PORTFOLIO_PAGE_QUERY }),
    sanityFetch({ query: PORTFOLIO_PROPERTIES_QUERY }),
  ]);

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <Container>
          <FadeUp>
            <div className="max-w-3xl">
              <SectionLabel>Portfolio</SectionLabel>
              <SectionTitle as="h1">
                {page?.heroTitle || "Homes I\u2019ve Helped Buy, Sell, and Lease"}
              </SectionTitle>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone">
                {page?.heroText || "Browse a selection of properties I\u2019ve helped clients buy, sell, and lease across Houston\u2019s most sought-after neighborhoods."}
              </p>
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* Property Grid */}
      <section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {properties?.map((property: { _id: string; title?: string | null; address?: string | null; price?: string | null; beds?: number | null; baths?: number | null; sqft?: string | null; image?: { asset?: { _id: string; url: string } } | null; status?: string | null }, i: number) => {
              const imageSrc = property.image?.asset
                ? urlFor(property.image).width(700).height(525).url()
                : FALLBACK_IMAGES[i % FALLBACK_IMAGES.length];

              return (
                <FadeUp key={property._id} delay={i * 0.1}>
                  <article className="group">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={imageSrc}
                        alt={property.title || "Property"}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <span className="absolute bottom-3 left-3 bg-ink/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-paper">
                        {property.status}
                      </span>
                    </div>

                    <div className="p-4">
                      <p className="text-xs font-medium uppercase tracking-wide text-warm">
                        {property.price}
                      </p>
                      <h3 className="mt-1 font-serif text-lg text-ink">
                        {property.title}
                      </h3>
                      <p className="mt-1 text-sm text-stone">
                        {property.address}
                      </p>
                      <div className="mt-3 flex gap-3 text-xs text-stone">
                        <span>{property.beds} Beds</span>
                        <span>{property.baths} Baths</span>
                        <span>{property.sqft} Sq Ft</span>
                      </div>
                    </div>
                  </article>
                </FadeUp>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-silver py-24">
        <Container>
          <FadeUp>
            <div className="text-center">
              <SectionLabel>Get Started</SectionLabel>
              <SectionTitle as="h2" className="mx-auto max-w-2xl">
                {page?.ctaTitle || "Ready to Find Your Next Home?"}
              </SectionTitle>
              <p className="mx-auto mt-6 max-w-lg text-stone">
                {page?.ctaText || "Whether you\u2019re buying, selling, or leasing, I\u2019m here to guide you every step of the way."}
              </p>
              <div className="mt-10">
                <Button href="/contact" variant="primary">
                  Contact Thy
                </Button>
              </div>
            </div>
          </FadeUp>
        </Container>
      </section>
    </main>
  );
}
