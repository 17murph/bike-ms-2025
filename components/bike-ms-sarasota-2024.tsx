import Image from "next/image"

export function BikeMSSarasota2024() {
  const photos = [
    {
      id: 1,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bike-ms-sarasota-2024-1.jpg",
      alt: "Bike MS Sarasota 2024 - Photo 1",
    },
    {
      id: 2,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bike-ms-sarasota-2024-2.jpg",
      alt: "Bike MS Sarasota 2024 - Photo 2",
    },
    {
      id: 3,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bike-ms-sarasota-2024-3.jpg",
      alt: "Bike MS Sarasota 2024 - Photo 3",
    },
    {
      id: 4,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bike-ms-sarasota-2024-4.jpg",
      alt: "Bike MS Sarasota 2024 - Photo 4",
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Bike MS Sarasota 2024</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="relative h-64 overflow-hidden rounded-lg shadow-md">
            <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill unoptimized className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

