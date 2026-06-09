import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AcquisitionEngineHero } from "@/components/offers/acquisition-engine/ae-hero"
import { AcquisitionEngineFeatures } from "@/components/offers/acquisition-engine/ae-features"
import { AcquisitionEngineBenefits } from "@/components/offers/acquisition-engine/ae-benefits"
import { AcquisitionEngineProcess } from "@/components/offers/acquisition-engine/ae-process"
import { SpringSalePopup } from "@/components/spring-sale-popup"

export const metadata = {
  title: "Acquisition Engine | Patient Lead Generation | ClinicDigital",
  description:
    "ClinicDigital's Acquisition Engine package is a complete patient lead generation system for medical practices — combining local SEO, smart forms, and automated nurturing to fill your schedule.",
  keywords: ["patient lead generation system for medical practices"],
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
