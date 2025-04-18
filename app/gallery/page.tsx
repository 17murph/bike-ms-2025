import type { Metadata } from "next"
import Gallery from "@/components/Gallery"

export const metadata: Metadata = {
  title: "Photo Gallery | Bike MS 2025",
  description: "View photos from our Bike MS events and community activities.",
}

export default function GalleryPage() {
  const galleries = [
    {
      id: "bike-ms-2023",
      title: "Bike MS 2023",
      description: "Photos from our Bike MS event in 2023.",
      images: [
        "/images/gallery/bike1.jpg",
        "/images/gallery/bike2.jpg",
        "/images/gallery/bike3.jpg",
        "/images/gallery/bike4.jpg",
      ],
    },
    {
      id: "community-events",
      title: "Community Events",
      description: "Photos from our community outreach and awareness events.",
      images: [
        "/images/gallery/community1.jpg",
        "/images/gallery/community2.jpg",
        "/images/gallery/community3.jpg",
        "/images/gallery/community4.jpg",
      ],
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Photo Gallery</h1>
      <p className="text-center mb-12 max-w-2xl mx-auto">
        Browse through photos from our past events, fundraisers, and community activities. These moments capture the
        spirit and dedication of our Bike MS community.
      </p>

      <div className="space-y-16">
        {galleries.map((gallery) => (
          <div key={gallery.id} className="bg-white rounded-lg shadow-md p-6">
            <Gallery gallery={gallery} />
            <p className="mt-4 text-gray-600">{gallery.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
