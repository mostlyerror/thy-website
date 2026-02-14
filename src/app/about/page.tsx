import type { Metadata } from "next";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { ABOUT_PAGE_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";
import ImageReveal from "@/components/animations/ImageReveal";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "About",
};

export default async function AboutPage() {
  const [{ data: page }, { data: settings }] = await Promise.all([
    sanityFetch({ query: ABOUT_PAGE_QUERY }),
    sanityFetch({ query: SITE_SETTINGS_QUERY }),
  ]);

  const name = settings?.name || "Thy Nguyen";
  const license = settings?.license || "TX #000000";
  const phone = settings?.phone || "(832) 555-0100";

  const bioImage = page?.bioImage?.asset
    ? urlFor(page.bioImage).width(800).url()
    : "/images/thy/portrait-window.jpeg";

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-paper pt-32 pb-20">
        <Container>
          <FadeUp>
            <SectionLabel>About</SectionLabel>
            <SectionTitle as="h1" className="max-w-3xl">
              {page?.heroTitle || "The Story Behind the Service"}
            </SectionTitle>
          </FadeUp>
        </Container>
      </section>

      <Divider />

      {/* Bio Split */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <ImageReveal>
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={bioImage}
                  alt={`${name} - Houston Realtor`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ImageReveal>

            <FadeUp>
              <SectionLabel>Meet {name}</SectionLabel>
              <SectionTitle as="h2" className="mb-8">
                {page?.bioTitle || "Get to Know Thy"}
              </SectionTitle>

              <div className="space-y-5 text-base leading-relaxed text-stone">
                {page?.bioParagraphs?.map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                )) || (
                  <>
                    <p>I was born and raised in Houston, so I know this city inside and out.</p>
                    <p>Over 15 years and more than 200 homes sold across the Greater Houston area.</p>
                  </>
                )}
              </div>

              <p className="mt-8 text-sm text-stone">
                License: {license}
              </p>
            </FadeUp>
          </div>
        </Container>
      </section>

      <Divider />

      {/* Credentials */}
      <section className="py-24 lg:py-32">
        <Container>
          <FadeUp className="mb-16 text-center">
            <SectionLabel>Credentials</SectionLabel>
            <SectionTitle as="h2">
              The Qualifications Behind the Work
            </SectionTitle>
          </FadeUp>

          <div className="grid gap-10 sm:grid-cols-2 lg:gap-16">
            {page?.credentials?.map((item: { _key: string; title?: string | null; description?: string | null }, i: number) => (
              <FadeUp key={item._key} delay={i * 0.1}>
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

      {/* Philosophy */}
      <section className="py-24 lg:py-32">
        <Container>
          <FadeUp className="mx-auto max-w-3xl text-center">
            <SectionLabel>My Approach</SectionLabel>
            <SectionTitle as="h2" className="mb-8">
              {page?.philosophyTitle || "Client First, Always"}
            </SectionTitle>
            <div className="space-y-5 text-base leading-relaxed text-stone">
              {page?.philosophyParagraphs?.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              )) || (
                <p>Good real estate work starts with listening.</p>
              )}
            </div>
          </FadeUp>
        </Container>
      </section>

      <Divider />

      {/* Contact CTA */}
      <section className="py-24 lg:py-32">
        <Container>
          <FadeUp className="text-center">
            <SectionTitle as="h2" className="mb-4">
              {page?.ctaTitle || "Let\u2019s Connect"}
            </SectionTitle>
            <p className="mx-auto mb-10 max-w-lg text-stone">
              {page?.ctaText || "Whether you\u2019re ready to start your home search or simply have questions about the Houston market, I\u2019d love to hear from you."}
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/contact" variant="accent">
                Get in Touch
              </Button>
              <Button href={`tel:${phone}`} variant="secondary">
                Call {phone}
              </Button>
            </div>
          </FadeUp>
        </Container>
      </section>
    </>
  );
}
