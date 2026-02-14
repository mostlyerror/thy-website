import type { Metadata } from "next";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { LISTINGS_PAGE_QUERY, ACTIVE_LISTINGS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";

export const metadata: Metadata = {
  title: "Listings",
};

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=700&q=80",
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=700&q=80",
  "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=700&q=80",
];

export default async function ListingsPage() {
  const [{ data: page }, { data: listings }] = await Promise.all([
    sanityFetch({ query: LISTINGS_PAGE_QUERY }),
    sanityFetch({ query: ACTIVE_LISTINGS_QUERY }),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <Container>
          <FadeUp>
            <div className="max-w-2xl">
              <SectionLabel>Properties</SectionLabel>
              <SectionTitle as="h1">
                {page?.heroTitle || "Active Listings"}
              </SectionTitle>
              <p className="mt-6 text-lg leading-relaxed text-stone">
                {page?.heroText || "Browse my current selection of homes on the Houston market."}
              </p>
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* Property Grid */}
      <section className="pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {listings?.map((listing: { _id: string; title?: string | null; address?: string | null; price?: string | null; beds?: number | null; baths?: number | null; sqft?: string | null; image?: { asset?: { _id: string; url: string } } | null }, i: number) => {
              const imageSrc = listing.image?.asset
                ? urlFor(listing.image).width(700).height(525).url()
                : FALLBACK_IMAGES[i % FALLBACK_IMAGES.length];

              return (
                <FadeUp key={listing._id} delay={i * 0.1}>
                  <article>
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={imageSrc}
                        alt={listing.address || "Property"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <span className="absolute top-4 left-4 bg-warm px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white">
                        Active
                      </span>
                    </div>

                    <div className="mt-5">
                      <p className="font-serif text-xl">{listing.price}</p>
                      <p className="mt-1 text-sm text-stone">
                        {listing.address}
                      </p>
                      <div className="mt-3 flex gap-3 text-xs text-stone">
                        <span>{listing.beds} Beds</span>
                        <span>{listing.baths} Baths</span>
                        <span>{listing.sqft} Sq Ft</span>
                      </div>
                      <button className="mt-4 text-xs font-medium uppercase tracking-wide text-warm transition-colors hover:text-ink">
                        View Details
                      </button>
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
              <SectionTitle as="h2" className="text-3xl md:text-4xl lg:text-5xl">
                {page?.ctaTitle || "Can\u2019t find what you\u2019re looking for?"}
              </SectionTitle>
              <p className="mx-auto mt-4 max-w-md text-stone">
                {page?.ctaText || "I have access to off-market opportunities and upcoming listings. Let\u2019s find the right place for you."}
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Get in Touch
                </Button>
              </div>
            </div>
          </FadeUp>
        </Container>
      </section>
    </>
  );
}
