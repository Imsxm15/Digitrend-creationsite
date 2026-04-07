import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { Layout } from "@/components/layout/Layout"
import { PageSkeleton } from "@/components/common/PageSkeleton"
import { ErrorBoundary } from "@/components/common/ErrorBoundary"

const HomePage = lazy(() => import("@/pages/HomePage"))
const OffersPage = lazy(() => import("@/pages/OffersPage"))
const MethodPage = lazy(() => import("@/pages/MethodPage"))
const AboutPage = lazy(() => import("@/pages/AboutPage"))
const ContactPage = lazy(() => import("@/pages/ContactPage"))
const CasPage = lazy(() => import("@/pages/CasPage"))
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"))
const MentionsLegalesPage = lazy(() => import("@/pages/MentionsLegalesPage"))
const ConfidentialitePage = lazy(() => import("@/pages/ConfidentialitePage"))

export function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <HelmetProvider>
          <Layout>
          <Suspense fallback={<PageSkeleton />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<OffersPage />} />
              <Route path="/services/:id" element={<OffersPage />} />
              <Route path="/methode" element={<MethodPage />} />
              <Route path="/a-propos" element={<AboutPage />} />
              <Route path="/diagnostic" element={<ContactPage />} />
              <Route path="/cas" element={<CasPage />} />
              <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
              <Route path="/confidentialite" element={<ConfidentialitePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
          </Layout>
        </HelmetProvider>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
