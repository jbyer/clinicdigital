"use client"

import Script from "next/script"

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

/**
 * Analytics Component
 * 
 * A reusable component that loads all external tracking scripts for the website.
 * This includes Google Analytics 4 and Google Tag Manager.
 * 
 * Usage:
 * Import and include this component in your footer or layout:
 * 
 * ```tsx
 * import { Analytics } from "@/components/analytics"
 * 
 * export function Footer() {
 *   return (
 *     <footer>
 *       {/* Footer content *\/}
 *       <Analytics />
 *     </footer>
 *   )
 * }
 * ```
 * 
 * Environment Variables Required:
 * - NEXT_PUBLIC_GA_MEASUREMENT_ID: Google Analytics 4 Measurement ID (G-XXXXXXXXXX)
 * - NEXT_PUBLIC_GTM_ID: Google Tag Manager Container ID (GTM-XXXXXXX)
 */
export function Analytics() {
  return (
    <>
      {/* Google Analytics 4 */}
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}

      {/* Google Tag Manager */}
      {GTM_ID && (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      )}
    </>
  )
}

/**
 * GTM NoScript fallback for users with JavaScript disabled.
 * Place this immediately after the opening <body> tag in your layout.
 */
export function AnalyticsNoScript() {
  if (!GTM_ID) return null

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  )
}
