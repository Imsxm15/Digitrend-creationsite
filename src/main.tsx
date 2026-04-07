import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"

if (
  typeof window !== "undefined" &&
  window.location.hostname !== "localhost" &&
  window.location.hostname !== "127.0.0.1" &&
  !document.querySelector('script[data-domain="digitrend-creation.fr"]')
) {
  const plausibleScript = document.createElement("script")
  plausibleScript.defer = true
  plausibleScript.dataset.domain = "digitrend-creation.fr"
  plausibleScript.src = "https://plausible.io/js/script.js"
  document.head.appendChild(plausibleScript)
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
