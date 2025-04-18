import Image from "next/image"
import Link from "next/link"

export function RecentBikeMSPhotos() {
  const photos = [
    {
      id: 1,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bike-ms-virginia-2024-1-Qdh5YtnX4mUfDGuoaaoDnULkWuVtAj.jpeg",
      alt: "Bike MS Virginia 2024",
      href: "/pictures",
    },
    {
      id: 2,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bike-ms-georgia-2024-1-Qdh5YtnX4mUfDGuoaaoDnULkWuVtAj.jpeg",
      alt: "Bike MS Georgia 2024",
      href: "/pictures",
    },
    {
      id: 3,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bike-ms-sarasota-2024-1-Qdh5YtnX4mUfDGuoaaoDnULkWuVtAj.jpeg",
      alt: "Bike MS Sarasota 2024",
      href: "/pictures",
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Recent Bike MS Photos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <Link key={photo.id} href={photo.href} className="block">
              <div className="relative h-64 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  fill
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4">
                  <h3 className="text-white font-semibold">{photo.alt}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/pictures"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            View All Photos
          </Link>
        </div>
      </div>
    </section>
  )
}
