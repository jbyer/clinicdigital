import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MaintenanceHero } from "@/components/offers/website-maintenance/wm-hero"
import { MaintenanceTrustBar } from "@/components/offers/website-maintenance/wm-trust-bar"
import { MaintenanceFeatures } from "@/components/offers/website-maintenance/wm-features"
import { MaintenancePricing } from "@/components/offers/website-maintenance/wm-pricing"
import { MaintenanceBenefits } from "@/components/offers/website-maintenance/wm-benefits"
import { MaintenanceFaq } from "@/components/offers/website-maintenance/wm-faq"
import { MaintenanceCta } from "@/components/offers/website-maintenance/wm-cta"
import { SpringSalePopup } from "@/components/spring-sale-popup"

export const metadata: Metadata = {
  title: "Website Maintenance Services for Medical Practices | ClinicDigital.co",
  description:
    "Keep your medical practice website secure, fast, and always online with our comprehensive maintenance plans. Regular updates, security monitoring, backups, and 24/7 uptime monitoring.",
}

export default function WebsiteMaintenancePage() {
  return (
    <>
      <SpringSalePopup />
      <Navigation />
      <main>
        <MaintenanceHero />
        <MaintenanceTrustBar />
        <MaintenanceFeatures />
        <MaintenancePricing />
        <MaintenanceBenefits />
        <MaintenanceFaq />
        <MaintenanceCta />
      </main>
      <Footer />
    </>
  )
}
