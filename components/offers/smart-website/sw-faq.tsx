"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How long does it take to get my Smart Website live?",
    answer:
      "Most Smart Websites are designed, developed, and launched within 4 weeks. Complex Enterprise builds with multi-location routing and custom automation may take 5-6 weeks. We keep you updated at every stage with weekly progress check-ins.",
  },
  {
    question: "What do I need to provide to get started?",
    answer:
      "Just your brand assets (logo, colors, photos if available), a list of services you offer, and your growth goals. We handle the rest -- copywriting, design, development, and SEO. If you do not have photos, we source professional healthcare imagery for you.",
  },
  {
    question: "What does the monthly service fee cover?",
    answer:
      "Your monthly fee covers premium hosting, SSL security, ongoing website maintenance, software updates, AI chatbot operation, CRM integrations, performance monitoring, and continuous optimization. Think of it as your website operating system fee -- everything needed to keep your site fast, secure, and converting.",
  },
  {
    question: "Can I integrate with my existing CRM or booking system?",
    answer:
      "Yes. We integrate with most major healthcare CRM and booking platforms, including Cliniko, Jane App, Mindbody, Acuity Scheduling, Calendly, and custom systems. If you use a proprietary system, we can typically connect via API or Zapier.",
  },
  {
    question: "Is the AI chatbot customizable for my practice?",
    answer:
      "Absolutely. The chatbot is trained on your services, FAQs, and booking rules. It can answer specialty-specific questions, qualify leads based on your criteria, and route inquiries to the right department or provider. You control the personality and tone.",
  },
  {
    question: "Do I own my website if I cancel?",
    answer:
      "Yes. You own your website design, content, and all custom assets. If you choose to cancel, we provide a full export of your site files, content, and data. We believe in earning your business, not locking you in.",
  },
  {
    question: "What happens after the 4-month minimum term?",
    answer:
      "After the initial 4-month term, your service continues month-to-month with no long-term contract. You can cancel anytime with 30 days notice. Most clients stay because the ongoing optimization and AI tools continue to deliver ROI.",
  },
  {
    question: "Is the website HIPAA compliant?",
    answer:
      "Our websites are designed with HIPAA awareness in mind -- secure form submissions, encrypted data transfer, and privacy-focused data handling. For full HIPAA compliance, we recommend pairing the website with a HIPAA-compliant CRM and hosting environment, which we can set up as part of the Enterprise plan.",
  },
]

export function SmartWebsiteFaq() {
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
              Questions about your Smart Website.
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
