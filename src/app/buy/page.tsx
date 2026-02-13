import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "Buy a Home",
};

const STEPS = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We sit down and talk about what you're looking for, your favorite neighborhoods, your must-haves, and your budget. This is where we get on the same page.",
  },
  {
    number: "02",
    title: "Mortgage Pre-Approval",
    description:
      "I'll connect you with lenders I've worked with to get your pre-approval letter. This gives you a clear budget and puts you in a stronger position when it's time to make an offer.",
  },
  {
    number: "03",
    title: "Home Search",
    description:
      "Using my deep knowledge of Houston's neighborhoods and access to the latest listings, I curate properties that match your criteria and schedule private showings.",
  },
  {
    number: "04",
    title: "Making an Offer",
    description:
      "When you find the one, I put together a solid offer backed by real market data. I handle the negotiations to get you the best terms possible.",
  },
  {
    number: "05",
    title: "Inspection & Negotiation",
    description:
      "I coordinate the home inspection and review findings with you. If issues arise, I negotiate repairs or credits so you can move forward with confidence.",
  },
  {
    number: "06",
    title: "Closing Day",
    description:
      "I guide you through the final paperwork, coordinate with the title company and lender, and hand you the keys to your new home.",
  },
];

const COMPARISONS = [
  {
    label: "Monthly Payment",
    rent: "Goes to your landlord's equity",
    buy: "Builds your own equity over time",
  },
  {
    label: "Tax Benefits",
    rent: "No tax deductions available",
    buy: "Mortgage interest & property tax deductions",
  },
  {
    label: "Stability",
    rent: "Subject to rent increases & lease terms",
    buy: "Fixed mortgage payments & long-term security",
  },
  {
    label: "Personalization",
    rent: "Limited ability to modify the space",
    buy: "Full freedom to renovate & make it yours",
  },
  {
    label: "Wealth Building",
    rent: "No asset appreciation",
    buy: "Property value grows over time",
  },
];

export default function BuyPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="pt-32 pb-20">
        <Container>
          <FadeUp className="mx-auto max-w-3xl text-center">
            <SectionLabel>Buying Services</SectionLabel>
            <SectionTitle as="h1" className="mb-6">
              Buy a Home
            </SectionTitle>
            <p className="text-lg leading-relaxed text-stone">
              Finding your next home in Houston starts with having someone in your
              corner. Whether this is your first purchase or you&apos;ve done this
              before, I&apos;ll give you honest advice and real market knowledge so
              you can buy with confidence.
            </p>
          </FadeUp>
        </Container>
      </section>

      <Divider />

      {/* ── The Buying Process ────────────────────────────────── */}
      <section className="py-32">
        <Container>
          <FadeUp className="mb-16 text-center">
            <SectionLabel>Step by Step</SectionLabel>
            <SectionTitle>The Buying Process</SectionTitle>
          </FadeUp>

          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((step, i) => (
              <FadeUp key={step.number} delay={i * 0.1}>
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

      {/* ── Complimentary Offer ───────────────────────────────── */}
      <section className="bg-ink py-32 text-paper">
        <Container>
          <FadeUp className="mx-auto max-w-2xl text-center">
            <SectionLabel className="text-warm">Complimentary</SectionLabel>
            <SectionTitle as="h2" className="mb-4">
              Get Your Free Property List
            </SectionTitle>
            <p className="mb-10 text-paper/60">
              Looking to see what&apos;s available in your desired area? Provide your
              email below and I&apos;ll send you a curated list of properties that
              match your criteria. Completely free, no strings attached.
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

      {/* ── Rent vs. Purchase ─────────────────────────────────── */}
      <section className="py-32">
        <Container>
          <FadeUp className="mb-16 text-center">
            <SectionLabel>Make the Move</SectionLabel>
            <SectionTitle>Rent vs. Purchase</SectionTitle>
            <p className="mx-auto mt-4 max-w-xl text-stone">
              Still weighing your options? Here&apos;s a side-by-side look at how
              owning a home in Houston stacks up against renting.
            </p>
          </FadeUp>

          <div className="mx-auto max-w-4xl">
            {/* Table header */}
            <div className="mb-2 grid grid-cols-3 gap-4 px-4 text-xs font-medium uppercase tracking-[0.15em] text-stone">
              <span />
              <span>Renting</span>
              <span>Buying</span>
            </div>

            {COMPARISONS.map((row, i) => (
              <FadeUp key={row.label} delay={i * 0.08}>
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

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-32">
        <Container>
          <FadeUp className="text-center">
            <SectionTitle as="h2" className="mb-4">
              Ready to Find Your Home?
            </SectionTitle>
            <p className="mx-auto mb-10 max-w-lg text-stone">
              Let&apos;s start your home search today. I&apos;ll walk you through
              every step and make sure you find a home you love at a price that
              works.
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
