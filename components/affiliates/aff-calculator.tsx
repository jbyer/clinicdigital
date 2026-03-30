"use client"

import { useState } from "react"
import { Calculator, TrendingUp } from "lucide-react"

const projectValues = [500, 1000, 2500, 5000]
const retainerValues = [199, 297, 500, 997]

export function AffiliatesCalculator() {
  const [referralsPerMonth, setReferralsPerMonth] = useState(2)
  const [avgProjectValue, setAvgProjectValue] = useState(2500)
  const [avgMonthlyRetainer, setAvgMonthlyRetainer] = useState(297)

  // Calculations
  const monthlyProjectCommission = referralsPerMonth * avgProjectValue * 0.1
  const monthlyRecurringCommission = referralsPerMonth * avgMonthlyRetainer * 0.1

  // Year 1: Project commissions + compounding monthly recurring
  // Month 1: referrals * retainer * 0.1
  // Month 2: (referrals * 2) * retainer * 0.1
  // ... etc
  let yearOneRecurring = 0
  for (let month = 1; month <= 12; month++) {
    yearOneRecurring += referralsPerMonth * month * avgMonthlyRetainer * 0.1
  }
  const yearOneProjectTotal = referralsPerMonth * 12 * avgProjectValue * 0.1
  const yearOneTotal = yearOneProjectTotal + yearOneRecurring

  // Year 3 projection (assuming same referral rate continues)
  const totalClientsYear3 = referralsPerMonth * 36
  const year3MonthlyRecurring = totalClientsYear3 * avgMonthlyRetainer * 0.1
  const year3ProjectTotal = referralsPerMonth * 36 * avgProjectValue * 0.1
  // Simplified: sum of compounding recurring over 36 months
  let year3RecurringSum = 0
  for (let month = 1; month <= 36; month++) {
    year3RecurringSum += referralsPerMonth * month * avgMonthlyRetainer * 0.1
  }
  const year3Total = year3ProjectTotal + year3RecurringSum

  return (
    <section id="calculator" className="bg-muted/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Earnings Calculator
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">
              See your earning potential.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Adjust the sliders to estimate your affiliate income based on your
            referral volume.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
          <div className="grid md:grid-cols-2">
            {/* Inputs */}
            <div className="border-b border-border p-6 md:border-b-0 md:border-r md:p-8">
              <div className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                <h3 className="font-heading text-lg font-semibold text-card-foreground">
                  Your Referral Activity
                </h3>
              </div>

              {/* Referrals per month slider */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-card-foreground">
                    Referrals per month
                  </label>
                  <span className="rounded-lg bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                    {referralsPerMonth}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={referralsPerMonth}
                  onChange={(e) => setReferralsPerMonth(Number(e.target.value))}
                  className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted accent-primary"
                />
                <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                  <span>1</span>
                  <span>10</span>
                </div>
              </div>

              {/* Average project value */}
              <div className="mt-8">
                <label className="text-sm font-medium text-card-foreground">
                  Average project value
                </label>
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {projectValues.map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setAvgProjectValue(value)}
                      className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                        avgProjectValue === value
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-foreground hover:border-primary/50"
                      }`}
                    >
                      ${value.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Average monthly retainer */}
              <div className="mt-8">
                <label className="text-sm font-medium text-card-foreground">
                  Average monthly retainer
                </label>
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {retainerValues.map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setAvgMonthlyRetainer(value)}
                      className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                        avgMonthlyRetainer === value
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-foreground hover:border-primary/50"
                      }`}
                    >
                      ${value}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-foreground p-6 md:p-8">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="font-heading text-lg font-semibold text-background">
                  Your Projected Earnings
                </h3>
              </div>

              <div className="mt-8 space-y-6">
                {/* One-time earnings */}
                <div>
                  <p className="text-sm text-background/60">Monthly project commissions</p>
                  <p className="mt-1 font-heading text-2xl font-bold text-background">
                    ${monthlyProjectCommission.toLocaleString()}
                  </p>
                </div>

                {/* Monthly recurring */}
                <div>
                  <p className="text-sm text-background/60">Monthly recurring (per referral)</p>
                  <p className="mt-1 font-heading text-2xl font-bold text-background">
                    ${monthlyRecurringCommission.toFixed(2)}
                  </p>
                </div>

                <div className="border-t border-background/20 pt-6">
                  {/* Year 1 total */}
                  <div>
                    <p className="text-sm text-background/60">Projected Year 1 Total</p>
                    <p className="mt-1 font-heading text-3xl font-bold text-primary">
                      ${yearOneTotal.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                  </div>

                  {/* Year 3 projection */}
                  <div className="mt-4">
                    <p className="text-sm text-background/60">Projected Year 3 Total</p>
                    <p className="mt-1 font-heading text-3xl font-bold text-accent">
                      ${year3Total.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-background/40">
                  * Assumes referred clients stay for the full period. Actual results may vary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
