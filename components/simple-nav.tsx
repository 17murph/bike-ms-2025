import Link from "next/link"

export function SimpleNav() {
  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-center space-x-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/events" className="hover:underline">
          Events
        </Link>
      </div>
    </nav>
  )
}

