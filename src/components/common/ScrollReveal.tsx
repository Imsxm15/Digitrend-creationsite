import { useEffect, useRef, type ReactNode } from "react"
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

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    if (el.getBoundingClientRect().top >= window.innerHeight * 0.92 || typeof el.animate !== "function") {
      return
    }

    const animation =
      direction === "in"
        ? el.animate(
            [
              { transform: "scale(0.985)" },
              { transform: "scale(1)" },
            ],
            {
              duration: 700,
              delay,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "backwards",
            }
          )
        : el.animate(
            [
              { transform: "translateY(28px)" },
              { transform: "translateY(0)" },
            ],
            {
              duration: 700,
              delay,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "backwards",
            }
          )

    return () => {
      animation.cancel()
    }
  }, [delay, direction])

  return (
    <div
      ref={ref}
      className={cn("opacity-100", className)}
    >
      {children}
    </div>
  )
}
