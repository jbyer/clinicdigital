"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What platforms do you support for maintenance?",
    answer:
      "We primarily support all CMS platforms but primeraly WordPress, which power the vast majority of healthcare practice sites. We also maintain sites built on Webflow, Squarespace, and custom platforms. If you are not sure, just ask -- we likely support your platform.",
  },
  {
    question: "What happens if my site gets hacked?",
    answer:
      "If malware is detected, we immediately quarantine the threat and begin cleanup. For Professional and Premium plans, malware removal is included at no extra cost. Essential plan clients receive priority service rates. Our daily backups mean we can restore a clean version quickly if needed.",
  },
  {
    question: "How quickly do you respond to emergencies?",
    answer:
      "Essential plan clients receive responses within 48 hours. Professional clients get 24-hour priority response. Premium clients enjoy same-day emergency support with direct access to our team. Critical issues affecting site availability are always treated as priority regardless of plan.",
  },
  {
    question: "Do I need maintenance if my site is new?",
    answer:
      "Yes. Even brand new websites need regular updates. WordPress releases security patches monthly, plugins update frequently, and hackers target new sites just as often as old ones. Starting maintenance from day one prevents problems before they start.",
  },
  {
    question: "What counts as a content edit?",
    answer:
      "Content edits include updating text, swapping images, adding new team members, changing hours, updating service descriptions, or adding new pages. Design changes, new features, or major structural changes are quoted separately as development work.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Absolutely. You can change your plan at any time. Upgrades take effect immediately. Downgrades take effect at your next billing cycle. There are no penalties for changing plans -- we want you on the plan that fits your needs.",
  },
  {
    question: "Do you provide reports on what you have done?",
    answer:
      "Professional and Premium plans include monthly reports detailing all updates performed, security scan results, uptime statistics, and performance metrics. Essential plan clients can request a summary anytime via email.",
  },
  {
    question: "What if I already have a hosting provider?",
    answer:
      "No problem. Our maintenance plans work with your existing hosting. We simply need admin access to your website and hosting dashboard. If you would like us to recommend or migrate to better hosting, we can help with that too.",
  },
]

export function MaintenanceFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-muted/30 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Frequently Asked Questions
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">
              Questions about website maintenance.
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
