import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react"

type LayoutContextValue = {
  isMobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  openMobileMenu: () => void
  closeMobileMenu: () => void
}

const LayoutContext = createContext<LayoutContextValue | null>(null)

export function LayoutUiProvider({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const openMobileMenu = useCallback(() => {
    setMobileMenuOpen(true)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  const value = useMemo<LayoutContextValue>(
    () => ({
      isMobileMenuOpen,
      setMobileMenuOpen,
      openMobileMenu,
      closeMobileMenu,
    }),
    [closeMobileMenu, isMobileMenuOpen, openMobileMenu]
  )

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
}

export function useLayoutUi() {
  const context = useContext(LayoutContext)

  if (!context) {
    throw new Error("useLayoutUi must be used within LayoutUiProvider")
  }

  return context
}
