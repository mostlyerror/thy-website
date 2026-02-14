"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import StaggerChildren, {
  staggerItem,
} from "../animations/StaggerChildren";

interface StatItem {
  _key: string;
  value?: string | null;
  label?: string | null;
}

interface StatsProps {
  stats?: StatItem[] | null;
}

export default function Stats({ stats }: StatsProps) {
  const items = stats?.length
    ? stats
    : [
        { _key: "1", value: "200+", label: "Homes Sold" },
        { _key: "2", value: "15+", label: "Years Experience" },
        { _key: "3", value: "$50M+", label: "Total Volume" },
        { _key: "4", value: "98%", label: "Client Satisfaction" },
      ];

  return (
    <section className="bg-ink py-24">
      <Container>
        <StaggerChildren className="grid grid-cols-2 gap-12 md:grid-cols-4">
          {items.map((stat) => (
            <motion.div
              key={stat._key}
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
