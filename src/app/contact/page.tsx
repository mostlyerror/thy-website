import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeUp from "@/components/animations/FadeUp";
import Divider from "@/components/ui/Divider";
import SocialIcons from "@/components/ui/SocialIcons";
import ContactForm from "@/components/ContactForm";
import { SITE, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact | ${SITE.title}`,
};

const faqs = [
  {
    question: "What areas of Houston do you serve?",
    answer:
      "I serve the entire Greater Houston area, including the Heights, Montrose, River Oaks, Memorial, West University, Sugar Land, Katy, The Woodlands, and surrounding communities. If you have a specific neighborhood in mind, don\u2019t hesitate to ask.",
  },
  {
    question: "How quickly can I expect a response?",
    answer:
      "I aim to respond to all inquiries within two hours during business hours. If you reach out in the evening or on weekends, you\u2019ll hear back by the following morning at the latest.",
  },
  {
    question: "Do I need to be pre-approved before reaching out?",
    answer:
      "Not at all. Whether you\u2019re just starting to look around or you\u2019re ready to make an offer tomorrow, I\u2019m happy to help at any stage. If you need it, I can also connect you with mortgage lenders I\u2019ve worked with to get the pre-approval process going.",
  },
  {
    question: "What does it cost to work with you as a buyer?",
    answer:
      "In most transactions, buyer agent compensation is covered by the seller or negotiated as part of the deal. During our initial consultation, I\u2019ll walk you through exactly how compensation works so there are never any surprises.",
  },
  {
    question: "Can you help with both buying and selling at the same time?",
    answer:
      "Absolutely. A lot of my clients are buying and selling at the same time. I\u2019ve done it many times and know how to coordinate timelines, contingencies, and logistics so everything lines up.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-paper pt-32 pb-20">
        <Container>
          <FadeUp>
            <SectionLabel>Contact</SectionLabel>
            <SectionTitle as="h1" className="max-w-3xl">
              Get in Touch
            </SectionTitle>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-stone">
              Whether you&apos;re ready to buy, sell, or lease, or you just
              have questions about the Houston market, I&apos;d love to
              hear from you. Fill out the form below and I&apos;ll be in touch
              shortly.
            </p>
          </FadeUp>
        </Container>
      </section>

      <Divider />

      {/* ── Form + Contact Info ── */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Form, takes up 2 columns */}
            <div className="lg:col-span-2">
              <FadeUp>
                <ContactForm />
              </FadeUp>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FadeUp delay={0.15}>
                <div className="space-y-10">
                  {/* Email */}
                  <div>
                    <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-stone">
                      Email
                    </h3>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-sm text-ink transition-colors hover:text-warm"
                    >
                      {CONTACT.email}
                    </a>
                  </div>

                  {/* Phone */}
                  <div>
                    <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-stone">
                      Phone
                    </h3>
                    <a
                      href={`tel:${CONTACT.phone}`}
                      className="text-sm text-ink transition-colors hover:text-warm"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>

                  {/* Address */}
                  <div>
                    <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-stone">
                      Location
                    </h3>
                    <p className="text-sm text-ink">{CONTACT.address}</p>
                  </div>

                  {/* Office Hours */}
                  <div>
                    <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-stone">
                      Office Hours
                    </h3>
                    <div className="space-y-1 text-sm text-ink">
                      <p>Mon to Fri: 9:00 AM to 6:00 PM</p>
                      <p>Sat: 10:00 AM to 4:00 PM</p>
                      <p>Sun: By appointment</p>
                    </div>
                  </div>

                  {/* Social */}
                  <div>
                    <h3 className="mb-3 text-xs font-medium uppercase tracking-wide text-stone">
                      Follow Along
                    </h3>
                    <SocialIcons />
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </Container>
      </section>

      <Divider />

      {/* ── FAQs ── */}
      <section className="py-24 lg:py-32">
        <Container>
          <FadeUp className="mb-16 text-center">
            <SectionLabel>Common Questions</SectionLabel>
            <SectionTitle as="h2">
              Frequently Asked
            </SectionTitle>
          </FadeUp>

          <div className="mx-auto max-w-3xl space-y-0">
            {faqs.map((faq, i) => (
              <FadeUp key={faq.question} delay={i * 0.08}>
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
