import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { NAV_ITEMS, NAV_CTA } from "@/data/navigation"
import { Button } from "@/components/ui/button"
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
          "fixed left-0 right-0 top-0 z-50 border-b transition-colors duration-300",
          scrolled ? "bg-[rgba(15,15,15,0.97)]" : "bg-[rgba(15,15,15,0.94)]",
        )}
        style={{
          borderColor: "var(--mineral-dark)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 md:px-6">
          <div className="flex items-center gap-5 shrink-0">
            <Link to="/" className="flex items-center gap-3 leading-none" aria-label="Digitrend Creation — Accueil">
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
                <span
                  className="font-display text-xs font-bold logo-wordmark"
                  style={{ color: "var(--ivory)", lineHeight: 1 }}
                >
                  DIGITREND
                </span>
                <span
                  className="font-mono text-[10px] logo-sub"
                  style={{ color: "var(--ivory-muted)", lineHeight: 1 }}
                >
                  CREATION
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden flex-1 items-center justify-center gap-8 md:flex" role="navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.href

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "group relative system-nav-text transition-colors duration-200",
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

          <div className="hidden shrink-0 md:flex items-center">
            <Button
              asChild
              size="sm"
              className="system-button-nav h-9 rounded-[4px] border-0 bg-[var(--copper)] px-4 text-[var(--graphite-deep)] shadow-none hover:bg-[var(--copper-light)]"
            >
              <Link to={NAV_CTA.href}>{NAV_CTA.label}</Link>
            </Button>
          </div>

          <button
            className="grid size-10 place-items-center md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            style={{ color: "var(--ivory)" }}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col transition-all duration-300 md:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ backgroundColor: "rgba(15,15,15,0.98)", backdropFilter: "blur(14px)" }}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
      >
        <div className="flex flex-1 flex-col justify-center px-6 pt-24 pb-12">
          <p className="system-eyebrow mb-8" style={{ color: "var(--copper)" }}>
            SYSTÈME OPÉRATIF · NAVIGATION
          </p>
          <nav className="flex flex-col gap-5">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "system-nav-text text-lg transition-all duration-300",
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
            <Button
              asChild
              size="sm"
              className="system-button-nav h-10 rounded-[4px] bg-[var(--copper)] px-4 text-[var(--graphite-deep)] shadow-none hover:bg-[var(--copper-light)]"
            >
              <Link to={NAV_CTA.href}>{NAV_CTA.label}</Link>
            </Button>
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
