"use client"

import type React from "react"
import { Facebook, Linkedin, Twitter } from "react-social-sharing"

interface SocialShareProps {
  url: string
  title: string
}

const SocialShare: React.FC<SocialShareProps> = ({ url, title }) => {
  return (
    <div className="flex space-x-4 items-center">
      <button
        onClick={() =>
          window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank")
        }
        className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={18} />
      </button>
      <button
        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")}
        className="p-2 rounded-full bg-blue-800 text-white hover:bg-blue-900 transition-colors"
        aria-label="Share on Facebook"
      >
        <Facebook size={18} />
      </button>
      <button
        onClick={() =>
          window.open(
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
            "_blank",
          )
        }
        className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
        aria-label="Share on X (Twitter)"
      >
        <Twitter size={18} />
      </button>
    </div>
  )
}

export default SocialShare

