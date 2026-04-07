import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "in"
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let revealTimer: number | null = null

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealTimer = window.setTimeout(() => {
        setIsVisible(true)
      }, 0)
      return () => {
        if (revealTimer) {
          window.clearTimeout(revealTimer)
        }
      }
    }

    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
      revealTimer = window.setTimeout(() => {
        setIsVisible(true)
      }, delay)
      return () => {
        if (revealTimer) {
          window.clearTimeout(revealTimer)
        }
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealTimer = window.setTimeout(() => {
              setIsVisible(true)
            }, delay)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (revealTimer) {
        window.clearTimeout(revealTimer)
      }
    }
  }, [delay, direction])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
        isVisible ? "translate-y-0 opacity-100" : "opacity-0",
        direction === "up" && !isVisible && "translate-y-7",
        className
      )}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
