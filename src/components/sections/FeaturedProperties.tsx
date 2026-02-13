"use client";

import Image from "next/image";
import { FEATURED_PROPERTIES } from "@/lib/constants";
import Container from "../layout/Container";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";
import FadeUp from "../animations/FadeUp";

export default function FeaturedProperties() {
  return (
    <section className="py-32">
      <Container>
        <FadeUp className="mb-16">
          <SectionLabel>Portfolio</SectionLabel>
          <SectionTitle>Featured Properties</SectionTitle>
        </FadeUp>
      </Container>

      <div className="overflow-x-auto">
        <div className="flex gap-6 px-6 pb-6 lg:px-8">
          {FEATURED_PROPERTIES.map((property) => (
            <div
              key={property.id}
              className="w-[340px] flex-shrink-0 border border-silver"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                  sizes="340px"
                />
              </div>

              <div className="p-6">
                <div className="text-xs font-medium uppercase tracking-[0.1em] text-warm">
                  {property.price}
                </div>
                <h3 className="mt-2 font-serif text-xl font-light">
                  {property.title}
                </h3>
                <p className="mt-1 text-sm text-stone">{property.address}</p>
                <div className="mt-4 flex gap-4 text-xs text-stone">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.sqft} Sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
