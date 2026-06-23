"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InputRow, SliderInput, NumberInput } from "@/components/diagnostics/inputs"
import { Input } from "@/components/ui/input"
import { BucketCard, NarrativeCard, RecommendationCard } from "@/components/diagnostics/result-cards"
import { streamNarrative, type ChatMessage } from "@/lib/diagnostics/streamNarrative"

// Industry averages
const REVISIT_RATE = 2.5

interface Inputs {
  practiceName: string
  appointmentsPerMonth: number
  noShowRate: number
  avgTicketValue: number
  billingErrorRate: number
}

interface Buckets {
  noShow: number
  billingError: number
  ltvCompound: number
  totalAnnual: number
  monthlyLeak: number
}

const DEFAULTS: Inputs = {
  practiceName: "",
  appointmentsPerMonth: 150,
  noShowRate: 15,
  avgTicketValue: 200,
  billingErrorRate: 5,
}

function calcBuckets({ appointmentsPerMonth, noShowRate, avgTicketValue, billingErrorRate }: Inputs): Buckets {
  const noShow = Math.round(appointmentsPerMonth * (noShowRate / 100) * avgTicketValue)
  const billingError = Math.round(appointmentsPerMonth * (billingErrorRate / 100) * avgTicketValue)
  const monthlyLeak = noShow + billingError
  const totalAnnual = Math.round(monthlyLeak * 12)
  const ltvCompound = Math.round(totalAnnual * REVISIT_RATE)
  return { noShow, billingError, ltvCompound, totalAnnual, monthlyLeak }
}

function dominantPackage(buckets: Buckets) {
  const dominant = buckets.noShow >= buckets.billingError ? "no-shows" : "billing errors"
  return {
    name: "Front Desk Autopilot",
    url: "https://clinicdigital.co/offers/front-desk-autopilot",
    reason:
      dominant === "no-shows"
        ? "Your biggest leak is post-booking — patients aren't showing up for appointments they scheduled."
        : "Your biggest leak is billing errors — revenue you've already earned isn't being collected.",
  }
}

export default function RevenueLeak() {
  const [inputs, setInputs] = useState<Inputs>({ ...DEFAULTS })
  const [buckets, setBuckets] = useState<Buckets | null>(null)
  const [narrative, setNarrative] = useState("")
  const [narrativeLoading, setNarrativeLoading] = useState(false)
  const [narrativeError, setNarrativeError] = useState("")

  const set = useCallback(
    (key: keyof Inputs) => (val: string | number) =>
      setInputs((p) => ({ ...p, [key]: val })),
    [],
  )

  const handleSubmit = async () => {
    const b = calcBuckets(inputs)
    setBuckets(b)
    setNarrative("")
    setNarrativeError("")
    setNarrativeLoading(true)

    const largerMonthlyLeak = b.noShow >= b.billingError ? "no-shows" : "billing errors"
    const recommendedPackage = "Front Desk Autopilot"
    const dominantMonthlyAmount = Math.max(b.noShow, b.billingError)
    const annualizedNoShow = b.noShow * 12
    const annualizedBillingError = b.billingError * 12

    const systemPrompt = `You are a concise healthcare business analyst writing a revenue leak summary for a medical practice owner.
Rules you must follow without exception:
- Write in second person ("your practice").
- Use ONLY the exact dollar figures provided in the user message. Do not calculate, derive, or invent any figures.
- Output EXACTLY these 3 lines — no preamble, no closing text, nothing else:
- **Reality:** [one sentence stating the two monthly leak figures and their combined monthly total]
- **Cost:** [one sentence stating the total annualized leak and what it compounds to if left unaddressed]
- **Fix:** [one sentence recommending ${recommendedPackage} and why it targets the $${dominantMonthlyAmount.toLocaleString()}/month leak from ${largerMonthlyLeak}]`

    const userPrompt = `Use only these pre-calculated figures — do not perform any math:
- No-Show Revenue Drain: $${b.noShow.toLocaleString()}/month ($${annualizedNoShow.toLocaleString()}/year)
- Billing Error Leak: $${b.billingError.toLocaleString()}/month ($${annualizedBillingError.toLocaleString()}/year)
- Cost of Inaction (if unaddressed): $${b.ltvCompound.toLocaleString()}/year — total cost over a full patient lifecycle if left unaddressed. Do not add this to the total annualized leak.
- Total annualized leak: $${b.totalAnnual.toLocaleString()}
- Largest monthly leak: ${largerMonthlyLeak} at $${dominantMonthlyAmount.toLocaleString()}/month
- Correct recommended package: ${recommendedPackage}

Write the 3-sentence summary now.`

    const messages: ChatMessage[] = [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ]

    try {
      await streamNarrative(messages, (token) => {
        setNarrativeLoading(false)
        setNarrative((prev) => prev + token)
      })
    } catch (e) {
      setNarrativeError(e instanceof Error ? e.message : String(e))
    } finally {
      setNarrativeLoading(false)
    }
  }

  const handleReset = () => {
    setInputs({ ...DEFAULTS })
    setBuckets(null)
    setNarrative("")
    setNarrativeError("")
  }

  const pkg = buckets ? dominantPackage(buckets) : null

  return (
    <>
      <Navigation />
      <main>
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
        <Image
          src="/images/hero-other-services.png"
          alt="Healthcare digital marketing workspace with service dashboards and analytics"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 via-foreground/80 to-foreground/90" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Practice Revenue Leak Diagnostic
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance">
              How much revenue is your practice losing every month?
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
            Discover the hidden costs of missed calls, no-shows, and billing errors. This free diagnostic takes under 2 minutes and reveals exactly how much revenue is leaking from your front desk and appointment management.
          </p>
        </div>
      </section>

      {!buckets && (
        <div className="form-panel">
          <div className="form-intro">
            <h1>How much revenue is your practice losing every month?</h1>
            <p>Four numbers. Under 60 seconds. We handle the math.</p>
          </div>

          <div className="form-card">
            <InputRow label="Practice name" hint="Used to personalize your report">
              <Input
                type="text"
                placeholder="e.g. Radiance MedSpa"
                value={inputs.practiceName}
                onChange={(e) => set("practiceName")(e.target.value)}
              />
            </InputRow>

            <div className="section-divider"><span>Your Numbers</span></div>

            <InputRow label="Appointments per month" hint="Total visits your practice completes">
              <NumberInput value={inputs.appointmentsPerMonth} onChange={set("appointmentsPerMonth")} />
            </InputRow>

            <InputRow label="No-show rate (%)" hint="Percentage of booked appointments that don't show up">
              <SliderInput value={inputs.noShowRate} min={1} max={30} onChange={set("noShowRate")} />
            </InputRow>

            <InputRow label="Average appointment value" hint="Revenue per completed visit">
              <NumberInput value={inputs.avgTicketValue} prefix="$" onChange={set("avgTicketValue")} />
            </InputRow>

            <InputRow label="Billing error rate (%)" hint="Percentage of appointments with a billing or coding error">
              <SliderInput value={inputs.billingErrorRate} min={1} max={20} onChange={set("billingErrorRate")} />
            </InputRow>

            <button className="cta-btn" onClick={handleSubmit}>
              Calculate My Revenue Leak →
            </button>
          </div>
        </div>
      )}

      {buckets && (
        <div className="results-panel">
          <div className="results-intro">
            <div className="results-eyebrow">Revenue Leak Report</div>
            <h1>
              {inputs.practiceName
                ? `${inputs.practiceName}'s Revenue Leak`
                : "Your Practice's Revenue Leak"}
            </h1>
            <p className="results-total">
              Estimated annual leak: <strong>${buckets.totalAnnual.toLocaleString()}</strong>
            </p>
          </div>

          <div className="buckets-grid">
            <BucketCard
              color="red"
              label="No-Show Revenue Drain"
              amount={buckets.noShow}
              period="per month"
              description={`${inputs.appointmentsPerMonth} appts/mo × ${inputs.noShowRate}% no-show rate × $${inputs.avgTicketValue} ticket`}
              isLargest={buckets.noShow >= buckets.billingError}
            />
            <BucketCard
              color="orange"
              label="Billing Error Leak"
              amount={buckets.billingError}
              period="per month"
              description={`${inputs.appointmentsPerMonth} appts/mo × ${inputs.billingErrorRate}% billing error rate × $${inputs.avgTicketValue} ticket`}
              isLargest={buckets.billingError > buckets.noShow}
            />
            <BucketCard
              color="blue"
              label="Cost of Inaction"
              amount={buckets.ltvCompound}
              period="annualized"
              description={`$${buckets.totalAnnual.toLocaleString()}/yr × ${REVISIT_RATE}× avg patient revisit rate — total cost if left unaddressed`}
              isLargest={false}
            />
          </div>

          <NarrativeCard
            modelBadge="ClinicDigital AI"
            loading={narrativeLoading}
            error={narrativeError}
            text={narrative}
            markdown
          />

          {pkg && (
            <RecommendationCard
              eyebrow="Recommended First Step"
              name={pkg.name}
              reason={pkg.reason}
              ctaHref={pkg.url}
              ctaText={`See How ${pkg.name} Fixes This →`}
            />
          )}

          <button className="reset-btn" onClick={handleReset}>
            ← Run a new diagnostic
          </button>
        </div>
      )}
      </main>
      <Footer />
    </>
  )
}
