import { Link } from "react-router-dom"

export function NotFoundPage() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "var(--graphite-deep)" }}
    >
      <p
        className="font-mono text-xs tracking-widest mb-4"
        style={{ color: "var(--copper)" }}
      >
        404
      </p>
      <h1
        className="font-display font-bold mb-6 text-center"
        style={{
          fontSize: "clamp(2rem, 5vw, 4rem)",
          color: "var(--ivory)",
          letterSpacing: "-0.03em",
        }}
      >
        Page introuvable.
      </h1>
      <p
        className="font-editorial italic text-lg mb-10 text-center max-w-md"
        style={{ color: "var(--ivory-muted)" }}
      >
        Cette page n'existe pas — ou n'existe plus. Revenons à quelque chose qui fonctionne.
      </p>
      <Link
        to="/"
        className="font-mono text-xs tracking-wider uppercase px-8 py-4 transition-all duration-300 btn-copper-glow"
        style={{
          backgroundColor: "var(--copper)",
          color: "var(--graphite-deep)",
          fontWeight: 600,
        }}
      >
        Retour à l'accueil
      </Link>
    </section>
  )
}
