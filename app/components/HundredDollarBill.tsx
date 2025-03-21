"use client"

import { useState, useEffect } from "react"
import { ReliableImage } from "./ReliableImage"

export const HundredDollarBill = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return (
    <div className="w-full flex justify-center my-6">
      <div className={`relative ${isMobile ? "w-full max-w-[320px]" : "w-auto"}`}>
        <ReliableImage
          src="/images/hundred-dollar-bill.jpg"
          alt="$100 Bill for Bike MS Fundraising"
          width={isMobile ? 320 : 500}
          height={isMobile ? 136 : 212}
          className="rounded-md shadow-lg"
          imageClassName="object-contain"
        />
      </div>
    </div>
  )
}

