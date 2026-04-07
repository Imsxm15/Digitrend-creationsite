export function preloadServicesRoute() {
  void import("@/pages/OffersPage")
}

export function preloadDiagnosticRoute() {
  void import("@/pages/ContactPage")
}

export function preloadPrimaryRoutes() {
  preloadServicesRoute()
  preloadDiagnosticRoute()
}

export function preloadRouteFromPath(path: string) {
  if (path.startsWith("/services")) {
    preloadServicesRoute()
  }

  if (path.startsWith("/diagnostic")) {
    preloadDiagnosticRoute()
  }
}
