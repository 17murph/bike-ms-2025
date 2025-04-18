import { ReliableImage } from "@/components/reliable-image"

interface PhotoCardProps {
  id: string
  title: string
  src: string
  alt: string
  description: string
}

export function PhotoCard({ id, title, src, alt, description }: PhotoCardProps) {
  return (
    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-[4/3]">
        <ReliableImage src={src} alt={alt} fill className="object-cover object-center" />
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-medium mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
