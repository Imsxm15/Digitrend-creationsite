export function trackEvent(name: string, props?: Record<string, string | number | boolean>) {
  if (typeof window !== "undefined" && "plausible" in window) {
    ;(window as unknown as { plausible: (name: string, options?: { props: Record<string, string | number | boolean> }) => void }).plausible(name, props ? { props } : undefined)
  }
}
