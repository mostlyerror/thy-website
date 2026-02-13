"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import Container from "../layout/Container";
import SectionLabel from "../ui/SectionLabel";
import FadeUp from "../animations/FadeUp";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-ink py-32">
      <Container>
        <FadeUp className="mx-auto max-w-3xl text-center">
          <SectionLabel className="text-paper/40">Testimonials</SectionLabel>

          <div className="relative min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="font-serif text-2xl font-light leading-relaxed text-paper md:text-3xl">
                  &ldquo;{TESTIMONIALS[current].quote}&rdquo;
                </blockquote>
                <div className="mt-8">
                  <div className="text-sm font-medium text-paper">
                    {TESTIMONIALS[current].author}
                  </div>
                  <div className="mt-1 text-xs text-paper/40">
                    {TESTIMONIALS[current].role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-12 flex justify-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === current ? "bg-warm" : "bg-paper/20"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
