"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  eventDate: string
}

export function DigitalCountdownTimer({ eventDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = new Date(eventDate).getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      } else {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [eventDate])

  return (
    <div className="flex justify-center space-x-2">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="flex flex-col items-center">
          <div className="bg-gray-800 text-green-400 text-xl font-mono p-2 rounded">
            {value.toString().padStart(2, "0")}
          </div>
          <div className="text-xs mt-1">{key}</div>
        </div>
      ))}
    </div>
  )
}
