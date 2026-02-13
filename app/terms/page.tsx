import type { Metadata } from "next"
import { LegalPageLayout, LegalSection } from "@/components/legal-page-layout"

export const metadata: Metadata = {
  title: "Terms of Service | ClinicDigital.co",
  description:
    "Read the Terms of Service for ClinicDigital.co. Understand user obligations, acceptable use, intellectual property rights, liability limitations, and more.",
}

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      subtitle="Please read these terms carefully before using our website and services. By engaging ClinicDigital.co, you agree to be bound by the following conditions."
      lastUpdated="February 10, 2026"
    >
      <LegalSection heading="1. Acceptance of Terms">
        <p>
          By accessing, browsing, or using the website and services provided by ClinicDigital.co
          ("we," "our," or "us"), you ("you," "your," or "Client") agree to be bound by these Terms
          of Service ("Terms"). If you do not agree to all of these Terms, you must not access or
          use our website or services.
        </p>
        <p>
          These Terms constitute a legally binding agreement between you and ClinicDigital.co. We
          reserve the right to modify these Terms at any time, and such modifications will be
          effective immediately upon posting. Your continued use of our services constitutes
          acceptance of any modified Terms.
        </p>
      </LegalSection>

      <LegalSection heading="2. Description of Services">
        <p>
          ClinicDigital.co provides AI-powered marketing automation, client management solutions,
          SEO, web design, website maintenance, and customized integrations primarily for medical
          practices, medspas, and healthcare-related businesses. Our solutions are deployed through
          the GoHighLevel platform and other third-party tools as applicable.
        </p>
        <p>
          We reserve the right to modify, suspend, or discontinue any aspect of our services at any
          time without prior notice or liability.
        </p>
      </LegalSection>

      <LegalSection heading="3. User Obligations">
        <p>By using our services, you agree to:</p>
        <ul className="ml-5 list-disc flex flex-col gap-2">
          <li>
            Provide accurate, current, and complete information when requested during registration,
            consultation bookings, or any form submissions.
          </li>
          <li>
            Maintain the confidentiality of any account credentials, API keys, or access tokens
            provided to you as part of our services.
          </li>
          <li>
            Promptly notify us of any unauthorized use of your account or any other breach of
            security.
          </li>
          <li>
            Comply with all applicable local, state, national, and international laws and
            regulations, including HIPAA where applicable to healthcare data.
          </li>
          <li>
            Use our services solely for lawful purposes and in accordance with these Terms.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. Acceptable Use Policy">
        <p>You agree not to use our website or services to:</p>
        <ul className="ml-5 list-disc flex flex-col gap-2">
          <li>
            Engage in any activity that is illegal, fraudulent, deceptive, or harmful.
          </li>
          <li>
            Transmit any material that is defamatory, obscene, threatening, abusive, or otherwise
            objectionable.
          </li>
          <li>
            Upload, transmit, or distribute any viruses, malware, or other malicious code.
          </li>
          <li>
            Attempt to gain unauthorized access to our systems, networks, servers, or other
            infrastructure.
          </li>
          <li>
            Interfere with or disrupt the integrity or performance of our website or services.
          </li>
          <li>
            Scrape, harvest, or collect information from our website through automated means without
            our prior written consent.
          </li>
          <li>
            Reverse engineer, decompile, or disassemble any software or technology used in our
            services.
          </li>
          <li>
            Use our services to send unsolicited communications (spam) or violate anti-spam
            regulations such as CAN-SPAM or CASL.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="5. Intellectual Property and Content Ownership">
        <p>
          All content on the ClinicDigital.co website, including but not limited to text, graphics,
          logos, images, icons, software, and the compilation thereof, is the exclusive property of
          ClinicDigital.co or its content suppliers and is protected by United States and
          international copyright, trademark, and other intellectual property laws.
        </p>
        <p>
          <strong className="text-foreground">Our Work Product:</strong> Unless otherwise specified in a separate
          written agreement, all custom strategies, automation workflows, integrations, website
          designs, and related deliverables created by ClinicDigital.co remain our intellectual
          property until full payment has been received. Upon full payment, ownership of
          client-specific deliverables transfers to the Client, excluding any pre-existing
          proprietary tools, templates, or frameworks owned by ClinicDigital.co.
        </p>
        <p>
          <strong className="text-foreground">Client Content:</strong> You retain ownership of all content, data,
          and materials you provide to us for use in our services. By providing such content, you
          grant us a non-exclusive, royalty-free license to use, modify, and display it solely for
          the purpose of delivering our services.
        </p>
        <p>
          <strong className="text-foreground">Portfolio Rights:</strong> Unless you opt out in writing, we reserve
          the right to feature completed projects in our portfolio and case studies for marketing
          purposes.
        </p>
      </LegalSection>

      <LegalSection heading="6. Payment Terms">
        <p>
          Fees for our services will be outlined in a separate proposal, statement of work, or
          invoice. By engaging our services, you agree to the following payment terms:
        </p>
        <ul className="ml-5 list-disc flex flex-col gap-2">
          <li>
            All fees are due as specified in the applicable agreement or invoice.
          </li>
          <li>
            Late payments may incur a late fee of 1.5% per month on the outstanding balance.
          </li>
          <li>
            We reserve the right to suspend or terminate services for accounts with overdue payments
            exceeding 30 days.
          </li>
          <li>
            All fees are non-refundable unless expressly stated otherwise in a written agreement.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="7. Third-Party Services and Platforms">
        <p>
          Our services utilize third-party platforms, including but not limited to GoHighLevel,
          hosting providers, analytics tools, and payment processors. Your use of these third-party
          services is subject to their respective terms of service and privacy policies.
        </p>
        <p>
          We are not responsible for the availability, accuracy, or reliability of any third-party
          services, and we shall not be liable for any loss or damage arising from your use of such
          services.
        </p>
      </LegalSection>

      <LegalSection heading="8. Limitation of Liability">
        <p>
          To the maximum extent permitted by applicable law, ClinicDigital.co and its officers,
          directors, employees, agents, and affiliates shall not be liable for:
        </p>
        <ul className="ml-5 list-disc flex flex-col gap-2">
          <li>
            Any indirect, incidental, special, consequential, or punitive damages, including but
            not limited to loss of profits, revenue, data, goodwill, or business opportunities.
          </li>
          <li>
            Any damages arising from your use of or inability to use our website or services.
          </li>
          <li>
            Any damages resulting from unauthorized access to or alteration of your data or
            transmissions.
          </li>
          <li>
            Any damages caused by the conduct of any third party on or related to our services.
          </li>
        </ul>
        <p>
          In no event shall our total aggregate liability exceed the amounts paid by you to
          ClinicDigital.co for the services giving rise to the claim during the twelve (12) months
          preceding the event.
        </p>
      </LegalSection>

      <LegalSection heading="9. Disclaimer of Warranties">
        <p>
          Our website and services are provided on an "as is" and "as available" basis without
          warranties of any kind, whether express or implied, including but not limited to implied
          warranties of merchantability, fitness for a particular purpose, and non-infringement.
        </p>
        <p>
          We do not warrant that our services will be uninterrupted, error-free, secure, or free of
          viruses or other harmful components. We do not guarantee specific results from the use of
          our services, including but not limited to patient acquisition numbers, revenue increases,
          or search engine rankings.
        </p>
      </LegalSection>

      <LegalSection heading="10. Indemnification">
        <p>
          You agree to indemnify, defend, and hold harmless ClinicDigital.co and its officers,
          directors, employees, agents, and affiliates from and against any and all claims,
          liabilities, damages, losses, costs, and expenses (including reasonable attorney fees)
          arising out of or related to:
        </p>
        <ul className="ml-5 list-disc flex flex-col gap-2">
          <li>Your use of our website or services.</li>
          <li>Your violation of these Terms.</li>
          <li>Your violation of any applicable law or regulation.</li>
          <li>Your infringement of any third-party intellectual property or other rights.</li>
          <li>Any content or data you provide to us in connection with our services.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="11. Termination">
        <p>
          We may terminate or suspend your access to our services immediately, without prior notice
          or liability, for any reason, including but not limited to:
        </p>
        <ul className="ml-5 list-disc flex flex-col gap-2">
          <li>Breach of these Terms of Service.</li>
          <li>Non-payment of fees owed.</li>
          <li>Engagement in prohibited activities as outlined in the Acceptable Use Policy.</li>
          <li>Request by law enforcement or government agencies.</li>
          <li>Discontinuation or material modification of our services.</li>
        </ul>
        <p>
          Upon termination, your right to use our services will cease immediately. Provisions of
          these Terms that by their nature should survive termination shall survive, including but
          not limited to intellectual property provisions, warranty disclaimers, indemnification, and
          limitations of liability.
        </p>
        <p>
          <strong className="text-foreground">Client-Initiated Termination:</strong> You may terminate your
          engagement with us at any time by providing written notice. Any fees owed for services
          already rendered remain due and payable.
        </p>
      </LegalSection>

      <LegalSection heading="12. Governing Law and Dispute Resolution">
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the United
          States, without regard to conflict of law principles. Any disputes arising out of or
          related to these Terms or our services shall be resolved through binding arbitration in
          accordance with the rules of the American Arbitration Association.
        </p>
        <p>
          You agree that any arbitration shall be conducted on an individual basis and not as a
          class action or representative proceeding. You waive any right to participate in a class
          action lawsuit or class-wide arbitration.
        </p>
      </LegalSection>

      <LegalSection heading="13. Severability">
        <p>
          If any provision of these Terms is found to be invalid, illegal, or unenforceable by a
          court of competent jurisdiction, the remaining provisions shall continue in full force and
          effect. The invalid provision shall be modified to the minimum extent necessary to make it
          valid and enforceable.
        </p>
      </LegalSection>

      <LegalSection heading="14. Entire Agreement">
        <p>
          These Terms, together with our Privacy Policy and any separate service agreements or
          statements of work, constitute the entire agreement between you and ClinicDigital.co
          regarding the use of our website and services. These Terms supersede all prior
          agreements, understandings, and communications, whether written or oral.
        </p>
      </LegalSection>

      <LegalSection heading="15. Contact Us">
        <p>
          If you have any questions or concerns regarding these Terms of Service, please contact
          us:
        </p>
        <div className="rounded-lg border border-border bg-card p-5">
          <p className="font-semibold text-foreground">ClinicDigital.co</p>
          <p className="mt-1">
            Email:{" "}
            <a href="mailto:legal@clinicdigital.co" className="text-primary hover:underline">
              legal@clinicdigital.co
            </a>
          </p>
          <p>
            Website:{" "}
            <a href="https://clinicdigital.co" className="text-primary hover:underline">
              clinicdigital.co
            </a>
          </p>
        </div>
      </LegalSection>
    </LegalPageLayout>
  )
}
