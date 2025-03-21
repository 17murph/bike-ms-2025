"use client"

import { useState } from "react"
import { format, parseISO } from "date-fns"
import { Clock, Bike, Flame } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CyclingActivity {
  date: string
  title: string
  distance: number
  calories: number
  time: string
  mapUrl?: string
}

interface CyclingActivityLogProps {
  activities: CyclingActivity[]
}

export function CyclingActivityLog({ activities }: CyclingActivityLogProps) {
  const [filterType, setFilterType] = useState<string>("all")

  // Group activities by month
  const groupedActivities = activities.reduce(
    (acc, activity) => {
      const date = parseISO(activity.date)
      const monthYear = format(date, "MMMM yyyy")

      if (!acc[monthYear]) {
        acc[monthYear] = []
      }

      acc[monthYear].push(activity)
      return acc
    },
    {} as Record<string, CyclingActivity[]>,
  )

  // Calculate totals
  const totalDistance = activities.reduce((sum, activity) => sum + activity.distance, 0)
  const totalCalories = activities.reduce((sum, activity) => sum + activity.calories, 0)

  // Calculate total time in seconds
  const totalTimeInSeconds = activities.reduce((sum, activity) => {
    const [hours, minutes, seconds] = activity.time.split(":").map(Number)
    return sum + hours * 3600 + minutes * 60 + seconds
  }, 0)

  // Format total time
  const formatTotalTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60

    return `${hours}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  // Filter activities based on selected type
  const filteredActivities = Object.entries(groupedActivities).reduce(
    (acc, [month, monthActivities]) => {
      if (filterType === "all") {
        acc[month] = monthActivities
      } else {
        acc[month] = monthActivities.filter((activity) =>
          filterType === "indoor"
            ? activity.title.toLowerCase().includes("indoor")
            : !activity.title.toLowerCase().includes("indoor"),
        )
        // Only keep months that have activities after filtering
        if (acc[month].length === 0) {
          delete acc[month]
        }
      }
      return acc
    },
    {} as Record<string, CyclingActivity[]>,
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Bike className="h-5 w-5 text-primary" />
                Total Distance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{totalDistance.toFixed(2)} mi</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Total Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{formatTotalTime(totalTimeInSeconds)}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Flame className="h-5 w-5 text-primary" />
                Total Calories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{totalCalories.toLocaleString()}</p>
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-auto mt-4 md:mt-0">
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Activities</SelectItem>
              <SelectItem value="road">Road Cycling</SelectItem>
              <SelectItem value="indoor">Indoor Cycling</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {Object.keys(filteredActivities).length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No activities match your filter criteria.</p>
        </div>
      ) : (
        Object.entries(filteredActivities).map(([month, monthActivities]) => (
          <Card key={month} className="overflow-hidden">
            <CardHeader className="bg-primary/5">
              <CardTitle>{month}</CardTitle>
              <CardDescription>
                {monthActivities.length} activities •
                {monthActivities.reduce((sum, a) => sum + a.distance, 0).toFixed(2)} miles •
                {monthActivities.reduce((sum, a) => sum + a.calories, 0).toLocaleString()} calories
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Activity</TableHead>
                      <TableHead className="text-right">Distance</TableHead>
                      <TableHead className="text-right">Calories</TableHead>
                      <TableHead className="text-right">Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {monthActivities.map((activity, index) => (
                      <TableRow key={index} className="hover:bg-gray-50">
                        <TableCell className="font-medium whitespace-nowrap">
                          {format(parseISO(activity.date), "MMM d")}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {activity.title.toLowerCase().includes("indoor") ? (
                              <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                Indoor
                              </span>
                            ) : (
                              <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">
                                Road
                              </span>
                            )}
                            <span className="line-clamp-1">{activity.title}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">{activity.distance.toFixed(2)} mi</TableCell>
                        <TableCell className="text-right">{activity.calories}</TableCell>
                        <TableCell className="text-right">{activity.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}

