import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import WhyUs from "@/components/sections/WhyUs";
import TechMarquee from "@/components/sections/TechMarquee";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Albos Technologies | Top Custom Software Development Company",
  description: "Albos Technologies delivers high-performance web, mobile, blockchain, and enterprise applications. Trusted by global brands.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <Portfolio />
      <WhyUs />
      <TechMarquee />
      <Testimonials />
      <Contact />
    </>
  );
}
