import { HeroSection } from "@/components/hero-section"
import { FeatureHighlights } from "@/components/feature-highlights"
import { TestimonialSection } from "@/components/testimonial-section"
import { Navbar } from "@/components/layout/navbar"
import { DataVisualizationSection } from "@/components/data-visualization-section"
import { PricingSection } from "@/components/pricing-section"
import { PartnerLogos } from "@/components/partner-logos"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <main className="min-h-screen font-poppins">
      <Navbar />
      <HeroSection />
      <FeatureHighlights />
      <DataVisualizationSection />
      <TestimonialSection />
      <PartnerLogos />
      <PricingSection />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}
