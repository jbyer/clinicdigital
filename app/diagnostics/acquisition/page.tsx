"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InputRow, NumberInput } from "@/components/diagnostics/inputs"
import { NarrativeCard, RecommendationCard } from "@/components/diagnostics/result-cards"
import { POSITION_CHOICES, LOCAL_PACK_CLICK_SHARE } from "@/lib/diagnostics/acquisitionConstants"
import { calcAcquisition, AcquisitionResult } from "@/lib/diagnostics/acquisitionCalc"
import { staticLookup, Metro } from "@/lib/diagnostics/metroLookup"
import { streamNarrative } from "@/lib/diagnostics/streamNarrative"

// Hardcoded so the lead only answers 3 questions
const CLOSE_RATE_PCT = 25
const DEFAULTS = {
  practiceName: "",
  zip: "",
  positionId: "unknown",
}

// ---------- RankVisual ----------
function RankVisual({ position }: { position: number }) {
  const youAt = Math.min(position, 10)
  return (
    <div className="rank-card">
      <div className="rank-title">Where you sit in local search</div>
      <div className="rank-visual">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((p) => (
          <div
            key={p}
            className={`rank-step${p <= 3 ? " rank-pack" : ""}${p === youAt ? " rank-you" : ""}`}
            style={{ height: `${100 - (p - 1) * 8}%` }}
          >
            {p === youAt && (
              <span className="rank-you-label">
                {position > 10 ? "You — page 2+" : "You are here"}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="rank-legend">
        <span><i className="rank-dot rank-dot-pack" /> Local 3-Pack (the target)</span>
        <span><i className="rank-dot rank-dot-you" /> Your current position</span>
      </div>
    </div>
  )
}

// ---------- Main page ----------
export default function AcquisitionPage() {
  const [step, setStep] = useState<"form" | "population" | "results">("form")
  const [inputs, setInputs] = useState({ ...DEFAULTS })
  const [metro, setMetro] = useState<Metro | null>(null)
  const [results, setResults] = useState<AcquisitionResult | null>(null)
  const [lookupLoading, setLookupLoading] = useState(false)
  const [zipError, setZipError] = useState("")
  const [manualPopulation, setManualPopulation] = useState(500000)
  const [narrative, setNarrative] = useState("")
  const [narrativeLoading, setNarrativeLoading] = useState(false)
  const [narrativeError, setNarrativeError] = useState("")

  const set = useCallback(
    (key: string) => (val: string) => setInputs((p) => ({ ...p, [key]: val })),
    []
  )

  const positionChoice = POSITION_CHOICES.find((c) => c.id === inputs.positionId) ?? POSITION_CHOICES[POSITION_CHOICES.length - 1]
  const position = positionChoice.position

  const runDiagnostic = async (resolvedMetro: Metro) => {
    const r = calcAcquisition({
      population: resolvedMetro.population,
      position,
      closeRatePct: CLOSE_RATE_PCT,
      reportedLeads: 0,
    })
    setMetro(resolvedMetro)
    setResults(r)
    setStep("results")
    setNarrative("")
    setNarrativeError("")
    setNarrativeLoading(true)

    const systemPrompt = `You are a concise local-SEO growth analyst writing a competitive summary for a medical aesthetics practice owner.
Rules you must follow without exception:
- Write in second person ("your practice").
- Use ONLY the exact figures provided in the user message. Do not calculate, derive, or invent any figures.
- Output EXACTLY these 3 lines — no preamble, no closing text, nothing else:
- **Reality:** [one sentence stating the estimated monthly local searches in ${resolvedMetro.name} and how many competitors currently outrank the practice]
- **Cost:** [one sentence stating the recoverable leads per month and that those leads currently go to competitors]
- **Fix:** [one sentence recommending the Acquisition Engine as the system that moves the practice into Google's Local 3-Pack]`

    const userPrompt = `Use only these pre-calculated figures — do not perform any math:
- Metro area: ${resolvedMetro.name}
- Estimated monthly searches for medspa services: ${r.metroSearches.toLocaleString()}
- Local competitors currently outranking the practice: ${r.competitorsAhead}
- Estimated current monthly leads from local search: ${r.modelLeads.toLocaleString()}
- Recoverable leads per month at the top of local search: ${r.recoveredLeads.toLocaleString()}

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

  const handleSubmit = async () => {
    const zip = inputs.zip.trim()
    if (!/^\d{5}$/.test(zip)) {
      setZipError("Enter a 5-digit ZIP code")
      return
    }
    setZipError("")

    // Try bundled static table first
    const hit = staticLookup(zip)
    if (hit) {
      void runDiagnostic(hit)
      return
    }

    // Fall back to API lookup for unknown ZIPs
    setLookupLoading(true)
    try {
      const res = await fetch("/api/metro-lookup?zip=" + zip)
      const data = res.ok ? await res.json().catch(() => null) : null
      setMetro(data ?? null)
    } catch {
      setMetro(null)
    } finally {
      setLookupLoading(false)
    }
    // Transition to population step so user can confirm/enter population
    setStep("population")
  }

  const handleReset = () => {
    setStep("form")
    setInputs({ ...DEFAULTS })
    setMetro(null)
    setResults(null)
    setNarrative("")
    setNarrativeError("")
  }

  const practiceLabel = inputs.practiceName || "Your practice"

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
            Customer Acquisition Diagnostic
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance">
              How many new patients is your Google ranking costing you?
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
            Discover exactly how many high-value patient leads are going to your competitors every month because of where you rank on Google. This free diagnostic takes under 2 minutes.
          </p>
        </div>
      </section>

      {/* ── FORM STEP ── */}
      {step === "form" && (
        <div className="form-panel">
          {/*<div className="form-intro">
            <h1>How many new patients is your Google ranking costing you?</h1>
            <p>Three inputs. One number: the leads per month going to your competitors. Under 60 seconds.</p>
          </div>*/}

          <div className="form-card">
            <InputRow label="Practice name" hint="Used to personalize your report">
              <input
                type="text"
                className="text-input"
                placeholder="e.g. Radiance MedSpa"
                value={inputs.practiceName}
                onChange={(e) => set("practiceName")(e.target.value)}
              />
            </InputRow>

            <div className="section-divider"><span>Your Market &amp; Visibility</span></div>

            <InputRow label="Practice ZIP code" hint="We use this to size your local search market">
              <input
                type="text"
                inputMode="numeric"
                maxLength={5}
                className="text-input zip-input"
                placeholder="e.g. 75201"
                value={inputs.zip}
                onChange={(e) => set("zip")(e.target.value.replace(/\D/g, ""))}
              />
            </InputRow>
            {zipError && <div className="form-error">{zipError}</div>}

            <InputRow
              label="Where do you appear on Google?"
              hint='Open an incognito window, search "medspa near me", and note where your practice appears'
            >
              <select
                className="text-input"
                value={inputs.positionId}
                onChange={(e) => set("positionId")(e.target.value)}
              >
                {POSITION_CHOICES.map((c) => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>
            </InputRow>

            <button className="cta-btn" onClick={handleSubmit} disabled={lookupLoading}>
              {lookupLoading ? "Sizing your market…" : "Calculate My Lead Gap →"}
            </button>
          </div>
        </div>
      )}

      {/* ── POPULATION STEP ── */}
      {step === "population" && (
        <div className="form-panel">
          <div className="form-intro">
            <h1>{metro ? `We found ${metro.name}` : "Tell us about your area"}</h1>
            <p>
              {metro
                ? "Your ZIP is outside the major metro areas we have on file. Give us a rough metro population and we'll size the market from there."
                : "We couldn't match that ZIP code. Enter the rough population of your metro area and we'll size the market from there."}
            </p>
          </div>
          <div className="form-card">
            <InputRow
              label="Metro area population"
              hint="A rough estimate is fine — county or metro, not just the town"
            >
              <NumberInput value={manualPopulation} onChange={setManualPopulation} />
            </InputRow>
            <button
              className="cta-btn"
              onClick={() =>
                void runDiagnostic({
                  name: metro ? metro.name : "your metro area",
                  population: manualPopulation,
                })
              }
            >
              Calculate My Lead Gap →
            </button>
            <button className="reset-btn" onClick={() => setStep("form")}>← Back</button>
          </div>
        </div>
      )}

      {/* ── RESULTS STEP ── */}
      {step === "results" && results && metro && (
        <div className="results-panel">
          <div className="results-intro">
            <div className="results-eyebrow">Customer Acquisition Report</div>
            <h1>
              {practiceLabel} could recover an estimated{" "}
              <span className="headline-metric">{results.recoveredLeads} leads per month</span>{" "}
              by reaching the top of Google search results in {metro.name}.
            </h1>
          </div>

          <div className="lead-metric">
            <div className="lead-metric-number">{results.recoveredLeads}</div>
            <div className="lead-metric-label">recovered leads / month</div>
            <div className="lead-metric-sub">
              vs. an estimated {results.modelLeads} leads/month at your current position
            </div>
          </div>

          <div className="competitive-card">
            In {metro.name}, approximately{" "}
            <strong>{results.estimatedCompetitors} medspas</strong> compete for an estimated{" "}
            <strong>{results.metroSearches.toLocaleString()} monthly searches</strong>{" "}
            for services like yours. Google&apos;s Local 3-Pack captures {LOCAL_PACK_CLICK_SHARE} of
            all clicks — and right now,{" "}
            <strong>{results.competitorsAhead} of your local competitors outrank you</strong>{" "}
            for these searches.
          </div>

          <RankVisual position={position} />

          <NarrativeCard
            modelBadge="ClinicDigital AI"
            loading={narrativeLoading}
            error={narrativeError}
            text={narrative}
            markdown
          />

          <RecommendationCard
            eyebrow="Recommended Fix"
            name="Acquisition Engine"
            reason={`Local SEO, Google Business Profile optimization, and review velocity — engineered to move ${practiceLabel} into the Local 3-Pack.`}
            ctaHref="https://clinicdigital.co/offers/acquisition-engine"
            ctaText={`See how the Acquisition Engine moves ${practiceLabel} to the top of local search →`}
          />

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
