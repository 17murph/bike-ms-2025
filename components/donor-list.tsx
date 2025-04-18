"use client"

import { useEffect, useRef } from "react"
import { Heart } from "lucide-react"

interface DonorListProps {
  donors: string[]
}

export function DonorList({ donors }: DonorListProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const scrollHeight = container.scrollHeight
    const duration = 30000 // 30 seconds for one complete cycle
    let startTime: number | null = null
    let animationId: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      // Calculate scroll position based on elapsed time
      const scrollPosition = ((elapsed % duration) / duration) * scrollHeight

      if (container) {
        container.scrollTop = scrollPosition
      }

      animationId = requestAnimationFrame(step)
    }

    animationId = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [donors])

  return (
    <div className="bg-white rounded-lg shadow-sm flex flex-col h-[300px]">
      <div className="bg-primary text-white p-3 text-center">
        <h2 className="text-xl font-semibold">Thank You Donors</h2>
      </div>
      <div className="p-4 flex-grow overflow-hidden">
        <div ref={containerRef} className="h-full overflow-y-auto custom-scrollbar hide-scrollbar">
          {/* First set of donors */}
          {donors.map((donor, index) => (
            <div key={`first-${index}`} className="text-center py-2 text-gray-700 flex items-center justify-center">
              <Heart className="w-3 h-3 text-red-500 mr-2" />
              <span>{donor}</span>
            </div>
          ))}
          {/* Duplicate set for continuous scrolling */}
          {donors.map((donor, index) => (
            <div key={`second-${index}`} className="text-center py-2 text-gray-700 flex items-center justify-center">
              <Heart className="w-3 h-3 text-red-500 mr-2" />
              <span>{donor}</span>
            </div>
          ))}
          {/* Add a third set to ensure continuous scrolling */}
          {donors.map((donor, index) => (
            <div key={`third-${index}`} className="text-center py-2 text-gray-700 flex items-center justify-center">
              <Heart className="w-3 h-3 text-red-500 mr-2" />
              <span>{donor}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
