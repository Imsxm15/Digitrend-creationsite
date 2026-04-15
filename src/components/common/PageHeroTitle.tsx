import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { cn } from "@/lib/utils"

type PageHeroTitleProps = ComponentPropsWithoutRef<"h1"> & {
  children: ReactNode
}

export function PageHeroTitle({ children, className, ...props }: PageHeroTitleProps) {
  return (
    <h1
      className={cn("system-title-hero system-page-hero-title text-ivory", className)}
      {...props}
    >
      {children}
    </h1>
  )
}
