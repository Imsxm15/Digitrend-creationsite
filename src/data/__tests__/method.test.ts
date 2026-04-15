import { describe, expect, it } from "vitest"
import { METHOD_STEPS } from "@/data/method"
import { pageHeroes } from "@/data/pageCopy"
import { pageMetaContent } from "@/data/pageMeta"

describe("method source of truth", () => {
  it("exposes exactly four ordered steps", () => {
    expect(METHOD_STEPS).toHaveLength(4)
    expect(METHOD_STEPS.map((step) => step.id)).toEqual([
      "cartographier",
      "prioriser",
      "architecturer",
      "deployer",
    ])
  })

  it("keeps related marketing copy aligned on four steps", () => {
    expect(pageHeroes.home.secondarySubtext).toContain("4 étapes")
    expect(pageMetaContent.methode.description).toContain("4 étapes")
  })
})
