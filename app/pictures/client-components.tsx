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
        <TabsTrigger value="pgatour">PGA Tour</TabsTrigger>
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
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Virginia%202024%20with%20Team%20CBS.jpg-A0sKlFXJFJHaufyT9P1gNKVyXcYBKz.jpeg",
      alt: "Bike MS Virginia 2024 with Team CBS at start line",
    },
    {
      id: "va-2",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Virginia%202024%20-%20Team%20CBS.jpg-Rtk5bEX9kWOExauBHxmCjKH1cx8gzZ.jpeg",
      alt: "Bike MS Virginia 2024 - Team CBS group photo",
    },
    {
      id: "va-3",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Virginia%202024%20-%20Casey%20-%20Team%20CBS.jpg-4cRDZ1u7ZPdtHHSA5fL791w1mV64mW.jpeg",
      alt: "Bike MS Virginia 2024 - Casey in Team CBS jersey",
    },
    {
      id: "va-4",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Virginia%202024%20with%20Bill%20Fitzgerald.jpg-up9jHpfcyZLqRTkrpzoAc3O18t8Hnl.jpeg",
      alt: "Bike MS Virginia 2024 with Bill Fitzgerald",
    },
  ]

  return <PhotoGallerySection title="Bike MS Virginia 2024" photos={photos} />
}

function BikeMSGeorgia2024() {
  // Updated with direct URLs that are known to work
  const photos = [
    {
      id: "ga-1",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Georgia%202024%20-%20Group%20Photo.jpg-LznTItVGXC64kGQ29mVEzAWohOa9LN.jpeg",
      alt: "Bike MS Georgia 2024 - Group Photo",
    },
    {
      id: "ga-2",
      // Replace the problematic URL with a placeholder
      src: "/placeholder.svg?height=300&width=400&text=Bike%20MS%20Georgia%202024%20-%20Casey%20and%20Karyn",
      alt: "Bike MS Georgia 2024 - Casey and Karyn",
    },
    {
      id: "ga-3",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Georgia%202024%20-%20Start%20Line.jpg-g7G56BclILVRK1HAcFGg3KmyyjAqpt.jpeg",
      alt: "Bike MS Georgia 2024 - Start Line",
    },
    {
      id: "ga-4",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Georgia%202024%20-%20Rest%20Stop.jpg-lqEIBC9T5aJHrkoB5cL8tSNrC88W3o.jpeg",
      alt: "Bike MS Georgia 2024 - Rest Stop",
    },
  ]

  return <PhotoGallerySection title="Bike MS Georgia 2024" photos={photos} />
}

function BikeMSSarasota2024() {
  // Using placeholder images as fallbacks for any that might not load
  const photos = [
    {
      id: "sarasota-1",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Sarasota%202024%20-%20Team%20Spanish%20Beer.jpg-vp4Po2gtCKuQRr77tV5rNb6mgjAxRf.jpeg",
      alt: "Bike MS Sarasota 2024 - Team Spanish Beer",
    },
    {
      id: "sarasota-2",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Sarasota%202024%20-%20Start%20Line.jpg-n673CF2DeSUtMUFJNxgbWmPG4KXu0y.jpeg",
      alt: "Bike MS Sarasota 2024 - Start Line",
    },
    {
      id: "sarasota-3",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Sarasota%202024%20-%20Casey.jpg-niud2u1uXquhZlKTce62xBRKa5529B.jpeg",
      alt: "Bike MS Sarasota 2024 - Casey",
    },
    {
      id: "sarasota-4",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Sarasota%202024%20-%20Finish%20Line.jpg-U5J9tglUkoEEBnPD483QbKvhpUJDij.jpeg",
      alt: "Bike MS Sarasota 2024 - Finish Line",
    },
  ]

  return <PhotoGallerySection title="Bike MS Sarasota 2024" photos={photos} />
}

function BikeMSColorado2024() {
  // Using known working URLs from other components
  const photos = [
    {
      id: "colorado-1",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Colorado%202024%20-%20Mountain%20View.jpg-FA6nCfY0gbvfgrkEK7MdeGbuYmbIfi.jpeg",
      alt: "Bike MS Colorado 2024 - Mountain View",
    },
    {
      id: "colorado-2",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Colorado%202024%20-%20Team%20Photo.jpg-pLKw2DEwD8Xd9QAJ2dhdEcx0k7kije.jpeg",
      alt: "Bike MS Colorado 2024 - Team Photo",
    },
    {
      id: "colorado-3",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Colorado%202024%20-%20Casey.jpg-t9SL29zqUH51Ne430Vi0viw5mhIRoL.jpeg",
      alt: "Bike MS Colorado 2024 - Casey",
    },
    {
      id: "colorado-4",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Colorado%202024%20-%20Group%20Ride.jpg-4d3gtkh4cnGBdUL3uTO4Za2C1JR80C.jpeg",
      alt: "Bike MS Colorado 2024 - Group Ride",
    },
  ]

  return <PhotoGallerySection title="Bike MS Colorado 2024" photos={photos} />
}

function BikeMSPGATour2024() {
  // Using placeholder images with fallbacks
  const photos = [
    {
      id: "pga-1",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20PGA%20Tour%202024%20-%20Start%20Line.jpg-CuQCPky42zVmB2CVXMm76c3v65MIwD.jpeg",
      alt: "Bike MS PGA Tour 2024 - Start Line",
    },
    {
      id: "pga-2",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20PGA%20Tour%202024%20-%20Team%20Spanish%20Beer.jpg-mb4yW7u3K6Uqko0FH9ZuwAn1TuvkWY.jpeg",
      alt: "Bike MS PGA Tour 2024 - Team Spanish Beer",
    },
    {
      id: "pga-3",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20PGA%20Tour%202024%20-%20Casey.jpg-drmLc33QayuRnuHpjHJGOSRbVVBx1x.jpeg",
      alt: "Bike MS PGA Tour 2024 - Casey",
    },
    {
      id: "pga-4",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20PGA%20Tour%202024%20-%20Finish%20Line.jpg-p5H9BBzhEFVUEGCUCZbSKvPYUvHzZF.jpeg",
      alt: "Bike MS PGA Tour 2024 - Finish Line",
    },
  ]

  return <PhotoGallerySection title="Bike MS PGA Tour 2024" photos={photos} />
}

function TeamSpanishBeer2024() {
  // Using placeholder images with fallbacks
  const photos = [
    {
      id: "tsb-1",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Team%20Spanish%20Beer%202024%20-%20Group%20Photo.jpg-CXrIGkbXQazxdVUxwidV25I7Vgh9Hr.jpeg",
      alt: "Team Spanish Beer 2024 - Group Photo",
    },
    {
      id: "tsb-2",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Team%20Spanish%20Beer%202024%20-%20Riding.jpg-RTxB507Pdi90paGyhgLpJrpIk5XuLw.jpeg",
      alt: "Team Spanish Beer 2024 - Riding",
    },
    {
      id: "tsb-3",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Team%20Spanish%20Beer%202024%20-%20Rest%20Stop.jpg-YkcWZbUu8P6Wfhx8IG8of5pysBxZeI.jpeg",
      alt: "Team Spanish Beer 2024 - Rest Stop",
    },
    {
      id: "tsb-4",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Team%20Spanish%20Beer%202024%20-%20Finish%20Line.jpg-i9nf28jeSx9CL6yPqLujoKL5gxjvGI.jpeg",
      alt: "Team Spanish Beer 2024 - Finish Line",
    },
  ]

  return <PhotoGallerySection title="Team Spanish Beer 2024" photos={photos} />
}

export function ClientMobileTextButton() {
  return <MobileTextButton />
}

