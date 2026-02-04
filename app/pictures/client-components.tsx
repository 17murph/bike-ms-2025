"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MobileTextButton } from "@/components/mobile-text-button"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { FallbackGalleryImage } from "@/components/fallback-gallery-image"

export function ClientPhotoGallery() {
  return (
    <Tabs defaultValue="virginia" className="w-full">
      <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8">
        <TabsTrigger value="virginia">Virginia</TabsTrigger>
        <TabsTrigger value="georgia">Georgia</TabsTrigger>
        <TabsTrigger value="sarasota">Sarasota</TabsTrigger>
        <TabsTrigger value="colorado">Colorado</TabsTrigger>
        <TabsTrigger value="pgatour">Cycle to Shore</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
        <TabsTrigger value="all">All Photos</TabsTrigger>
      </TabsList>
      <TabsContent value="virginia">
        <BikeMSVirginia2024 />
      </TabsContent>
      <TabsContent value="georgia">
        <BikeMSGeorgia2024 />
      </TabsContent>
      <TabsContent value="sarasota">
        <BikeMSSarasota2024 />
      </TabsContent>
      <TabsContent value="colorado">
        <BikeMSColorado2024 />
      </TabsContent>
      <TabsContent value="pgatour">
        <BikeMSPGATour2024 />
      </TabsContent>
      <TabsContent value="team">
        <TeamSpanishBeer2024 />
      </TabsContent>
      <TabsContent value="all">
        <div className="space-y-12">
          <BikeMSVirginia2024 />
          <BikeMSGeorgia2024 />
          <BikeMSSarasota2024 />
          <BikeMSColorado2024 />
          <BikeMSPGATour2024 />
          <TeamSpanishBeer2024 />
        </div>
      </TabsContent>
    </Tabs>
  )
}

function PhotoGallerySection({ title, photos }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all duration-300"
            onClick={() => setSelectedPhoto(photo)}
          >
            {/* Use direct Image component with unoptimized for more reliable loading */}
            <FallbackGalleryImage
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-20 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Lightbox for viewing full images */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl p-1 sm:p-2 md:p-4">
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9]">
            {selectedPhoto && (
              <FallbackGalleryImage
                src={selectedPhoto.src || "/placeholder.svg"}
                alt={selectedPhoto.alt}
                fill
                className="object-contain"
                priority
              />
            )}
          </div>
          {selectedPhoto && <p className="text-center text-sm text-gray-700 mt-2">{selectedPhoto.alt}</p>}
        </DialogContent>
      </Dialog>
    </div>
  )
}

function BikeMSVirginia2024() {
  const photos = [
    {
      id: "va-1",
      src: "/images/bike-20ms-20virginia-202024-20with-20team-20cbs.jpeg",
      alt: "Bike MS Virginia 2024 with Team CBS at start line",
    },
    {
      id: "va-2",
      src: "/images/bike-20ms-20virginia-202024-20-20team-20cbs.jpeg",
      alt: "Bike MS Virginia 2024 - Team CBS group photo",
    },
    {
      id: "va-3",
      src: "/images/bike-20ms-20virginia-202024-20-20casey-20-20team-20cbs.jpeg",
      alt: "Bike MS Virginia 2024 - Casey in Team CBS jersey",
    },
    {
      id: "va-4",
      src: "/images/bike-20ms-20virginia-202024-20with-20bill-20fitzgerald.jpeg",
      alt: "Bike MS Virginia 2024 with Bill Fitzgerald",
    },
  ]

  return <PhotoGallerySection title="Bike MS Virginia 2024" photos={photos} />
}

function BikeMSGeorgia2024() {
  // Updated with the new provided images
  const photos = [
    {
      id: "ga-1",
      src: "/images/bike-20ms-20georiga-20-20slow-20riders-20sloth.jpeg",
      alt: "Bike MS Georgia - Slow Riders Sloth bike decoration with race number 24",
    },
    {
      id: "ga-2",
      src: "/images/bike-20ms-20georgia-202024-20-20karyn.jpeg",
      alt: "Bike MS Georgia 2024 - Karyn in Georgia cycling jersey with Atlanta skyline",
    },
    {
      id: "ga-3",
      src: "/images/bike-20ms-20georigia-202024-20team-20slow-20riders.jpeg",
      alt: "Bike MS Georgia 2024 - Team Slow Riders group photo in blue jerseys",
    },
    {
      id: "ga-4",
      src: "/images/bike-20ms-20georgia-202024-20-20team-20slow-20riders-20tent.jpeg",
      alt: "Bike MS Georgia 2024 - Team Slow Riders tent with sloth banner",
    },
    {
      id: "ga-5",
      src: "/images/bike-20ms-20georgia-202025-20-20mike-2c-20fellow-20toc-20member.jpeg",
      alt: "Bike MS Georgia 2025 - Mike, fellow TOC member cycling in Slow Riders jersey",
    },
    {
      id: "ga-6",
      src: "/images/bike-20ms-20georgia-202025-20start.jpeg",
      alt: "Bike MS Georgia 2025 Start - Cyclists lined up at the starting line",
    },
  ]

  return <PhotoGallerySection title="Bike MS Georgia 2024" photos={photos} />
}

function BikeMSSarasota2024() {
  // Updated with the new provided images
  const photos = [
    {
      id: "sarasota-1",
      src: "/images/bike-20ms-20sarasota-202024-20-20team-20spanish-20beer-20cycling.jpeg",
      alt: "Bike MS Sarasota 2024 - Team Spanish Beer cycling on palm-lined road",
    },
    {
      id: "sarasota-2",
      src: "/images/bike-20ms-20sarasota-202024-20-20team-20spanish-20beer-202.jpeg",
      alt: "Bike MS Sarasota 2024 - Team Spanish Beer members with Hawaiian leis and beach balls",
    },
    {
      id: "sarasota-3",
      src: "/images/bike-20ms-20sarasota-202024-20-20team-20spanish-20beer.jpeg",
      alt: "Bike MS Sarasota 2024 - Start line with Team Spanish Beer jersey visible",
    },
  ]

  return <PhotoGallerySection title="Bike MS Sarasota 2024" photos={photos} />
}

function BikeMSColorado2024() {
  // Updated with the new provided images
  const photos = [
    {
      id: "colorado-1",
      src: "/images/bike-20ms-20colorado-202024-20-20team-20left-20hand-20at-20the-20top-20of-20horsetooth-20resevoir.jpeg",
      alt: "Bike MS Colorado 2024 - Team Left Hand cyclist at the top of Horsetooth Reservoir",
    },
    {
      id: "colorado-2",
      src: "/images/bike-20ms-20colorado-202024-20-20team-20left-20hand-20with-20bobby-20small-20of-20team-20coneheads.jpeg",
      alt: "Bike MS Colorado 2024 - Team Left Hand with Bobby Small of Team Coneheads",
    },
    {
      id: "colorado-3",
      src: "/images/bike-20ms-20colorado-202024-20-20team-20left-20hand-20with-20ilene-20belinsky-20kramer-20.jpeg",
      alt: "Bike MS Colorado 2024 - Team Left Hand with Ilene Belinsky Kramer",
    },
    {
      id: "colorado-4",
      src: "/images/bike-20ms-20colorado-202024-20-20start-20with-20team-20left-20hand.jpeg",
      alt: "Bike MS Colorado 2024 - Start line with Team Left Hand cyclists",
    },
  ]

  return <PhotoGallerySection title="Bike MS Colorado 2024" photos={photos} />
}

function BikeMSPGATour2024() {
  // Using placeholder images with fallbacks
  const photos = [
    {
      id: "pga-1",
      src: "/images/bike-20ms-20pga-20tour-202024-20-20start-20line.jpeg",
      alt: "Bike MS: Cycle to the Shore 2024 - Start Line",
    },
    {
      id: "pga-2",
      src: "/images/bike-20ms-20pga-20tour-202024-20-20team-20spanish-20beer.jpeg",
      alt: "Bike MS: Cycle to the Shore 2024 - Team Spanish Beer",
    },
    {
      id: "pga-3",
      src: "/images/bike-20ms-20pga-20tour-202024-20-20casey.jpeg",
      alt: "Bike MS: Cycle to the Shore 2024 - Casey",
    },
    {
      id: "pga-4",
      src: "/images/bike-20ms-20pga-20tour-202024-20-20finish-20line.jpeg",
      alt: "Bike MS: Cycle to the Shore 2024 - Finish Line",
    },
  ]

  return <PhotoGallerySection title="Bike MS: Cycle to the Shore 2024" photos={photos} />
}

function TeamSpanishBeer2024() {
  // Using placeholder images with fallbacks
  const photos = [
    {
      id: "tsb-1",
      src: "/images/team-20spanish-20beer-202024-20-20group-20photo.jpeg",
      alt: "Team Spanish Beer 2024 - Group Photo",
    },
    {
      id: "tsb-2",
      src: "/images/team-20spanish-20beer-202024-20-20riding.jpeg",
      alt: "Team Spanish Beer 2024 - Riding",
    },
    {
      id: "tsb-3",
      src: "/images/team-20spanish-20beer-202024-20-20rest-20stop.jpeg",
      alt: "Team Spanish Beer 2024 - Rest Stop",
    },
    {
      id: "tsb-4",
      src: "/images/team-20spanish-20beer-202024-20-20finish-20line.jpeg",
      alt: "Team Spanish Beer 2024 - Finish Line",
    },
  ]

  return <PhotoGallerySection title="Team Spanish Beer 2024" photos={photos} />
}

export function ClientMobileTextButton() {
  return <MobileTextButton />
}
