"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"

interface Activity {
  type: "cycling" | "walking"
  date: string
  miles: number
  mapUrl?: string
}

// This would be your actual data from Garmin
const activities: Activity[] = [
  { type: "cycling", date: "2025-02-15", miles: 30.5, mapUrl: "/path-to-map-image.jpg" },
  { type: "walking", date: "2025-02-14", miles: 3.2 },
  { type: "cycling", date: "2025-02-12", miles: 25.7, mapUrl: "/path-to-another-map.jpg" },
  // ... more activities
]

export function GarminActivities() {
  const [selectedMap, setSelectedMap] = useState<string | null>(null)

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Recent Activities</h2>
      {activities.map((activity, index) => (
        <div key={index} className="flex justify-between items-center border-b pb-2">
          <div>
            <p className="font-semibold">
              {activity.type === "cycling" ? "🚴" : "🚶"} {activity.date}
            </p>
            <p>{activity.miles.toFixed(1)} miles</p>
          </div>
          {activity.type === "cycling" && activity.mapUrl && (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" onClick={() => setSelectedMap(activity.mapUrl)}>
                  View Map
                </Button>
              </DialogTrigger>
              <DialogContent className="w-full max-w-3xl">
                <div className="relative w-full h-[60vh]">
                  <Image src={selectedMap || ""} alt="Activity Map" layout="fill" objectFit="contain" />
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      ))}
    </div>
  )
}

