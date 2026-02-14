"use client";

import Container from "../layout/Container";
import FadeUp from "../animations/FadeUp";
import SectionLabel from "../ui/SectionLabel";

interface IntroductionProps {
  label?: string | null;
  text?: string | null;
}

export default function Introduction({ label, text }: IntroductionProps) {
  return (
    <section className="py-32">
      <Container>
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>{label || "Welcome"}</SectionLabel>
            <p className="font-serif text-2xl font-light leading-relaxed text-ink md:text-3xl lg:text-4xl">
              {text ||
                "With over 15 years in Houston real estate, I take the time to understand what you actually need. Whether you're buying your first home, selling a place you love, or looking for the right rental, I'm here to make the process feel simple."}
            </p>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
