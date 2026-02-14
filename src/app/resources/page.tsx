import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { RESOURCES_PAGE_QUERY } from "@/sanity/lib/queries";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeUp from "@/components/animations/FadeUp";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "Resources",
};

interface Topic {
  _key: string;
  title?: string | null;
  description?: string | null;
}

export default async function ResourcesPage() {
  const { data: page } = await sanityFetch({ query: RESOURCES_PAGE_QUERY });

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <Container>
          <FadeUp>
            <SectionLabel>Resource Hub</SectionLabel>
            <SectionTitle as="h1">Client Resources</SectionTitle>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone">
              {page?.heroText || "Whether you\u2019re buying your first home or getting ready to sell, these guides and checklists will walk you through the process step by step."}
            </p>
          </FadeUp>
        </Container>
      </section>

      <Container><Divider /></Container>

      {/* Buying 101 */}
      <section id="buying-101" className="scroll-mt-24 py-24">
        <Container>
          <FadeUp>
            <SectionLabel>Buyer&rsquo;s Guide</SectionLabel>
            <SectionTitle as="h2" className="mb-16">
              Home Buying 101
            </SectionTitle>
          </FadeUp>

          <div className="grid gap-16 md:grid-cols-2">
            {page?.buyingTopics?.map((topic: Topic, i: number) => (
              <FadeUp key={topic._key} delay={i * 0.05}>
                <h3 className="mb-3 font-serif text-2xl font-light tracking-tight text-ink">
                  {topic.title}
                </h3>
                <p className="leading-relaxed text-stone">
                  {topic.description}
                </p>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <Container><Divider /></Container>

      {/* Selling 101 */}
      <section id="selling-101" className="scroll-mt-24 py-24">
        <Container>
          <FadeUp>
            <SectionLabel>Seller&rsquo;s Guide</SectionLabel>
            <SectionTitle as="h2" className="mb-16">
              Home Selling 101
            </SectionTitle>
          </FadeUp>

          <div className="grid gap-16 md:grid-cols-2">
            {page?.sellingTopics?.map((topic: Topic, i: number) => (
              <FadeUp key={topic._key} delay={i * 0.05}>
                <h3 className="mb-3 font-serif text-2xl font-light tracking-tight text-ink">
                  {topic.title}
                </h3>
                <p className="leading-relaxed text-stone">
                  {topic.description}
                </p>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <Container><Divider /></Container>

      {/* Schools */}
      <section id="schools" className="scroll-mt-24 py-24">
        <Container>
          <FadeUp>
            <SectionLabel>Education</SectionLabel>
            <SectionTitle as="h2" className="mb-6">
              Public Schools &amp; Zoning
            </SectionTitle>
            <p className="mb-16 max-w-2xl leading-relaxed text-stone">
              The Greater Houston area is served by dozens of independent school
              districts. Below is a brief overview of the four most popular
              districts my clients consider when choosing a neighborhood.
            </p>
          </FadeUp>

          <div className="grid gap-12 md:grid-cols-2">
            {page?.schools?.map((school: Topic, i: number) => (
              <FadeUp key={school._key} delay={i * 0.05}>
                <h3 className="mb-3 font-serif text-2xl font-light tracking-tight text-ink">
                  {school.title}
                </h3>
                <p className="leading-relaxed text-stone">
                  {school.description}
                </p>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <Container><Divider /></Container>

      {/* Utilities */}
      <section id="utilities" className="scroll-mt-24 py-24">
        <Container>
          <FadeUp>
            <SectionLabel>Moving In</SectionLabel>
            <SectionTitle as="h2" className="mb-6">
              Utilities Checklist
            </SectionTitle>
            <p className="mb-16 max-w-2xl leading-relaxed text-stone">
              Moving into a new home means setting up a handful of essential
              services. Use this checklist to make sure nothing falls through
              the cracks.
            </p>
          </FadeUp>

          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {page?.utilities?.map((utility: Topic, i: number) => (
              <FadeUp key={utility._key} delay={i * 0.05}>
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-silver text-xs text-stone">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="mb-1 font-serif text-lg font-light tracking-tight text-ink">
                      {utility.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-stone">
                      {utility.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
