import { useEffect, useRef, useState } from "react"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"

const METRICS = [
  {
    target: 40,
    suffix: "%",
    label: "de temps manuel visé en moins sur les flux prioritaires",
    color: "var(--copper)",
  },
  {
    target: 3,
    suffix: "x",
    label: "plus de clarté attendue sur les priorités qui comptent",
    color: "var(--steel-light)",
  },
  {
    target: 80,
    suffix: "%",
    label: "des frictions critiques rendues visibles dès le cadrage",
    color: "var(--system-success)",
  },
]

const BEFORE_AFTER = [
  {
    before: "Des outils qui s'accumulent sans cohérence",
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
]

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
    <section
      className="py-28"
      style={{ backgroundColor: "var(--graphite-deep)" }}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-6">
            <ScrollReveal>
              <SectionLabel number="04" label="Objectifs d'intervention" />
              <h2
                className="font-display font-bold"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "var(--ivory)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Ce que mes interventions cherchent à produire.
              </h2>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {METRICS.map((metric, i) => (
            <ScrollReveal key={metric.label} delay={i * 100}>
              <div
                className="p-8 border"
                style={{
                  borderColor: "var(--mineral-dark)",
                  backgroundColor: "var(--graphite-mid)",
                }}
              >
                <div
                  className="font-display font-bold mb-3"
                  style={{
                    fontSize: "clamp(3rem, 5vw, 4rem)",
                    color: metric.color,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  <CountUpValue target={metric.target} start={counting} />
                  {metric.suffix}
                </div>
                <p
                  className="font-body text-sm leading-6"
                  style={{ color: "var(--ivory-muted)" }}
                >
                  {metric.label}
                </p>
                <p
                  className="mt-3 font-mono text-[11px] tracking-wider"
                  style={{ color: "var(--ivory-muted)" }}
                >
                  OBJECTIF TYPE SELON LE CONTEXTE ET LE PÉRIMÈTRE
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div
            className="border p-8 md:p-12"
            style={{ borderColor: "var(--mineral-dark)", backgroundColor: "var(--graphite-mid)" }}
          >
            <p
              className="font-mono text-xs tracking-widest mb-8"
              style={{ color: "var(--copper)" }}
            >
              AVANT → APRÈS
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p
                  className="font-mono text-xs tracking-widest mb-6 uppercase"
                  style={{ color: "var(--system-error)" }}
                >
                  Quand le système fuit
                </p>
                <ul className="flex flex-col gap-5">
                  {BEFORE_AFTER.map((item) => (
                    <li key={item.before} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 font-mono text-xs mt-0.5"
                        style={{ color: "var(--system-error)" }}
                        aria-hidden="true"
                      >
                        ✗
                      </span>
                      <span
                        className="font-body text-sm"
                        style={{ color: "var(--ivory-muted)" }}
                      >
                        {item.before}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p
                  className="font-mono text-xs tracking-widest mb-6 uppercase"
                  style={{ color: "var(--system-success)" }}
                >
                  Quand le système devient lisible
                </p>
                <ul className="flex flex-col gap-5">
                  {BEFORE_AFTER.map((item) => (
                    <li key={item.after} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 font-mono text-xs mt-0.5"
                        style={{ color: "var(--system-success)" }}
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span
                        className="font-body text-sm"
                        style={{ color: "var(--ivory-soft)" }}
                      >
                        {item.after}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mt-12 flex justify-center">
            <div className="max-w-2xl text-center">
              <p
                className="mb-4 font-mono text-xs tracking-widest"
                style={{ color: "var(--copper)" }}
              >
                MA CONVICTION
              </p>
              <h3
                className="mb-4 font-display text-2xl font-bold"
                style={{ color: "var(--ivory)", letterSpacing: "-0.02em" }}
              >
                La clarté opérationnelle est un actif.
              </h3>
              <p
                className="font-body text-sm leading-7"
                style={{ color: "var(--ivory-muted)" }}
              >
                Tant que les flux restent flous, les équipes compensent avec du temps, de l&apos;énergie
                et des décisions prises à l&apos;instinct. Mon rôle consiste à rendre le système lisible,
                mesurable et exploitable avant de lui demander plus de performance.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
