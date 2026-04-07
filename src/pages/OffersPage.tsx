import { Link, useParams } from "react-router-dom"
import { PageMeta } from "@/components/common/PageMeta"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { OffersOverview } from "@/components/sections/OffersOverview"
import { FEATURED_OFFER, OFFERS, type Offer } from "@/data/offers"

const CHOICE_GUIDANCE = [
  {
    question: "Je ne sais pas exactement où est le problème.",
    answer:
      "Commencez par le Diagnostic Frictions. L'objectif est de rendre le problème lisible avant de parler d'implémentation.",
  },
  {
    question: "J'ai du trafic, mais le revenu ne suit pas.",
    answer:
      "Architecture Revenue devient le bon format dès que le tunnel, le CRM et le pilotage doivent enfin fonctionner ensemble.",
  },
  {
    question: "Je veux automatiser ou structurer un usage IA.",
    answer:
      "AI Product Ops sert à cadrer un outil utile, avec garde-fous, sortie exploitable et documentation minimale.",
  },
  {
    question: "J'ai surtout besoin d'un cap régulier.",
    answer:
      "Le Pilotage Fractionnel convient quand la difficulté est moins technique que dans la continuité de décision et de mise en ordre.",
  },
] as const

function OfferDetailView({ offer }: { offer: Offer }) {
  return (
    <>
      <PageMeta title={offer.title} description={offer.subtitle} />
      <section className="bg-graphite-deep px-4 pb-20 pt-40 md:px-6 md:pb-24">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <SectionLabel number={offer.number} label={offer.tag || "SERVICE"} />
            <h1
              className="system-title-hero mt-4 text-ivory"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              {offer.title}
            </h1>
            <p className="system-copy mt-4 max-w-3xl text-ivory-muted">{offer.subtitle}</p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="system-panel rounded-lg px-5 py-4">
                <p className="system-eyebrow mb-1 text-copper">FORMAT</p>
                <p className="font-body text-sm text-ivory">{offer.format}</p>
              </div>
              <div className="system-panel rounded-lg px-5 py-4">
                <p className="system-eyebrow mb-1 text-copper">DURÉE</p>
                <p className="font-body text-sm text-ivory">{offer.duration}</p>
              </div>
              <div className="system-panel rounded-lg px-5 py-4">
                <p className="system-eyebrow mb-1 text-copper">BUDGET</p>
                <p className="font-body text-sm text-ivory">{offer.budgetSignal}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-graphite-mid px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2
              className="system-title-section text-ivory"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
            >
              Le problème que nous résolvons
            </h2>
            <p className="system-copy mt-4 max-w-3xl text-ivory-muted">{offer.problem}</p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h3 className="system-eyebrow mb-4 mt-10 text-copper">SYMPTÔMES FRÉQUENTS</h3>
            <ul className="space-y-3">
              {offer.symptoms.map((symptom, index) => (
                <li key={`${offer.id}-${index}`} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper"
                    aria-hidden="true"
                  />
                  <span className="font-body text-sm text-ivory-muted">{symptom}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      <section className="bg-graphite-deep px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2
              className="system-title-section text-ivory"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
            >
              Ce que vous recevez
            </h2>
          </ScrollReveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {offer.deliverables.map((item, index) => (
              <ScrollReveal key={`${offer.id}-deliverable-${index}`} delay={index * 60}>
                <div className="system-panel rounded-lg px-5 py-4">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs text-copper">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="font-body text-sm text-ivory">{item}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-graphite-mid px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2
              className="system-title-section text-ivory"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
            >
              Comment ça se passe
            </h2>
            <p className="system-copy mt-4 max-w-3xl text-ivory-muted">{offer.description}</p>
          </ScrollReveal>
        </div>
      </section>

      <CtaBanner
        title="Prêt à avancer ?"
        subtitle="Prenez 5 minutes pour décrire votre situation. Nous vous répondons sous 24h avec des premières pistes concrètes."
        primaryLabel="Lancer un diagnostic"
        primaryHref="/diagnostic"
        secondaryLabel="Voir tous les services"
        secondaryHref="/services"
      />
    </>
  )
}

export function OffersPage() {
  const { id } = useParams()

  if (id) {
    const offer = OFFERS.find((currentOffer) => currentOffer.id === id)
    if (!offer) {
      return (
        <>
          <PageMeta title="Service introuvable" description="Ce service n'existe pas." />
          <section className="bg-graphite-deep px-4 pb-20 pt-40 md:px-6 md:pb-24">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="system-title-hero mb-6 text-ivory">Service introuvable</h1>
              <p className="system-copy mb-8 text-ivory-muted">
                Ce service n'existe pas ou a été retiré.
              </p>
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
        title="Services"
        description="Quatre formats d'intervention pour structurer, automatiser et optimiser vos opérations digitales."
      />

      <section className="bg-graphite-deep pb-14 pt-36 md:pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="system-shell rounded-[0.5rem] px-6 py-7 md:px-8 md:py-8">
                  <SectionLabel label="Services" />
                  <h1
                    className="mb-5 font-display font-extrabold text-ivory tracking-[-0.03em] leading-[1.04]"
                    style={{ fontSize: "clamp(2.4rem, 5.8vw, 4.9rem)" }}
                  >
                    Des formats clairs.
                    <br />
                    <span className="text-copper">Pour décider plus vite.</span>
                  </h1>
                  <p className="max-w-3xl font-body text-base leading-8 text-ivory-muted md:text-lg">
                    Chaque offre correspond à un niveau de maturité précis. Le but n'est pas de
                    vendre plus grand que nécessaire, mais de vous orienter vers le bon niveau
                    d'intervention.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal delay={90}>
                <div className="system-shell system-shell-warm rounded-[0.5rem] p-6">
                  <p className="mb-3 font-mono text-xs tracking-widest text-copper">
                    OFFRE SIGNATURE
                  </p>
                  <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-ivory">
                    {FEATURED_OFFER.title}
                  </h2>
                  <p className="mt-3 font-body text-sm leading-7 text-ivory-muted">
                    {FEATURED_OFFER.subtitle}
                  </p>
                  <div className="my-5 system-divider-soft" />
                  <p className="font-body text-sm leading-7 text-ivory-soft">
                    À activer quand acquisition, conversion, CRM et reporting doivent enfin être
                    pensés comme un seul système.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="system-chip text-steel-light">{FEATURED_OFFER.duration}</span>
                    <span className="system-chip text-copper">{FEATURED_OFFER.budgetSignal}</span>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to={FEATURED_OFFER.ctaHref}
                      className="system-button-text btn-copper-glow inline-flex items-center rounded-[0.5rem] bg-copper px-5 py-3 text-graphite-deep transition-all duration-300"
                    >
                      Explorer l'offre signature
                    </Link>
                    <Link
                      to="/diagnostic"
                      className="system-button-text inline-flex items-center rounded-[0.5rem] border border-mineral-warm px-5 py-3 text-ivory-muted transition-colors duration-200 hover:border-copper hover:text-copper"
                    >
                      Commencer par un diagnostic
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <OffersOverview />

      <section className="bg-graphite-mid py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-ivory">
                  Comment choisir la bonne offre ?
                </h2>
                <p className="mt-4 max-w-2xl font-body text-sm leading-7 text-ivory-muted">
                  Quand le doute porte sur le niveau de profondeur, il vaut mieux commencer par un
                  cadrage. Quand le besoin est déjà lisible, le bon format se dégage plus vite.
                </p>
              </ScrollReveal>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {CHOICE_GUIDANCE.map((item, index) => (
                  <ScrollReveal key={item.question} delay={index * 60}>
                    <div className="system-panel rounded-[0.5rem] p-6">
                      <p className="mb-2 font-display text-base font-semibold text-ivory">
                        {item.question}
                      </p>
                      <p className="font-body text-sm leading-7 text-ivory-muted">
                        {item.answer}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal delay={100}>
                <div className="system-shell rounded-[0.5rem] p-6 lg:sticky lg:top-32">
                  <p className="mb-3 font-mono text-xs tracking-widest text-copper">
                    POINT DE DÉPART CONSEILLÉ
                  </p>
                  <h3 className="font-display text-xl font-bold text-ivory">
                    Commencer par un diagnostic reste le meilleur filtre.
                  </h3>
                  <p className="mt-4 font-body text-sm leading-7 text-ivory-muted">
                    Un premier échange permet de distinguer ce qui relève d'une correction ciblée,
                    d'une architecture plus large ou d'un non-sujet à laisser de côté.
                  </p>
                  <p className="mt-5 font-mono text-xs text-ivory-muted">
                    Gratuit · Sans engagement · Réponse sous 24h ouvrées
                  </p>
                  <Link
                    to="/diagnostic"
                    className="system-button-text btn-copper-glow mt-6 inline-flex w-full items-center justify-center rounded-[0.5rem] bg-copper px-6 py-4 text-graphite-deep transition-all duration-300"
                  >
                    Décrire votre situation
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Besoin d'un regard plus concret sur votre situation ?"
        subtitle="Le bon format apparaît plus vite quand les frictions, le niveau d'urgence et la profondeur du chantier sont rendus explicites."
        primaryLabel="Demander un diagnostic"
        primaryHref="/diagnostic"
        secondaryLabel="Voir la méthode"
        secondaryHref="/methode"
      />
    </>
  )
}

export default OffersPage
