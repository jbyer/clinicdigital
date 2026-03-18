import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LeadGenAdsHero } from "@/components/offers/lead-gen-ads/lga-hero"
import { LeadGenAdsTrustBar } from "@/components/offers/lead-gen-ads/lga-trust-bar"
import { LeadGenAdsFeatures } from "@/components/offers/lead-gen-ads/lga-features"
import { LeadGenAdsPricing } from "@/components/offers/lead-gen-ads/lga-pricing"
import { LeadGenAdsProcess } from "@/components/offers/lead-gen-ads/lga-process"
import { LeadGenAdsComparison } from "@/components/offers/lead-gen-ads/lga-comparison"
import { LeadGenAdsFaq } from "@/components/offers/lead-gen-ads/lga-faq"
import { LeadGenAdsCta } from "@/components/offers/lead-gen-ads/lga-cta"

export default function LeadGenAdsPage() {
  return (
    <>
      <Navigation />
      <main>
        <LeadGenAdsHero />
        <LeadGenAdsTrustBar />
        <LeadGenAdsFeatures />
        <LeadGenAdsPricing />
        <LeadGenAdsProcess />
        <LeadGenAdsComparison />
        <LeadGenAdsFaq />
        <LeadGenAdsCta />
      </main>
      <Footer />
    </>
  )
}
