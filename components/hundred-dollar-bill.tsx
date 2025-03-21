"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function HundredDollarBill() {
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
    <div className="w-full flex justify-center">
      <div
        className={`relative ${isMobile ? "w-full max-w-[280px]" : "w-48"} h-auto overflow-hidden rounded-md shadow-lg`}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/100Bill-i9nf28jeSx9CL6yPqLujoKL5gxjvGI.jpeg"
          alt="$100 Bill for Bike MS Fundraising"
          width={isMobile ? 280 : 192}
          height={isMobile ? 119 : 82}
          className="object-contain w-full h-auto"
          unoptimized
        />
      </div>
      <p className="font-bold text-secondary text-lg mt-3">Who will match $100?</p>
    </div>
  )
}

