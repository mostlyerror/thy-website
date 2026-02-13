"use client";

import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import FadeUp from "../animations/FadeUp";

export default function ContactCTA() {
  return (
    <section className="border-t border-silver py-32">
      <Container>
        <FadeUp className="text-center">
          <SectionTitle as="h2" className="mb-4">
            Let&apos;s Work Together
          </SectionTitle>
          <p className="mx-auto mb-10 max-w-lg text-stone">
            Ready to make your next move? Whether buying, selling, or leasing,
            I&apos;m here to guide you every step of the way.
          </p>
          <Button href="/contact" variant="accent">
            Contact Me
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
}
