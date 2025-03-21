"use client"
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
    return `/placeholder.svg?height=${h}&width=${w}&text=${encodeURIComponent(alt.substring(0, 30))}`
  }

  const handleError = () => {
    if (!hasError) {
      console.error(`Failed to load image: ${src}`)
      setImgSrc(getPlaceholder())
      setHasError(true)
    }
  }

  return (
    <div
      className={`relative ${className}`}
      style={{
        width: fill ? "100%" : width ? `${width}px` : "100%",
        height: fill ? "100%" : height ? `${height}px` : "auto",
        overflow: "hidden",
      }}
    >
      {/* Show a loading placeholder */}
      {!hasError && <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />}

      <img
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        onError={handleError}
        className={`${hasError ? "opacity-80" : ""} w-full h-full object-cover`}
        style={{
          display: "block",
          maxWidth: "100%",
        }}
      />
    </div>
  )
}

