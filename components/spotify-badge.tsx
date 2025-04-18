interface SpotifyBadgeProps {
  width?: number
  height?: number
}

export function SpotifyBadge({ width = 165, height = 40 }: SpotifyBadgeProps) {
  return (
    <div
      className="flex items-center bg-black px-3 py-2 rounded-md hover:bg-gray-900 transition-colors "
      style={{ minWidth: `${width}px`, minHeight: `${height}px` }}
    >
      <div className="w-6 h-6 mr-2 relative flex items-center justify-center">
        <svg viewBox="0 0 24 24" width="24" height="24" className="text-green-500 fill-current">
          <circle cx="12" cy="12" r="12"></circle>
          <path
            d="M6 8.5a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1z"
            fill="black"
          ></path>
        </svg>
      </div>
      <span className="text-white font-medium">Listen on Spotify</span>
    </div>
  )
}
