"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "../layout/Container";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";
import StaggerChildren, {
  staggerItem,
} from "../animations/StaggerChildren";
import FadeUp from "../animations/FadeUp";

interface ServiceItem {
  _key: string;
  title?: string | null;
  description?: string | null;
  href?: string | null;
}

interface ServicesProps {
  label?: string | null;
  title?: string | null;
  services?: ServiceItem[] | null;
}

export default function Services({ label, title, services }: ServicesProps) {
  const items = services?.length
    ? services
    : [
        { _key: "1", title: "Buy", description: "Looking for a home in Houston? I'll help you find the right one and walk you through the entire process.", href: "/buy" },
        { _key: "2", title: "Sell", description: "Get the most from your home sale with smart pricing, professional staging, and marketing that actually works.", href: "/sell" },
        { _key: "3", title: "Locate", description: "Whether you're looking to rent or lease, I'll help you find the perfect space in Houston.", href: "/locate" },
      ];

  return (
    <section className="py-32">
      <Container>
        <FadeUp className="mb-16 text-center">
          <SectionLabel>{label || "Services"}</SectionLabel>
          <SectionTitle>{title || "How I Can Help"}</SectionTitle>
        </FadeUp>

        <StaggerChildren className="grid gap-8 md:grid-cols-3">
          {items.map((service) => (
            <motion.div key={service._key} variants={staggerItem}>
              <Link
                href={service.href || "#"}
                className="group block h-full border border-silver p-10 transition-all duration-500 hover:border-ink hover:bg-ink hover:text-paper"
              >
                <h3 className="font-serif text-3xl font-light">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-stone transition-colors group-hover:text-paper/60">
                  {service.description}
                </p>
                <div className="mt-8 text-xs font-medium uppercase tracking-[0.15em] text-warm transition-colors group-hover:text-warm">
                  Learn More &rarr;
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
