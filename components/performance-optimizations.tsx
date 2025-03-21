"use client"

import { useEffect } from "react"

export function PerformanceOptimizations() {
  useEffect(() => {
    // Lazy load non-critical resources
    const lazyLoadResources = () => {
      // Add any third-party scripts that aren't critical for initial render
      const thirdPartyScripts = [
        // Example: { src: 'https://example.com/script.js', async: true, defer: true }
      ]

      thirdPartyScripts.forEach((script) => {
        const scriptEl = document.createElement("script")
        scriptEl.src = script.src
        if (script.async) scriptEl.async = true
        if (script.defer) scriptEl.defer = true
        document.body.appendChild(scriptEl)
      })
    }

    // Use requestIdleCallback or setTimeout as fallback
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(lazyLoadResources)
    } else {
      setTimeout(lazyLoadResources, 2000)
    }

    // Preconnect to important domains
    const preconnectLinks = [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com",
      "https://events.nationalmssociety.org",
    ]

    preconnectLinks.forEach((href) => {
      const link = document.createElement("link")
      link.rel = "preconnect"
      link.href = href
      document.head.appendChild(link)
    })
  }, [])

  return null
}

