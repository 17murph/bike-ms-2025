import Head from "next/head"

interface SEOProps {
  title: string
  description: string
  canonicalUrl?: string
  ogImage?: string
  keywords?: string[]
}

export function SEOHead({
  title,
  description,
  canonicalUrl,
  ogImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MS%20Logo.jpg-Qdh5YtnX4mUfDGuoaaoDnULkWuVtAj.jpeg",
  keywords = ["Bike MS", "Bike-MS", "Multiple Sclerosis", "MS Fundraising", "Cycling for MS"],
}: SEOProps) {
  const fullTitle = `${title} | Bike MS 2025 - Casey Murphy`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Head>
  )
}

