"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How long does it take to get my AI chatbot live?",
    answer:
      "Most chatbots are trained, integrated, and deployed within 10-14 business days. Enterprise builds with multi-location routing and EHR integration may take 2-3 weeks. We keep you updated at every stage with progress check-ins.",
  },
  {
    question: "What information do you need from me to train the chatbot?",
    answer:
      "We need your service list, frequently asked questions, appointment types, booking rules, pricing (if shared publicly), insurance information, and any specific policies patients ask about. We handle all the AI training -- you just provide the source material.",
  },
  {
    question: "What does the monthly service fee cover?",
    answer:
      "Your monthly fee covers AI hosting and compute, conversation credits, CRM integration maintenance, ongoing optimization and retraining, analytics reporting, and support. Think of it as your always-on AI employee subscription -- everything needed to keep the chatbot accurate, fast, and converting.",
  },
  {
    question: "Can the chatbot handle multiple languages?",
    answer:
      "Yes. The AI engine supports multi-language conversations. We can train the chatbot to detect patient language and respond in English, Spanish, and other languages relevant to your patient population. Additional language training is included in Growth and Enterprise plans.",
  },
  {
    question: "Will the chatbot replace my front desk staff?",
    answer:
      "No -- it augments them. The chatbot handles routine questions, after-hours inquiries, and initial lead qualification so your team can focus on high-value patient interactions. Complex or sensitive conversations are seamlessly escalated to a human team member.",
  },
  {
    question: "Is the chatbot HIPAA compliant?",
    answer:
      "Our chatbots are designed with HIPAA awareness in mind -- encrypted conversations, no unauthorized PHI storage, and audit logging. The Enterprise plan includes full HIPAA-compliant conversation handling with BAA coverage. We recommend the Enterprise tier for practices handling sensitive patient data via chat.",
  },
  {
    question: "What happens after the 4-month minimum term?",
    answer:
      "After the initial 4-month term, your service continues month-to-month with no long-term contract. You can cancel anytime with 30 days notice. Most clients stay because the AI continues to improve and deliver ROI that far exceeds the monthly cost.",
  },
  {
    question: "Can the chatbot integrate with my existing booking system?",
    answer:
      "Yes. We integrate with most major healthcare booking and CRM platforms, including GoHighLevel, Cliniko, Jane App, Mindbody, Acuity Scheduling, Calendly, and custom systems via API or Zapier. Your chatbot books directly into your existing calendar.",
  },
]

export function ChatbotFaq() {
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
              Questions about your AI chatbot.
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
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"
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
