"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import Container from "../layout/Container";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";
import StaggerChildren, {
  staggerItem,
} from "../animations/StaggerChildren";
import FadeUp from "../animations/FadeUp";

export default function Services() {
  return (
    <section className="py-32">
      <Container>
        <FadeUp className="mb-16 text-center">
          <SectionLabel>Services</SectionLabel>
          <SectionTitle>How I Can Help</SectionTitle>
        </FadeUp>

        <StaggerChildren className="grid gap-8 md:grid-cols-3">
          {SERVICES.map((service) => (
            <motion.div key={service.title} variants={staggerItem}>
              <Link
                href={service.href}
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
