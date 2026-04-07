import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "@/components/layout/Layout"
import { HomePage } from "@/pages/HomePage"
import { OffersPage } from "@/pages/OffersPage"
import { MethodPage } from "@/pages/MethodPage"
import { AboutPage } from "@/pages/AboutPage"
import { ContactPage } from "@/pages/ContactPage"
import { CasPage } from "@/pages/CasPage"
import { NotFoundPage } from "@/pages/NotFoundPage"
import { MentionsLegalesPage } from "@/pages/MentionsLegalesPage"
import { ConfidentialitePage } from "@/pages/ConfidentialitePage"

export function App() {
  return (
    <BrowserRouter>
      <Layout>
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
      </Layout>
    </BrowserRouter>
  )
}

export default App
