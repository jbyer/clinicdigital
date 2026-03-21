"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What exactly do I get?",
    answer:
      "You get complete campaign setup including audience research, targeting configuration, ad copy, creative design (images/graphics), lead capture form setup, conversion tracking, and campaign launch. Basically, everything needed to get your ads live and generating leads -- except the ad spend itself.",
  },
  {
    question: "How much should I budget for ad spend?",
    answer:
      "We recommend $900-$1500 for Local Pulse campaigns, $1800-$4,000 for Growth Engine campaigns, and $4,500-$9,000 for Clinic Authority campaigns. This goes directly to Facebook/Google/TikTok -- we don't take a cut. Higher ad spend generally means more leads, but we optimize to get the best cost per lead regardless of budget.",
  },

  {
    question: "What happens after the campaign ends?",
    answer:
      "You receive a full performance report with leads generated, cost per lead, best-performing ads, and recommendations. You keep your ad account, creative assets, and audience data. Many clients book follow-up campaigns or transition to ongoing management if they want continuous lead flow.",
  },
  {
    question: "Do I own my ad account and data?",
    answer:
      "Yes, 100%. We either work in your existing ad account or help you create one that you own. All campaigns, audiences, and creative assets belong to you. You have full access and control at all times.",
  },
  {
    question: "How quickly can my campaign go live?",
    answer:
      "Standard campaigns go live within 5-7 business days after our strategy call. Clinic Authority campaigns have priority setup and can launch in 3-5 days. This includes creative development, account setup, and platform approval time.",
  },
  {
    question: "What if I need more than just ads?",
    answer:
      "This offer is specifically for practices that just want targeted ads and leads -- no extras. If you need website design, SEO, CRM setup, chatbots, or full marketing management, check out our other services or book a call to discuss a custom package.",
  },
  {
    question: "Can I run multiple campaigns back-to-back?",
    answer:
      "Absolutely. Many clients run consecutive campaigns, especially for different services or seasonal promotions. We offer a 15% discount on repeat campaigns booked within 30 days of a completed campaign.",
  },
]

export function LeadGenAdsFaq() {
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
              Questions about lead generation campaigns.
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
