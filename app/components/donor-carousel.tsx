"use client"

import { useEffect, useState } from "react"
import "./donor-carousel.css"

interface Donor {
  name: string
  amount?: string
  tags?: string[]
}

interface DonorCarouselProps {
  donors: Donor[]
  autoScrollInterval?: number
}

export default function DonorCarousel({ donors, autoScrollInterval = 3000 }: DonorCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (donors.length <= 1 || isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % donors.length)
    }, autoScrollInterval)

    return () => clearInterval(interval)
  }, [donors.length, autoScrollInterval, isPaused])

  if (donors.length === 0) {
    return <div className="donor-card">No donors yet. Be the first!</div>
  }

  return (
    <div className="donor-carousel" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="donor-card">
        <div className="donor-name">{donors[currentIndex].name}</div>
        {donors[currentIndex].amount && <div className="donor-amount">{donors[currentIndex].amount}</div>}
        {donors[currentIndex].tags && donors[currentIndex].tags.length > 0 && (
          <div className="donor-tags">
            {donors[currentIndex].tags.map((tag, index) => (
              <span key={index} className="donor-tag">
                {tag === "Top Donor" && <span className="heart-icon">❤️</span>}
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {donors.length > 1 && (
        <div className="donor-indicators">
          {donors.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
