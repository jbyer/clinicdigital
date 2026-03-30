import { Briefcase, RefreshCw, DollarSign } from "lucide-react"

const commissionTypes = [
  {
    icon: Briefcase,
    title: "Project Commissions",
    rate: "10%",
    description: "of one-time project fees",
    details: [
      "Website design & development",
      "AI chatbot setup",
      "Voice AI implementation",
      "Smart website packages",
      "Paid upon client payment",
    ],
  },
  {
    icon: RefreshCw,
    title: "Recurring Commissions",
    rate: "10%",
    description: "of monthly retainers — forever",
    details: [
      "Marketing automation",
      "Lead generation campaigns",
      "SEO services",
      "Website maintenance",
      "Compounds as you refer more",
    ],
  },
]

const earningsExamples = [
  {
    scenario: "Smart Website",
    projectFee: "$2,500",
    monthlyRetainer: "$199/mo",
    oneTimeEarning: "$250",
    monthlyEarning: "$19.90",
    yearOneTotal: "$488.80",
  },
  {
    scenario: "AI Chatbot",
    projectFee: "$997",
    monthlyRetainer: "$297/mo",
    oneTimeEarning: "$99.70",
    monthlyEarning: "$29.70",
    yearOneTotal: "$456.10",
  },
  {
    scenario: "Lead Gen Ads",
    projectFee: "—",
    monthlyRetainer: "$500/mo",
    oneTimeEarning: "—",
    monthlyEarning: "$50",
    yearOneTotal: "$600",
  },
  {
    scenario: "Full Service Client",
    projectFee: "$5,000",
    monthlyRetainer: "$997/mo",
    oneTimeEarning: "$500",
    monthlyEarning: "$99.70",
    yearOneTotal: "$1,696.40",
  },
]

export function AffiliatesCommission() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Commission Structure
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">
              Two ways to earn. Unlimited potential.
            </span>
          </h2>
        </div>

        {/* Commission Types */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {commissionTypes.map((type) => (
            <div
              key={type.title}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <type.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-heading text-xl font-semibold text-card-foreground">
                {type.title}
              </h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-heading text-4xl font-bold text-primary">
                  {type.rate}
                </span>
                <span className="text-muted-foreground">{type.description}</span>
              </div>
              <ul className="mt-6 space-y-2">
                {type.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <DollarSign className="h-4 w-4 shrink-0 text-accent" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Earnings Examples Table */}
        <div className="mt-16">
          <h3 className="text-center font-heading text-xl font-semibold text-foreground">
            Real Earning Examples
          </h3>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[600px]">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Referral Scenario
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Project Fee
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Monthly Retainer
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Your One-Time
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Your Monthly
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-primary">
                    Year 1 Total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {earningsExamples.map((example) => (
                  <tr key={example.scenario}>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {example.scenario}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {example.projectFee}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {example.monthlyRetainer}
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">
                      {example.oneTimeEarning}
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">
                      {example.monthlyEarning}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-primary">
                      {example.yearOneTotal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Passive Income Potential:</span>{" "}
            5 referred clients on $500/mo retainers = <span className="font-semibold text-accent">$250/month recurring</span> ($3,000/year)
          </p>
        </div>
      </div>
    </section>
  )
}
