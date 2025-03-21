import { Navigation } from "@/components/navigation"

export default function HomeWithNav() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-xl font-bold">Bike MS 2025</h1>
        <p>Welcome to the Bike MS 2025 website.</p>
      </main>
    </div>
  )
}

