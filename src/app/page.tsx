import { sanityFetch } from "@/sanity/lib/live";
import {
  HOME_PAGE_QUERY,
  TESTIMONIALS_QUERY,
  FEATURED_PROPERTIES_QUERY,
  SITE_SETTINGS_QUERY,
} from "@/sanity/lib/queries";
import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";
import ContactCTA from "@/components/sections/ContactCTA";

export default async function Home() {
  const [{ data: page }, { data: settings }, { data: testimonials }, { data: properties }] =
    await Promise.all([
      sanityFetch({ query: HOME_PAGE_QUERY }),
      sanityFetch({ query: SITE_SETTINGS_QUERY }),
      sanityFetch({ query: TESTIMONIALS_QUERY }),
      sanityFetch({ query: FEATURED_PROPERTIES_QUERY }),
    ]);

  return (
    <>
      <Hero
        heroImage={page?.heroImage}
        name={settings?.name}
        tagline={settings?.tagline}
      />
      <Introduction
        label={page?.introLabel}
        text={page?.introText}
      />
      <Stats stats={page?.stats} />
      <Services
        label={page?.servicesLabel}
        title={page?.servicesTitle}
        services={page?.services}
      />
      <FeaturedProperties properties={properties} />
      <About
        label={page?.aboutLabel}
        title={page?.aboutTitle}
        paragraph1={page?.aboutParagraph1}
        paragraph2={page?.aboutParagraph2}
        image={page?.aboutImage}
      />
      <Testimonials testimonials={testimonials} />
      <Newsletter
        label={page?.newsletterLabel}
        title={page?.newsletterTitle}
        description={page?.newsletterDescription}
      />
      <ContactCTA
        title={page?.ctaTitle}
        text={page?.ctaText}
      />
    </>
  );
}
