import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { TodaysDate } from "@/components/todays-date"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Bike MS 2025 & Podcast",
  description: "Join Casey Murphy in the Bike MS Passport Program and listen to The Other Side of MS podcast",
  keywords: [
    "Bike MS",
    "Multiple Sclerosis",
    "MS Fundraising",
    "Cycling for MS",
    "MS Charity Ride",
    "MS Podcast",
    "The Other Side of MS",
  ],
    generator: 'v0.dev'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bike MS 2025 & Podcast" />
        <meta
          property="og:description"
          content="Join Casey Murphy in the Bike MS Passport Program and listen to The Other Side of MS podcast"
        />
        <meta
          property="og:image"
          content="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MS%20Logo.jpg-Qdh5YtnX4mUfDGuoaaoDnULkWuVtAj.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <div className="flex-grow">{children}</div>
        <TodaysDate />
      </body>
    </html>
  )
}



import './globals.css'