"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  eventDate: string
  eventName: string
}

export function CountdownTimer({ eventDate, eventName }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(eventDate) - +new Date()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [eventDate])

  return (
    <div className="flex justify-center items-center space-x-2 mt-3">
      <div className="flex flex-col items-center">
        <div className="bg-primary/10 text-primary text-sm font-bold px-2 py-1 rounded-md w-10 h-8 flex items-center justify-center">
          {timeLeft.days}
        </div>
        <span className="text-[10px] text-gray-500 mt-0.5">D</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-primary/10 text-primary text-sm font-bold px-2 py-1 rounded-md w-10 h-8 flex items-center justify-center">
          {timeLeft.hours}
        </div>
        <span className="text-[10px] text-gray-500 mt-0.5">H</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-primary/10 text-primary text-sm font-bold px-2 py-1 rounded-md w-10 h-8 flex items-center justify-center">
          {timeLeft.minutes}
        </div>
        <span className="text-[10px] text-gray-500 mt-0.5">M</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-primary/10 text-primary text-sm font-bold px-2 py-1 rounded-md w-10 h-8 flex items-center justify-center">
          {timeLeft.seconds}
        </div>
        <span className="text-[10px] text-gray-500 mt-0.5">S</span>
      </div>
    </div>
  )
}

