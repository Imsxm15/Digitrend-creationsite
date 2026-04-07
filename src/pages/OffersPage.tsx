import { Link } from "react-router-dom"
import { OFFERS } from "@/data/offers"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { Badge } from "@/components/ui/badge"

export function OffersPage() {
  return (
    <>
      <section
        className="pt-40 pb-20"
        style={{ backgroundColor: "var(--graphite-deep)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="system-shell rounded-[0.5rem] px-6 py-8 md:px-8 md:py-9">
              <SectionLabel label="Services" />
              <h1
                className="font-display font-extrabold mb-6"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                  color: "var(--ivory)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                }}
              >
                Quatre formats.
                <br />
                <span style={{ color: "var(--copper)" }}>Un seul cap.</span>
              </h1>
              <p
                className="font-body text-lg max-w-3xl"
                style={{ color: "var(--ivory-muted)", lineHeight: 1.8 }}
              >
                Chaque offre est pensée pour un stade précis de maturité. Pas de prestation
                fourre-tout, mais des interventions calibrées au problème réel.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section
        className="py-20"
        style={{ backgroundColor: "var(--graphite-deep)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-8">
            {OFFERS.map((offer, i) => (
              <ScrollReveal key={offer.id} delay={i * 60}>
                <div className={`system-panel system-panel-hover grid grid-cols-1 md:grid-cols-12 gap-8 p-8 md:p-12 rounded-[0.5rem] group ${offer.featured ? "system-shell-warm" : ""}`}>
                  {offer.featured && (
                    <div
                      className="md:col-span-12 -mx-8 md:-mx-12 -mt-8 md:-mt-12 h-0.5 mb-8 md:mb-12"
                      style={{ backgroundColor: "var(--copper)" }}
                      aria-hidden="true"
                    />
                  )}

                  <div className="md:col-span-4">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="font-mono text-xs tracking-widest"
                        style={{ color: "var(--copper)" }}
                      >
                        {offer.number}
                      </span>
                      {offer.tag && (
                        <span
                          className="font-mono text-[10px] tracking-widest px-2.5 py-1"
                          style={{
                            backgroundColor: "rgba(196,133,60,0.12)",
                            color: "var(--copper)",
                            border: "1px solid rgba(196,133,60,0.25)",
                          }}
                        >
                          {offer.tag}
                        </span>
                      )}
                    </div>
                    <h2
                      className="font-display font-bold text-2xl mb-2"
                      style={{ color: "var(--ivory)", letterSpacing: "-0.02em" }}
                    >
                      {offer.title}
                    </h2>
                    <p
                      className="system-interface mb-6"
                      style={{ color: "var(--ivory-muted)" }}
                    >
                      {offer.subtitle}
                    </p>
                    <div className="flex flex-col gap-2">
                      <p
                        className="font-mono text-xs"
                        style={{ color: "var(--steel)" }}
                      >
                        {offer.format}
                      </p>
                      <p
                        className="font-mono text-xs"
                        style={{ color: "var(--copper)" }}
                      >
                        {offer.duration}
                      </p>
                      <Badge className="w-fit border-none bg-[rgba(107,130,153,0.16)] font-mono text-[10px] tracking-[0.16em] text-[var(--steel-light)]">
                        {offer.budgetSignal}
                      </Badge>
                    </div>
                  </div>

                  <div className="md:col-span-4">
                    <p
                      className="font-mono text-xs tracking-widest mb-4"
                      style={{ color: "var(--ivory-muted)" }}
                    >
                      CE QUE ÇA RÈGLE
                    </p>
                    <ul className="flex flex-col gap-3">
                      {offer.symptoms.slice(0, 4).map((symptom) => (
                        <li key={symptom} className="flex items-start gap-2">
                          <span
                            className="flex-shrink-0 font-mono text-xs mt-1"
                            style={{ color: "var(--copper)" }}
                            aria-hidden="true"
                          >
                            ·
                          </span>
                          <span
                            className="font-body text-sm"
                            style={{ color: "var(--ivory-muted)" }}
                          >
                            {symptom}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-4">
                    <p
                      className="font-mono text-xs tracking-widest mb-4"
                      style={{ color: "var(--ivory-muted)" }}
                    >
                      CE QUE VOUS RECEVEZ
                    </p>
                    <ul className="flex flex-col gap-3 mb-8">
                      {offer.deliverables.slice(0, 4).map((del) => (
                        <li key={del} className="flex items-start gap-2">
                          <span
                            className="flex-shrink-0 font-mono text-xs mt-1"
                            style={{ color: "var(--system-success)" }}
                            aria-hidden="true"
                          >
                            ✓
                          </span>
                          <span
                            className="font-body text-sm"
                            style={{ color: "var(--ivory-muted)" }}
                          >
                            {del}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={offer.ctaHref}
                      className="system-button-text inline-flex items-center gap-2 rounded-[0.5rem] px-6 py-3.5 transition-all duration-300 btn-copper-glow"
                      style={{
                        backgroundColor: "var(--copper)",
                        color: "var(--graphite-deep)",
                      }}
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

      <section
        className="py-20"
        style={{ backgroundColor: "var(--graphite-mid)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-6">
              <ScrollReveal>
                <h2
                  className="font-display font-bold text-2xl mb-6"
                  style={{ color: "var(--ivory)", letterSpacing: "-0.02em" }}
                >
                  Comment choisir la bonne offre ?
                </h2>
              </ScrollReveal>
              <div className="flex flex-col gap-6">
                {[
                  {
                    q: "Je ne sais pas exactement où est le problème.",
                    a: "Commencez par le Diagnostic Frictions. C'est conçu pour ça.",
                  },
                  {
                    q: "J'ai du trafic mais la conversion ne suit pas.",
                    a: "L'Architecture Revenue est faite pour vous.",
                  },
                  {
                    q: "Je veux automatiser ou créer des outils IA internes.",
                    a: "AI Product Ops est le bon format.",
                  },
                  {
                    q: "J'ai besoin d'un regard régulier sur mes priorités.",
                    a: "Le Pilotage Fractionnel est la bonne structure.",
                  },
                ].map((item) => (
                  <ScrollReveal key={item.q} delay={60}>
                    <div className="system-panel system-panel-hover rounded-[0.5rem] p-6">
                      <p
                        className="font-display font-semibold text-sm mb-2"
                        style={{ color: "var(--ivory)" }}
                      >
                        {item.q}
                      </p>
                      <p
                        className="font-body text-sm"
                        style={{ color: "var(--ivory-muted)" }}
                      >
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
                  <p
                    className="font-mono text-xs tracking-widest mb-4"
                    style={{ color: "var(--copper)" }}
                  >
                    POINT DE DÉPART
                  </p>
                  <h3
                    className="font-display font-bold text-xl mb-4"
                    style={{ color: "var(--ivory)" }}
                  >
                    Toujours par un diagnostic.
                  </h3>
                  <p
                    className="font-body text-sm leading-7 mb-6"
                    style={{ color: "var(--ivory-muted)" }}
                  >
                    Quelle que soit votre situation, on commence par comprendre avant d'agir. Un échange de 30 minutes permet d'identifier si, comment et avec quelle priorité on peut intervenir.
                  </p>
                  <p
                    className="font-mono text-xs mb-6"
                    style={{ color: "var(--ivory-muted)" }}
                  >
                    Gratuit · Sans engagement · Réponse sous 24h
                  </p>
                  <Link
                    to="/diagnostic"
                    className="system-button-text flex w-full items-center justify-center gap-2 rounded-[0.5rem] px-6 py-4 transition-all duration-300 btn-copper-glow"
                    style={{
                      backgroundColor: "var(--copper)",
                      color: "var(--graphite-deep)",
                    }}
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
        title="Pas encore convaincu ?"
        subtitle="Regardez comment on travaille. La méthode est transparente, les livrables sont précis, les engagements sont tenus."
        primaryLabel="Voir la méthode"
        primaryHref="/methode"
        secondaryLabel="Poser une question"
        secondaryHref="/diagnostic"
      />
    </>
  )
}
