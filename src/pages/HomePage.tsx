import { PageMeta } from "@/components/common/PageMeta"
import { HeroSection } from "@/components/sections/HeroSection"
import { FrictionsSection } from "@/components/sections/FrictionsSection"
import { OffersOverview } from "@/components/sections/OffersOverview"
import { MethodSection } from "@/components/sections/MethodSection"
import { ProofSection } from "@/components/sections/ProofSection"
import { PositioningSection } from "@/components/sections/PositioningSection"
import { CtaBanner } from "@/components/sections/CtaBanner"

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Accueil"
        description="Digitrend Creation structure, automatise et optimise les systèmes digitaux pour des résultats mesurables."
      />
      {/* --- Hero + Problem --- */}
      <HeroSection />
      <FrictionsSection />

      <div className="section-divider" />

      {/* --- Solution + Method --- */}
      <OffersOverview />
      <MethodSection />

      <div className="section-divider" />

      {/* --- Trust + Positioning + CTA --- */}
      <ProofSection />
      <PositioningSection />
      <CtaBanner />
    </>
  )
}

export default HomePage
