import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ScrollReveal>
        <Stats />
      </ScrollReveal>
      <ScrollReveal>
        <Features />
      </ScrollReveal>
      <div className="my-16 border-t border-oceanic-noir max-w-6xl mx-auto"></div>
      <ScrollReveal>
        <Pricing />
      </ScrollReveal>
      <div className="my-16 border-t border-oceanic-noir max-w-6xl mx-auto"></div>
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      <Footer />
    </main>
  );
}
