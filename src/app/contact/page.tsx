import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { CONTACT_PAGE_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeUp from "@/components/animations/FadeUp";
import Divider from "@/components/ui/Divider";
import SocialIcons from "@/components/ui/SocialIcons";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default async function ContactPage() {
  const [{ data: page }, { data: settings }] = await Promise.all([
    sanityFetch({ query: CONTACT_PAGE_QUERY }),
    sanityFetch({ query: SITE_SETTINGS_QUERY }),
  ]);

  const email = settings?.email || "thy@thynguyen.com";
  const phone = settings?.phone || "(832) 555-0100";
  const address = settings?.address || "Houston, TX";

  return (
    <>
      {/* Hero */}
      <section className="bg-paper pt-32 pb-20">
        <Container>
          <FadeUp>
            <SectionLabel>Contact</SectionLabel>
            <SectionTitle as="h1" className="max-w-3xl">
              {page?.heroTitle || "Get in Touch"}
            </SectionTitle>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-stone">
              {page?.heroText || "Whether you\u2019re ready to buy, sell, or lease, or you just have questions about the Houston market, I\u2019d love to hear from you."}
            </p>
          </FadeUp>
        </Container>
      </section>

      <Divider />

      {/* Form + Contact Info */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <FadeUp>
                <ContactForm services={settings?.contactServices} />
              </FadeUp>
            </div>

            <div className="lg:col-span-1">
              <FadeUp delay={0.15}>
                <div className="space-y-10">
                  <div>
                    <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-stone">
                      Email
                    </h3>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm text-ink transition-colors hover:text-warm"
                    >
                      {email}
                    </a>
                  </div>

                  <div>
                    <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-stone">
                      Phone
                    </h3>
                    <a
                      href={`tel:${phone}`}
                      className="text-sm text-ink transition-colors hover:text-warm"
                    >
                      {phone}
                    </a>
                  </div>

                  <div>
                    <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-stone">
                      Location
                    </h3>
                    <p className="text-sm text-ink">{address}</p>
                  </div>

                  <div>
                    <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-stone">
                      Office Hours
                    </h3>
                    <div className="space-y-1 text-sm text-ink">
                      {settings?.officeHours?.map((oh: { _key: string; days?: string | null; hours?: string | null }) => (
                        <p key={oh._key}>{oh.days}: {oh.hours}</p>
                      )) || (
                        <>
                          <p>Mon to Fri: 9:00 AM to 6:00 PM</p>
                          <p>Sat: 10:00 AM to 4:00 PM</p>
                          <p>Sun: By appointment</p>
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xs font-medium uppercase tracking-wide text-stone">
                      Follow Along
                    </h3>
                    <SocialIcons
                      linkedin={settings?.linkedin}
                      facebook={settings?.facebook}
                      instagram={settings?.instagram}
                    />
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </Container>
      </section>

      <Divider />

      {/* FAQs */}
      <section className="py-24 lg:py-32">
        <Container>
          <FadeUp className="mb-16 text-center">
            <SectionLabel>Common Questions</SectionLabel>
            <SectionTitle as="h2">
              Frequently Asked
            </SectionTitle>
          </FadeUp>

          <div className="mx-auto max-w-3xl space-y-0">
            {page?.faqs?.map((faq: { _key: string; question?: string | null; answer?: string | null }, i: number) => (
              <FadeUp key={faq._key} delay={i * 0.08}>
                <div className="border-t border-silver py-8">
                  <h3 className="mb-3 font-serif text-lg font-light tracking-tight text-ink">
                    {faq.question}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone">
                    {faq.answer}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
