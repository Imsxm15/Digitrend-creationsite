import { Component, type ErrorInfo, type ReactNode } from "react"
import { Link } from "react-router-dom"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-graphite-deep px-4">
          <div className="system-shell max-w-xl rounded-lg px-8 py-10 text-center md:px-12 md:py-14">
            <p className="system-eyebrow mb-4 text-copper">
              ERREUR SYSTÈME
            </p>
            <h1
              className="system-title-hero mb-4 text-ivory"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}
            >
              Quelque chose s'est mal passé.
            </h1>
            <p className="system-copy mb-8 text-ivory-muted">
              Une erreur inattendue est survenue. Rechargez la page ou revenez à l'accueil.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => window.location.reload()}
                className="system-button-text btn-copper-glow h-11 rounded-[4px] bg-copper px-7 text-graphite-deep hover:bg-copper-light"
              >
                Recharger la page
              </button>
              <Link
                to="/"
                className="system-button-text flex h-11 items-center rounded-[4px] border border-ivory-muted bg-transparent px-7 text-ivory hover:border-copper hover:text-copper"
                onClick={() => this.setState({ hasError: false })}
              >
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
