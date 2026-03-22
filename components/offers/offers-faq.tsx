"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question:
      "How long does it take to see results from healthcare SEO?",
    answer:
      "Most of our clients start seeing measurable improvements in local search visibility within 4-8 weeks. Full organic ranking momentum typically builds over 3-6 months, but unlike generic agencies, we deploy AI-powered optimizations and local SEO tactics that accelerate early wins significantly.",
  },
  {
    question:
      "Do you work exclusively with medical practices and medspas?",
    answer:
      "Yes. Our entire platform, strategy playbook, and content workflows are built exclusively for healthcare providers -- including medical practices, dental offices, medspas, chiropractic clinics, and specialty practices. This deep vertical focus means faster results and more relevant strategies.",
  },
  {
    question:
      "What makes ClinicDigital different from other SEO agencies?",
    answer:
      "We combine AI-powered automation with healthcare-specific expertise. While generic agencies use one-size-fits-all approaches, we understand HIPAA considerations, medical terminology, patient search behavior, and the unique competitive landscape of healthcare marketing. Plus, everything -- SEO, content, reputation, CRM -- lives under one roof.",
  },
  {
    question: "Do you manage Google Business Profiles?",
    answer:
      "Absolutely. Google Business Profile optimization is a cornerstone of our local SEO strategy. We handle GBP setup and verification, weekly post publishing, Q&A management, review response, photo optimization, and geo-grid rank tracking so you dominate the Local Pack in your service area.",
  },
  {
    question: "Can you help with website design and development?",
    answer:
      "Yes. We build HIPAA-aware, mobile-first websites optimized for speed, accessibility, and conversion. Every site is designed to establish clinical credibility and make it effortless for patients to book appointments, call your office, or submit inquiries.",
  },
  {
    question:
      "How do you measure and report on performance?",
    answer:
      "You get a real-time reporting dashboard that tracks organic traffic, keyword rankings, Google Business Profile metrics, review volume, conversion rates, and patient inquiry trends. We also provide monthly strategy calls to review performance and adjust the plan based on data.",
  },
  {
    question: "What is the investment to get started?",
    answer:
      "Our plans are customized based on your practice size, number of locations, and growth goals. We offer packages starting from a single-location local SEO plan to enterprise multi-location strategies. Book a free consultation to get a tailored proposal with transparent pricing.",
  },
  {
    question: "Do I need a long-term contract?",
    answer:
      "We offer flexible month-to-month agreements after an initial 4 months onboarding period. SEO is a long-term investment, so we recommend at least a 4-month commitment to see the full impact, but we never lock you into rigid contracts. Our retention rate speaks for itself -- 97% of clients stay.",
  },
]

export function OffersFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Frequently Asked Questions
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">
              Everything you need to know.
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
                className="overflow-hidden rounded-xl border border-border bg-background transition-colors"
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
