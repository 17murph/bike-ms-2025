import { EnhancedImage } from "@/components/enhanced-image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SponsorsSection() {
  return (
    <section className="mt-8 space-y-6">
      <h2 className="text-2xl font-bold text-center">Our Sponsors</h2>
      <div className="flex flex-col items-center space-y-4">
        <div className="w-48 h-48 relative">
          <EnhancedImage
            src="Birch Island Vet.jpg-4d3gtkh4cnGBdUL3uTO4Za2C1JR80C.jpeg"
            alt="Birch Island Veterinary Center Logo"
            width={192}
            height={192}
            className="object-contain"
          />
        </div>
        <Link href="https://www.birchislandvet.com/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="text-blue-600 hover:text-blue-800">
            Visit Birch Island Vet
          </Button>
        </Link>
      </div>
    </section>
  )
}

