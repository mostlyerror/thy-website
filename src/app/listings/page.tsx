import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Listings",
};

const listings = [
  {
    id: 1,
    address: "4521 Bellaire Blvd, Bellaire, TX 77401",
    price: "$1,250,000",
    beds: 4,
    baths: 3,
    sqft: "3,200",
  },
  {
    id: 2,
    address: "1803 Woodhead St, Houston, TX 77019",
    price: "$875,000",
    beds: 3,
    baths: 2,
    sqft: "2,450",
  },
  {
    id: 3,
    address: "6710 Brompton Rd, West University, TX 77005",
    price: "$1,495,000",
    beds: 5,
    baths: 4,
    sqft: "4,100",
  },
  {
    id: 4,
    address: "2214 Tangley St, Houston, TX 77005",
    price: "$725,000",
    beds: 3,
    baths: 2,
    sqft: "2,100",
  },
  {
    id: 5,
    address: "5003 Mimosa Dr, Bellaire, TX 77401",
    price: "$950,000",
    beds: 4,
    baths: 3,
    sqft: "2,800",
  },
  {
    id: 6,
    address: "3318 Audubon Pl, Houston, TX 77006",
    price: "$1,100,000",
    beds: 4,
    baths: 3,
    sqft: "3,500",
  },
];

export default function ListingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <Container>
          <FadeUp>
            <div className="max-w-2xl">
              <SectionLabel>Properties</SectionLabel>
              <SectionTitle as="h1">Active Listings</SectionTitle>
              <p className="mt-6 text-lg leading-relaxed text-stone">
                Browse my current selection of homes on the Houston market.
                Each property has been carefully chosen for its value,
                location, and potential.
              </p>
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* Property Grid */}
      <section className="pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing, index) => (
              <FadeUp key={listing.id} delay={index * 0.1}>
                <article>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={IMAGES.properties[index % IMAGES.properties.length]}
                      alt={listing.address}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute top-4 left-4 bg-warm px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white">
                      Active
                    </span>
                  </div>

                  {/* Details */}
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
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-silver py-24">
        <Container>
          <FadeUp>
            <div className="text-center">
              <SectionTitle as="h2" className="text-3xl md:text-4xl lg:text-5xl">
                Can&apos;t find what you&apos;re looking for?
              </SectionTitle>
              <p className="mx-auto mt-4 max-w-md text-stone">
                I have access to off-market opportunities and upcoming listings.
                Let&apos;s find the right place for you.
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
