import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SmartWebsiteHero } from "@/components/offers/smart-website/sw-hero"
import { SmartWebsiteTrustBar } from "@/components/offers/smart-website/sw-trust-bar"
import { SmartWebsiteFeatures } from "@/components/offers/smart-website/sw-features"
import { SmartWebsitePricing } from "@/components/offers/smart-website/sw-pricing"
import { SmartWebsiteProcess } from "@/components/offers/smart-website/sw-process"
import { SmartWebsiteComparison } from "@/components/offers/smart-website/sw-comparison"
import { SmartWebsiteFaq } from "@/components/offers/smart-website/sw-faq"
import { SmartWebsiteCta } from "@/components/offers/smart-website/sw-cta"

export default function SmartWebsitePage() {
  return (
    <>
      <Navigation />
      <main>
        <SmartWebsiteHero />
        <SmartWebsiteTrustBar />
        <SmartWebsiteFeatures />
        <SmartWebsitePricing />
        <SmartWebsiteProcess />
        <SmartWebsiteComparison />
        <SmartWebsiteFaq />
        <SmartWebsiteCta />
      </main>
      <Footer />
    </>
  )
}
