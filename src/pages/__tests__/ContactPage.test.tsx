import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { HelmetProvider } from "react-helmet-async"
import { MemoryRouter } from "react-router-dom"
import { beforeEach, describe, expect, it, vi } from "vitest"
import ContactPage from "@/pages/ContactPage"

const { trackEventMock } = vi.hoisted(() => ({
  trackEventMock: vi.fn(),
}))

vi.mock("@/lib/analytics", () => ({
  trackEvent: trackEventMock,
}))

function renderContactPage() {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={["/diagnostic"]}>
        <ContactPage />
      </MemoryRouter>
    </HelmetProvider>
  )
}

describe("ContactPage", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.stubGlobal("fetch", vi.fn())
  })

  it("shows inline validation errors and focuses the first invalid field", async () => {
    renderContactPage()

    fireEvent.click(screen.getByRole("button", { name: "Envoyer ma demande" }))

    expect(await screen.findByText("Merci d’indiquer votre nom.")).toBeInTheDocument()
    expect(screen.getByText("Merci d’indiquer votre email.")).toBeInTheDocument()
    expect(screen.getByText("Merci de décrire votre situation.")).toBeInTheDocument()
    expect(screen.getByLabelText("Nom / prénom *")).toHaveFocus()
  })

  it("submits the real form payload through the secure endpoint", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ ok: true }),
      })
    )

    renderContactPage()

    fireEvent.change(screen.getByLabelText("Nom / prénom *"), {
      target: { value: "Jean Dupont" },
    })
    fireEvent.change(screen.getByLabelText("Email *"), {
      target: { value: "jean@example.com" },
    })
    fireEvent.change(screen.getByLabelText("Entreprise / projet"), {
      target: { value: "Acme" },
    })
    fireEvent.change(screen.getByLabelText("Décrivez votre situation *"), {
      target: { value: "Le CRM et le tunnel ne se parlent pas correctement." },
    })

    fireEvent.click(screen.getByRole("button", { name: "Envoyer ma demande" }))

    await waitFor(() => {
      expect(globalThis.fetch).toHaveBeenCalledWith(
        "/.netlify/functions/submit-diagnostic",
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/json" },
        })
      )
    })

    expect(trackEventMock).toHaveBeenCalledWith("diagnostic_submit")
    expect(await screen.findByText("Merci pour votre message.")).toBeInTheDocument()
  })
})
