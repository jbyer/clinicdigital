import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Stats } from "@/components/stats"
import { CaseStudies } from "@/components/case-studies"
import { Testimonials } from "@/components/testimonials"
import { About } from "@/components/about"
import { CtaBanner } from "@/components/cta-banner"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SpringSalePopup } from "@/components/spring-sale-popup"

export default function Page() {
  return (
    <>
      <SpringSalePopup />
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
        <CaseStudies />
        <Testimonials />
        <About />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
