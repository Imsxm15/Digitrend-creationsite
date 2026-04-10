import type { LucideIcon } from "lucide-react"
import { ScrollReveal } from "@/components/common/ScrollReveal"

export type StepCardItem = {
  id: string
  eyebrow?: string
  title: string
  description: string
  bullets?: string[]
  meta?: string
  icon: LucideIcon
  accentClassName?: string
}

interface StepCardsProps {
  items: StepCardItem[]
  desktopColumnsClassName?: string
  cardWidthClassName?: string
}

export function StepCards({
  items,
  desktopColumnsClassName = "md:grid-cols-2 xl:grid-cols-4",
  cardWidthClassName = "auto-cols-[84%] sm:auto-cols-[62%]",
}: StepCardsProps) {
  return (
    <div className="-mx-6 overflow-x-auto px-6 pb-2 md:mx-0 md:px-0 md:pb-0">
      <div
        className={`grid snap-x snap-mandatory grid-flow-col gap-4 ${cardWidthClassName} ${desktopColumnsClassName} md:grid-flow-row md:auto-cols-auto`}
      >
        {items.map((item, index) => {
          const Icon = item.icon

          return (
            <ScrollReveal key={item.id} delay={index * 60}>
              <article className="flex h-full snap-start flex-col rounded-[0.5rem] border border-mineral-dark bg-graphite-light px-5 py-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {item.eyebrow && (
                      <p className={`font-mono text-xs uppercase tracking-[0.16em] ${item.accentClassName ?? "text-copper"}`}>
                        {item.eyebrow}
                      </p>
                    )}
                    <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.02em] text-ivory">
                      {item.title}
                    </h3>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-[0.5rem] border border-copper/20 bg-copper/10 text-copper">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                </div>

                <p className="mt-4 font-body text-sm leading-7 text-ivory-soft">{item.description}</p>

                {item.bullets && item.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-copper" aria-hidden="true" />
                        <span className="font-body text-sm text-ivory-muted">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.meta && (
                  <p className="mt-5 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-steel-light">
                    {item.meta}
                  </p>
                )}
              </article>
            </ScrollReveal>
          )
        })}
      </div>
    </div>
  )
}
