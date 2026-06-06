import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AcquisitionEngineHero } from "@/components/offers/acquisition-engine/ae-hero"
import { AcquisitionEngineFeatures } from "@/components/offers/acquisition-engine/ae-features"
import { AcquisitionEngineBenefits } from "@/components/offers/acquisition-engine/ae-benefits"
import { AcquisitionEngineProcess } from "@/components/offers/acquisition-engine/ae-process"
import { SpringSalePopup } from "@/components/spring-sale-popup"

export const metadata = {
  title: "Acquisition Engine | Patient Lead Generation System | ClinicDigital",
  description:
    "Capture and nurture patient leads automatically. The Acquisition Engine combines smart forms, local SEO, and marketing automation to fill your appointment calendar. Never lose another qualified lead.",
  keywords: ["lead generation", "patient acquisition", "marketing automation", "dental marketing", "medical marketing"],
}

export default function AcquisitionEnginePage() {
  return (
    <>
      <SpringSalePopup />
      <Navigation />
      <main>
        <AcquisitionEngineHero />
        <AcquisitionEngineFeatures />
        <AcquisitionEngineBenefits />
        <AcquisitionEngineProcess />
      </main>
      <Footer />
    </>
  )
}
