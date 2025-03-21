"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface HeicImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function HeicImage({ src, alt, width, height, className }: HeicImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(src)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setImageSrc(src)
    setIsLoading(true)
    setError(false)
  }, [src])

  return (
    <>
      {isLoading && <div className="animate-pulse bg-gray-200 w-full h-full absolute inset-0"></div>}
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true)
          setIsLoading(false)
          setImageSrc("/placeholder.svg")
        }}
        unoptimized
      />
    </>
  )
}

