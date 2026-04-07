import { Link } from "react-router-dom"

export function NotFoundPage() {
  return (
    <section
      className="min-h-screen px-6 py-32"
      style={{ backgroundColor: "var(--graphite-deep)" }}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-center">
        <div className="system-shell w-full rounded-[0.5rem] px-8 py-10 text-center md:px-12 md:py-14">
          <p
            className="system-eyebrow mb-4"
            style={{ color: "var(--copper)" }}
          >
            404 · ROUTE ABSENTE
          </p>
          <h1
            className="system-title-hero mb-6 text-center"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              color: "var(--ivory)",
            }}
          >
            Page introuvable.
          </h1>
          <p
            className="system-copy mx-auto mb-10 max-w-md"
            style={{ color: "var(--ivory-muted)" }}
          >
            Cette page n&apos;existe pas, ou n&apos;existe plus. Revenons à quelque chose qui fonctionne.
          </p>
          <Link
            to="/"
            className="system-button-text inline-flex rounded-[0.5rem] px-8 py-4 transition-all duration-300 btn-copper-glow"
            style={{
              backgroundColor: "var(--copper)",
              color: "var(--graphite-deep)",
            }}
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </section>
  )
}
