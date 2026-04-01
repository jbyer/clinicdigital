import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { OffersHero } from "@/components/offers/offers-hero"
import { OffersTrustBar } from "@/components/offers/offers-trust-bar"
import { OffersServices } from "@/components/offers/offers-services"
import { OffersPricing } from "@/components/offers/offers-pricing"
import { OffersComparison } from "@/components/offers/offers-comparison"
import { OffersResults } from "@/components/offers/offers-results"
import { OffersFaq } from "@/components/offers/offers-faq"
import { OffersCta } from "@/components/offers/offers-cta"
import { SpringSalePopup } from "@/components/spring-sale-popup"

export default function OffersPage() {
  return (
    <>
      <SpringSalePopup />
      <Navigation />
      <main>
        <OffersHero />
        <OffersTrustBar />
        <OffersServices />
        <OffersPricing />
        <OffersComparison />
        <OffersResults />
        <OffersFaq />
        <OffersCta />
      </main>
      <Footer />
    </>
  )
}
