/**
 * Utility functions for handling images
 */

// Function to ensure consistent URL format for Vercel Blob Storage
export function getVercelBlobUrl(path: string): string {
  // If it's already a full URL, return it
  if (path.startsWith("http")) {
    return path
  }

  // Remove any leading slashes
  const cleanPath = path.replace(/^\/+/, "")

  // Return the full URL
  return `https://hebbkx1anhila5yf.public.blob.vercel-storage.com/${cleanPath}`
}

// Function to get a fallback image URL
export function getFallbackImageUrl(width = 400, height = 300): string {
  return `/placeholder.svg?height=${height}&width=${width}`
}
