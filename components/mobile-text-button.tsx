import Link from "next/link"
import type { ReactNode } from "react"

interface MobileTextButtonProps {
  href?: string
  children?: ReactNode
  className?: string
  target?: string
  rel?: string
}

export function MobileTextButton({ href = "/", children, className = "", target, rel }: MobileTextButtonProps) {
  return (
    <Link href={href} className={`group ${className}`} target={target} rel={rel}>
      {children || <span className="sr-only">Mobile navigation</span>}
    </Link>
  )
}

