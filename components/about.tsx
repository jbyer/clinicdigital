import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Exclusive focus on healthcare, medical practices, and medspas",
  "HIPAA-aware workflows and secure data handling",
  "End-to-end implementation with ongoing optimization",
  "Dedicated account management and priority support",
  "Proven track record with 150+ successful deployments",
]

export function About() {
  return (
    <section id="about" className="bg-secondary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Why ClinicDigital
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <span className="text-balance">
                The AI agency built exclusively for healthcare.
              </span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We are not a generic marketing agency. ClinicDigital.co was founded by healthcare
              technology professionals who understand the unique challenges, compliance requirements,
              and growth levers of medical practices and medspas.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our team leverages years of devlopment, online marketing, healthcare and AI to deliver custom automations that
              integrates seamlessly with your existing tools and workflows -- without the complexity
              of building from scratch.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Visual element */}
          <div className="relative">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
              {/*<div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <span className="text-sm font-bold text-primary-foreground">CD</span>
                </div>
                <div>
                  <p className="font-heading text-lg font-semibold text-card-foreground">
                    GoHighLevel Certified
                  </p>
                  <p className="text-xs text-muted-foreground">Official Platform Partner</p>
                </div>
              </div>*/}

              <div className="flex flex-col gap-4">
                <div className="rounded-xl bg-secondary p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-secondary-foreground">
                      Automations Active
                    </span>
                    <span className="font-heading text-2xl font-bold text-primary">247</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-4/5 rounded-full bg-primary" />
                  </div>
                </div>

                <div className="rounded-xl bg-secondary p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-secondary-foreground">
                      Patient Interactions (This Month)
                    </span>
                    <span className="font-heading text-2xl font-bold text-accent">18.4k</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-3/4 rounded-full bg-accent" />
                  </div>
                </div>

                <div className="rounded-xl bg-secondary p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-secondary-foreground">
                      Avg. Client ROI
                    </span>
                    <span className="font-heading text-2xl font-bold text-primary">3.2x</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-[65%] rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-primary/20 bg-primary/5" />
          </div>
        </div>
      </div>
    </section>
  )
}
