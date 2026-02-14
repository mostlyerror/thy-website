"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Container from "../layout/Container";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";
import FadeUp from "../animations/FadeUp";

interface PropertyItem {
  _id: string;
  title?: string | null;
  address?: string | null;
  price?: string | null;
  beds?: number | null;
  baths?: number | null;
  sqft?: string | null;
  image?: { asset?: { _id: string; url: string } } | null;
}

interface FeaturedPropertiesProps {
  properties?: PropertyItem[] | null;
}

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=700&q=80",
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=700&q=80",
];

export default function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
  const items = properties?.length ? properties : [];

  if (!items.length) return null;

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
          {items.map((property, i) => {
            const imageSrc = property.image?.asset
              ? urlFor(property.image).width(680).height(510).url()
              : FALLBACK_IMAGES[i % FALLBACK_IMAGES.length];

            return (
              <div
                key={property._id}
                className="w-[340px] flex-shrink-0 border border-silver"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={imageSrc}
                    alt={property.title || "Property"}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
