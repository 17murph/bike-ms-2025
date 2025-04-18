"use client"

import Image, { type ImageProps } from "next/image"
import { useState, useEffect } from "react"
import { getVercelBlobUrl, getFallbackImageUrl } from "@/lib/image-utils"

type EnhancedImageProps = Omit<ImageProps, "src" | "onError"> & {
  src: string
  fallbackSrc?: string
  lowQualityPlaceholder?: boolean
}

export function EnhancedImage({
  src,
  alt,
  width = 400,
  height = 300,
  fallbackSrc,
  lowQualityPlaceholder = true,
  ...props
}: EnhancedImageProps) {
  // Process the source URL
  const processedSrc = getVercelBlobUrl(src)
  const defaultFallback = getFallbackImageUrl(
    typeof width === "number" ? width : 400,
    typeof height === "number" ? height : 300,
  )

  const [imgSrc, setImgSrc] = useState<string>(processedSrc)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Reset state when src changes
  useEffect(() => {
    setImgSrc(processedSrc)
    setIsLoading(true)
    setHasError(false)
  }, [processedSrc])

  const handleError = () => {
    if (!hasError) {
      console.error(`Image failed to load: ${processedSrc}`)
      setImgSrc(fallbackSrc || defaultFallback)
      setHasError(true)
      setIsLoading(false)
    }
  }

  return (
    <div
      className="relative"
      style={{ width: props.fill ? "100%" : undefined, height: props.fill ? "100%" : undefined }}
    >
      {isLoading && lowQualityPlaceholder && <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />}
      <Image
        {...props}
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        width={props.fill ? undefined : width}
        height={props.fill ? undefined : height}
        onError={handleError}
        onLoad={() => setIsLoading(false)}
        unoptimized
        loading="eager"
        priority={true}
      />
    </div>
  )
}
