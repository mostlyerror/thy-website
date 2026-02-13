"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import Container from "../layout/Container";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import FadeUp from "../animations/FadeUp";
import ImageReveal from "../animations/ImageReveal";

export default function About() {
  return (
    <section className="py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <ImageReveal>
            <div className="relative aspect-[3/4]">
              <Image
                src={IMAGES.about}
                alt="About Thy Nguyen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ImageReveal>

          {/* Text */}
          <FadeUp>
            <SectionLabel>About</SectionLabel>
            <SectionTitle as="h2" className="mb-6">
              Houston Born and Raised
            </SectionTitle>
            <p className="mb-4 text-base leading-relaxed text-stone">
              I grew up here, so I know Houston&apos;s neighborhoods, market
              shifts, and community feel on a level that only comes from
              actually living it. That local knowledge shows up in every
              conversation and every deal.
            </p>
            <p className="mb-8 text-base leading-relaxed text-stone">
              Whether you&apos;re buying your first home, investing, or looking
              for a rental, I work around your goals and your timeline.
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
