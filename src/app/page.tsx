import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Stats />
      <Services />
      <FeaturedProperties />
      <About />
      <Testimonials />
      <Newsletter />
      <ContactCTA />
    </>
  );
}
