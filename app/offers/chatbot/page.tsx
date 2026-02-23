import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ChatbotHero } from "@/components/offers/chatbot/cb-hero"
import { ChatbotTrustBar } from "@/components/offers/chatbot/cb-trust-bar"
import { ChatbotFeatures } from "@/components/offers/chatbot/cb-features"
import { ChatbotPricing } from "@/components/offers/chatbot/cb-pricing"
import { ChatbotProcess } from "@/components/offers/chatbot/cb-process"
import { ChatbotComparison } from "@/components/offers/chatbot/cb-comparison"
import { ChatbotFaq } from "@/components/offers/chatbot/cb-faq"
import { ChatbotCta } from "@/components/offers/chatbot/cb-cta"

export default function ChatbotPage() {
  return (
    <>
      <Navigation />
      <main>
        <ChatbotHero />
        <ChatbotTrustBar />
        <ChatbotFeatures />
        <ChatbotPricing />
        <ChatbotProcess />
        <ChatbotComparison />
        <ChatbotFaq />
        <ChatbotCta />
      </main>
      <Footer />
    </>
  )
}
