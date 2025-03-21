"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ClientPhotoGallery } from "./client-components"
import { BackToTopButton } from "@/components/back-to-top-button"
import { useEffect } from "react"
import { SocialMediaLinks } from "@/components/social-media-links"

export default function PicturesPage() {
  // Set metadata via useEffect to avoid server-side rendering issues
  useEffect(() => {
    document.title = "Photo Gallery | Bike MS 2025"
  }, [])

  return (
    <div className="min-h-screen bg-white relative">
      <Navigation />

      {/* Add padding to account for fixed navigation */}
      <div className="pt-16 md:pt-20"></div>

      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center py-8">Photo Gallery</h1>

        <ClientPhotoGallery />

        {/* Add Social Media Links */}
        <SocialMediaLinks />
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  )
}

