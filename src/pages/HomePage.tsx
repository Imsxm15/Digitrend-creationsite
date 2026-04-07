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
      <HeroSection />
      <FrictionsSection />
      <OffersOverview />
      <MethodSection />
      <ProofSection />
      <PositioningSection />
      <CtaBanner />
    </>
  )
}
