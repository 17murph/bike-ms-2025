"use client"

import Image from "next/image"
import { useState } from "react"

interface ReliableImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function ReliableImage({ src, alt, width, height, className = "" }: ReliableImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative" style={{ width: "auto", height: "auto" }}>
      {isLoading && <div className="absolute inset-0 bg-gray-200 animate-pulse rounded"></div>}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        loading="eager"
        className={`object-contain rounded-lg shadow-sm ${className}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}
