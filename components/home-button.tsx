import Link from "next/link"
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HomeButton() {
  return (
    <Link href="/" className="absolute top-4 left-4">
      <Button variant="outline" size="icon">
        <Home className="h-4 w-4" />
      </Button>
    </Link>
  )
}

