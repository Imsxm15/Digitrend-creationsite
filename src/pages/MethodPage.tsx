import {
  Bot,
  ChartNoAxesCombined,
  FileText,
  Workflow,
} from "lucide-react"
import { Link } from "react-router-dom"
import { PageMeta } from "@/components/common/PageMeta"
import { PageHeroTitle } from "@/components/common/PageHeroTitle"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { StepCards } from "@/components/common/StepCards"
import { pageHeroes, pageCtas } from "@/data/pageCopy"
import { METHOD_STEPS } from "@/data/method"
import { organizationSchema, pageMetaContent } from "@/data/pageMeta"

const toolTiles = [
  { label: "OpenAI", detail: "assistants, copilotes, sorties structurees", icon: Bot },
  { label: "Make", detail: "orchestration des flux et automatisations", icon: Workflow },
  { label: "Kameleoon", detail: "lecture CRO et experimentation", icon: ChartNoAxesCombined },
  { label: "GA4", detail: "lecture des signaux et reporting", icon: FileText },
]

const methodBeforeAfter = [
  {
    label: "Lecture business",
    before: "Des symptomes qui se melangent.",
    after: "Un ordre de lecture partage par tous.",
  },
  {
    label: "Sequence de travail",
    before: "Des chantiers ouverts en meme temps.",
    after: "Un ordre d'execution defendable.",
  },
  {
    label: "Transmission",
    before: "Une intuition difficile a reprendre.",
    after: "Un systeme documente et pilotable.",
  },
] as const

export function MethodPage() {
  const hero = pageHeroes.methode
  const meta = pageMetaContent.methode
  const cta = pageCtas.methode

  return (
    <>
      <PageMeta
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        schema={[organizationSchema, ...meta.schema]}
      />

      <section className="bg-graphite-deep pb-20 pt-36">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="system-shell rounded-[0.5rem] px-6 py-8 md:px-8 md:py-9">
              <SectionLabel label={hero.eyebrow} />
              <PageHeroTitle>
                {hero.title}
              </PageHeroTitle>
              <p className="mt-6 max-w-3xl font-body text-lg leading-[1.8] text-ivory-muted">
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
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
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
      </section>

      <section className="bg-graphite-mid py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <div className="system-shell rounded-[0.5rem] px-6 py-7">
                  <p className="mb-4 font-mono text-xs tracking-[0.18em] text-copper">
                    LES 4 ÉTAPES QUI FONT GAGNER DU TEMPS
                  </p>
                  <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-ivory">
                    Une méthode courte, orientée décisions.
                  </h2>
                  <p className="mt-4 font-body text-sm leading-7 text-ivory-muted">
                    Chaque étape sert un objectif simple: clarifier, prioriser, concevoir, puis
                    déployer ce qui a le meilleur ratio impact / effort.
                  </p>
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-8">
              <StepCards
                items={METHOD_STEPS}
                desktopColumnsClassName="md:grid-cols-2 xl:grid-cols-2"
                cardWidthClassName="auto-cols-[88%] sm:auto-cols-[62%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-graphite-deep py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="mb-4 font-mono text-xs tracking-[0.18em] text-copper">
                OUTILLAGE DE RÉFÉRENCE
              </p>
              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-ivory">
                Des outils choisis pour ce qu&apos;ils débloquent, pas pour leur prestige.
              </h2>
              <p className="mt-4 font-body text-sm leading-7 text-ivory-muted">
                Je choisis un outillage proportionné au problème: lecture, orchestration,
                expérimentation et sorties utiles aux équipes.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {toolTiles.map((tool, index) => {
              const Icon = tool.icon

              return (
                <ScrollReveal key={tool.label} delay={index * 60}>
                  <article className="rounded-[0.5rem] border border-mineral-dark bg-graphite-light px-5 py-5">
                    <span className="grid size-11 place-items-center rounded-[0.5rem] border border-copper/20 bg-copper/10 text-copper">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <p className="mt-4 font-display text-xl font-semibold text-ivory">{tool.label}</p>
                    <p className="mt-3 font-body text-sm leading-7 text-ivory-muted">{tool.detail}</p>
                  </article>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-graphite-deep py-18 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="mb-4 font-mono text-xs tracking-[0.18em] text-copper">
                MINI AVANT / APRÈS
              </p>
              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-ivory">
                Ce que la méthode change concrètement.
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {methodBeforeAfter.map((item, index) => (
              <ScrollReveal key={item.label} delay={index * 60}>
                <article className="rounded-[0.5rem] border border-mineral-dark bg-graphite-light px-5 py-5">
                  <p className="font-display text-lg font-semibold text-ivory">{item.label}</p>
                  <p className="mt-4 font-body text-sm leading-7 text-ivory-muted">
                    Avant: {item.before}
                  </p>
                  <p className="mt-3 font-body text-sm leading-7 text-ivory-soft">
                    Après: {item.after}
                  </p>
                </article>
              </ScrollReveal>
            ))}
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

export default MethodPage
