import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { HomeButton } from "@/components/home-button"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <HomeButton />
      <Navigation />
      <main className="flex-grow flex items-center justify-center">
        <div className="container max-w-md mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <Link href="/">
            <Button className="bg-red-600 hover:bg-red-700 text-white">Return to Home</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

