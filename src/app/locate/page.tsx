import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { LOCATE_PAGE_QUERY } from "@/sanity/lib/queries";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "Locate a Property",
};

export default async function LocatePage() {
  const { data: page } = await sanityFetch({ query: LOCATE_PAGE_QUERY });

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <Container>
          <FadeUp>
            <SectionLabel>Rental &amp; Leasing Services</SectionLabel>
            <SectionTitle as="h1">
              {page?.heroTitle || "Locate a Property"}
            </SectionTitle>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone">
              {page?.heroText || "From apartments to single-family homes, I help renters and landlords across Houston find exactly what they need."}
            </p>
          </FadeUp>
        </Container>
      </section>

      <Divider />

      {/* Services Grid */}
      <section className="py-24">
        <Container>
          <FadeUp className="mb-16">
            <SectionLabel>What I Offer</SectionLabel>
            <SectionTitle as="h2" className="max-w-xl">
              Services Tailored to You
            </SectionTitle>
          </FadeUp>

          <div className="grid gap-8 sm:grid-cols-2">
            {page?.services?.map((service: { _key: string; title?: string | null; description?: string | null }, i: number) => (
              <FadeUp key={service._key} delay={i * 0.1}>
                <div className="h-full border border-silver p-8 transition-colors duration-300 hover:border-ink">
                  <h3 className="font-serif text-xl font-light">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">
                    {service.description}
                  </p>
                  <a
                    href="/contact"
                    className="mt-6 inline-block text-sm font-medium text-warm transition-colors duration-300 hover:text-warm/70"
                  >
                    Learn More &rarr;
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <Divider />

      {/* How It Works */}
      <section className="py-24">
        <Container>
          <FadeUp className="mb-16">
            <SectionLabel>The Process</SectionLabel>
            <SectionTitle as="h2" className="max-w-xl">
              How It Works
            </SectionTitle>
          </FadeUp>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {page?.steps?.map((step: { _key: string; number?: string | null; title?: string | null; description?: string | null }, i: number) => (
              <FadeUp key={step._key} delay={i * 0.1}>
                <div>
                  <span className="font-serif text-5xl font-light text-silver">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-light">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">
                    {step.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <Divider />

      {/* CTA */}
      <section className="py-24">
        <Container>
          <FadeUp className="text-center">
            <SectionLabel>Get Started</SectionLabel>
            <SectionTitle as="h2" className="mx-auto max-w-2xl">
              {page?.ctaTitle || "Ready to Find Your Next Home?"}
            </SectionTitle>
            <p className="mx-auto mt-6 max-w-lg text-stone">
              {page?.ctaText || "Reach out today and let me help you find a great rental or get your property leased."}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary">
                Contact Me
              </Button>
              <Button href="/sell" variant="secondary">
                Explore Selling
              </Button>
            </div>
          </FadeUp>
        </Container>
      </section>
    </>
  );
}
