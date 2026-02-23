import type { Metadata } from "next"
import { LegalPageLayout, LegalSection } from "@/components/legal-page-layout"

export const metadata: Metadata = {
  title: "Privacy Policy - ClinicDigital.co",
  description:
    "Learn how ClinicDigital.co protects your privacy and handles your data. Our commitment to transparency and security for all healthcare practice clients.",
  keywords: []
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="Your privacy matters. Learn how ClinicDigital.co collects, uses, and safeguards your personal data in compliance with GDPR, CCPA, and other applicable regulations."
      lastUpdated="February 10, 2026"
    >
      <LegalSection heading="1. Introduction">
        <p>
          ClinicDigital.co ("we," "our," or "us") is committed to protecting the privacy and
          security of your personal information. This Privacy Policy describes how we collect, use,
          disclose, and safeguard your data when you visit our website, engage our services, or
          interact with us in any way.
        </p>
        <p>
          By accessing or using our website and services, you acknowledge that you have read,
          understood, and agree to be bound by this Privacy Policy. If you do not agree, please
          discontinue use of our services immediately.
        </p>
      </LegalSection>

      <LegalSection heading="2. Information We Collect">
        <p>We may collect the following categories of information:</p>
        <ul className="ml-5 list-disc flex flex-col gap-2">
          <li>
            <strong className="text-foreground">Personal Identifiers:</strong> Name, email address, phone number,
            business name, and job title provided through contact forms, consultation bookings, or
            direct communication.
          </li>
          <li>
            <strong className="text-foreground">Business Information:</strong> Practice type, specialty, number of
            locations, current technology stack, and operational details shared during consultations
            or onboarding.
          </li>
          <li>
            <strong className="text-foreground">Technical Data:</strong> IP address, browser type and version,
            operating system, device identifiers, referring URLs, pages visited, time spent on pages,
            and other diagnostic data collected automatically.
          </li>
          <li>
            <strong className="text-foreground">Usage Data:</strong> Interaction patterns with our website including
            clicks, scroll depth, form interactions, and navigation paths.
          </li>
          <li>
            <strong className="text-foreground">Cookies and Tracking Technologies:</strong> We use cookies, web
            beacons, and similar technologies to enhance your experience, analyze traffic, and
            deliver targeted content.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. How We Use Your Information">
        <p>We use collected information for the following purposes:</p>
        <ul className="ml-5 list-disc flex flex-col gap-2">
          <li>To provide, operate, and maintain our website and services.</li>
          <li>To process consultation requests and respond to inquiries.</li>
          <li>
            To deliver AI-powered marketing automation, client management, and integration
            services through the GoHighLevel platform on your behalf.
          </li>
          <li>To personalize your experience and improve our offerings.</li>
          <li>To send administrative communications, service updates, and marketing materials (with your consent).</li>
          <li>To detect, prevent, and address technical issues, fraud, or security threats.</li>
          <li>To comply with legal obligations and enforce our agreements.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. Legal Basis for Processing (GDPR)">
        <p>
          If you are located in the European Economic Area (EEA), we process your personal data
          under the following legal bases as defined by the General Data Protection Regulation
          (GDPR):
        </p>
        <ul className="ml-5 list-disc flex flex-col gap-2">
          <li>
            <strong className="text-foreground">Consent:</strong> Where you have given explicit consent for us to
            process your personal data for specific purposes.
          </li>
          <li>
            <strong className="text-foreground">Contractual Necessity:</strong> Where processing is necessary for
            the performance of a contract with you or to take pre-contractual steps at your request.
          </li>
          <li>
            <strong className="text-foreground">Legitimate Interests:</strong> Where processing is necessary for our
            legitimate business interests, provided these are not overridden by your rights and
            freedoms.
          </li>
          <li>
            <strong className="text-foreground">Legal Obligation:</strong> Where processing is necessary for
            compliance with a legal obligation to which we are subject.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="5. Your Rights Under GDPR">
        <p>
          If you are a resident of the EEA, you have the following data protection rights:
        </p>
        <ul className="ml-5 list-disc flex flex-col gap-2">
          <li>The right to access, update, or delete the information we hold about you.</li>
          <li>The right to rectification if your information is inaccurate or incomplete.</li>
          <li>The right to object to our processing of your personal data.</li>
          <li>The right to request restriction of processing of your personal data.</li>
          <li>The right to data portability in a structured, machine-readable format.</li>
          <li>The right to withdraw consent at any time without affecting the lawfulness of prior processing.</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at{" "}
          <a href="mailto:privacy@clinicdigital.co" className="text-primary hover:underline">
            privacy@clinicdigital.co
          </a>.
          We will respond to your request within 30 days.
        </p>
      </LegalSection>

      <LegalSection heading="6. Your Rights Under CCPA">
        <p>
          If you are a California resident, the California Consumer Privacy Act (CCPA) grants you
          the following rights:
        </p>
        <ul className="ml-5 list-disc flex flex-col gap-2">
          <li>The right to know what personal information we collect, use, disclose, and sell.</li>
          <li>The right to request deletion of your personal information.</li>
          <li>The right to opt out of the sale of your personal information. We do not sell personal information.</li>
          <li>The right to non-discrimination for exercising your CCPA rights.</li>
        </ul>
        <p>
          To submit a verifiable consumer request, contact us at{" "}
          <a href="mailto:privacy@clinicdigital.co" className="text-primary hover:underline">
            privacy@clinicdigital.co
          </a>.
        </p>
      </LegalSection>

      <LegalSection heading="7. Data Sharing and Disclosure">
        <p>
          We do not sell your personal information. We may share your data with the following
          categories of third parties:
        </p>
        <ul className="ml-5 list-disc flex flex-col gap-2">
          <li>
            <strong className="text-foreground">Service Providers:</strong> Trusted third-party vendors who assist
            us in operating our website, conducting business, or servicing you (e.g., GoHighLevel,
            hosting providers, analytics services).
          </li>
          <li>
            <strong className="text-foreground">Legal Requirements:</strong> When required by law, regulation, legal
            process, or governmental request.
          </li>
          <li>
            <strong className="text-foreground">Business Transfers:</strong> In connection with a merger,
            acquisition, reorganization, or sale of assets, your data may be transferred as part of
            that transaction.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="8. Data Security">
        <p>
          We implement industry-standard technical and organizational security measures to protect
          your personal data against unauthorized access, alteration, disclosure, or destruction.
          These measures include:
        </p>
        <ul className="ml-5 list-disc flex flex-col gap-2">
          <li>Encryption of data in transit using TLS/SSL protocols.</li>
          <li>Encryption of sensitive data at rest.</li>
          <li>Regular security assessments and vulnerability testing.</li>
          <li>Access controls limited to authorized personnel on a need-to-know basis.</li>
          <li>Secure development practices and regular software updates.</li>
        </ul>
        <p>
          While we strive to protect your personal information, no method of transmission over the
          Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection heading="9. Data Retention">
        <p>
          We retain your personal data only for as long as necessary to fulfill the purposes
          outlined in this Privacy Policy, unless a longer retention period is required or permitted
          by law. When your data is no longer needed, we will securely delete or anonymize it.
        </p>
      </LegalSection>

      <LegalSection heading="10. Cookies and Tracking Technologies">
        <p>
          Our website uses cookies and similar tracking technologies to collect and use personal
          information about you. You can control cookies through your browser settings and other
          tools. Disabling certain cookies may limit your ability to use some features of our
          website.
        </p>
        <p>We use the following types of cookies:</p>
        <ul className="ml-5 list-disc flex flex-col gap-2">
          <li>
            <strong className="text-foreground">Essential Cookies:</strong> Required for the website to function and
            cannot be disabled.
          </li>
          <li>
            <strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact
            with our website by collecting and reporting information anonymously.
          </li>
          <li>
            <strong className="text-foreground">Marketing Cookies:</strong> Used to track visitors across websites to
            display relevant advertisements.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="11. Third-Party Links">
        <p>
          Our website may contain links to third-party websites. We are not responsible for the
          privacy practices or content of these external sites. We encourage you to review the
          privacy policies of any third-party website you visit.
        </p>
      </LegalSection>

      <LegalSection heading="12. Children's Privacy">
        <p>
          Our services are not directed to individuals under the age of 18. We do not knowingly
          collect personal information from children. If we become aware that we have collected
          personal data from a child without parental consent, we will take steps to delete that
          information promptly.
        </p>
      </LegalSection>

      <LegalSection heading="13. Changes to This Privacy Policy">
        <p>
          We reserve the right to update or modify this Privacy Policy at any time. Changes will be
          effective immediately upon posting to this page with an updated "Last updated" date. We
          encourage you to review this Privacy Policy periodically for any changes. Your continued
          use of our services after modifications constitutes acceptance of the updated policy.
        </p>
      </LegalSection>

      <LegalSection heading="14. Contact Us">
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our data
          practices, please contact us:
        </p>
        <div className="rounded-lg border border-border bg-card p-5">
          <p className="font-semibold text-foreground">ClinicDigital.co</p>
          <p className="mt-1">
            Email:{" "}
            <a href="mailto:privacy@clinicdigital.co" className="text-primary hover:underline">
              privacy@clinicdigital.co
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
