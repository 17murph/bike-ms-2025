"use client"

import { useEffect, useState } from "react"

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set the date we're counting down to - May 3-4, 2025
    const countDownDate = new Date("May 3, 2025 07:00:00").getTime()

    const updateCountdown = () => {
      // Get today's date and time
      const now = new Date().getTime()

      // Find the distance between now and the count down date
      const distance = countDownDate - now

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    // Update the count down every 1 second
    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center my-6">
      <h3 className="text-xl font-bold mb-3">Countdown to Ride Day</h3>
      <div className="bg-black rounded-xl p-4 border-4 border-gray-700 shadow-lg max-w-md w-full">
        {/* Garmin-style header */}
        <div className="bg-gray-800 rounded-t-lg p-2 mb-3 flex justify-between items-center">
          <div className="text-gray-400 text-xs">GARMIN</div>
          <div className="text-gray-400 text-xs">EDGE 1040</div>
        </div>

        {/* Main display */}
        <div className="bg-gray-900 rounded-lg p-4 mb-3">
          <div className="text-center text-green-400 text-sm mb-2">RIDE DAY COUNTDOWN</div>

          <div className="grid grid-cols-4 gap-2 text-center">
            {/* Days */}
            <div className="bg-black rounded p-2 border border-gray-700">
              <div className="text-white text-3xl font-mono font-bold">{timeLeft.days.toString().padStart(2, "0")}</div>
              <div className="text-gray-400 text-xs mt-1">DAYS</div>
            </div>

            {/* Hours */}
            <div className="bg-black rounded p-2 border border-gray-700">
              <div className="text-white text-3xl font-mono font-bold">
                {timeLeft.hours.toString().padStart(2, "0")}
              </div>
              <div className="text-gray-400 text-xs mt-1">HOURS</div>
            </div>

            {/* Minutes */}
            <div className="bg-black rounded p-2 border border-gray-700">
              <div className="text-white text-3xl font-mono font-bold">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </div>
              <div className="text-gray-400 text-xs mt-1">MINS</div>
            </div>

            {/* Seconds */}
            <div className="bg-black rounded p-2 border border-gray-700">
              <div className="text-white text-3xl font-mono font-bold">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </div>
              <div className="text-gray-400 text-xs mt-1">SECS</div>
            </div>
          </div>
        </div>

        {/* Bottom buttons - just for decoration */}
        <div className="flex justify-between px-2">
          <div className="w-8 h-8 rounded-full bg-gray-700"></div>
          <div className="w-8 h-8 rounded-full bg-gray-700"></div>
          <div className="w-8 h-8 rounded-full bg-gray-700"></div>
        </div>
      </div>
    </div>
  )
}
