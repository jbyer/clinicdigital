import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SpringSalePopup } from "@/components/spring-sale-popup"

export const metadata = {
  title: "Acquisition Engine | Patient Lead Generation System | ClinicDigital",
  description:
    "Capture and nurture patient leads automatically. Our Acquisition Engine combines lead capture, SEO visibility, and marketing automation to fill your appointment calendar.",
}

export default function AcquisitionEnginePage() {
  return (
    <>
      <SpringSalePopup />
      <Navigation />
      <main>
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Acquisition Engine
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">
                Attract & Convert More Patient Leads
              </span>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              Our complete lead generation and nurturing system ensures every qualified prospect finds you and gets converted into a booked appointment.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-20 bg-muted/50">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-12">
              Complete Lead Generation Stack
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Smart Lead Capture</h3>
                <p className="text-muted-foreground">Intelligent forms on your website that capture high-intent prospects and qualify leads automatically.</p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Local SEO Visibility</h3>
                <p className="text-muted-foreground">Dominate local search results so patients find you first when searching for your services.</p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Multi-Channel Nurturing</h3>
                <p className="text-muted-foreground">Automated email, SMS, and social media sequences that keep prospects engaged and move them toward booking.</p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Lead Scoring & Qualification</h3>
                <p className="text-muted-foreground">Automatic lead qualification so your team focuses on the most valuable prospects first.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Ready to Never Miss Another Lead?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a free site audit to see exactly how many leads you&apos;re losing right now.
            </p>
            <a href="#contact" className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
              Get Free Audit
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
