"use client"

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Photo {
  id: string
  src: string
  alt: string
  title: string
  description: string
  size: "small" | "medium" | "large"
}

interface CollageLayoutProps {
  photos: Photo[]
}

export function CollageLayout({ photos }: CollageLayoutProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  const getGridClass = (size: "small" | "medium" | "large") => {
    switch (size) {
      case "small":
        return "col-span-1 row-span-1"
      case "medium":
        return "col-span-2 row-span-2"
      case "large":
        return "col-span-3 row-span-3"
      default:
        return "col-span-1 row-span-1"
    }
  }

  return (
    <div className="grid grid-cols-6 gap-1">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className={`${getGridClass(photo.size)} relative overflow-hidden cursor-pointer`}
          onClick={() => setSelectedPhoto(photo)}
        >
          <div className="relative w-full h-full" style={{ paddingBottom: "100%" }}>
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white p-2 text-sm font-semibold">{photo.title}</p>
            </div>
          </div>
        </div>
      ))}

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedPhoto?.title}</DialogTitle>
          </DialogHeader>
          <div className="relative w-full h-[70vh]">
            <Image src={selectedPhoto?.src || ""} alt={selectedPhoto?.alt || ""} fill className="object-contain" />
          </div>
          <p className="text-sm text-gray-600 mt-4">{selectedPhoto?.description}</p>
        </DialogContent>
      </Dialog>
    </div>
  )
}
