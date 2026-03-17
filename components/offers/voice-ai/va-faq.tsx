"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How long does it take to get my Voice AI live?",
    answer:
      "Most Voice AI agents are trained, integrated, and deployed within 10-14 business days. Enterprise builds with multi-location routing and custom integrations may take 2-3 weeks. We keep you updated at every stage with progress check-ins.",
  },
  {
    question: "What information do you need from me to train the Voice AI?",
    answer:
      "We need your service list, call handling procedures, frequently asked questions, appointment types, booking rules, pricing (if shared over the phone), and any specific protocols for different call types. We handle all the AI training -- you just provide the source material.",
  },
  {
    question: "What does the monthly service fee cover?",
    answer:
      "Your monthly fee covers AI hosting and compute, included call minutes, phone system integration maintenance, ongoing optimization and retraining, analytics reporting, and support. Think of it as your always-on AI receptionist subscription -- everything needed to keep the voice agent accurate, professional, and converting.",
  },
  {
    question: "How does the Voice AI handle complex or sensitive calls?",
    answer:
      "The AI is trained to recognize when a call requires human intervention -- urgent medical matters, upset callers, or complex situations outside its training. It seamlessly transfers these calls to your team or takes detailed messages for immediate follow-up.",
  },
  {
    question: "Will the Voice AI replace my front desk staff?",
    answer:
      "No -- it augments them. The Voice AI handles routine calls, after-hours inquiries, and overflow periods so your team can focus on in-person patients and complex interactions. Think of it as adding capacity without adding headcount.",
  },
  {
    question: "Is the Voice AI HIPAA compliant?",
    answer:
      "Our Voice AI agents are designed with HIPAA awareness in mind -- encrypted calls, no unauthorized PHI storage, and audit logging. The Enterprise plan includes full HIPAA-compliant call handling with BAA coverage. We recommend the Enterprise tier for practices handling sensitive patient data via phone.",
  },
  {
    question: "What happens after the 4-month minimum term?",
    answer:
      "After the initial 4-month term, your service continues month-to-month with no long-term contract. You can cancel anytime with 30 days notice. Most clients stay because the AI continues to improve and deliver ROI that far exceeds the monthly cost.",
  },
  {
    question: "Can the Voice AI integrate with my existing phone system?",
    answer:
      "Yes. We integrate with most major VoIP and phone systems, including RingCentral, Vonage, 8x8, Google Voice, and traditional phone lines via SIP. Your Voice AI can answer your existing number or a dedicated line -- whatever works best for your practice.",
  },
]

export function VoiceAIFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Frequently Asked Questions
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">
              Questions about your Voice AI agent.
            </span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-border bg-card transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-card-foreground sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="px-6 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
