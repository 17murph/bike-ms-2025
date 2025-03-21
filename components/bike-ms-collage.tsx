import Image from "next/image"

export function BikeMSCollage() {
  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Collage%201.jpg-NhXaw4Yl9Uy9Hy5Uy1Uy1Uy1Uy1Uy.jpeg",
      alt: "Bike MS Collage Image 1",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Collage%202.jpg-NhXaw4Yl9Uy9Hy5Uy1Uy1Uy1Uy1Uy.jpeg",
      alt: "Bike MS Collage Image 2",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Collage%203.jpg-NhXaw4Yl9Uy9Hy5Uy1Uy1Uy1Uy1Uy.jpeg",
      alt: "Bike MS Collage Image 3",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Collage%204.jpg-NhXaw4Yl9Uy9Hy5Uy1Uy1Uy1Uy1Uy.jpeg",
      alt: "Bike MS Collage Image 4",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Collage%205.jpg-NhXaw4Yl9Uy9Hy5Uy1Uy1Uy1Uy1Uy.jpeg",
      alt: "Bike MS Collage Image 5",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Collage%206.jpg-NhXaw4Yl9Uy9Hy5Uy1Uy1Uy1Uy1Uy.jpeg",
      alt: "Bike MS Collage Image 6",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Collage%207.jpg-NhXaw4Yl9Uy9Hy5Uy1Uy1Uy1Uy1Uy.jpeg",
      alt: "Bike MS Collage Image 7",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Collage%208.jpg-NhXaw4Yl9Uy9Hy5Uy1Uy1Uy1Uy1Uy.jpeg",
      alt: "Bike MS Collage Image 8",
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Bike MS Moments Collage</h2>
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={300}
              height={300}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}

