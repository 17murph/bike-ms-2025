"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"

interface Ride {
  id: string
  name: string
  date: string
  miles: number
  mapUrl?: string
}

interface RideHistoryTableProps {
  rides: Ride[]
}

export function RideHistoryTable({ rides }: RideHistoryTableProps) {
  const [selectedRide, setSelectedRide] = useState<Ride | null>(null)

  const groupedRides = rides.reduce(
    (acc, ride) => {
      const month = new Date(ride.date).toLocaleString("default", { month: "long", year: "numeric" })
      if (!acc[month]) {
        acc[month] = []
      }
      acc[month].push(ride)
      return acc
    },
    {} as Record<string, Ride[]>,
  )

  return (
    <div>
      {Object.entries(groupedRides).map(([month, monthRides]) => (
        <div key={month} className="mb-8">
          <h3 className="text-xl font-bold mb-4">{month}</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Distance</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {monthRides.map((ride) => (
                <TableRow key={ride.id}>
                  <TableCell>{ride.name}</TableCell>
                  <TableCell>
                    {new Date(ride.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  </TableCell>
                  <TableCell>{ride.miles.toFixed(2)} mi</TableCell>
                  <TableCell>
                    {ride.mapUrl && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedRide(ride)}>
                            View Map
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <DialogHeader>
                            <DialogTitle>
                              {ride.name} - {new Date(ride.date).toLocaleDateString()}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="relative w-full h-[600px]">
                            <Image
                              src={ride.mapUrl || "/placeholder.svg"}
                              alt={`Route map for ${ride.name}`}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  )
}
