"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { parseISO, format } from "date-fns"

interface Activity {
  id: string
  type: "cycling"
  date: string
  time: string
  duration: string
  miles: number
  name: string
  mapUrl?: string
}

// Updated with new activities
export const activities: Activity[] = [
  {
    id: "nordic-track-march-13",
    type: "cycling",
    date: "2025-03-13",
    time: "11:03",
    duration: "0:24:21",
    miles: 6.16,
    name: "NordicTrack Indoor Cycling",
  },
  {
    id: "dc-toc-march-8",
    type: "cycling",
    date: "2025-03-08",
    time: "10:30",
    duration: "2:29:00",
    miles: 27.8,
    name: "TOC Washington DC Road Cycling",
    mapUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WDC%20Ride-CuQCPky42zVmB2CVXMm76c3v65MIwD.jpeg",
  },
  {
    id: "march-1-2025",
    type: "cycling",
    date: "2025-03-01",
    time: "08:03",
    duration: "2:02:41",
    miles: 35.71,
    name: "Jacksonville Road Cycling",
    mapUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-03%20at%2010.02.48%E2%80%AFAM-mb4yW7u3K6Uqko0FH9ZuwAn1TuvkWY.jpeg",
  },
  {
    id: "1",
    type: "cycling",
    date: "2025-02-23",
    time: "11:11",
    duration: "1:30:00",
    miles: 20.1,
    name: "St Johns County Road Cycling",
    mapUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0731.jpg-drmLc33QayuRnuHpjHJGOSRbVVBx1x.jpeg",
  },
  {
    id: "2",
    type: "cycling",
    date: "2025-02-22",
    time: "09:44",
    duration: "1:00:00",
    miles: 14.5,
    name: "Indoor Cycling",
  },
  {
    id: "3",
    type: "cycling",
    date: "2025-02-20",
    time: "07:54",
    duration: "0:30:00",
    miles: 4.5,
    name: "Indoor Cycling",
  },
  {
    id: "4",
    type: "cycling",
    date: "2025-02-17",
    time: "09:39",
    duration: "0:30:00",
    miles: 5.9,
    name: "Indoor Cycling",
  },
  {
    id: "5",
    type: "cycling",
    date: "2025-02-16",
    time: "10:48",
    duration: "0:45:00",
    miles: 9.0,
    name: "Indoor Cycling",
  },
  {
    id: "6",
    type: "cycling",
    date: "2025-02-08",
    time: "09:38",
    duration: "1:48:55",
    miles: 30.5,
    name: "St Johns County Road Cycling",
    mapUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Feb%208%20ride-p5H9BBzhEFVUEGCUCZbSKvPYUvHzZF.jpeg",
  },
  {
    id: "7",
    type: "cycling",
    date: "2025-02-01",
    time: "08:11",
    duration: "1:44:51",
    miles: 29.3,
    name: "Jacksonville Road Cycling",
    mapUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Feb%201%20ride-CXrIGkbXQazxdVUxwidV25I7Vgh9Hr.jpeg",
  },
  {
    id: "8",
    type: "cycling",
    date: "2025-01-18",
    time: "11:10",
    duration: "0:30:00",
    miles: 5.1,
    name: "Indoor Cycling",
  },
  {
    id: "9",
    type: "cycling",
    date: "2025-01-04",
    time: "10:10",
    duration: "1:00:00",
    miles: 20.0,
    name: "Indoor Cycling",
  },
  {
    id: "10",
    type: "cycling",
    date: "2025-01-01",
    time: "11:43",
    duration: "1:38:48",
    miles: 27.5,
    name: "St Johns County Road Cycling",
    mapUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jan%201,%202025.jpg-RTxB507Pdi90paGyhgLpJrpIk5XuLw.jpeg",
  },
]

export function ManualActivities() {
  const [selectedMap, setSelectedMap] = useState<string | null>(null)

  const groupedActivities = activities.reduce(
    (acc, activity) => {
      const date = parseISO(activity.date)
      const month = format(date, "MMMM yyyy")
      if (!acc[month]) {
        acc[month] = []
      }
      acc[month].push(activity)
      return acc
    },
    {} as Record<string, Activity[]>,
  )

  return (
    <div className="space-y-8">
      {Object.entries(groupedActivities).map(([month, monthActivities]) => (
        <Card key={month} className="w-full">
          <CardHeader>
            <h3 className="text-xl font-bold">{month}</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthActivities.map((activity) => {
                const date = parseISO(activity.date)
                return (
                  <div
                    key={activity.id}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-2"
                  >
                    <div>
                      <p className="font-semibold">
                        🚴 {format(date, "MM/dd/yyyy")} {activity.time} - {activity.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {activity.miles.toFixed(1)} miles - Duration: {activity.duration}
                      </p>
                    </div>
                    {activity.mapUrl && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 sm:mt-0"
                            onClick={() => setSelectedMap(activity.mapUrl)}
                          >
                            View Map
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="w-[95vw] max-w-3xl">
                          <div className="relative w-full h-[60vh]">
                            <Image
                              src={activity.mapUrl || "/placeholder.svg"}
                              alt="Activity Map"
                              fill
                              className="object-contain"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

