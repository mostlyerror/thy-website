import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";
import ImageReveal from "@/components/animations/ImageReveal";
import Divider from "@/components/ui/Divider";
import { SITE, CONTACT, IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About | ${SITE.title}`,
};

const credentials = [
  {
    title: "Licensed Texas Realtor",
    description:
      "Fully licensed by the Texas Real Estate Commission. I stay current on continuing education and always put ethical practice first.",
  },
  {
    title: "Houston Association of Realtors",
    description:
      "Active HAR member with access to the most comprehensive MLS in the country, which means more listings and better data for my clients.",
  },
  {
    title: "National Association of Realtors",
    description:
      "NAR membership means I hold myself to the highest standards of professionalism, advocacy, and client care.",
  },
  {
    title: "Certified Residential Specialist",
    description:
      "I earned my CRS designation through advanced residential training. Fewer than 3% of agents nationwide hold this credential.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="bg-paper pt-32 pb-20">
        <Container>
          <FadeUp>
            <SectionLabel>About</SectionLabel>
            <SectionTitle as="h1" className="max-w-3xl">
              The Story Behind
              <br />
              the Service
            </SectionTitle>
          </FadeUp>
        </Container>
      </section>

      <Divider />

      {/* ── Bio Split ── */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid items-start gap-16 lg:grid-cols-2">
            {/* Image */}
            <ImageReveal>
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={IMAGES.aboutPage}
                  alt={`${SITE.name} - Houston Realtor`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ImageReveal>

            {/* Bio */}
            <FadeUp>
              <SectionLabel>Meet {SITE.name}</SectionLabel>
              <SectionTitle as="h2" className="mb-8">
                Get to Know
                <br />
                Thy
              </SectionTitle>

              <div className="space-y-5 text-base leading-relaxed text-stone">
                <p>
                  I was born and raised in Houston, so I know this city inside and
                  out. The neighborhoods, the market shifts, the culture. Buying or
                  selling a home is one of the biggest decisions you&apos;ll make,
                  and I treat it that way.
                </p>
                <p>
                  Over 15 years and more than 200 homes sold across the Greater
                  Houston area. I&apos;ve worked with first-time buyers, investors,
                  growing families, and empty-nesters. I keep you in the loop at
                  every step so you always know where things stand and what&apos;s
                  coming next.
                </p>
                <p>
                  When I&apos;m not helping clients, you&apos;ll find me exploring
                  Houston&apos;s food scene, volunteering with local housing
                  nonprofits, and spending time with my family. Living in (and
                  loving) this city is what makes me a better advocate for the
                  people who call it home.
                </p>
              </div>

              <p className="mt-8 text-sm text-stone">
                License: {CONTACT.license}
              </p>
            </FadeUp>
          </div>
        </Container>
      </section>

      <Divider />

      {/* ── Credentials ── */}
      <section className="py-24 lg:py-32">
        <Container>
          <FadeUp className="mb-16 text-center">
            <SectionLabel>Credentials</SectionLabel>
            <SectionTitle as="h2">
              The Qualifications Behind the Work
            </SectionTitle>
          </FadeUp>

          <div className="grid gap-10 sm:grid-cols-2 lg:gap-16">
            {credentials.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1}>
                <div className="border-t border-silver pt-6">
                  <h3 className="mb-3 font-serif text-xl font-light tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone">
                    {item.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <Divider />

      {/* ── Philosophy ── */}
      <section className="py-24 lg:py-32">
        <Container>
          <FadeUp className="mx-auto max-w-3xl text-center">
            <SectionLabel>My Approach</SectionLabel>
            <SectionTitle as="h2" className="mb-8">
              Client First, Always
            </SectionTitle>
            <div className="space-y-5 text-base leading-relaxed text-stone">
              <p>
                Good real estate work starts with listening. Before we tour a
                single property or look at a single offer, I want to understand
                your goals, your lifestyle, and your timeline. Everything I do
                is built around you, not a cookie cutter formula.
              </p>
              <p>
                I&apos;m straightforward. You&apos;ll always know where you
                stand, what your options are, and what I honestly think. I
                measure my success by the relationships I build, not just the
                number of closings.
              </p>
              <p>
                From our first conversation to well beyond the closing table, I
                am your resource, your advocate, and your partner in making
                {" "}{SITE.market} feel like home.
              </p>
            </div>
          </FadeUp>
        </Container>
      </section>

      <Divider />

      {/* ── Contact CTA ── */}
      <section className="py-24 lg:py-32">
        <Container>
          <FadeUp className="text-center">
            <SectionTitle as="h2" className="mb-4">
              Let&apos;s Connect
            </SectionTitle>
            <p className="mx-auto mb-10 max-w-lg text-stone">
              Whether you&apos;re ready to start your home search or simply have
              questions about the Houston market, I&apos;d love to hear from
              you.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/contact" variant="accent">
                Get in Touch
              </Button>
              <Button href={`tel:${CONTACT.phone}`} variant="secondary">
                Call {CONTACT.phone}
              </Button>
            </div>
          </FadeUp>
        </Container>
      </section>
    </>
  );
}
