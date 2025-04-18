"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Heart } from "lucide-react"

interface AutoScrollListProps {
  items: string[]
  title: string
  icon?: React.ReactNode
  speed?: number // in pixels per second
  className?: string
}

export function AutoScrollList({
  items,
  title,
  icon = <Heart className="w-3 h-3 text-red-500 mr-2" />,
  speed = 30,
  className = "",
}: AutoScrollListProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollHeight, setScrollHeight] = useState(0)
  const [containerHeight, setContainerHeight] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  // Measure container and content on mount and when items change
  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    setScrollHeight(container.scrollHeight)
    setContainerHeight(container.clientHeight)

    const resizeObserver = new ResizeObserver(() => {
      setScrollHeight(container.scrollHeight)
      setContainerHeight(container.clientHeight)
    })

    resizeObserver.observe(container)

    return () => {
      resizeObserver.disconnect()
    }
  }, [items])

  // Handle scrolling animation
  useEffect(() => {
    if (!containerRef.current || isHovering || scrollHeight <= containerHeight) return

    const container = containerRef.current
    const totalScrollDistance = scrollHeight / 3 // We have 3 copies of the list
    const scrollDuration = (totalScrollDistance / speed) * 1000 // Convert to milliseconds

    let startTime: number | null = null
    let animationId: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      // Reset when we've scrolled through one full copy of the list
      if (elapsed >= scrollDuration) {
        startTime = timestamp
        container.scrollTop = 0
      } else {
        const scrollPosition = (elapsed / scrollDuration) * totalScrollDistance
        container.scrollTop = scrollPosition
      }

      animationId = requestAnimationFrame(step)
    }

    animationId = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [scrollHeight, containerHeight, speed, isHovering])

  return (
    <div className={`bg-white rounded-lg shadow-sm flex flex-col h-[300px] ${className}`}>
      <div className="bg-primary text-white p-3 text-center">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div className="p-4 flex-grow overflow-hidden">
        <div
          ref={containerRef}
          className="h-full overflow-y-auto custom-scrollbar hide-scrollbar"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* First set of items */}
          {items.map((item, index) => (
            <div key={`first-${index}`} className="text-center py-2 text-gray-700 flex items-center justify-center">
              {icon}
              <span>{item}</span>
            </div>
          ))}
          {/* Duplicate set for continuous scrolling */}
          {items.map((item, index) => (
            <div key={`second-${index}`} className="text-center py-2 text-gray-700 flex items-center justify-center">
              {icon}
              <span>{item}</span>
            </div>
          ))}
          {/* Third set to ensure smooth looping */}
          {items.map((item, index) => (
            <div key={`third-${index}`} className="text-center py-2 text-gray-700 flex items-center justify-center">
              {icon}
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
