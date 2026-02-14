import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { BUY_PAGE_QUERY } from "@/sanity/lib/queries";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "Buy a Home",
};

export default async function BuyPage() {
  const { data: page } = await sanityFetch({ query: BUY_PAGE_QUERY });

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <Container>
          <FadeUp className="mx-auto max-w-3xl text-center">
            <SectionLabel>Buying Services</SectionLabel>
            <SectionTitle as="h1" className="mb-6">
              {page?.heroTitle || "Buy a Home"}
            </SectionTitle>
            <p className="text-lg leading-relaxed text-stone">
              {page?.heroText || "Finding your next home in Houston starts with having someone in your corner."}
            </p>
          </FadeUp>
        </Container>
      </section>

      <Divider />

      {/* The Buying Process */}
      <section className="py-32">
        <Container>
          <FadeUp className="mb-16 text-center">
            <SectionLabel>Step by Step</SectionLabel>
            <SectionTitle>The Buying Process</SectionTitle>
          </FadeUp>

          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 lg:grid-cols-3">
            {page?.steps?.map((step: { _key: string; number?: string | null; title?: string | null; description?: string | null }, i: number) => (
              <FadeUp key={step._key} delay={i * 0.1}>
                <div className="group">
                  <span className="font-serif text-5xl font-light text-silver transition-colors duration-500 group-hover:text-warm">
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

      {/* Complimentary Offer */}
      <section className="bg-ink py-32 text-paper">
        <Container>
          <FadeUp className="mx-auto max-w-2xl text-center">
            <SectionLabel className="text-warm">Complimentary</SectionLabel>
            <SectionTitle as="h2" className="mb-4">
              {page?.offerTitle || "Get Your Free Property List"}
            </SectionTitle>
            <p className="mb-10 text-paper/60">
              {page?.offerText || "Looking to see what\u2019s available in your desired area?"}
            </p>

            <form className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border border-paper/20 bg-transparent px-6 py-3 text-sm text-paper placeholder:text-paper/40 focus:border-warm focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-warm px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-warm/90"
              >
                Send My List
              </button>
            </form>
          </FadeUp>
        </Container>
      </section>

      {/* Rent vs. Purchase */}
      <section className="py-32">
        <Container>
          <FadeUp className="mb-16 text-center">
            <SectionLabel>Make the Move</SectionLabel>
            <SectionTitle>Rent vs. Purchase</SectionTitle>
            <p className="mx-auto mt-4 max-w-xl text-stone">
              Still weighing your options? Here&apos;s a side-by-side look at how owning a home in Houston stacks up against renting.
            </p>
          </FadeUp>

          <div className="mx-auto max-w-4xl">
            <div className="mb-2 grid grid-cols-3 gap-4 px-4 text-xs font-medium uppercase tracking-[0.15em] text-stone">
              <span />
              <span>Renting</span>
              <span>Buying</span>
            </div>

            {page?.comparisons?.map((row: { _key: string; label?: string | null; rent?: string | null; buy?: string | null }, i: number) => (
              <FadeUp key={row._key} delay={i * 0.08}>
                <div className="grid grid-cols-3 gap-4 border-t border-silver px-4 py-6">
                  <span className="font-serif text-lg font-light">
                    {row.label}
                  </span>
                  <span className="text-sm leading-relaxed text-stone">
                    {row.rent}
                  </span>
                  <span className="text-sm leading-relaxed text-ink">
                    {row.buy}
                  </span>
                </div>
              </FadeUp>
            ))}
            <div className="border-t border-silver" />
          </div>
        </Container>
      </section>

      <Divider />

      {/* CTA */}
      <section className="py-32">
        <Container>
          <FadeUp className="text-center">
            <SectionTitle as="h2" className="mb-4">
              {page?.ctaTitle || "Ready to Find Your Home?"}
            </SectionTitle>
            <p className="mx-auto mb-10 max-w-lg text-stone">
              {page?.ctaText || "Let\u2019s start your home search today."}
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
