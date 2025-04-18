"use client"

import { useState, useEffect } from "react"

export function TodaysDate() {
  const [date, setDate] = useState("")

  useEffect(() => {
    const today = new Date()
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    setDate(today.toLocaleDateString("en-US", options))
  }, [])

  return <div className="w-full bg-gray-100 py-2 text-center text-gray-600 text-sm">Today's Date: {date}</div>
}
