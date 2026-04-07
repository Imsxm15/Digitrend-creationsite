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
    <section className="bg-graphite-deep pt-40 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <div className="system-shell rounded-[0.5rem] px-6 py-8 md:px-8 md:py-9">
            <SectionLabel label={label} />
            <h1 className="system-title-hero mb-6 text-ivory text-[clamp(2.5rem,6vw,5rem)]">
              {title}
            </h1>
            <p className="system-copy max-w-2xl text-ivory-muted">
              {intro}
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 flex flex-col gap-6">
          {sections.map((section, index) => (
            <ScrollReveal key={section.heading} delay={index * 60}>
              <article className="system-panel rounded-[0.5rem] p-8">
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
          <div className="mt-12">
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
