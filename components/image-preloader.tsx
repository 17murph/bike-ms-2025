"use client"

import { useEffect } from "react"

// List of critical images to preload
const CRITICAL_IMAGES = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MS%20Logo.jpg-Qdh5YtnX4mUfDGuoaaoDnULkWuVtAj.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TSB-logo-YalpHen52DqYkUZknWmKZmHJOMCo3n.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spotify-podcast-badge-blk-grn-165x40-SglaMqZjS2grniJuucL8iprpdTENzF.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025%20Logo.JPEG-LznTItVGXC64kGQ29mVEzAWohOa9LN.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Birch%20Island%20Vet.jpg-4d3gtkh4cnGBdUL3uTO4Za2C1JR80C.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iHeart-P6l2uwoMvFVVPrwue7GuQs4DcP9c4z.png",
]

export function ImagePreloader() {
  useEffect(() => {
    // Preload critical images
    CRITICAL_IMAGES.forEach((src) => {
      const img = new Image()
      img.src = src
      img.crossOrigin = "anonymous" // Prevent CORS issues
    })
  }, [])

  return null // This component doesn't render anything
}
