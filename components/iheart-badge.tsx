interface IHeartBadgeProps {
  width?: number
  height?: number
}

export function IHeartBadge({ width = 120, height = 30 }: IHeartBadgeProps) {
  return (
    <div
      className="flex items-center bg-red-600 px-3 py-2 rounded-md hover:bg-red-700 transition-colors "
      style={{ minWidth: `${width}px`, minHeight: `${height}px` }}
    >
      <span className="text-white font-bold">
        <span className="mr-1">i</span>
        <span className="font-extrabold">♥</span>
      </span>
      <span className="ml-1 text-white font-medium">Listen on iHeart</span>
    </div>
  )
}

