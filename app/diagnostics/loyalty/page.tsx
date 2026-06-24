"use client"

import { useState, useCallback, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InputRow, SliderInput, NumberInput } from "@/components/diagnostics/inputs"
import { BucketCard, NarrativeCard, RecommendationCard } from "@/components/diagnostics/result-cards"
import { streamNarrative } from "@/lib/diagnostics/streamNarrative"
import { Input } from "@/components/ui/input"

// Industry benchmarks — hardcoded so the lead only answers 3 questions
const VISITS_PER_YEAR = 2       // below 4× benchmark → loyalty gap fires
const MONTHLY_REFERRALS = 0     // worst case → full referral leak shows
const MONTHLY_VISITORS = 300    // conservative local MedSpa estimate
const CONVERSION_PCT = 1        // below 2% benchmark → website gap fires

const DEFAULTS = {
  practiceName: "",
  totalContacts: 1000,
  activeRatePct: 30,
  avgTicketValue: 250,
  visitsPerYear: 2,
  googleReviews: 50,
  monthlyReferrals: 5,
  monthlyVisitors: 800,
  conversionPct: 1,
}

interface Inputs {
  practiceName: string
  totalContacts: number
  activeRatePct: number
  avgTicketValue: number
  visitsPerYear: number
  googleReviews: number
  monthlyReferrals: number
  monthlyVisitors: number
  conversionPct: number
}

interface Buckets {
  dormant: number
  loyaltyGap: number
  referralLeak: number
  websiteGap: number
  totalAnnual: number
  activePatients: number
  dormantContacts: number
}

function calcBuckets(inputs: Inputs): Buckets {
  const { totalContacts, activeRatePct, avgTicketValue } = inputs
  const visitsPerYear = VISITS_PER_YEAR
  const monthlyReferrals = MONTHLY_REFERRALS
  const monthlyVisitors = MONTHLY_VISITORS
  const conversionPct = CONVERSION_PCT

  const activePatients = Math.round(totalContacts * (activeRatePct / 100))
  const dormantContacts = totalContacts - activePatients

  // 15% reactivation benchmark sourced from GHL automation averages
  const dormant = Math.round(dormantContacts * 0.15 * avgTicketValue)

  // 4x/year benchmark for relationship-based practices
  const loyaltyGap =
    visitsPerYear < 4
      ? Math.round((4 - visitsPerYear) * activePatients * avgTicketValue)
      : 0

  // 20% of active patients referring per year is a healthy benchmark
  const referralBenchmarkMonthly = (activePatients * 0.2) / 12
  const referralLeak =
    monthlyReferrals < referralBenchmarkMonthly
      ? Math.round((referralBenchmarkMonthly - monthlyReferrals) * avgTicketValue * 12)
      : 0

  // 2% is a conservative medical practice conversion benchmark
  const websiteGap =
    conversionPct < 2
      ? Math.round(monthlyVisitors * ((2 - conversionPct) / 100) * avgTicketValue * 12)
      : 0

  const totalAnnual = dormant + loyaltyGap + referralLeak + websiteGap

  return { dormant, loyaltyGap, referralLeak, websiteGap, totalAnnual, activePatients, dormantContacts }
}

function dominantBucket(buckets: Buckets): string {
  return [
    { key: "dormant", amount: buckets.dormant },
    { key: "loyalty", amount: buckets.loyaltyGap },
    { key: "referral", amount: buckets.referralLeak },
    { key: "website", amount: buckets.websiteGap },
  ].reduce((a, b) => (b.amount > a.amount ? b : a)).key
}

const REC_COPY: Record<
  string,
  {
    reason: (label: string, buckets: Buckets) => string
    cta: (label: string) => string
  }
> = {
  dormant: {
    reason: (label, buckets) =>
      `${label}'s biggest opportunity is in the contacts already in the database — ${buckets.dormantContacts.toLocaleString()} lapsed patients who already know your practice. Automated reactivation sequences convert these contacts back to booked appointments without a dollar of new ad spend.`,
    cta: (label) => `See how the Lifetime Value System reactivates ${label}'s lapsed patients →`,
  },
  loyalty: {
    reason: (label) =>
      `Active patients are visiting ${VISITS_PER_YEAR}× per year against a 4× benchmark. Automated retention workflows close this frequency gap and compound revenue across your existing base.`,
    cta: (label) => `See how the Lifetime Value System closes ${label}'s loyalty gap →`,
  },
  referral: {
    reason: () =>
      `Referral volume is below the 20%/year benchmark. A structured patient advocacy sequence turns satisfied patients into your lowest-cost acquisition channel.`,
    cta: (label) => `See how the Lifetime Value System builds ${label}'s referral engine →`,
  },
  website: {
    reason: (label) =>
      `Your website is your biggest revenue gap — converting at ${CONVERSION_PCT}% against a 2% medical practice benchmark. A faster, cleaner booking experience recovers this traffic without new ad spend.`,
    cta: (label) => `See how the Lifetime Value System converts ${label}'s existing traffic →`,
  },
}

// ---------- Inner component (uses useSearchParams) ----------
function LTVContent() {
  const searchParams = useSearchParams()
  const practiceNameParam = searchParams.get("name") || ""

  const [step, setStep] = useState<"form" | "results">("form")

  // Hero header component
  const HeroHeader = () => (
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
          Lifetime Value Diagnostic
        </p>
        <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
          <span className="text-balance">
            How much revenue is sitting in your existing patient database?
          </span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
          Identify hidden revenue opportunities from lapsed patients, loyalty gaps, referral leaks, and website conversion issues. This free diagnostic takes under 2 minutes and reveals untapped potential without new ad spend.
        </p>
      </div>
    </section>
  )
  const [inputs, setInputs] = useState<Inputs>({
    ...DEFAULTS,
    practiceName: practiceNameParam,
  })
  const [buckets, setBuckets] = useState<Buckets | null>(null)
  const [dominant, setDominant] = useState<string | null>(null)
  const [narrative, setNarrative] = useState("")
  const [narrativeLoading, setNarrativeLoading] = useState(false)
  const [narrativeError, setNarrativeError] = useState("")

  const set = useCallback(
    (key: keyof Inputs) => (val: string | number) =>
      setInputs((p) => ({ ...p, [key]: val })),
    []
  )

  const handleSubmit = async () => {
    const b = calcBuckets(inputs)
    const dom = dominantBucket(b)
    setBuckets(b)
    setDominant(dom)
    setStep("results")
    setNarrative("")
    setNarrativeError("")
    setNarrativeLoading(true)

    const label = inputs.practiceName || "Your practice"

    const systemPrompt = `You are a concise healthcare business analyst writing a LTV revenue summary for a medical practice owner.
Rules you must follow without exception:
- Write in second person ("your practice").
- Use ONLY the exact dollar figures provided in the user message. Do not calculate, derive, or invent any figures.
- Output EXACTLY these 3 lines — no preamble, no closing text, nothing else:
- **Reality:** [one sentence stating the lapsed contact count and the dormant reactivation yield available]
- **Cost:** [one sentence stating the total annual LTV opportunity across all four buckets, emphasizing it comes from the existing database — not new ad spend]
- **Fix:** [one sentence recommending the Lifetime Value System${dom === "website" ? ", leading with the website conversion angle" : ""}]`

    const userPrompt = `Use only these pre-calculated figures — do not perform any math:
- Practice: ${label}
- Lapsed contacts in database: ${b.dormantContacts.toLocaleString()}
- Dormant patient reactivation yield: $${b.dormant.toLocaleString()} (per campaign, 15% GHL benchmark)
- Loyalty gap (below 4×/year benchmark): $${b.loyaltyGap.toLocaleString()}/year
- Referral leak (below 20%/year benchmark): $${b.referralLeak.toLocaleString()}/year
- Website conversion gap: $${b.websiteGap.toLocaleString()}/year
- Total annual LTV revenue opportunity: $${b.totalAnnual.toLocaleString()}
- Google reviews: ${inputs.googleReviews}
- Dominant opportunity bucket: ${dom}

Write the 3-sentence summary now.`

    try {
      await streamNarrative(
        [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        (token) => {
          setNarrativeLoading(false)
          setNarrative((prev) => prev + token)
        }
      )
    } catch (e) {
      setNarrativeError(e instanceof Error ? e.message : String(e))
    } finally {
      setNarrativeLoading(false)
    }
  }

  const handleReset = () => {
    setStep("form")
    setInputs({ ...DEFAULTS, practiceName: practiceNameParam })
    setBuckets(null)
    setDominant(null)
    setNarrative("")
  }

  const practiceLabel = inputs.practiceName || "Your practice"
  const rec = dominant ? REC_COPY[dominant] : null

  return (
    <>
      <Navigation />
      <main>
      <HeroHeader />
      {/* ── FORM STEP ── */}
      {step === "form" && (
        <div className="form-panel">
          {/*<div className="form-intro">
            <h1>How much revenue is sitting in your existing patient database?</h1>
            <p>Three numbers. Four revenue buckets. No new ad spend required. Under 60 seconds.</p>
          </div>*/}

          <div className="form-card">
            <InputRow label="Practice name" hint="Used to personalize your report">
              <Input
                type="text"
                className="text-input"
                placeholder="e.g. Radiance MedSpa"
                value={inputs.practiceName}
                onChange={(e) => set("practiceName")(e.target.value)}
              />
            </InputRow>

            <div className="section-divider"><span>Your Patient Database</span></div>

            <InputRow label="Total patient contacts" hint="How many patient contacts are in your records or CRM?">
              <NumberInput value={inputs.totalContacts} onChange={(v) => set("totalContacts")(v)} />
            </InputRow>

            <InputRow label="Active patient rate" hint="What % of those contacts visited in the last 6 months?">
              <SliderInput
                value={inputs.activeRatePct}
                min={5}
                max={80}
                onChange={(v) => set("activeRatePct")(v)}
                format={(v) => `${v}%`}
              />
            </InputRow>

            <InputRow label="Average appointment value" hint="Revenue per completed visit">
              <NumberInput value={inputs.avgTicketValue} prefix="$" onChange={(v) => set("avgTicketValue")(v)} />
            </InputRow>

            <button className="cta-btn" onClick={handleSubmit}>
              Calculate My Revenue Opportunity →
            </button>
          </div>
        </div>
      )}

      {/* ── RESULTS STEP ── */}
      {step === "results" && buckets && (
        <div className="results-panel">
          <div className="results-intro">
            <div className="results-eyebrow">Lifetime Value Report</div>
            <h1>{inputs.practiceName ? `${inputs.practiceName}'s` : "Your"} Untapped Revenue Opportunity</h1>
            <p className="results-total">
              Total annual opportunity (existing database only):{" "}
              <strong>${buckets.totalAnnual.toLocaleString()}</strong>
            </p>
          </div>

          <div className="buckets-grid buckets-grid-4">
            <BucketCard
              color="red"
              label="Dormant Patient Revenue"
              amount={buckets.dormant}
              period="per reactivation campaign"
              description={`${buckets.dormantContacts.toLocaleString()} lapsed contacts × 15% reactivation rate × $${inputs.avgTicketValue} ticket — GHL automation benchmark`}
              isLargest={dominant === "dormant"}
              badgeText="Largest Opportunity"
            />
            <BucketCard
              color="amber"
              label="Loyalty Gap"
              amount={buckets.loyaltyGap}
              period={inputs.visitsPerYear >= 4 ? "at benchmark" : "per year"}
              description={
                VISITS_PER_YEAR >= 4
                  ? "At or above the 4×/year benchmark — no gap detected"
                  : `(4× benchmark − ${VISITS_PER_YEAR}×/yr industry avg) × ${buckets.activePatients.toLocaleString()} active patients × $${inputs.avgTicketValue} ticket`
              }
              isLargest={dominant === "loyalty"}
              badgeText="Largest Opportunity"
            />
            <BucketCard
              color="blue"
              label="Referral Leak"
              amount={buckets.referralLeak}
              period={buckets.referralLeak === 0 ? "at benchmark" : "per year"}
              description={
                buckets.referralLeak === 0
                  ? "At or above the 20%/year referral benchmark — no gap detected"
                  : `(20% of ${buckets.activePatients.toLocaleString()} active patients ÷ 12 − ${inputs.monthlyReferrals} referrals/mo) × $${inputs.avgTicketValue} × 12`
              }
              isLargest={dominant === "referral"}
              badgeText="Largest Opportunity"
            />
            <BucketCard
              color="purple"
              label="Website Conversion Gap"
              amount={buckets.websiteGap}
              period={inputs.conversionPct >= 2 ? "at benchmark" : "per year"}
              description={
                CONVERSION_PCT >= 2
                  ? "At or above the 2% conversion benchmark — no gap detected"
                  : `${MONTHLY_VISITORS} visitors/mo (industry avg) × (2% − ${CONVERSION_PCT}%) × $${inputs.avgTicketValue} ticket × 12 months`
              }
              isLargest={dominant === "website"}
              badgeText="Largest Opportunity"
            />
          </div>

          <NarrativeCard
            modelBadge="ClinicDigital AI"
            loading={narrativeLoading}
            error={narrativeError}
            text={narrative}
            markdown
          />

          {rec && (
            <RecommendationCard
              eyebrow="Recommended Fix"
              name="Lifetime Value System"
              reason={rec.reason(practiceLabel, buckets)}
              ctaHref="https://clinicdigital.co/offers/lifetime-value-system"
              ctaText={rec.cta(practiceLabel)}
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

export default function LTVPage() {
  return (
    <Suspense>
      <LTVContent />
    </Suspense>
  )
}
