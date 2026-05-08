"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function DonationBanner() {
  const pathname = usePathname()
  
  // Don't show banner on the dedicated donate page
  if (pathname === "/donate") {
    return null
  }

  return (
    <>
      {/* Fixed banner at very top */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-secondary text-white py-2 px-4 text-center">
        <Link
          href="https://events.nationalmssociety.org/participants/Casey-Murphy_Bike-MS"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          <span className="hidden sm:inline">🚴 MS has no finish line. Casey Murphy rides anyway.</span>
          <span className="sm:hidden">🚴 MS has no finish line.</span>
          <span className="underline font-semibold">→ Donate Now</span>
        </Link>
      </div>
      {/* Spacer for fixed banner height */}
      <div className="h-10"></div>
    </>
  )
}
