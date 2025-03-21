import Image from "next/image"

export function BikeMSVirginia2024() {
  const photos = [
    {
      id: 1,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bike-ms-virginia-2024-1-Qdh5YtnX4mUfDGuoaaoDnULkWuVtAj.jpeg",
      alt: "Bike MS Virginia 2024 - Photo 1",
    },
    {
      id: 2,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bike-ms-virginia-2024-2-Qdh5YtnX4mUfDGuoaaoDnULkWuVtAj.jpeg",
      alt: "Bike MS Virginia 2024 - Photo 2",
    },
    {
      id: 3,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bike-ms-virginia-2024-3-Qdh5YtnX4mUfDGuoaaoDnULkWuVtAj.jpeg",
      alt: "Bike MS Virginia 2024 - Photo 3",
    },
    {
      id: 4,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bike-ms-virginia-2024-4-Qdh5YtnX4mUfDGuoaaoDnULkWuVtAj.jpeg",
      alt: "Bike MS Virginia 2024 - Photo 4",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {photos.map((photo) => (
        <div key={photo.id} className="relative h-64 overflow-hidden rounded-lg shadow-md">
          <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill unoptimized className="object-cover" />
        </div>
      ))}
    </div>
  )
}

