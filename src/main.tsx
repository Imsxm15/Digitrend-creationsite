import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"
import { isCanonicalProductionHost, PLAUSIBLE_DOMAIN } from "./lib/siteConfig"

if (
  typeof window !== "undefined" &&
  isCanonicalProductionHost(window.location.hostname) &&
  !document.querySelector(`script[data-domain="${PLAUSIBLE_DOMAIN}"]`)
) {
  const plausibleScript = document.createElement("script")
  plausibleScript.defer = true
  plausibleScript.dataset.domain = PLAUSIBLE_DOMAIN
  plausibleScript.src = "https://plausible.io/js/script.js"
  document.head.appendChild(plausibleScript)
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
