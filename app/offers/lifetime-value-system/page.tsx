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
    "Complete patient retention infrastructure including modern website, continuous maintenance, and CRM. Turn one-time patients into lifelong loyalists and maximize patient lifetime value.",
  keywords: ["patient retention", "practice website", "patient CRM", "patient loyalty", "website maintenance"],
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
