import Link from "next/link"
import Image from "next/image"

interface LegacyOfLeadersBadgeProps {
  width?: number
  height?: number
}

export function LegacyOfLeadersBadge({ width = 250, height = 80 }: LegacyOfLeadersBadgeProps) {
  return (
    <div className="flex flex-col items-center">
      <Link
        href="https://legacyofleaderstv.com/2025/shows/legacy-of-leaders/legacy-of-leaders-with-casey-murphy-of-the-other-side-of-ms-podcast/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/legacy-of-leaders-logo.png"
          alt="Legacy of Leaders Logo"
          width={width}
          height={height}
          className="object-contain"
        />
      </Link>
      <p className="text-center text-sm mt-2 font-medium text-gray-700">
        As Seen on Daily News Network's Legacy of Leaders
      </p>
    </div>
  )
}
