"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface DebugImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fill?: boolean
  priority?: boolean
}

export function DebugImage({
  src,
  alt,
  width = 400,
  height = 300,
  className = "",
  fill = false,
  priority = true,
}: DebugImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [loadAttempts, setLoadAttempts] = useState(0)

  // Process the URL to ensure it's complete
  useEffect(() => {
    // If it's already a full URL, use it
    if (src.startsWith("http")) {
      console.log(`Debug Image: Using direct URL: ${src}`)
      setImageSrc(src)
      return
    }

    // Special case for the Spotify badge
    if (src.includes("spotify-podcast-badge")) {
      // Try the direct URL to the Spotify badge
      const directUrl =
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spotify-podcast-badge-blk-grn-165x40.png"
      console.log(`Debug Image: Using direct Spotify badge URL: ${directUrl}`)
      setImageSrc(directUrl)
      return
    }

    // Otherwise, add the Vercel Blob storage URL
    const fullUrl = `https://hebbkx1anhila5yf.public.blob.vercel-storage.com/${src.replace(/^\/+/, "")}`
    console.log(`Debug Image: Converting ${src} to ${fullUrl}`)
    setImageSrc(fullUrl)
  }, [src])

  // Retry loading if there's an error
  useEffect(() => {
    if (hasError && loadAttempts < 3) {
      const timer = setTimeout(
        () => {
          console.log(`Debug Image: Retrying load for ${imageSrc} (attempt ${loadAttempts + 1})`)

          // For Spotify badge, try alternative URLs
          if (imageSrc.includes("spotify-podcast-badge") && loadAttempts === 0) {
            const alternativeUrl = "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
            console.log(`Debug Image: Trying alternative Spotify URL: ${alternativeUrl}`)
            setImageSrc(alternativeUrl)
          } else {
            // Force a reload by appending a cache-busting parameter
            setImageSrc(`${imageSrc}${imageSrc.includes("?") ? "&" : "?"}retry=${loadAttempts}`)
          }

          setHasError(false)
          setLoadAttempts((prev) => prev + 1)
        },
        1000 * (loadAttempts + 1),
      ) // Increasing delay for each retry

      return () => clearTimeout(timer)
    }
  }, [hasError, imageSrc, loadAttempts])

  const handleError = () => {
    console.error(`Debug Image: Failed to load image: ${imageSrc}`)
    setHasError(true)
    setIsLoading(false)
  }

  const handleLoad = () => {
    console.log(`Debug Image: Successfully loaded image: ${imageSrc}`)
    setIsLoading(false)
  }

  return (
    <div className="relative" style={{ width: fill ? "100%" : undefined, height: fill ? "100%" : undefined }}>
      {isLoading && <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />}

      {hasError && loadAttempts >= 3 ? (
        <div
          className="flex items-center justify-center bg-gray-100 border border-gray-300 rounded"
          style={{ width: fill ? "100%" : width, height: fill ? "100%" : height }}
        >
          <p className="text-xs text-gray-500 p-2 text-center">{alt}</p>
        </div>
      ) : (
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          className={`${className} ${hasError ? "opacity-50" : ""}`}
          onError={handleError}
          onLoad={handleLoad}
          fill={fill}
          priority={priority}
          unoptimized
        />
      )}
    </div>
  )
}
