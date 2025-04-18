import Image from "next/image"

interface IHeartBadgeProps {
  width?: number
  height?: number
}

export function IHeartBadge({ width = 165, height = 40 }: IHeartBadgeProps) {
  return (
    <div className="inline-block">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iHeart-eYWK07XJJofSbrsNnrLXPHofh5hsF5.png"
        alt="Listen on iHeart Radio"
        width={width}
        height={height}
        className="rounded-lg"
        unoptimized
      />
    </div>
  )
}
