import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "Sell Your Home",
};

const steps = [
  {
    number: "01",
    title: "Home Evaluation",
    description:
      "I begin with a thorough walk-through of your property, assessing its condition, unique features, and potential improvements that could increase its market value.",
  },
  {
    number: "02",
    title: "Smart Pricing",
    description:
      "Using a detailed Comparative Market Analysis, I find the right listing price. One that brings in qualified buyers and gets you the best return.",
  },
  {
    number: "03",
    title: "Professional Staging & Photography",
    description:
      "First impressions matter. I coordinate professional staging and high-quality photography to showcase your home in its best light across every platform.",
  },
  {
    number: "04",
    title: "Marketing & Listing",
    description:
      "Your home goes on the MLS, gets promoted across social media, and reaches my network of buyers and fellow agents. I use digital ads and print to make sure the right people see it.",
  },
  {
    number: "05",
    title: "Showings & Open Houses",
    description:
      "I manage all showings and host open houses to generate interest, gather feedback, and keep you informed every step of the way.",
  },
  {
    number: "06",
    title: "Offers & Negotiation",
    description:
      "When offers come in, I go through every detail with you, explain the pros and cons, and negotiate hard to get you the best outcome.",
  },
  {
    number: "07",
    title: "Closing",
    description:
      "From accepted offer to closing day, I coordinate inspections, appraisals, title work, and every detail so nothing falls through the cracks.",
  },
];

export default function SellPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20">
        <Container>
          <FadeUp>
            <SectionLabel>Selling Services</SectionLabel>
            <SectionTitle as="h1" className="mb-6 max-w-3xl">
              Sell Your Home for&nbsp;Top&nbsp;Dollar
            </SectionTitle>
            <p className="max-w-2xl text-lg leading-relaxed text-stone">
              Selling a home is a big deal. I bring real market knowledge, a
              clear game plan, and hands-on support from the day we list to
              the day you close.
            </p>
          </FadeUp>
        </Container>
      </section>

      <Divider />

      {/* ── The Selling Process ── */}
      <section className="py-24">
        <Container>
          <FadeUp>
            <SectionLabel>The Process</SectionLabel>
            <SectionTitle className="mb-16 max-w-2xl">
              How I Get Your Home Sold
            </SectionTitle>
          </FadeUp>

          <div className="grid gap-12 md:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
            {steps.map((step, i) => (
              <FadeUp key={step.number} delay={i * 0.08}>
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

      {/* ── Complimentary Comp Analysis ── */}
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
                Curious what your home is worth in today&apos;s market? I
                provide a complimentary Comparative Market Analysis, a
                detailed report of recent sales in your neighborhood, so
                you can make smart decisions whether you&apos;re ready to
                sell now or just thinking about it.
              </p>
              <Button href="/contact" variant="accent">
                Request Your Free Analysis
              </Button>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* ── Pricing Strategy ── */}
      <section className="py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <FadeUp>
              <SectionLabel>Pricing Strategy</SectionLabel>
              <SectionTitle className="mb-6 max-w-2xl">
                The Right Price from&nbsp;Day&nbsp;One
              </SectionTitle>
              <p className="mb-6 text-base leading-relaxed text-stone">
                Pricing your home correctly is the single most important factor
                in a successful sale. Overprice it and it sits on the market;
                underprice it and you leave money on the table.
              </p>
              <p className="text-base leading-relaxed text-stone">
                I use a Comparative Market Analysis (CMA) that looks at recently
                sold homes, active listings, and market trends in your specific
                neighborhood. Pair that with what I see on the ground every day
                in Houston, and we land on a price that brings serious buyers to
                the table and gets your home sold for what it&apos;s worth.
              </p>
            </FadeUp>
          </div>
        </Container>
      </section>

      <Divider />

      {/* ── CTA ── */}
      <section className="py-32">
        <Container>
          <FadeUp className="text-center">
            <SectionTitle as="h2" className="mb-4">
              Ready to Sell?
            </SectionTitle>
            <p className="mx-auto mb-10 max-w-lg text-stone">
              Let&apos;s discuss your goals, timeline, and how I can help you
              get the most from your home sale.
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
