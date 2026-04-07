import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const copySteps = [
  {
    label: "Temps manuel absorbé",
    value: "-12h / semaine",
    color: "var(--system-success)",
  },
  {
    label: "Processus dispersés",
    value: "3 workflows reliés",
    color: "var(--copper)",
  },
  {
    label: "Outils métier",
    value: "6 → 1 pilotage commun",
    color: "var(--steel-light)",
  },
  {
    label: "Tunnel prioritaire",
    value: "3 fuites visibles",
    color: "var(--steel)",
  },
] as const

const smoothEase = [0.22, 1, 0.36, 1] as const

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: {
      delay,
      duration: 0.7,
      ease: smoothEase,
    },
  }
}

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-20 pt-32"
      style={{ backgroundColor: "var(--graphite-deep)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(42,39,34,0.6) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          <div className="order-1 md:col-span-8">
            <motion.p
              className="mb-6 font-mono text-xs tracking-widest"
              style={{ color: "var(--copper)" }}
              {...fadeUp(0.05)}
            >
              SYSTÈMES · STRATÉGIE · SIGNAL
            </motion.p>

            <motion.p
              className="mb-8 font-mono text-[11px] tracking-[0.2em] uppercase"
              style={{ color: "var(--steel-light)" }}
              {...fadeUp(0.12)}
            >
              Pour fondateurs, dirigeants et directeurs ops de PME digitales
            </motion.p>

            <div className="flex gap-6">
              <motion.div
                className="mt-1 hidden w-0.5 shrink-0 md:block"
                style={{
                  backgroundColor: "var(--copper)",
                  minHeight: "144px",
                  transformOrigin: "top",
                }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  delay: 0.2,
                  duration: 1,
                  ease: smoothEase,
                }}
              />
              <div>
                <motion.h1
                  className="mb-4 font-display font-extrabold leading-none"
                  style={{
                    fontSize: "clamp(2.8rem, 7vw, 6.2rem)",
                    color: "var(--ivory)",
                    letterSpacing: "-0.03em",
                  }}
                  {...fadeUp(0.18)}
                >
                  Transformer les frictions business
                  <br />
                  <span style={{ color: "var(--copper)" }}>
                    en système qui tient.
                  </span>
                </motion.h1>
                <motion.p
                  className="font-editorial italic"
                  style={{
                    fontSize: "clamp(1.1rem, 2.2vw, 1.45rem)",
                    color: "var(--ivory-muted)",
                    lineHeight: 1.55,
                  }}
                  {...fadeUp(0.26)}
                >
                  J&apos;interviens quand acquisition, opérations et outils n&apos;avancent plus ensemble.
                  J&apos;aligne conversion, automatisation et IA appliquée pour les PME et scale-ups
                  qui ont besoin que ça tienne vraiment.
                </motion.p>
              </div>
            </div>
          </div>

          <motion.div
            className="order-2 md:col-span-4"
            {...fadeUp(0.36)}
          >
            <div
              className="border p-6"
              style={{
                borderColor: "var(--mineral-dark)",
                backgroundColor: "rgba(26,26,26,0.72)",
              }}
            >
              <p
                className="mb-5 font-mono text-xs tracking-widest"
                style={{ color: "var(--copper)" }}
              >
                SIGNAL SYSTÈME
              </p>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-4">
                {copySteps.map((item) => (
                  <div
                    key={item.label}
                    className="border px-4 py-3 md:border-b md:px-0 md:py-3 md:last:border-b-0"
                    style={{ borderColor: "var(--mineral-dark)" }}
                  >
                    <span
                      className="block font-mono text-[11px]"
                      style={{ color: "var(--ivory-muted)" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="mt-2 block font-mono text-xs font-medium"
                      style={{ color: item.color }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="order-3 md:col-span-8"
            {...fadeUp(0.44)}
          >
            <div className="mt-2 flex flex-wrap gap-4 md:mt-0">
              <Link
                to="/diagnostic"
                className="btn-copper-glow inline-flex items-center gap-2 px-7 py-4 font-mono text-xs tracking-wider uppercase transition-all duration-300"
                style={{
                  backgroundColor: "var(--copper)",
                  color: "var(--graphite-deep)",
                  fontWeight: 600,
                }}
              >
                Voir où ça bloque
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M2 7h10M7 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border px-7 py-4 font-mono text-xs tracking-wider uppercase transition-all duration-300 hover:border-[var(--copper)] hover:text-[var(--copper)]"
                style={{
                  borderColor: "var(--mineral-warm)",
                  color: "var(--ivory-muted)",
                }}
              >
                Explorer l&apos;approche
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 flex flex-wrap gap-4 md:mt-16 md:gap-8"
          {...fadeUp(0.52)}
        >
          {[
            "Audit des fuites de revenus",
            "Architecture conversion & CRM",
            "Automatisation métier utile",
            "Pilotage ops à temps partagé",
          ].map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs tracking-wider"
              style={{ color: "var(--ivory-muted)" }}
            >
              / {tag}
            </span>
          ))}
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--mineral-warm), var(--copper), var(--mineral-warm), transparent)",
          opacity: 0.35,
        }}
        aria-hidden="true"
      />
    </section>
  )
}
