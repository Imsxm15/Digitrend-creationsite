import { type ReactNode } from "react"
import { Navigation } from "./Navigation"
import { Footer } from "./Footer"
import { GrainOverlay } from "@/components/common/GrainOverlay"
import { CustomCursor } from "@/components/common/CustomCursor"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--graphite-deep)" }}>
      <GrainOverlay />
      <CustomCursor />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
