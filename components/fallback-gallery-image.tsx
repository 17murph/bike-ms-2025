"use client"

import Image from "next/image"
import { useState } from "react"

interface FallbackGalleryImageProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
}

export function FallbackGalleryImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
}: FallbackGalleryImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  // Generate a placeholder URL with the image dimensions
  const getPlaceholder = () => {
    const w = width || 400
    const h = height || 300
    return `/placeholder.svg?height=${h}&width=${w}&text=${encodeURIComponent(alt)}`
  }

  const handleError = () => {
    if (!hasError) {
      console.error(`Failed to load image: ${src}`)
      setImgSrc(getPlaceholder())
      setHasError(true)
    }
  }

  return (
    <Image
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={`${className} ${hasError ? "opacity-80" : ""}`}
      onError={handleError}
      unoptimized
      loading="eager"
      priority
    />
  )
}
