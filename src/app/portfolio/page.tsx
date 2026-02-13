import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio",
};

const FILTER_TABS = ["All", "Sold", "Bought", "Leased"] as const;

const PROPERTIES = [
  {
    id: 1,
    title: "Modern Estate in River Oaks",
    address: "2415 River Oaks Blvd, Houston, TX 77019",
    price: "$2,450,000",
    beds: 5,
    baths: 4,
    sqft: "4,800",
    status: "Sold" as const,
  },
  {
    id: 2,
    title: "Midtown Luxury Townhome",
    address: "1820 Elgin St, Houston, TX 77004",
    price: "$785,000",
    beds: 3,
    baths: 3,
    sqft: "2,400",
    status: "Bought" as const,
  },
  {
    id: 3,
    title: "Heights Craftsman Bungalow",
    address: "932 Harvard St, Houston, TX 77008",
    price: "$625,000",
    beds: 3,
    baths: 2,
    sqft: "1,950",
    status: "Sold" as const,
  },
  {
    id: 4,
    title: "Memorial Park Penthouse",
    address: "10 Memorial Park Dr, Houston, TX 77024",
    price: "$1,175,000",
    beds: 2,
    baths: 2,
    sqft: "2,100",
    status: "Leased" as const,
  },
  {
    id: 5,
    title: "Montrose Contemporary Villa",
    address: "4107 Yupon St, Houston, TX 77006",
    price: "$1,890,000",
    beds: 4,
    baths: 3,
    sqft: "3,600",
    status: "Sold" as const,
  },
  {
    id: 6,
    title: "West University Colonial",
    address: "3520 Amherst St, Houston, TX 77005",
    price: "$1,350,000",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    status: "Bought" as const,
  },
];

export default function PortfolioPage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-32 pb-20">
        <Container>
          <FadeUp>
            <div className="max-w-3xl">
              <SectionLabel>Portfolio</SectionLabel>
              <SectionTitle as="h1">
                Homes I&apos;ve Helped Buy, Sell, and Lease
              </SectionTitle>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone">
                Browse a selection of properties I&apos;ve helped clients buy,
                sell, and lease across Houston&apos;s most sought-after
                neighborhoods.
              </p>
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* ── Filter Tabs ──────────────────────────────────────── */}
      <section className="pb-12">
        <Container>
          <FadeUp>
            <div className="flex gap-8">
              {FILTER_TABS.map((tab, i) => (
                <button
                  key={tab}
                  className={`pb-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                    i === 0
                      ? "border-b-2 border-ink text-ink"
                      : "text-stone hover:text-ink"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* ── Property Grid ────────────────────────────────────── */}
      <section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROPERTIES.map((property, i) => (
              <FadeUp key={property.id} delay={i * 0.1}>
                <article className="group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={IMAGES.properties[i % IMAGES.properties.length]}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute bottom-3 left-3 bg-ink/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-paper">
                      {property.status}
                    </span>
                  </div>

                  {/* Details */}
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
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="border-t border-silver py-24">
        <Container>
          <FadeUp>
            <div className="text-center">
              <SectionLabel>Get Started</SectionLabel>
              <SectionTitle as="h2" className="mx-auto max-w-2xl">
                Ready to Find Your Next Home?
              </SectionTitle>
              <p className="mx-auto mt-6 max-w-lg text-stone">
                Whether you&apos;re buying, selling, or leasing, I&apos;m here
                to guide you every step of the way.
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
