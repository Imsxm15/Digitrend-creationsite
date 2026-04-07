import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { NAV_ITEMS, NAV_CTA } from "@/data/navigation"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 border-b"
            : "py-5",
        )}
        style={{
          backgroundColor: scrolled ? "rgba(15,15,15,0.96)" : "transparent",
          borderColor: scrolled ? "var(--mineral-dark)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex flex-col leading-none" aria-label="Digitrend Creation — Accueil">
            <span
              className="font-display font-bold text-lg logo-wordmark"
              style={{ color: "var(--ivory)" }}
            >
              DIGI<span style={{ color: "var(--copper)" }}>TREND</span>
            </span>
            <span
              className="font-mono text-[9px] logo-sub"
              style={{ color: "var(--ivory-muted)" }}
            >
              CREATION
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" role="navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.href

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "group relative font-mono text-xs tracking-wider uppercase transition-colors duration-200",
                    isActive
                      ? "text-[var(--copper)]"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px origin-left transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                    style={{ backgroundColor: "var(--copper)" }}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to={NAV_CTA.href}
              className="font-mono text-xs tracking-wider uppercase px-5 py-2.5 transition-all duration-300 btn-copper-glow"
              style={{
                backgroundColor: "var(--copper)",
                color: "var(--graphite-deep)",
                fontWeight: 600,
              }}
            >
              {NAV_CTA.label}
            </Link>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={cn(
                "block h-px w-6 transition-all duration-300 origin-center",
                menuOpen ? "rotate-45 translate-y-[5px]" : ""
              )}
              style={{ backgroundColor: "var(--ivory)" }}
            />
            <span
              className={cn(
                "block h-px w-6 transition-all duration-300",
                menuOpen ? "opacity-0 scale-x-0" : ""
              )}
              style={{ backgroundColor: "var(--ivory)" }}
            />
            <span
              className={cn(
                "block h-px w-6 transition-all duration-300 origin-center",
                menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
              )}
              style={{ backgroundColor: "var(--ivory)" }}
            />
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col transition-all duration-500 md:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ backgroundColor: "var(--graphite-deep)" }}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
      >
        <div className="flex-1 flex flex-col justify-center px-8 pt-24 pb-12">
          <nav className="flex flex-col gap-6">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "font-display text-4xl font-bold transition-all duration-300",
                  menuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                )}
                style={{
                  color:
                    location.pathname === item.href
                      ? "var(--copper)"
                      : "var(--ivory)",
                  transitionDelay: menuOpen ? `${i * 0.07}s` : "0s",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div
            className={cn(
              "mt-12 transition-all duration-500",
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: menuOpen ? "0.35s" : "0s" }}
          >
            <Link
              to={NAV_CTA.href}
              className="inline-flex font-mono text-xs tracking-wider uppercase px-8 py-4 transition-colors duration-200"
              style={{
                backgroundColor: "var(--copper)",
                color: "var(--graphite-deep)",
                fontWeight: 600,
              }}
            >
              {NAV_CTA.label} →
            </Link>
          </div>

          <div
            className={cn(
              "mt-auto pt-8 transition-all duration-500",
              menuOpen ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: menuOpen ? "0.45s" : "0s" }}
          >
            <p
              className="font-mono text-xs tracking-widest"
              style={{ color: "var(--ivory-muted)" }}
            >
              SYSTÈMES · STRATÉGIE · SIGNAL
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
