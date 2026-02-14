"use client";

import Container from "../layout/Container";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";
import FadeUp from "../animations/FadeUp";

interface NewsletterProps {
  label?: string | null;
  title?: string | null;
  description?: string | null;
}

export default function Newsletter({ label, title, description }: NewsletterProps) {
  return (
    <section className="py-32">
      <Container>
        <FadeUp className="mx-auto max-w-2xl text-center">
          <SectionLabel>{label || "Stay Updated"}</SectionLabel>
          <SectionTitle as="h2" className="mb-4">
            {title || "Market Insights"}
          </SectionTitle>
          <p className="mb-8 text-stone">
            {description ||
              "Houston market updates, new listings, and practical real estate tips delivered straight to your inbox."}
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-silver bg-transparent px-6 py-3 text-sm text-ink placeholder:text-stone/60 focus:border-ink focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-ink px-8 py-3 text-sm font-medium uppercase tracking-wide text-paper transition-colors hover:bg-ink/90"
            >
              Subscribe
            </button>
          </form>
        </FadeUp>
      </Container>
    </section>
  );
}
