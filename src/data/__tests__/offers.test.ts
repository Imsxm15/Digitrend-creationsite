import { describe, it, expect } from "vitest"
import { OFFERS, FEATURED_OFFER } from "@/data/offers"

describe("Offers data", () => {
  it("has at least one offer", () => {
    expect(OFFERS.length).toBeGreaterThan(0)
  })

  it("each offer has required fields", () => {
    for (const offer of OFFERS) {
      expect(offer.id).toBeTruthy()
      expect(offer.number).toBeTruthy()
      expect(offer.title).toBeTruthy()
      expect(offer.subtitle).toBeTruthy()
      expect(offer.description).toBeTruthy()
      expect(offer.symptoms.length).toBeGreaterThan(0)
      expect(offer.deliverables.length).toBeGreaterThan(0)
      expect(offer.cta).toBeTruthy()
      expect(offer.ctaHref).toBeTruthy()
    }
  })

  it("each offer has a unique id", () => {
    const ids = OFFERS.map((o) => o.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it("each offer has a unique number", () => {
    const numbers = OFFERS.map((o) => o.number)
    expect(new Set(numbers).size).toBe(numbers.length)
  })

  it("featured offer exists", () => {
    expect(FEATURED_OFFER).toBeDefined()
    expect(FEATURED_OFFER.featured).toBe(true)
  })

  it("CTA hrefs start with /", () => {
    for (const offer of OFFERS) {
      expect(offer.ctaHref).toMatch(/^\//)
    }
  })

  it("no offer uses first-person singular voice in CTA", () => {
    for (const offer of OFFERS) {
      expect(offer.cta).not.toMatch(/\b(mon|ma|mes|je|j')\b/i)
    }
  })
})
