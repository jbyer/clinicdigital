import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SpringSalePopup } from "@/components/spring-sale-popup"

export const metadata = {
  title: "Lifetime Value System | Patient Retention & CRM | ClinicDigital",
  description:
    "Beautiful website, ongoing maintenance, and CRM management that keeps patients engaged and coming back. Turn one-time patients into lifelong loyalists.",
}

export default function LifetimeValueSystemPage() {
  return (
    <>
      <SpringSalePopup />
      <Navigation />
      <main>
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Lifetime Value System
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">
                Retain Patients & Grow Revenue
              </span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              A modern website, ongoing maintenance, and CRM workflows that keep your practice running smoothly and patients coming back for years.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-20 bg-muted/50">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-12">
              Modern Infrastructure for Growth
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Conversion-Focused Website</h3>
                <p className="text-muted-foreground">A modern, beautiful website designed to convert visitors into booked appointments—with fast performance and mobile optimization.</p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Ongoing Maintenance</h3>
                <p className="text-muted-foreground">Regular updates, security patches, performance optimization, and technical support so your site runs flawlessly.</p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Patient CRM</h3>
                <p className="text-muted-foreground">Centralized patient database with automated follow-ups, retention workflows, and relationship tracking.</p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Retention Marketing</h3>
                <p className="text-muted-foreground">Automated campaigns that encourage repeat visits, upsells, and referrals—maximizing lifetime patient value.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Build a Practice That Retains Patients
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Learn how a modern website and CRM system can increase patient lifetime value and practice revenue.
            </p>
            <a href="/book-a-call" className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
              Book A Call
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
