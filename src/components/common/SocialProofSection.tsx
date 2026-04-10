import type { CoreRouteKey } from "@/types/site"
import {
  filterProofLogos,
  filterProofMetrics,
  filterTestimonials,
  founderSpotlight,
} from "@/data/socialProof"
import { ScrollReveal } from "@/components/common/ScrollReveal"

type SocialProofVariant = "logosOnly" | "logos+testimonials" | "logos+metrics+testimonials"

interface SocialProofSectionProps {
  route: CoreRouteKey
  variant?: SocialProofVariant
  title: string
  intro: string
  showFounder?: boolean
  className?: string
}

export function SocialProofSection({
  route,
  variant = "logos+metrics+testimonials",
  title,
  intro,
  showFounder = false,
  className = "",
}: SocialProofSectionProps) {
  const logos = filterProofLogos(route)
  const metrics = filterProofMetrics(route)
  const routeTestimonials = filterTestimonials(route)

  const showMetrics = variant === "logos+metrics+testimonials"
  const showTestimonials = variant !== "logosOnly"

  return (
    <section className={`py-20 md:py-24 ${className}`.trim()}>
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-xs tracking-[0.18em] text-copper">
              PREUVES & SIGNALS
            </p>
            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-ivory md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 font-body text-sm leading-7 text-ivory-muted md:text-base">
              {intro}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={70}>
          <div className="mt-10 rounded-[0.5rem] border border-mineral-dark bg-graphite-light px-5 py-5 md:px-7">
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              {logos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex min-h-14 min-w-[8rem] flex-1 items-center justify-center rounded-[0.5rem] border border-mineral-dark bg-graphite-mid px-4 py-4"
                >
                  <img
                    src={logo.asset}
                    alt={logo.name}
                    width={160}
                    height={48}
                    loading="lazy"
                    className="h-8 w-auto max-w-full object-contain opacity-85"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {showMetrics && (
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {metrics.map((metric, index) => (
              <ScrollReveal key={metric.label} delay={120 + index * 60}>
                <article className="rounded-[0.5rem] border border-mineral-dark bg-graphite-light px-5 py-5">
                  <p className="font-display text-4xl font-bold tracking-[-0.05em] text-copper">
                    {metric.value}
                  </p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-steel-light">
                    {metric.label}
                  </p>
                  <p className="mt-3 font-body text-sm leading-7 text-ivory-soft">{metric.context}</p>
                  <p className="mt-4 font-body text-xs leading-6 text-ivory-muted">{metric.source}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        )}

        {showTestimonials && (
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {routeTestimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.name} delay={180 + index * 60}>
                <article className="rounded-[0.5rem] border border-mineral-dark bg-graphite-light px-5 py-5">
                  <p className="font-body text-sm leading-7 text-ivory-soft">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-5">
                    <p className="font-display text-lg font-semibold text-ivory">{testimonial.name}</p>
                    <p className="mt-1 font-body text-sm text-ivory-muted">{testimonial.role}</p>
                    <p className="mt-1 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-copper">
                      {testimonial.source}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        )}

        {showFounder && (
          <ScrollReveal delay={260}>
            <article className="mt-8 grid gap-6 rounded-[0.5rem] border border-copper/20 bg-gradient-to-br from-copper/6 to-graphite-light px-6 py-6 md:grid-cols-[12rem_minmax(0,1fr)] md:items-center">
              <img
                src={founderSpotlight.image}
                alt={founderSpotlight.name}
                width={192}
                height={192}
                loading="lazy"
                className="h-40 w-40 rounded-[0.5rem] object-cover"
              />
              <div>
                <p className="font-display text-2xl font-bold tracking-[-0.03em] text-ivory">
                  {founderSpotlight.name}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-copper">
                  {founderSpotlight.role}
                </p>
                <p className="mt-4 font-body text-sm leading-7 text-ivory-soft">
                  {founderSpotlight.summary}
                </p>
                <ul className="mt-4 space-y-2">
                  {founderSpotlight.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-copper" aria-hidden="true" />
                      <span className="font-body text-sm text-ivory-muted">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
