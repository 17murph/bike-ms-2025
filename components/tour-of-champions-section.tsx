import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function TourOfChampionsSection() {
  return (
    <div className="space-y-8">
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-8">
        <h2 className="text-3xl font-bold text-blue-800">Tour of Champions</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          The Tour of Champions represents an extraordinary group of individuals in the Southeast Region who have each
          raised $10,000 or more in the previous year for the fight against Multiple Sclerosis. This prestigious
          recognition celebrates their outstanding dedication and impact in advancing the mission to end MS forever.
          These champions exemplify the power of commitment and community in making a real difference in the lives of
          those affected by MS.
        </p>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="relative w-full h-[400px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1007%202.JPG-iQMq8pYoIsPMV8vMVv7a2f3aNLdZm2.jpeg"
              alt="Tour of Champions group photo showing dedicated fundraisers who have each raised over $10,000"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center italic">
            2024 Southeast Tour of Champions members gathered to celebrate their collective impact in the fight against
            MS
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

