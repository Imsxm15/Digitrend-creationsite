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
    <section
      className="pt-40 pb-24"
      style={{ backgroundColor: "var(--graphite-deep)" }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="system-shell rounded-[0.5rem] px-6 py-8 md:px-8 md:py-9">
            <SectionLabel label={label} />
            <h1
              className="system-title-hero mb-6"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                color: "var(--ivory)",
              }}
            >
              {title}
            </h1>
            <p
              className="system-copy max-w-2xl"
              style={{ color: "var(--ivory-muted)" }}
            >
              {intro}
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 flex flex-col gap-6">
          {sections.map((section, index) => (
            <ScrollReveal key={section.heading} delay={index * 60}>
              <article
                className="system-panel rounded-[0.5rem] p-8"
              >
                <h2
                  className="system-title-section mb-3 text-lg"
                  style={{ color: "var(--ivory)" }}
                >
                  {section.heading}
                </h2>
                <p
                  className="font-body text-sm leading-7"
                  style={{ color: "var(--ivory-muted)" }}
                >
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
              className="system-button-text inline-flex items-center rounded-[0.5rem] px-8 py-4 transition-all duration-300 btn-copper-glow"
              style={{
                backgroundColor: "var(--copper)",
                color: "var(--graphite-deep)",
              }}
            >
              Retour à l'accueil
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
