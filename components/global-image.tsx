"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"

type GlobalImageProps = Omit<ImageProps, "onError"> & {
  fallbackSrc?: string
}

export function GlobalImage({ src, alt, fallbackSrc = "/placeholder.svg", ...props }: GlobalImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src as string)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
  }

  return <Image {...props} src={imgSrc || "/placeholder.svg"} alt={alt} onError={handleError} unoptimized />
}

