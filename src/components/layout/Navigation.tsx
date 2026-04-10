import { useEffect, useId, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { NAV_ITEMS, NAV_CTA } from "@/data/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { preloadDiagnosticRoute, preloadRouteFromPath } from "@/lib/routePreload"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const menuId = useId()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return

    firstMenuLinkRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
    menuButtonRef.current?.focus()
  }

  const handleMenuNavigation = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 border-b border-mineral-dark/80 backdrop-blur-[12px] transition-all duration-300",
          scrolled
            ? "bg-[rgba(15,15,15,0.98)] shadow-[0_12px_30px_rgba(0,0,0,0.24)]"
            : "bg-[rgba(15,15,15,0.92)]",
        )}
      >
        <div
          className={cn(
            "mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-4 md:px-6",
            scrolled ? "py-3" : "py-4"
          )}
        >
          <div className="flex items-center gap-5 shrink-0">
            <Link to="/" className="flex items-center gap-3 leading-none" aria-label="Digitrend Creation — Accueil">
              <span className={cn(
                "grid place-items-center border border-copper bg-transparent transition-all duration-300",
                scrolled ? "size-6" : "size-7"
              )}>
                <span className="flex items-center gap-px font-display text-[0.8rem] font-bold leading-none">
                  <span className="text-ivory">D</span>
                  <span className="text-copper">T</span>
                </span>
              </span>
              <div className="flex flex-col">
                <span
                  className="font-display text-xs font-bold text-ivory logo-wordmark"
                  style={{ lineHeight: 1 }}
                >
                  DIGITREND
                </span>
                <span
                  className="font-mono text-xs text-ivory-muted logo-sub"
                  style={{ lineHeight: 1 }}
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
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "group relative system-nav-text transition-colors duration-200",
                    isActive
                      ? "text-copper"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px origin-left bg-copper transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="hidden shrink-0 md:flex items-center">
            <Button
              asChild
              size="sm"
              className={cn(
                "system-button-nav rounded-[4px] border-0 bg-copper text-graphite-deep shadow-none hover:bg-copper-light",
                scrolled ? "h-9 px-4" : "h-10 px-5"
              )}
            >
              <Link to={NAV_CTA.href}>{NAV_CTA.label}</Link>
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            className="grid size-10 place-items-center text-ivory md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls={menuOpen ? menuId : undefined}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-[rgba(15,15,15,0.82)] backdrop-blur-[10px]"
            aria-label="Fermer le menu"
            onClick={closeMenu}
          />
          <div
            id={menuId}
            className="relative ml-auto flex h-full w-full max-w-sm flex-col border-l border-mineral-dark bg-[rgba(15,15,15,0.98)] px-6 pb-12 pt-24 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="system-eyebrow text-copper">
                SYSTEME OPERATIF . ACCES RAPIDE
              </p>
              <button
                type="button"
                className="grid size-10 place-items-center rounded-[4px] border border-mineral-dark text-ivory transition-colors duration-200 hover:border-copper hover:text-copper"
                onClick={closeMenu}
                aria-label="Fermer le menu"
              >
                <X className="size-4" />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-5">
              {NAV_ITEMS.map((item, index) => (
                <Link
                  key={item.href}
                  ref={index === 0 ? firstMenuLinkRef : undefined}
                  to={item.href}
                  aria-current={location.pathname === item.href ? "page" : undefined}
                  onClick={handleMenuNavigation}
                  onMouseEnter={() => preloadRouteFromPath(item.href)}
                  className={cn(
                    "system-nav-text rounded-[4px] border border-transparent px-3 py-3 text-base transition-colors duration-200",
                    location.pathname === item.href
                      ? "border-copper/30 bg-copper/10 text-copper"
                      : "text-ivory hover:border-mineral-dark hover:text-copper"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-10">
              <Button
                asChild
                size="sm"
                className="system-button-nav h-11 w-full rounded-[4px] bg-copper px-4 text-graphite-deep shadow-none hover:bg-copper-light"
              >
                <Link
                  to={NAV_CTA.href}
                  onClick={handleMenuNavigation}
                  onMouseEnter={preloadDiagnosticRoute}
                >
                  {NAV_CTA.label}
                </Link>
              </Button>
            </div>

            <div className="mt-auto pt-8">
              <p className="font-mono text-xs tracking-widest text-ivory-muted">
                30 MINUTES . SANS ENGAGEMENT
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
