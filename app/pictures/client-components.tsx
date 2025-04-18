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
  // Updated with the new provided images
  const photos = [
    {
      id: "ga-1",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Georiga%20-%20Slow%20Riders%20Sloth.jpg-tVU3syMxFPAU16PX0BX3vl6mgRC8X1.jpeg",
      alt: "Bike MS Georgia - Slow Riders Sloth bike decoration with race number 24",
    },
    {
      id: "ga-2",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Georgia%202024%20-%20Karyn.jpg-d6PaizeF9CuuNi9M7QjRVzOUbIgkQG.jpeg",
      alt: "Bike MS Georgia 2024 - Karyn in Georgia cycling jersey with Atlanta skyline",
    },
    {
      id: "ga-3",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Georigia%202024%20Team%20Slow%20Riders.jpg-1WDYfe1dlNa5Ba4gewAVa7GN1j6SNY.jpeg",
      alt: "Bike MS Georgia 2024 - Team Slow Riders group photo in blue jerseys",
    },
    {
      id: "ga-4",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Georgia%202024%20-%20Team%20Slow%20Riders%20Tent.jpg-4kBjQFXZ6KJHfeFnvh69kmZNfvmeoq.jpeg",
      alt: "Bike MS Georgia 2024 - Team Slow Riders tent with sloth banner",
    },
    {
      id: "ga-5",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Georgia%202025%20-%20Mike%2C%20fellow%20TOC%20member.jpg-fmTegb2QjtrykFGXnyKCVkEEYgPQCc.jpeg",
      alt: "Bike MS Georgia 2025 - Mike, fellow TOC member cycling in Slow Riders jersey",
    },
    {
      id: "ga-6",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Georgia%202025%20Start.jpg-PG3x0DiHemH9j2IjNCxGI0VLqY74JB.jpeg",
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
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Sarasota%202024%20-%20Team%20Spanish%20Beer%20cycling.jpg-uxOWEzhuTBOBjexaT4tJorKDbevkrG.jpeg",
      alt: "Bike MS Sarasota 2024 - Team Spanish Beer cycling on palm-lined road",
    },
    {
      id: "sarasota-2",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BIKE%20MS%20SARASOTA%202024%20-%20TEAM%20SPANISH%20BEER%202.jpg-tdXF0L8eG98ark6GMkyZe7pi7Q8lVk.jpeg",
      alt: "Bike MS Sarasota 2024 - Team Spanish Beer members with Hawaiian leis and beach balls",
    },
    {
      id: "sarasota-3",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Sarasota%202024%20-%20Team%20Spanish%20Beer.jpg-E7MdWRZRSVY8NpkQ4QsFz8Zvqc2Nbj.jpeg",
      alt: "Bike MS Sarasota 2024 - Start line with Team Spanish Beer jersey visible",
    },
  ]

  return <PhotoGallerySection title="Bike MS Sarasota 2024" photos={photos} />
}

function BikeMSColorado2024() {
  // Updated with the new provided images
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const photos = [
    {
      id: "colorado-1",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Colorado%202024%20-%20Team%20Left%20Hand%20at%20the%20top%20of%20Horsetooth%20Resevoir.jpg-ycGEhA7ftD1dkwj4pM5e7dcPqfJfJk.jpeg",
      alt: "Bike MS Colorado 2024 - Team Left Hand cyclist at the top of Horsetooth Reservoir",
    },
    {
      id: "colorado-2",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Colorado%202024%20-%20Team%20Left%20Hand%20with%20Bobby%20Small%20of%20Team%20Coneheads.jpg-VsQv8e3d7zT76mGGDC3fHwux8H6pw8.jpeg",
      alt: "Bike MS Colorado 2024 - Team Left Hand with Bobby Small of Team Coneheads",
    },
    {
      id: "colorado-3",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Colorado%202024%20-%20Team%20Left%20Hand%20with%20Ilene%20Belinsky%20Kramer%20.jpg-gLdg7QtG0Dju1KB5iktnBWotD9iOb1.jpeg",
      alt: "Bike MS Colorado 2024 - Team Left Hand with Ilene Belinsky Kramer",
    },
    {
      id: "colorado-4",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Colorado%202024%20-%20Start%20with%20Team%20Left%20Hand.jpg-vLc30v2hHo15nl2YdI9lIi5Wkarafk.jpeg",
      alt: "Bike MS Colorado 2024 - Start line with Team Left Hand cyclists",
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Bike MS Colorado 2024</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all duration-300"
            onClick={() => setSelectedPhoto(photo)}
          >
            <FallbackGalleryImage
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              fill
              className="object-contain object-center"
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
