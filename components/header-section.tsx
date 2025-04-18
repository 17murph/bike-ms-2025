import { ReliableImage } from "@/components/reliable-image"

interface HeaderSectionProps {
  title: string
  subtitle?: string
}

export function HeaderSection({ title, subtitle }: HeaderSectionProps) {
  return (
    <div className="relative w-full h-[300px] md:h-[400px]">
      <ReliableImage
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike%20MS%20Sarasota%202024%20-%20Team%20Spanish%20Beer.jpg-vp4Po2gtCKuQRr77tV5rNb6mgjAxRf.jpeg"
        alt="Bike MS Team Spanish Beer at Sarasota 2024"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl text-white/90 max-w-3xl">{subtitle}</p>}
      </div>
    </div>
  )
}
