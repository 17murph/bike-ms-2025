import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function PhotosPage() {
  // Placeholder images - replace with actual event photos
  const photos = [
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Bike MS Event Photo 1",
      caption: "Riders at the starting line",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Bike MS Event Photo 2",
      caption: "Team Spanish Beer in action",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Bike MS Event Photo 3",
      caption: "Crossing the finish line",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Bike MS Event Photo 4",
      caption: "Rest stop volunteers",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Bike MS Event Photo 5",
      caption: "Beautiful scenery along the route",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Bike MS Event Photo 6",
      caption: "Post-ride celebration",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Photo Gallery</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-center">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">
            More photos will be added after each event. Check back regularly for updates!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
