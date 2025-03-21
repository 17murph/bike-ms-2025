/**
 * This script verifies that all image URLs in the project are accessible.
 * Run with: npx ts-node scripts/verify-images.ts
 */

import fs from "fs"
import path from "path"
import fetch from "node-fetch"

// Function to extract image URLs from files
function extractImageUrls(content: string): string[] {
  const urls: string[] = []

  // Match Image components
  const imageRegex = /src=["'](https:\/\/hebbkx1anhila5yf\.public\.blob\.vercel-storage\.com\/[^"']+)["']/g
  let match

  while ((match = imageRegex.exec(content)) !== null) {
    urls.push(match[1])
  }

  return urls
}

// Function to check if an image URL is accessible
async function checkImageUrl(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: "HEAD" })
    return response.ok
  } catch (error) {
    return false
  }
}

// Function to recursively scan directories for files
async function scanDirectory(dir: string): Promise<void> {
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      await scanDirectory(filePath)
    } else if (
      stat.isFile() &&
      (filePath.endsWith(".tsx") || filePath.endsWith(".ts") || filePath.endsWith(".jsx") || filePath.endsWith(".js"))
    ) {
      const content = fs.readFileSync(filePath, "utf8")
      const imageUrls = extractImageUrls(content)

      for (const url of imageUrls) {
        const isAccessible = await checkImageUrl(url)
        console.log(`${isAccessible ? "✅" : "❌"} ${url} (in ${filePath})`)
      }
    }
  }
}

// Main function
async function main() {
  console.log("Verifying image URLs...")
  await scanDirectory("./")
  console.log("Done!")
}

main().catch(console.error)

