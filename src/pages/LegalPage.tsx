import { Link } from "react-router-dom"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"

interface LegalPageProps {
  label: string
  title: string
  intro: string
  sections: Array<{
    heading: string
    body: string
  }>
}

export function LegalPage({ label, title, intro, sections }: LegalPageProps) {
  return (
    <section className="bg-graphite-deep pt-36 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <div className="rounded-[0.5rem] border border-mineral-dark bg-graphite-mid px-6 py-7 md:px-8 md:py-8">
            <SectionLabel label={label} />
            <h1 className="system-title-hero mb-5 text-[clamp(2.2rem,5vw,4rem)] text-ivory">
              {title}
            </h1>
            <p className="max-w-2xl font-body text-base leading-8 text-ivory-muted">{intro}</p>
          </div>
        </ScrollReveal>

        <div className="mt-10 flex flex-col gap-4">
          {sections.map((section, index) => (
            <ScrollReveal key={section.heading} delay={index * 60}>
              <article className="rounded-[0.5rem] border border-mineral-dark bg-graphite-mid px-6 py-6">
                <h2 className="system-title-section mb-3 text-lg text-ivory">
                  {section.heading}
                </h2>
                <p className="font-body text-sm leading-7 text-ivory-muted">
                  {section.body}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={140}>
          <div className="mt-10">
            <Link
              to="/"
              className="system-button-text btn-copper-glow inline-flex items-center rounded-[0.5rem] bg-copper px-8 py-4 text-graphite-deep transition-all duration-300"
            >
              Retour &agrave; l&apos;accueil
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default LegalPage
