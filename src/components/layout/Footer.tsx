import { Link } from "react-router-dom"
import { ArrowUpRight, Globe } from "lucide-react"
import { NAV_ITEMS } from "@/data/navigation"
import { PUBLIC_PROFILE } from "@/data/profile"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative pb-10 pt-10">
      <div className="mx-auto max-w-[92rem] px-4 md:px-6">
        <div className="system-shell rounded-[0.5rem] px-6 py-7 md:px-8 md:py-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <Link to="/" className="mb-6 inline-flex items-center gap-3">
                <span
                  className="grid size-7 place-items-center border"
                  style={{
                    borderColor: "var(--copper)",
                    backgroundColor: "transparent",
                  }}
                >
                  <span className="flex items-center gap-px font-display text-[0.8rem] font-bold leading-none">
                    <span style={{ color: "var(--ivory)" }}>D</span>
                    <span style={{ color: "var(--copper)" }}>T</span>
                  </span>
                </span>
                <div className="flex flex-col">
                  <div className="font-display text-xs font-bold logo-wordmark" style={{ color: "var(--ivory)", lineHeight: 1 }}>
                    DIGITREND
                  </div>
                  <div className="font-mono text-[10px] logo-sub" style={{ color: "var(--ivory-muted)", lineHeight: 1 }}>
                    CREATION
                  </div>
                </div>
              </Link>
              <p className="max-w-md font-body text-sm leading-7" style={{ color: "var(--ivory-muted)" }}>
                Architecture opérationnelle, IA appliquée, systèmes de conversion.
                Je remets de l&apos;ordre dans ce qui devrait déjà fonctionner.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="system-chip system-chip-dot" style={{ color: "var(--steel-light)" }}>
                  Pilotage opératif
                </span>
                <span className="system-chip" style={{ color: "var(--ivory-muted)" }}>
                  SIREN {PUBLIC_PROFILE.siren}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={PUBLIC_PROFILE.portfolioUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-[0.5rem] border px-3 py-2 system-interface transition-colors duration-200 hover:text-[var(--copper)]"
                  style={{
                    borderColor: "var(--mineral-dark)",
                    color: "var(--ivory-muted)",
                  }}
                >
                  <Globe className="size-3.5" />
                  Site personnel
                  <ArrowUpRight className="size-3.5" />
                </a>
                <a
                  href={PUBLIC_PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-[0.5rem] border px-3 py-2 system-interface transition-colors duration-200 hover:text-[var(--copper)]"
                  style={{
                    borderColor: "var(--mineral-dark)",
                    color: "var(--ivory-muted)",
                  }}
                >
                  LinkedIn
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>

            <div className="md:col-span-3 md:col-start-7">
              <p className="mb-5 system-eyebrow" style={{ color: "var(--copper)" }}>
                NAVIGATION
              </p>
              <ul className="space-y-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="font-body text-sm transition-colors duration-200 hover:text-foreground"
                      style={{ color: "var(--ivory-muted)" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/diagnostic" className="font-body text-sm transition-colors duration-200" style={{ color: "var(--copper)" }}>
                    Diagnostic gratuit →
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <p className="mb-5 system-eyebrow" style={{ color: "var(--copper)" }}>
                MODULES
              </p>
              <ul className="space-y-3">
                {[
                  { label: "Diagnostic Frictions", href: "/services/diagnostic" },
                  { label: "Architecture Revenue", href: "/services/architecture-revenue" },
                  { label: "AI Product Ops", href: "/services/ai-product-ops" },
                  { label: "Pilotage Fractionnel", href: "/services/fractional" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="font-body text-sm transition-colors duration-200 hover:text-foreground"
                      style={{ color: "var(--ivory-muted)" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="my-8 system-divider-soft" />

          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="font-mono text-[11px] tracking-[0.12em]" style={{ color: "var(--ivory-muted)" }}>
              © {year} Digitrend Creation · Samuel Huys · France · SIREN {PUBLIC_PROFILE.siren}
            </p>
            <div className="flex items-center gap-6">
              <Link to="/mentions-legales" className="font-body text-sm transition-colors duration-200 hover:text-foreground" style={{ color: "var(--ivory-muted)" }}>
                Mentions légales
              </Link>
              <Link to="/confidentialite" className="font-body text-sm transition-colors duration-200 hover:text-foreground" style={{ color: "var(--ivory-muted)" }}>
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
