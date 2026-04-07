import { Link } from "react-router-dom"
import { ArrowUpRight, Globe } from "lucide-react"
import { NAV_ITEMS } from "@/data/navigation"
import { PUBLIC_PROFILE } from "@/data/profile"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative pt-20 pb-10 border-t"
      style={{
        borderColor: "var(--mineral-dark)",
        backgroundColor: "var(--graphite-deep)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <Link to="/" className="inline-block mb-6">
              <div
                className="font-display font-bold text-2xl logo-wordmark"
                style={{ color: "var(--ivory)" }}
              >
                DIGI<span style={{ color: "var(--copper)" }}>TREND</span>
              </div>
              <div
                className="font-mono text-[10px] logo-sub mt-0.5"
                style={{ color: "var(--ivory-muted)" }}
              >
                CREATION
              </div>
            </Link>
            <p
              className="font-body text-sm leading-7 max-w-xs"
              style={{ color: "var(--ivory-muted)" }}
            >
              Architecture opérationnelle, IA appliquée, systèmes de conversion.
              Je remets de l&apos;ordre dans ce qui devrait déjà fonctionner.
            </p>
            <div className="mt-6">
              <span
                className="font-mono text-xs tracking-widest"
                style={{ color: "var(--copper)" }}
              >
                SYSTÈMES · STRATÉGIE · SIGNAL
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={PUBLIC_PROFILE.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border px-3 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors duration-200 hover:text-[var(--copper)]"
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
                className="inline-flex items-center gap-2 border px-3 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors duration-200 hover:text-[var(--copper)]"
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
            <p
              className="font-mono text-xs tracking-widest mb-5 uppercase"
              style={{ color: "var(--ivory-muted)" }}
            >
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
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
                <Link
                  to="/diagnostic"
                  className="font-body text-sm transition-colors duration-200"
                  style={{ color: "var(--copper)" }}
                >
                  Diagnostic gratuit →
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p
              className="font-mono text-xs tracking-widest mb-5 uppercase"
              style={{ color: "var(--ivory-muted)" }}
            >
              Services
            </p>
            <ul className="flex flex-col gap-3">
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

        <div
          className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t"
          style={{ borderColor: "var(--mineral-dark)" }}
        >
          <p
            className="font-mono text-xs"
            style={{ color: "var(--ivory-muted)" }}
          >
            © {year} Digitrend Creation · Samuel Huys · France · SIREN {PUBLIC_PROFILE.siren}
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/mentions-legales"
              className="font-mono text-xs transition-colors duration-200 hover:text-foreground"
              style={{ color: "var(--ivory-muted)" }}
            >
              Mentions légales
            </Link>
            <Link
              to="/confidentialite"
              className="font-mono text-xs transition-colors duration-200 hover:text-foreground"
              style={{ color: "var(--ivory-muted)" }}
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
