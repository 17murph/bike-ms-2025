type TsbPhotoCardProps = {
  src: string
  alt: string
  caption: string
  label?: string
  aspectClassName?: string
  positionClassName?: string
  eager?: boolean
  className?: string
}

export function TsbPhotoCard({
  src,
  alt,
  caption,
  label,
  aspectClassName = "aspect-[4/3]",
  positionClassName = "object-center",
  eager = false,
  className = "",
}: TsbPhotoCardProps) {
  return (
    <figure
      className={`group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-200/80 transition-shadow duration-300 hover:shadow-xl ${className}`}
    >
      <div className={`relative w-full overflow-hidden bg-gray-100 ${aspectClassName}`}>
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${positionClassName}`}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5"
        />
      </div>
      <figcaption className="flex flex-1 flex-col gap-1 border-t border-gray-100 px-5 py-4">
        {label ? (
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-600">{label}</span>
        ) : null}
        <span className="text-pretty text-sm leading-relaxed text-gray-800">{caption}</span>
      </figcaption>
    </figure>
  )
}
