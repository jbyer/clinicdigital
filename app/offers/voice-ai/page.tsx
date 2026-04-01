import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VoiceAIHero } from "@/components/offers/voice-ai/va-hero"
import { VoiceAITrustBar } from "@/components/offers/voice-ai/va-trust-bar"
import { VoiceAIFeatures } from "@/components/offers/voice-ai/va-features"
import { VoiceAIPricing } from "@/components/offers/voice-ai/va-pricing"
import { VoiceAIProcess } from "@/components/offers/voice-ai/va-process"
import { VoiceAIComparison } from "@/components/offers/voice-ai/va-comparison"
import { VoiceAIFaq } from "@/components/offers/voice-ai/va-faq"
import { VoiceAICta } from "@/components/offers/voice-ai/va-cta"
import { SpringSalePopup } from "@/components/spring-sale-popup"

export default function VoiceAIPage() {
  return (
    <>
      <SpringSalePopup />
      <Navigation />
      <main>
        <VoiceAIHero />
        <VoiceAITrustBar />
        <VoiceAIFeatures />
        <VoiceAIPricing />
        <VoiceAIProcess />
        <VoiceAIComparison />
        <VoiceAIFaq />
        <VoiceAICta />
      </main>
      <Footer />
    </>
  )
}
