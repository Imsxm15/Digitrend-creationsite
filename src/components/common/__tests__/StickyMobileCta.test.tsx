import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router-dom"
import { LayoutUiProvider } from "@/components/layout/LayoutContext"
import { Navigation } from "@/components/layout/Navigation"
import { StickyMobileCta } from "@/components/common/StickyMobileCta"

function renderMobileLayout(pathname = "/diagnostic") {
  return render(
    <MemoryRouter initialEntries={[pathname]}>
      <LayoutUiProvider>
        <Navigation />
        <StickyMobileCta />
      </LayoutUiProvider>
    </MemoryRouter>
  )
}

describe("StickyMobileCta", () => {
  it("stays visible by default on supported routes", () => {
    renderMobileLayout()

    expect(screen.getByText("Aller au diagnostic")).toBeInTheDocument()
  })

  it("is hidden while the mobile navigation overlay is open", () => {
    renderMobileLayout()

    fireEvent.click(screen.getByRole("button", { name: "Ouvrir le menu" }))

    expect(screen.queryByText("Aller au diagnostic")).not.toBeInTheDocument()
  })
})
