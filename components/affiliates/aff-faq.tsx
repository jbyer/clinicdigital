"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How do I track my referrals?",
    answer:
      "Once approved, you'll receive access to your affiliate dashboard where you can view real-time stats including link clicks, referral sign-ups, conversion status, and earnings history. You'll also receive email notifications when a referral converts.",
  },
  {
    question: "When do I get paid?",
    answer:
      "Commissions are paid monthly, approximately 15 days after the client's payment is received. For example, if your referral pays on March 1st, you'll receive your commission around March 15th. We send payments via PayPal, Stripe, or direct bank transfer.",
  },
  {
    question: "What's the minimum payout threshold?",
    answer:
      "The minimum payout is $50. If your balance is below $50, it will roll over to the next month until the threshold is met. Most active affiliates easily exceed this with just one or two referrals.",
  },
  {
    question: "Can I refer myself or my own business?",
    answer:
      "No, the affiliate program is designed for referring third-party businesses. If you're interested in our services for yourself, we'd be happy to discuss direct pricing options with you instead.",
  },
  {
    question: "How long does the tracking cookie last?",
    answer:
      "Our tracking cookie lasts 90 days. If someone clicks your affiliate link and signs up within 90 days, you'll receive credit for the referral — even if they don't convert immediately.",
  },
  {
    question: "What if a referral doesn't sign up immediately?",
    answer:
      "No problem. Our 90-day cookie ensures you get credit for conversions that happen weeks or even months after the initial click. You can also make direct introductions via email, and we'll manually attribute the referral to your account.",
  },
  {
    question: "Are there any costs to join?",
    answer:
      "None. The affiliate program is completely free to join. There are no setup fees, monthly fees, or hidden costs. You only earn — you never pay.",
  },
  {
    question: "Can I promote ClinicDigital on social media or with ads?",
    answer:
      "Yes! We encourage affiliates to promote via social media, email newsletters, blog content, and even paid ads (with some brand guidelines). We provide marketing materials and can review your campaigns if needed.",
  },
]

export function AffiliatesFaq() {
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
              Questions about our affiliate program.
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
