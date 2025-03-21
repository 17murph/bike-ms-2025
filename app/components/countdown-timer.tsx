"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  eventDate: string
  eventName: string
}

export function CountdownTimer({ eventDate, eventName }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(eventDate).getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [eventDate])

  return (
    <div className="bg-blue-50 p-3 rounded-lg">
      <p className="text-sm text-center text-gray-600 mb-2">Countdown to {eventName}</p>
      <div className="grid grid-cols-4 gap-1 text-center">
        <div className="flex flex-col">
          <span className="text-xl font-bold text-primary">{timeLeft.days}</span>
          <span className="text-xs text-gray-500">Days</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-primary">{timeLeft.hours}</span>
          <span className="text-xs text-gray-500">Hours</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-primary">{timeLeft.minutes}</span>
          <span className="text-xs text-gray-500">Mins</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-primary">{timeLeft.seconds}</span>
          <span className="text-xs text-gray-500">Secs</span>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer

