import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "Locate a Property",
};

const services = [
  {
    title: "Find a Rental",
    description:
      "Whether you need a single-family home, townhouse, or condo, I'll help you find a rental that fits your lifestyle and budget in the greater Houston area.",
  },
  {
    title: "Find an Apartment",
    description:
      "Navigating Houston's apartment market can be overwhelming. Let me match you with the right community, amenities, and location so you can move in with confidence.",
  },
  {
    title: "Rent Your Property",
    description:
      "Get your property rented out faster. I handle the marketing, showings, and tenant screening so you don't have to.",
  },
  {
    title: "Get Comp for Home Value",
    description:
      "Curious what your property is worth? I provide complimentary comparative market analyses so you can make informed decisions about selling, refinancing, or renting.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell Me What You Need",
    description:
      "Share your ideal location, budget, move-in date, and must-haves so I can tailor the search to you.",
  },
  {
    number: "02",
    title: "Curated Property Matches",
    description:
      "I hand-pick listings that match your criteria, saving you hours of scrolling through generic results.",
  },
  {
    number: "03",
    title: "Tour & Compare",
    description:
      "We schedule private showings at your convenience. I walk you through each property and highlight what matters most.",
  },
  {
    number: "04",
    title: "Secure Your Lease",
    description:
      "Once you find the one, I negotiate terms, review the lease, and guide you through every step to move-in day.",
  },
];

export default function LocatePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <Container>
          <FadeUp>
            <SectionLabel>Rental &amp; Leasing Services</SectionLabel>
            <SectionTitle as="h1">Locate a Property</SectionTitle>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone">
              From apartments to single-family homes, I help renters and
              landlords across Houston find exactly what they need. I take care
              of the legwork so you don&apos;t have to.
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
            {services.map((service, i) => (
              <FadeUp key={service.title} delay={i * 0.1}>
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
            {steps.map((step, i) => (
              <FadeUp key={step.number} delay={i * 0.1}>
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
              Ready to Find Your Next Home?
            </SectionTitle>
            <p className="mx-auto mt-6 max-w-lg text-stone">
              Reach out today and let me help you find a great rental or get
              your property leased.
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
