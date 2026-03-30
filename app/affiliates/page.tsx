import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AffiliatesHero } from "@/components/affiliates/aff-hero"
import { AffiliatesHowItWorks } from "@/components/affiliates/aff-how-it-works"
import { AffiliatesCommission } from "@/components/affiliates/aff-commission"
import { AffiliatesCalculator } from "@/components/affiliates/aff-calculator"
import { AffiliatesWhoShouldJoin } from "@/components/affiliates/aff-who-should-join"
import { AffiliatesBenefits } from "@/components/affiliates/aff-benefits"
import { AffiliatesFaq } from "@/components/affiliates/aff-faq"
import { AffiliatesCta } from "@/components/affiliates/aff-cta"

export const metadata: Metadata = {
  title: "Affiliate Program | Earn 10% Lifetime Commissions | ClinicDigital",
  description:
    "Join ClinicDigital's affiliate program and earn 10% on every project plus 10% monthly commissions for the lifetime of each client you refer. No caps, no limits.",
  keywords: [
    "healthcare affiliate program",
    "medical marketing referral",
    "clinic digital affiliate",
    "earn referral commissions",
    "healthcare partner program",
    "medspa affiliate",
  ],
}

export default function AffiliatesPage() {
  return (
    <>
      <Navigation />
      <main>
        <AffiliatesHero />
        <AffiliatesHowItWorks />
        <AffiliatesCommission />
        <AffiliatesCalculator />
        <AffiliatesWhoShouldJoin />
        <AffiliatesBenefits />
        <AffiliatesFaq />
        <AffiliatesCta />
      </main>
      <Footer />
    </>
  )
}
