"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

type FallbackImageProps = Omit<ImageProps, "onError"> & {
  fallback?: string
}

export function FallbackImage({ src, alt, fallback = "/placeholder.svg", ...props }: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src as string)
  const [error, setError] = useState(false)

  const handleError = () => {
    if (!error) {
      console.warn(`Image failed to load: ${src}`)
      setImgSrc(fallback)
      setError(true)
    }
  }

  return (
    <Image {...props} src={imgSrc || "/placeholder.svg"} alt={alt} onError={handleError} unoptimized loading="eager" />
  )
}

