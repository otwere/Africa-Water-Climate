import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { MissionVision } from "@/components/about/mission-vision"
import { TeamSection } from "@/components/about/team-section"
import { Timeline } from "@/components/about/timeline"
import { PartnerLogos } from "@/components/partner-logos"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/layout/scroll-to-top"

export const metadata: Metadata = {
  title: "About Us | Africa Water & Climate Data Platform",
  description: "Learn about our mission, team, and history in advancing water resource management across Africa.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen font-poppins">
      <Navbar />
      <AboutHero />
      <MissionVision />
      <TeamSection />
      <Timeline />
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
          <PartnerLogos />
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
