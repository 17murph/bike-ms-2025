"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  // Default to false for server-side rendering
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Only run on client-side
    const checkMobile = () => {
      // Check if window exists (client-side only)
      if (typeof window !== "undefined") {
        // Check for mobile based on screen width or touch capability
        setIsMobile(window.innerWidth <= 768 || "ontouchstart" in window || navigator.maxTouchPoints > 0)
      }
    }

    // Initial check
    checkMobile()

    // Add event listener for resize
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}
