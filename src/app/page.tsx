import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BlogPreview from "@/components/BlogPreview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Services />
      <Testimonials />
      <FAQ />
      <BlogPreview />
      <CTA />
      <Footer />
    </main>
  );
}
