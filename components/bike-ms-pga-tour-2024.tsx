import Image from "next/image"

export function BikeMSPGATour2024() {
  const photos = [
    {
      id: 1,
      src: "/images/bike-ms-pga-tour-2024-1.jpg",
      alt: "Bike MS: Cycle to the Shore 2024 - Photo 1",
    },
    {
      id: 2,
      src: "/images/bike-ms-pga-tour-2024-2.jpg",
      alt: "Bike MS: Cycle to the Shore 2024 - Photo 2",
    },
    {
      id: 3,
      src: "/images/bike-ms-pga-tour-2024-3.jpg",
      alt: "Bike MS: Cycle to the Shore 2024 - Photo 3",
    },
    {
      id: 4,
      src: "/images/bike-ms-pga-tour-2024-4.jpg",
      alt: "Bike MS: Cycle to the Shore 2024 - Photo 4",
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Bike MS: Cycle to the Shore 2024</h2>
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
