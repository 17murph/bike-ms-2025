"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface ReliableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  width?: string | number
  height?: string | number
  className?: string
  imageClassName?: string
}

const ReliableImage: React.FC<ReliableImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  imageClassName,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleImageLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        width: width || "100%",
        height: height || "auto",
        maxWidth: "100%",
      }}
    >
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className={cn("w-full h-auto object-contain", isLoaded ? "opacity-100" : "opacity-0", imageClassName)}
        style={{
          transition: "opacity 0.3s ease-in-out",
          maxWidth: "100%",
        }}
        onLoad={handleImageLoad}
        {...props}
      />
    </div>
  )
}

export default ReliableImage

