"use client"

import { useEffect } from "react"

// List of critical images to preload
const CRITICAL_IMAGES = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MS%20Logo.jpg-Qdh5YtnX4mUfDGuoaaoDnULkWuVtAj.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TSB-logo-YalpHen52DqYkUZknWmKZmHJOMCo3n.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025%20Logo.JPEG-LznTItVGXC64kGQ29mVEzAWohOa9LN.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Birch%20Island%20Vet.jpg-4d3gtkh4cnGBdUL3uTO4Za2C1JR80C.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Podcast%20Seats.jpg-yOo7VS19f1tz8dRnPrHJ7Six3I1iW6.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Sarasota%202024%20-%20Team%20Spanish%20Beer.jpg-vp4Po2gtCKuQRr77tV5rNb6mgjAxRf.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/100Bill-i9nf28jeSx9CL6yPqLujoKL5gxjvGI.jpeg",
]

export function CriticalImagePreloader() {
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

