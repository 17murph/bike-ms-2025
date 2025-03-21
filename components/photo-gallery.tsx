import Link from "next/link"
import { ReliableImage } from "@/components/reliable-image"

export function PhotoGallery() {
  const photos = [
    {
      id: 1,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Colorado%202024%20-%20Mountain%20View.jpg-FA6nCfY0gbvfgrkEK7MdeGbuYmbIfi.jpeg",
      alt: "Bike MS Colorado 2024",
      href: "/pictures",
    },
    {
      id: 2,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Georgia%202024%20-%20Group%20Photo.jpg-LznTItVGXC64kGQ29mVEzAWohOa9LN.jpeg",
      alt: "Bike MS Georgia 2024",
      href: "/pictures",
    },
    {
      id: 3,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Sarasota%202024%20-%20Team%20Spanish%20Beer.jpg-vp4Po2gtCKuQRr77tV5rNb6mgjAxRf.jpeg",
      alt: "Bike MS Sarasota 2024",
      href: "/pictures",
    },
    {
      id: 4,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Virginia%202024%20with%20Team%20CBS.jpg-A0sKlFXJFJHaufyT9P1gNKVyXcYBKz.jpeg",
      alt: "Bike MS Virginia 2024",
      href: "/pictures",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {photos.map((photo) => (
        <Link key={photo.id} href={photo.href} className="block">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <ReliableImage src={photo.src} alt={photo.alt} fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4">
              <h3 className="text-white font-semibold">{photo.alt}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

