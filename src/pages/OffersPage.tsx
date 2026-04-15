import { Link, useParams } from "react-router-dom"
import { PageMeta } from "@/components/common/PageMeta"
import { PageHeroTitle } from "@/components/common/PageHeroTitle"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { OffersOverview } from "@/components/sections/OffersOverview"
import { SocialProofSection } from "@/components/common/SocialProofSection"
import { FEATURED_OFFER, OFFERS, type Offer } from "@/data/offers"
import { pageCtas, pageHeroes } from "@/data/pageCopy"
import { organizationSchema, pageMetaContent } from "@/data/pageMeta"

const choiceGuidance = [
  {
    question: "Je ne sais pas exactement ou est le probleme.",
    answer: "Commencez par le Diagnostic Frictions pour rendre le sujet lisible avant d'investir plus loin.",
    href: "/diagnostic",
  },
  {
    question: "J'ai du trafic, mais le revenu ne suit pas.",
    answer: "Architecture Revenue devient le bon format des que tunnel, CRM et pilotage doivent enfin fonctionner ensemble.",
    href: "/services/architecture-revenue",
  },
  {
    question: "Je veux cadrer un usage IA vraiment utile.",
    answer: "AI Product Ops sert a concevoir un outil ou un workflow IA relie a un probleme metier concret.",
    href: "/services/ai-product-ops",
  },
  {
    question: "J'ai surtout besoin d'un cap regulier.",
    answer: "Le Pilotage Fractionnel convient quand le sujet principal est la continuite de decision et de mise en ordre.",
    href: "/services/fractional",
  },
] as const

function OfferDetailView({ offer }: { offer: Offer }) {
  const canonical = `https://digitrend-creation.fr${offer.ctaHref}`
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: offer.title,
    description: offer.description,
    url: canonical,
    provider: {
      "@type": "Organization",
      name: "Digitrend Creation",
    },
  }

  return (
    <>
      <PageMeta
        title={offer.title}
        description={offer.subtitle}
        canonical={canonical}
        schema={[organizationSchema, serviceSchema]}
      />

      <section className="bg-graphite-deep px-4 pb-20 pt-40 md:px-6 md:pb-24">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <SectionLabel number={offer.number} label={offer.tag || "SERVICE"} />
            <PageHeroTitle className="mt-4">
              {offer.title}
            </PageHeroTitle>
            <p className="system-copy mt-4 max-w-3xl text-ivory-muted">{offer.subtitle}</p>
            <p className="mt-6 max-w-3xl font-body text-sm leading-7 text-ivory-soft">{offer.persona}</p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="system-panel rounded-lg px-5 py-4">
                <p className="system-eyebrow mb-1 text-copper">FORMAT</p>
                <p className="font-body text-sm text-ivory">{offer.format}</p>
              </div>
              <div className="system-panel rounded-lg px-5 py-4">
                <p className="system-eyebrow mb-1 text-copper">DUREE</p>
                <p className="font-body text-sm text-ivory">{offer.duration}</p>
              </div>
              <div className="system-panel rounded-lg px-5 py-4">
                <p className="system-eyebrow mb-1 text-copper">BUDGET</p>
                <p className="font-body text-sm text-ivory">{offer.budgetSignal}</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <ScrollReveal delay={120}>
              <div className="rounded-[0.5rem] border border-mineral-dark bg-graphite-light px-5 py-5">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-copper">Benefices</p>
                <ul className="mt-4 space-y-3">
                  {offer.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-copper" aria-hidden="true" />
                      <span className="font-body text-sm text-ivory-muted">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div className="rounded-[0.5rem] border border-mineral-dark bg-graphite-light px-5 py-5">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-copper">Probleme traite</p>
                <p className="mt-4 font-body text-sm leading-7 text-ivory-muted">{offer.problem}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-graphite-mid px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="system-title-section text-ivory" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              Ce que vous recevez
            </h2>
          </ScrollReveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {offer.deliverables.map((item, index) => (
              <ScrollReveal key={`${offer.id}-deliverable-${index}`} delay={index * 60}>
                <div className="system-panel rounded-lg px-5 py-4">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs text-copper">{String(index + 1).padStart(2, "0")}</span>
                    <p className="font-body text-sm text-ivory">{item}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Vous voulez savoir si c'est le bon format ?"
        subtitle="Le diagnostic gratuit sert precisement a verifier la profondeur utile avant de lancer un chantier plus large."
        primaryLabel="Demander un diagnostic gratuit"
        primaryHref="/diagnostic"
        primarySubtext="30 min, sans engagement"
        secondaryLabel="Revenir aux services"
        secondaryHref="/services"
      />
    </>
  )
}

export function OffersPage() {
  const { id } = useParams()
  const hero = pageHeroes.services
  const meta = pageMetaContent.services
  const cta = pageCtas.services

  if (id) {
    const normalizedId = id === "ai-product-ops" ? "ai-ops" : id
    const offer = OFFERS.find((currentOffer) => currentOffer.id === normalizedId)
    if (!offer) {
      return (
        <>
          <PageMeta title="Service introuvable" description="Ce service n'existe pas." noindex />
          <section className="bg-graphite-deep px-4 pb-20 pt-40 md:px-6 md:pb-24">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="system-title-hero mb-6 text-ivory">Service introuvable</h1>
              <p className="system-copy mb-8 text-ivory-muted">Ce service n'existe pas ou a ete retire.</p>
              <Link
                to="/services"
                className="system-button-text btn-copper-glow inline-flex items-center gap-2 rounded-[0.5rem] bg-copper px-6 py-3.5 text-graphite-deep transition-all duration-300"
              >
                Voir tous les services
              </Link>
            </div>
          </section>
        </>
      )
    }

    return <OfferDetailView offer={offer} />
  }

  return (
    <>
      <PageMeta
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        schema={[organizationSchema, ...meta.schema]}
      />

      <section className="bg-graphite-deep pb-16 pt-36 md:pb-18">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="system-shell rounded-[0.5rem] px-6 py-7 md:px-8 md:py-8">
                  <SectionLabel label={hero.eyebrow} />
                  <PageHeroTitle className="mb-5">
                    {hero.title}
                  </PageHeroTitle>
                  <p className="max-w-3xl font-body text-base leading-8 text-ivory-muted md:text-lg">
                    {hero.description}
                  </p>
                  <ul className="mt-6 max-w-3xl space-y-3">
                    {hero.bullets?.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-copper" aria-hidden="true" />
                        <span className="font-body text-sm leading-7 text-ivory-soft">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                      to={hero.primaryHref}
                      className="system-button-text inline-flex items-center justify-center rounded-[0.5rem] bg-copper px-7 py-4 text-graphite-deep transition-all duration-300 hover:bg-copper-light"
                    >
                      {hero.primaryLabel}
                    </Link>
                    <Link
                      to={hero.secondaryHref}
                      className="system-button-text inline-flex items-center justify-center rounded-[0.5rem] border border-mineral-warm px-7 py-4 text-ivory-muted transition-all duration-300 hover:border-copper hover:text-copper"
                    >
                      {hero.secondaryLabel}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal delay={90}>
                <div className="system-shell system-shell-warm rounded-[0.5rem] p-6">
                  <p className="mb-3 font-mono text-xs tracking-widest text-copper">OFFRE SIGNATURE</p>
                  <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-ivory">
                    {FEATURED_OFFER.title}
                  </h2>
                  <p className="mt-3 font-body text-sm leading-7 text-ivory-muted">
                    {FEATURED_OFFER.persona}
                  </p>
                  <div className="my-5 system-divider-soft" />
                  <ul className="space-y-2">
                    {FEATURED_OFFER.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-copper" aria-hidden="true" />
                        <span className="font-body text-sm text-ivory-soft">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="system-chip text-steel-light">{FEATURED_OFFER.duration}</span>
                    <span className="system-chip text-copper">{FEATURED_OFFER.budgetSignal}</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <OffersOverview
        label="Catalogue des services"
        title="Les 4 formats pour choisir vite et bien."
        intro="Des cartes courtes pour lire le bon niveau d'intervention selon le moment, le signal et la profondeur utile."
        showViewAllButton={false}
      />

      <SocialProofSection
        route="services"
        variant="logos+metrics+testimonials"
        title="Des preuves liées à des missions, pas à des slogans."
        intro="Cette page doit rassurer vite: références visibles, signaux contextualisés et recommandations publiques avant de vous demander de choisir un format."
        showFounder
      />

      <section className="bg-graphite-mid py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-ivory">
                  Comment choisir la bonne offre ?
                </h2>
                <p className="mt-4 max-w-2xl font-body text-sm leading-7 text-ivory-muted">
                  Quand le doute porte sur la profondeur utile, le meilleur point de depart reste un
                  diagnostic. Quand le besoin est deja lisible, le bon format se degage plus vite.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <div className="-mx-6 overflow-x-auto px-6 pb-2 md:mx-0 md:px-0 md:pb-0">
                <div className="grid auto-cols-[85%] grid-flow-col gap-4 md:grid-flow-row md:grid-cols-2 md:auto-cols-auto">
                  {choiceGuidance.map((item, index) => (
                    <ScrollReveal key={item.question} delay={index * 60}>
                      <Link
                        to={item.href}
                        className="flex h-full snap-start flex-col rounded-[0.5rem] border border-mineral-dark bg-graphite-light p-6 transition-all duration-300 hover:border-copper/40"
                      >
                        <p className="font-display text-lg font-semibold text-ivory">{item.question}</p>
                        <p className="mt-4 font-body text-sm leading-7 text-ivory-muted">{item.answer}</p>
                        <span className="mt-auto pt-6 font-mono text-xs uppercase tracking-[0.16em] text-copper">
                          Ouvrir
                        </span>
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default OffersPage
