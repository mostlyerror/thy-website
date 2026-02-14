"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Container from "../layout/Container";

interface HeroProps {
  heroImage?: { asset?: { _id: string; url: string } } | null;
  name?: string | null;
  tagline?: string | null;
}

export default function Hero({ heroImage, name, tagline }: HeroProps) {
  const imageSrc = heroImage?.asset
    ? urlFor(heroImage).width(1920).url()
    : "/images/houston-skyline.jpeg";

  return (
    <section className="relative flex h-screen items-end overflow-hidden bg-ink">
      <Image
        src={imageSrc}
        alt="Houston skyline"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Gradient overlay, darker at bottom-left for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/50 to-transparent" />

      <Container className="relative z-10 pb-20 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 font-serif text-5xl font-light leading-tight text-paper md:text-7xl lg:text-8xl"
        >
          {name || "Thy Nguyen"}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-paper/80"
        >
          Realtor&reg;
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-10 max-w-lg font-serif text-xl font-light italic text-paper/90 md:text-2xl"
        >
          {tagline || "Real Estate That Feels Personal"}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a
            href="/about"
            className="inline-block bg-paper/90 px-10 py-4 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-paper"
          >
            Learn More
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
