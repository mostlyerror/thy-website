"use client";

import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import FadeUp from "../animations/FadeUp";

interface ContactCTAProps {
  title?: string | null;
  text?: string | null;
}

export default function ContactCTA({ title, text }: ContactCTAProps) {
  return (
    <section className="border-t border-silver py-32">
      <Container>
        <FadeUp className="text-center">
          <SectionTitle as="h2" className="mb-4">
            {title || "Let\u2019s Work Together"}
          </SectionTitle>
          <p className="mx-auto mb-10 max-w-lg text-stone">
            {text ||
              "Ready to make your next move? Whether buying, selling, or leasing, I\u2019m here to guide you every step of the way."}
          </p>
          <Button href="/contact" variant="accent">
            Contact Me
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
}
