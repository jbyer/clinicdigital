import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LifetimeValueSystemHero } from "@/components/offers/lifetime-value-system/lvs-hero"
import { LifetimeValueSystemFeatures } from "@/components/offers/lifetime-value-system/lvs-features"
import { LifetimeValueSystemBenefits } from "@/components/offers/lifetime-value-system/lvs-benefits"
import { LifetimeValueSystemProcess } from "@/components/offers/lifetime-value-system/lvs-process"
import { SpringSalePopup } from "@/components/spring-sale-popup"

export const metadata = {
  title: "Lifetime Value System | Patient Retention & Website | ClinicDigital",
  description:
    "ClinicDigital's Lifetime Value System is a complete patient retention solution for medical practices — combining CRM automation, reactivation campaigns, and a modern website to keep patients coming back.",
  keywords: ["patient retention solution for medical practices",]
}

export default function LifetimeValueSystemPage() {
  return (
    <>
      <SpringSalePopup />
      <Navigation />
      <main>
        <LifetimeValueSystemHero />
        <LifetimeValueSystemFeatures />
        <LifetimeValueSystemBenefits />
        <LifetimeValueSystemProcess />
      </main>
      <Footer />
    </>
  )
}
