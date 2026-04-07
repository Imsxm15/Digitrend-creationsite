import { PageMeta } from "@/components/common/PageMeta"
import { Link, useParams } from "react-router-dom"
import { OFFERS, type Offer } from "@/data/offers"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { Badge } from "@/components/ui/badge"

function OfferDetailView({ offer }: { offer: Offer }) {
  return (
    <>
      <PageMeta
        title={offer.title}
        description={offer.subtitle}
      />
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
            <p className="system-copy mt-4 max-w-3xl text-ivory-muted">
              {offer.subtitle}
            </p>
          </ScrollReveal>

          {/* Format, duration, budget */}
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
        </div>
      </section>

      {/* Problem section */}
      <section className="bg-graphite-mid px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2
              className="system-title-section text-ivory"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
            >
              {`Le probl\u00e8me que nous r\u00e9solvons`}
            </h2>
            <p className="system-copy mt-4 max-w-3xl text-ivory-muted">
              {offer.problem}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h3 className="system-eyebrow mb-4 mt-10 text-copper">
              {`SYMPT\u00d4MES FR\u00c9QUENTS`}
            </h3>
            <ul className="space-y-3">
              {offer.symptoms.map((symptom, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" aria-hidden="true" />
                  <span className="font-body text-sm text-ivory-muted">{symptom}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* Deliverables section */}
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
            {offer.deliverables.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="system-panel rounded-lg px-5 py-4">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs text-copper">{String(i + 1).padStart(2, "0")}</span>
                    <p className="font-body text-sm text-ivory">{item}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Description + CTA */}
      <section className="bg-graphite-mid px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2
              className="system-title-section text-ivory"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
            >
              Comment \u00e7a se passe
            </h2>
            <p className="system-copy mt-4 max-w-3xl text-ivory-muted">
              {offer.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CtaBanner
        title={`Pr\u00eat \u00e0 avancer\u00a0?`}
        subtitle="Prenez 5 minutes pour d\u00e9crire votre situation. Nous vous r\u00e9pondons sous 24h avec des premi\u00e8res pistes concr\u00e8tes."
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
    const offer = OFFERS.find(o => o.id === id)
    if (!offer) {
      return (
        <>
          <PageMeta title="Service introuvable" description="Ce service n'existe pas." />
          <section className="bg-graphite-deep px-4 pb-20 pt-40 md:px-6 md:pb-24">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="system-title-hero text-ivory mb-6">Service introuvable</h1>
              <p className="system-copy text-ivory-muted mb-8">
                {"Ce service n\u2019existe pas ou a \u00e9t\u00e9 retir\u00e9."}
              </p>
              <Link
                to="/services"
                className="system-button-text inline-flex items-center gap-2 rounded-[0.5rem] px-6 py-3.5 transition-all duration-300 btn-copper-glow bg-copper text-graphite-deep"
                data-cursor-hover
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
      <section className="pt-40 pb-20 bg-graphite-deep">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="system-shell rounded-[0.5rem] px-6 py-8 md:px-8 md:py-9">
              <SectionLabel label="Services" />
              <h1
                className="font-display font-extrabold mb-6 text-ivory tracking-[-0.03em] leading-[1.05]"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
              >
                Quatre formats.
                <br />
                <span className="text-copper">Un seul cap.</span>
              </h1>
              <p className="font-body text-lg max-w-3xl text-ivory-muted leading-[1.8]">
                {"Chaque offre est pensée pour un stade précis de maturité. Pas de prestation fourre-tout, mais des interventions calibrées au problème réel."}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-graphite-deep">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-8">
            {OFFERS.map((offer, i) => (
              <ScrollReveal key={offer.id} delay={i * 60}>
                <div className={`system-panel grid grid-cols-1 md:grid-cols-12 gap-8 p-8 md:p-12 rounded-[0.5rem] group ${offer.featured ? "system-shell-warm" : ""}`}>
                  {offer.featured && (
                    <div
                      className="md:col-span-12 -mx-8 md:-mx-12 -mt-8 md:-mt-12 h-0.5 mb-8 md:mb-12 bg-copper"
                      aria-hidden="true"
                    />
                  )}

                  <div className="md:col-span-4">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs tracking-widest text-copper">
                        {offer.number}
                      </span>
                      {offer.tag && (
                        <span className="font-mono text-xs tracking-widest px-2.5 py-1 bg-copper/15 text-copper border border-copper/25">
                          {offer.tag}
                        </span>
                      )}
                    </div>
                    <h2 className="font-display font-bold text-2xl mb-2 text-ivory tracking-[-0.02em]">
                      {offer.title}
                    </h2>
                    <p className="system-interface mb-6 text-ivory-muted">
                      {offer.subtitle}
                    </p>
                    <div className="flex flex-col gap-2">
                      <p className="font-mono text-xs text-steel-light">
                        {offer.format}
                      </p>
                      <p className="font-mono text-xs text-copper">
                        {offer.duration}
                      </p>
                      <Badge className="w-fit border-none bg-steel/15 font-mono text-xs tracking-[0.16em] text-steel-light">
                        {offer.budgetSignal}
                      </Badge>
                    </div>
                  </div>

                  <div className="md:col-span-4">
                    <p className="font-mono text-xs tracking-widest mb-4 text-ivory-muted">
                      {"CE QUE ÇA RÈGLE"}
                    </p>
                    <ul className="flex flex-col gap-3">
                      {offer.symptoms.slice(0, 4).map((symptom) => (
                        <li key={symptom} className="flex items-start gap-2">
                          <span
                            className="flex-shrink-0 font-mono text-xs mt-1 text-copper"
                            aria-hidden="true"
                          >
                            {"·"}
                          </span>
                          <span className="font-body text-sm text-ivory-muted">
                            {symptom}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-4">
                    <p className="font-mono text-xs tracking-widest mb-4 text-ivory-muted">
                      CE QUE VOUS RECEVEZ
                    </p>
                    <ul className="flex flex-col gap-3 mb-8">
                      {offer.deliverables.slice(0, 4).map((del) => (
                        <li key={del} className="flex items-start gap-2">
                          <span
                            className="flex-shrink-0 font-mono text-xs mt-1 text-system-success"
                            aria-hidden="true"
                          >
                            {"\✓"}
                          </span>
                          <span className="font-body text-sm text-ivory-muted">
                            {del}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={offer.ctaHref}
                      className="system-button-text inline-flex items-center gap-2 rounded-[0.5rem] px-6 py-3.5 transition-all duration-300 btn-copper-glow bg-copper text-graphite-deep"
                      data-cursor-hover
                    >
                      {offer.cta}
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-graphite-mid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-6">
              <ScrollReveal>
                <h2 className="font-display font-bold text-2xl mb-6 text-ivory tracking-[-0.02em]">
                  {"Comment choisir la bonne offre\ ?"}
                </h2>
              </ScrollReveal>
              <div className="flex flex-col gap-6">
                {[
                  {
                    q: "Je ne sais pas exactement où est le problème.",
                    a: "Commencez par le Diagnostic Frictions. C\'est conçu pour ça.",
                  },
                  {
                    q: "J\'ai du trafic mais la conversion ne suit pas.",
                    a: "L\'Architecture Revenue est faite pour vous.",
                  },
                  {
                    q: "Je veux automatiser ou créer des outils IA internes.",
                    a: "AI Product Ops est le bon format.",
                  },
                  {
                    q: "J\'ai besoin d\'un regard régulier sur mes priorités.",
                    a: "Le Pilotage Fractionnel est la bonne structure.",
                  },
                ].map((item) => (
                  <ScrollReveal key={item.q} delay={60}>
                    <div className="system-panel rounded-[0.5rem] p-6">
                      <p className="font-display font-semibold text-sm mb-2 text-ivory">
                        {item.q}
                      </p>
                      <p className="font-body text-sm text-ivory-muted">
                        {item.a}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <ScrollReveal delay={100}>
                <div className="system-shell system-shell-warm sticky top-32 rounded-[0.5rem] p-8">
                  <p className="font-mono text-xs tracking-widest mb-4 text-copper">
                    {"POINT DE DÉPART"}
                  </p>
                  <h3 className="font-display font-bold text-xl mb-4 text-ivory">
                    Toujours par un diagnostic.
                  </h3>
                  <p className="font-body text-sm leading-7 mb-6 text-ivory-muted">
                    {"Quelle que soit votre situation, nous commençons par comprendre avant d\'agir. Un échange de 30\ minutes permet d\'identifier si, comment et avec quelle priorité nous pouvons intervenir."}
                  </p>
                  <p className="font-mono text-xs mb-6 text-ivory-muted">
                    {"Gratuit · Sans engagement · Réponse sous 24h"}
                  </p>
                  <Link
                    to="/diagnostic"
                    className="system-button-text flex w-full items-center justify-center gap-2 rounded-[0.5rem] px-6 py-4 transition-all duration-300 btn-copper-glow bg-copper text-graphite-deep"
                    data-cursor-hover
                  >
                    Prendre rendez-vous
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title={"Pas encore convaincu\ ?"}
        subtitle={"Regardez comment nous travaillons. La méthode est transparente, les livrables sont précis, les engagements sont tenus."}
        primaryLabel={"Voir la méthode"}
        primaryHref="/methode"
        secondaryLabel="Poser une question"
        secondaryHref="/diagnostic"
      />
    </>
  )
}

export default OffersPage
