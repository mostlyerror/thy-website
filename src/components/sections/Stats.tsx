"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import Container from "../layout/Container";
import StaggerChildren, {
  staggerItem,
} from "../animations/StaggerChildren";

export default function Stats() {
  return (
    <section className="bg-ink py-24">
      <Container>
        <StaggerChildren className="grid grid-cols-2 gap-12 md:grid-cols-4">
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center"
            >
              <div className="font-serif text-4xl font-light text-paper md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-paper/40">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
