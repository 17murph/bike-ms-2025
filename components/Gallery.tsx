"use client"

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface GalleryProps {
  gallery: {
    id: string
    title: string
    images: string[]
  }
}

export default function Gallery({ gallery }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{gallery.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {gallery.images.map((image) => (
          <div
            key={image}
            className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${gallery.title} - ${image}`}
              fill
              className="object-cover object-center"
              unoptimized
            />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <div className="relative w-full h-[70vh]">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={`${gallery.title} - ${selectedImage}`}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
