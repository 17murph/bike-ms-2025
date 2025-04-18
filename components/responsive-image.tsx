"use client"

import Image, { type ImageProps } from "next/image"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ResponsiveImageProps extends Omit<ImageProps, "src" | "onError"> {
  src: string
  fallbackSrc?: string
  mobileSrc?: string
  tabletSrc?: string
  desktopSrc?: string
  blurDataURL?: string
  aspectRatio?: string
  loadingStrategy?: "eager" | "lazy"
}

export function ResponsiveImage({
  src,
  alt,
  fallbackSrc = "/placeholder.svg",
  mobileSrc,
  tabletSrc,
  desktopSrc,
  blurDataURL,
  className = "",
  aspectRatio = "aspect-[16/9]",
  loadingStrategy = "lazy",
  ...props
}: ResponsiveImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop" | null>(null)

  // Detect device type on client side
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setDeviceType("mobile")
      } else if (width < 1024) {
        setDeviceType("tablet")
      } else {
        setDeviceType("desktop")
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Set appropriate image source based on device
  useEffect(() => {
    if (deviceType === "mobile" && mobileSrc) {
      setImgSrc(mobileSrc)
    } else if (deviceType === "tablet" && tabletSrc) {
      setImgSrc(tabletSrc)
    } else if (deviceType === "desktop" && desktopSrc) {
      setImgSrc(desktopSrc)
    } else {
      setImgSrc(src)
    }
    setIsLoading(true)
    setHasError(false)
  }, [deviceType, src, mobileSrc, tabletSrc, desktopSrc])

  const handleError = () => {
    if (!hasError) {
      console.error(`Image failed to load: ${imgSrc}`)
      setImgSrc(fallbackSrc)
      setHasError(true)
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("relative overflow-hidden", aspectRatio, className)}>
      {isLoading && <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />}
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        fill={props.fill !== undefined ? props.fill : true}
        className={cn("object-cover transition-opacity duration-500", isLoading ? "opacity-0" : "opacity-100")}
        onError={handleError}
        onLoad={() => setIsLoading(false)}
        loading={loadingStrategy}
        priority={loadingStrategy === "eager"}
        placeholder={blurDataURL ? "blur" : "empty"}
        blurDataURL={blurDataURL}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...props}
      />
    </div>
  )
}
