import { type ReactNode } from "react"
import { Navigation } from "./Navigation"
import { Footer } from "./Footer"
import { LayoutUiProvider } from "./LayoutContext"
import { GrainOverlay } from "@/components/common/GrainOverlay"
import { ScrollToTop } from "@/components/common/ScrollToTop"
import { StickyMobileCta } from "@/components/common/StickyMobileCta"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-graphite-deep">
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />

      <LayoutUiProvider>
        <div className="relative z-10">
          <GrainOverlay />
          <Navigation />
          <main id="main-content" className="pb-24 md:pb-0">{children}</main>
          <Footer />
          <StickyMobileCta />
          <ScrollToTop />
        </div>
      </LayoutUiProvider>
    </div>
  )
}
