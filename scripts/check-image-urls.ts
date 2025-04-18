/**
 * This script checks all image URLs in the project to ensure they're accessible
 * Run with: npx ts-node scripts/check-image-urls.ts
 */

// List of all image URLs used in the project
const IMAGE_URLS = [
  "MS Logo.jpg-Qdh5YtnX4mUfDGuoaaoDnULkWuVtAj.jpeg",
  "TSB-logo-YalpHen52DqYkUZknWmKZmHJOMCo3n.png",
  "spotify-podcast-badge-blk-grn-165x40-SglaMqZjS2grniJuucL8iprpdTENzF.png",
  "2025 Logo.JPEG-LznTItVGXC64kGQ29mVEzAWohOa9LN.jpeg",
  "Birch Island Vet.jpg-4d3gtkh4cnGBdUL3uTO4Za2C1JR80C.jpeg",
  "iHeart-P6l2uwoMvFVVPrwue7GuQs4DcP9c4z.png",
  "Podcast Seats.jpg-yOo7VS19f1tz8dRnPrHJ7Six3I1iW6.jpeg",
  "Bike MS Sarasota 2024 - Team Spanish Beer.jpg-vp4Po2gtCKuQRr77tV5rNb6mgjAxRf.jpeg",
  // Add all other image URLs here
]

async function checkImageUrl(url: string): Promise<boolean> {
  const fullUrl = `https://hebbkx1anhila5yf.public.blob.vercel-storage.com/${url}`

  try {
    const response = await fetch(fullUrl, { method: "HEAD" })
    return response.ok
  } catch (error) {
    console.error(`Error checking ${fullUrl}:`, error)
    return false
  }
}

async function main() {
  console.log("Checking image URLs...")

  for (const url of IMAGE_URLS) {
    const isAccessible = await checkImageUrl(url)
    console.log(`${isAccessible ? "✅" : "❌"} ${url}`)
  }

  console.log("Done!")
}

main().catch(console.error)
