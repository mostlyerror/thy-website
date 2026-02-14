"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Container from "../layout/Container";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import FadeUp from "../animations/FadeUp";
import ImageReveal from "../animations/ImageReveal";

interface AboutProps {
  label?: string | null;
  title?: string | null;
  paragraph1?: string | null;
  paragraph2?: string | null;
  image?: { asset?: { _id: string; url: string } } | null;
}

export default function About({ label, title, paragraph1, paragraph2, image }: AboutProps) {
  const imageSrc = image?.asset
    ? urlFor(image).width(800).url()
    : "/images/thy/portrait-bookshelf.jpeg";

  return (
    <section className="py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <ImageReveal>
            <div className="relative aspect-[3/4]">
              <Image
                src={imageSrc}
                alt="About Thy Nguyen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ImageReveal>

          {/* Text */}
          <FadeUp>
            <SectionLabel>{label || "About"}</SectionLabel>
            <SectionTitle as="h2" className="mb-6">
              {title || "Houston Born and Raised"}
            </SectionTitle>
            <p className="mb-4 text-base leading-relaxed text-stone">
              {paragraph1 ||
                "I grew up here, so I know Houston's neighborhoods, market shifts, and community feel on a level that only comes from actually living it. That local knowledge shows up in every conversation and every deal."}
            </p>
            <p className="mb-8 text-base leading-relaxed text-stone">
              {paragraph2 ||
                "Whether you're buying your first home, investing, or looking for a rental, I work around your goals and your timeline."}
            </p>
            <Button href="/about" variant="secondary">
              Read More
            </Button>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
