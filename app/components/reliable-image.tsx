"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

export function ReliableImage(props: ImageProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 ${props.className || ""}`}
        style={{ width: props.width, height: props.height }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-image text-gray-400 w-8 h-8"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      </div>
    )
  }

  return <Image {...props} onError={() => setError(true)} />
}

export default ReliableImage
