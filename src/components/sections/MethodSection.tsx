import { Link } from "react-router-dom"
import { ScrollReveal } from "@/components/common/ScrollReveal"
import { SectionLabel } from "@/components/common/SectionLabel"
import { StepCards } from "@/components/common/StepCards"
import { METHOD_STEPS } from "@/data/method"

export function MethodSection() {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-[92rem] px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4 md:sticky md:top-28 md:self-start">
            <ScrollReveal>
              <div className="system-shell rounded-[0.5rem] px-6 py-7 md:px-7">
                <SectionLabel number="03" label="Méthode" />
                <h2
                  className="mb-5 font-display font-bold text-ivory leading-[1.06] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(1.9rem, 3.3vw, 2.8rem)" }}
                >
                  Quatre étapes. Une logique simple à suivre.
                </h2>
                <p className="mb-6 font-body text-sm leading-7 text-ivory-muted">
                  Le but n&apos;est pas d&apos;ajouter une couche de process. Le but est de rendre visible,
                  priorisable, déployable et pilotable ce qui compte vraiment.
                </p>
                <Link
                  to="/methode"
                  className="system-button-text inline-flex items-center rounded-[0.5rem] border border-mineral-warm px-6 py-4 text-ivory-muted transition-all duration-300 hover:border-copper hover:text-copper"
                >
                  Voir la méthode complète
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-8">
            <StepCards
              items={METHOD_STEPS}
              desktopColumnsClassName="md:grid-cols-2 xl:grid-cols-2"
              cardWidthClassName="auto-cols-[88%] sm:auto-cols-[62%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
