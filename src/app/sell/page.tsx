import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { SELL_PAGE_QUERY } from "@/sanity/lib/queries";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "Sell Your Home",
};

export default async function SellPage() {
  const { data: page } = await sanityFetch({ query: SELL_PAGE_QUERY });

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <Container>
          <FadeUp>
            <SectionLabel>Selling Services</SectionLabel>
            <SectionTitle as="h1" className="mb-6 max-w-3xl">
              {page?.heroTitle || "Sell Your Home for\u00a0Top\u00a0Dollar"}
            </SectionTitle>
            <p className="max-w-2xl text-lg leading-relaxed text-stone">
              {page?.heroText || "Selling a home is a big deal. I bring real market knowledge, a clear game plan, and hands-on support from the day we list to the day you close."}
            </p>
          </FadeUp>
        </Container>
      </section>

      <Divider />

      {/* The Selling Process */}
      <section className="py-24">
        <Container>
          <FadeUp>
            <SectionLabel>The Process</SectionLabel>
            <SectionTitle className="mb-16 max-w-2xl">
              How I Get Your Home Sold
            </SectionTitle>
          </FadeUp>

          <div className="grid gap-12 md:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
            {page?.steps?.map((step: { _key: string; number?: string | null; title?: string | null; description?: string | null }, i: number) => (
              <FadeUp key={step._key} delay={i * 0.08}>
                <div className="group">
                  <span className="mb-3 block font-serif text-sm text-warm">
                    {step.number}
                  </span>
                  <h3 className="mb-2 font-serif text-xl font-light tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone">
                    {step.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <Divider />

      {/* Complimentary CMA */}
      <section className="bg-ink py-24 text-paper">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <SectionLabel className="text-warm">
                Complimentary Offer
              </SectionLabel>
              <SectionTitle className="mb-6">
                Free Comparable Market&nbsp;Analysis
              </SectionTitle>
              <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-silver">
                {page?.cmaOfferText || "Curious what your home is worth in today\u2019s market?"}
              </p>
              <Button href="/contact" variant="accent">
                Request Your Free Analysis
              </Button>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* Pricing Strategy */}
      <section className="py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <FadeUp>
              <SectionLabel>Pricing Strategy</SectionLabel>
              <SectionTitle className="mb-6 max-w-2xl">
                {page?.pricingTitle || "The Right Price from\u00a0Day\u00a0One"}
              </SectionTitle>
              <div className="space-y-6">
                {page?.pricingParagraphs?.map((p: string, i: number) => (
                  <p key={i} className="text-base leading-relaxed text-stone">{p}</p>
                )) || (
                  <p className="text-base leading-relaxed text-stone">Pricing your home correctly is the single most important factor in a successful sale.</p>
                )}
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      <Divider />

      {/* CTA */}
      <section className="py-32">
        <Container>
          <FadeUp className="text-center">
            <SectionTitle as="h2" className="mb-4">
              {page?.ctaTitle || "Ready to Sell?"}
            </SectionTitle>
            <p className="mx-auto mb-10 max-w-lg text-stone">
              {page?.ctaText || "Let\u2019s discuss your goals, timeline, and how I can help you get the most from your home sale."}
            </p>
            <Button href="/contact" variant="accent">
              Get in Touch
            </Button>
          </FadeUp>
        </Container>
      </section>
    </>
  );
}
