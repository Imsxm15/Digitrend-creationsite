import { type ReactNode } from "react"
import { Navigation } from "./Navigation"
import { Footer } from "./Footer"
import { GrainOverlay } from "@/components/common/GrainOverlay"
import { ScrollToTop } from "@/components/common/ScrollToTop"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-graphite-deep">
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />

      <div className="relative z-10">
        <GrainOverlay />
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  )
}
