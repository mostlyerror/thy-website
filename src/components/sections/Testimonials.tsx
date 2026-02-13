"use client";

import { useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import Container from "../layout/Container";
import SectionLabel from "../ui/SectionLabel";
import FadeUp from "../animations/FadeUp";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  function go(next: number) {
    if (next < 0 || next >= TESTIMONIALS.length || next === current) return;
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  }

  function handleDragEnd(_: unknown, info: PanInfo) {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      go(current + 1);
    } else if (info.offset.x > threshold) {
      go(current - 1);
    }
  }

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section className="bg-ink py-32">
      <Container>
        <FadeUp className="mx-auto max-w-3xl text-center">
          <SectionLabel className="text-paper/40">Testimonials</SectionLabel>

          <div className="relative min-h-[200px] touch-pan-y overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={handleDragEnd}
                className="cursor-grab active:cursor-grabbing"
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
                onClick={() => go(i)}
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
