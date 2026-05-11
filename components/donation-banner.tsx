"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function DonationBanner() {
  const pathname = usePathname()
  
  // Don't show banner on the dedicated donate page
  if (pathname === "/donate") {
    return null
  }

  const isOnAboutBikeMs = pathname === "/about-bike-ms"

  const handleMobileClick = (e: React.MouseEvent) => {
    if (isOnAboutBikeMs) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Mobile banner - sticky/fixed */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-[60] bg-secondary text-white py-2 px-4 text-center">
        <Link
          href="/about-bike-ms"
          onClick={handleMobileClick}
          className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          <span>Team Bike MS — Donate →</span>
        </Link>
      </div>
      {/* Mobile spacer for fixed banner height */}
      <div className="md:hidden h-10"></div>

      {/* Desktop banner - not sticky */}
      <div className="hidden md:block bg-secondary text-white py-0.5 px-4 text-center">
        <Link
          href="/about-bike-ms"
          className="inline-flex items-center gap-2 text-xs font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          <span>🚴 MS has no finish line. Donate to one of our Bike MS Riders.</span>
          <span className="underline font-semibold">→ Donate Now</span>
        </Link>
      </div>
    </>
  )
}
