import { PageMeta } from "@/components/common/PageMeta"
import { Link } from "react-router-dom"

export function NotFoundPage() {
  return (
    <>
    <PageMeta
      title="Page introuvable"
      description="Cette page n'existe pas ou n'existe plus."
    />
    <section className="min-h-screen bg-graphite-deep px-6 py-32">
      <div className="mx-auto flex max-w-4xl items-center justify-center">
        <div className="system-shell w-full rounded-[0.5rem] px-8 py-10 text-center md:px-12 md:py-14">
          <p className="system-eyebrow mb-4 text-copper">
            404 &middot; ROUTE ABSENTE
          </p>
          <h1 className="system-title-hero mb-6 text-center text-ivory text-[clamp(2rem,5vw,4rem)]">
            Page introuvable.
          </h1>
          <p className="system-copy mx-auto mb-10 max-w-md text-ivory-muted">
            Cette page n&apos;existe pas, ou n&apos;existe plus. Revenons
            &agrave; quelque chose qui fonctionne.
          </p>
          <Link
            to="/"
            className="system-button-text btn-copper-glow inline-flex rounded-[0.5rem] bg-copper px-8 py-4 text-graphite-deep transition-all duration-300"
          >
            Retour &agrave; l&apos;accueil
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default NotFoundPage
