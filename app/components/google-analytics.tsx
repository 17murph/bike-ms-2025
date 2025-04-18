"use client"

import Script from "next/script"

export function GoogleAnalytics() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=G-J2CLRJ664K`} strategy="afterInteractive" async />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J2CLRJ664K');
        `}
      </Script>
    </>
  )
}
