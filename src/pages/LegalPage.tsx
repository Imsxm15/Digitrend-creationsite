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
          <SectionLabel label={label} />
          <h1
            className="font-display font-extrabold mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "var(--ivory)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {title}
          </h1>
          <p
            className="font-editorial italic text-xl max-w-2xl"
            style={{ color: "var(--ivory-muted)", lineHeight: 1.6 }}
          >
            {intro}
          </p>
        </ScrollReveal>

        <div className="mt-14 flex flex-col gap-6">
          {sections.map((section, index) => (
            <ScrollReveal key={section.heading} delay={index * 60}>
              <article
                className="p-8 border"
                style={{
                  borderColor: "var(--mineral-dark)",
                  backgroundColor: "var(--graphite-mid)",
                }}
              >
                <h2
                  className="font-display font-bold text-lg mb-3"
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
              className="inline-flex items-center font-mono text-xs tracking-wider uppercase px-8 py-4 transition-all duration-300 btn-copper-glow"
              style={{
                backgroundColor: "var(--copper)",
                color: "var(--graphite-deep)",
                fontWeight: 600,
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
