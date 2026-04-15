import { Link, useLocation } from "react-router-dom"
import { mobileCtaConfig } from "@/data/mobileCtaConfig"
import type { CoreRouteKey } from "@/types/site"
import { useLayoutUi } from "@/components/layout/LayoutContext"

function getRouteKey(pathname: string): CoreRouteKey | null {
  if (pathname === "/") return "home"
  if (pathname === "/methode") return "methode"
  if (pathname === "/cas") return "cas"
  if (pathname === "/services" || pathname.startsWith("/services/")) return "services"
  if (pathname === "/diagnostic") return "diagnostic"
  return null
}

export function StickyMobileCta() {
  const { pathname } = useLocation()
  const { isMobileMenuOpen } = useLayoutUi()
  const routeKey = getRouteKey(pathname)

  if (!routeKey) return null
  if (isMobileMenuOpen) return null

  const config = mobileCtaConfig.find((entry) => entry.route === routeKey)

  if (!config) return null

  const baseClassName =
    "fixed inset-x-3 bottom-3 z-40 flex min-h-16 items-center justify-between gap-4 rounded-[0.5rem] border border-copper/25 bg-[rgba(15,15,15,0.96)] px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.32)] backdrop-blur md:hidden"

  const content = (
    <>
      <div className="min-w-0">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-copper">
          Action rapide
        </p>
        <p className="mt-1 font-body text-sm font-medium text-ivory">{config.label}</p>
        {config.subtext && (
          <p className="mt-1 font-body text-xs leading-5 text-ivory-muted">{config.subtext}</p>
        )}
      </div>
      <span className="shrink-0 rounded-[0.4rem] bg-copper px-3 py-2 font-body text-xs font-semibold uppercase tracking-[0.08em] text-graphite-deep">
        Ouvrir
      </span>
    </>
  )

  if (config.mode === "mailto") {
    return (
      <a href={config.href} className={baseClassName}>
        {content}
      </a>
    )
  }

  if (config.mode === "anchor") {
    return (
      <a href={config.href} className={baseClassName}>
        {content}
      </a>
    )
  }

  return (
    <Link to={config.href} className={baseClassName}>
      {content}
    </Link>
  )
}
