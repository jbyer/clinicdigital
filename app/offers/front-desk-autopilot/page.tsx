import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FrontDeskAutopilotHero } from "@/components/offers/front-desk-autopilot/fda-hero"
import { FrontDeskAutopilotFeatures } from "@/components/offers/front-desk-autopilot/fda-features"
import { FrontDeskAutopilotBenefits } from "@/components/offers/front-desk-autopilot/fda-benefits"
import { FrontDeskAutopilotProcess } from "@/components/offers/front-desk-autopilot/fda-process"
import { SpringSalePopup } from "@/components/spring-sale-popup"

export const metadata = {
  title: "Front Desk Autopilot | 24/7 AI Patient Service | ClinicDigital",
  description:
    "HIPAA-compliant AI chatbots and voice assistants that handle patient calls and appointments 24/7. Reduce no-shows by 40% and free up your front desk staff.",
  keywords: ["AI chatbot", "voice AI", "appointment scheduling", "patient service", "no-show reduction"],
}

export default function FrontDeskAutopilotPage() {
  return (
    <>
      <SpringSalePopup />
      <Navigation />
      <main>
        <FrontDeskAutopilotHero />
        <FrontDeskAutopilotFeatures />
        <FrontDeskAutopilotBenefits />
        <FrontDeskAutopilotProcess />
      </main>
      <Footer />
    </>
  )
}
