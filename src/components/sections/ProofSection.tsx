import { useEffect, useRef, useState } from "react"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"

const METRICS = [
  {
    target: 40,
    suffix: "%",
    label: "de temps manuel visé en moins sur les flux prioritaires",
    colorClass: "text-copper",
    progressClass: "system-progress",
    progress: 40,
  },
  {
    target: 3,
    suffix: "x",
    label: "plus de clarté attendue sur les priorités qui comptent",
    colorClass: "text-steel-light",
    progressClass: "system-progress is-steel",
    progress: 74,
  },
  {
    target: 80,
    suffix: "%",
    label: "des frictions critiques rendues visibles dès le cadrage",
    colorClass: "text-system-success",
    progressClass: "system-progress is-success",
    progress: 80,
  },
] as const

const BEFORE_AFTER = [
  {
    before: "Des outils qui s\'accumulent sans cohérence",
    after: "Un système connecté et lisible",
  },
  {
    before: "Des processus manuels et répétitifs",
    after: "Des workflows automatisés et documentés",
  },
  {
    before: "Des données présentes mais inexploitées",
    after: "Des indicateurs actionnables et partagés",
  },
  {
    before: "Une IA utilisée en mode copier-coller",
    after: "Des agents et outils adaptés aux cas réels",
  },
] as const

function CountUpValue({ target, start }: { target: number; start: boolean }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number | null = null
    const duration = 1600

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [start, target])

  return <>{value}</>
}

export function ProofSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [counting, setCounting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCounting(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 md:py-28" ref={sectionRef}>
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Centered header */}
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <SectionLabel number="04" label="Preuves directes" />
            <h2
              className="mb-5 font-display font-bold text-ivory"
              style={{
                fontSize: "clamp(1.9rem, 3.3vw, 2.8rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
              }}
            >
              Ce que l&apos;intervention doit produire.
            </h2>
            <p className="font-body text-sm leading-7 text-ivory-muted">
              Ici, la preuve ne repose pas sur des slogans. Elle repose sur des gains attendus,
              des états de système plus lisibles et des sorties exploitables.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-column metrics grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {METRICS.map((metric, index) => (
            <ScrollReveal key={metric.label} delay={index * 70}>
              <article className="system-panel rounded-[0.5rem] px-6 py-6">
                <p className="mb-5 font-mono text-xs tracking-[0.18em] text-steel-light">
                  OBJECTIF TYPE
                </p>
                <div
                  className={`mb-3 font-display font-bold leading-none ${metric.colorClass}`}
                  style={{ fontSize: "clamp(2.8rem,4vw,3.6rem)", letterSpacing: "-0.04em" }}
                >
                  <CountUpValue target={metric.target} start={counting} />
                  {metric.suffix}
                </div>
                <p className="mb-5 font-body text-sm leading-7 text-ivory-muted">
                  {metric.label}
                </p>
                <div className={metric.progressClass}>
                  <span style={{ width: `${metric.progress}%` }} />
                </div>
                <p className="mt-4 font-mono text-xs tracking-[0.16em] text-ivory-muted">
                  SELON LE CONTEXTE ET LE PÉRIMÈTRE
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Before / After */}
        <ScrollReveal delay={160}>
          <div className="system-shell mt-8 rounded-[0.5rem] px-6 py-6 md:px-7">
            <p className="mb-6 font-mono text-xs tracking-[0.18em] text-copper">
              AVANT &rarr; APRÈS
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="system-panel rounded-[0.5rem] px-5 py-5">
                <p className="mb-5 font-mono text-xs tracking-[0.18em] text-system-error">
                  QUAND LE SYSTÈME FUIT
                </p>
                <ul className="space-y-4">
                  {BEFORE_AFTER.map((item) => (
                    <li key={item.before} className="flex items-start gap-3">
                      <span className="mt-1 font-mono text-xs text-system-error">
                        &#10007;
                      </span>
                      <span className="font-body text-sm leading-7 text-ivory-muted">
                        {item.before}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="system-panel rounded-[0.5rem] px-5 py-5">
                <p className="mb-5 font-mono text-xs tracking-[0.18em] text-system-success">
                  QUAND LE SYSTÈME DEVIENT LISIBLE
                </p>
                <ul className="space-y-4">
                  {BEFORE_AFTER.map((item) => (
                    <li key={item.after} className="flex items-start gap-3">
                      <span className="mt-1 font-mono text-xs text-system-success">
                        &#10003;
                      </span>
                      <span className="font-body text-sm leading-7 text-ivory-soft">
                        {item.after}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
