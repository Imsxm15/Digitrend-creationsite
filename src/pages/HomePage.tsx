import { PageMeta } from "@/components/common/PageMeta"
import { HeroSection } from "@/components/sections/HeroSection"
import { FrictionsSection } from "@/components/sections/FrictionsSection"
import { OffersOverview } from "@/components/sections/OffersOverview"
import { MethodSection } from "@/components/sections/MethodSection"
import { ProofSection } from "@/components/sections/ProofSection"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { SocialProofSection } from "@/components/common/SocialProofSection"
import { organizationSchema, pageMetaContent } from "@/data/pageMeta"
import { pageCtas } from "@/data/pageCopy"

export function HomePage() {
  const meta = pageMetaContent.home
  const cta = pageCtas.home

  return (
    <>
      <PageMeta
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        twitterTitle={meta.twitterTitle}
        twitterDescription={meta.twitterDescription}
        schema={[organizationSchema, ...meta.schema]}
      />
      <HeroSection />

      <SocialProofSection
        route="home"
        variant="logos+metrics+testimonials"
        title="Des signaux concrets avant de vous demander d’y croire."
        intro="Logos, recommandations publiques et signaux contextualisés: ce chantier vise la clarté commerciale, pas l’effet vitrine."
        showFounder
      />

      <FrictionsSection />
      <OffersOverview />

      <div className="section-divider" />

      <MethodSection />
      <ProofSection />
      <CtaBanner
        title={cta.title}
        subtitle={cta.subtitle}
        primaryLabel={cta.primaryLabel}
        primaryHref={cta.primaryHref}
        primarySubtext={cta.primarySubtext}
        secondaryLabel={cta.secondaryLabel}
        secondaryHref={cta.secondaryHref}
      />
    </>
  )
}

export default HomePage
