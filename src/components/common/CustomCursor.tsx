import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const pos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      const dot = dotRef.current
      const ring = ringRef.current
      if (!dot || !ring) {
        rafRef.current = requestAnimationFrame(animate)
        return
      }
      dot.style.left = pos.current.x + "px"
      dot.style.top = pos.current.y + "px"

      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.14
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.14
      ring.style.left = ringPos.current.x + "px"
      ring.style.top = ringPos.current.y + "px"
      rafRef.current = requestAnimationFrame(animate)
    }

    const onEnter = (e: MouseEvent) => {
      const target = e.target as Element
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]")
      ) {
        setIsHovering(true)
      }
    }
    const onLeave = (e: MouseEvent) => {
      const target = e.target as Element
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]")
      ) {
        setIsHovering(false)
      }
    }

    document.addEventListener("mousemove", onMove)
    document.addEventListener("mouseover", onEnter)
    document.addEventListener("mouseout", onLeave)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", onEnter)
      document.removeEventListener("mouseout", onLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot${isHovering ? " hover" : ""}`}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`cursor-ring${isHovering ? " hover" : ""}`}
        aria-hidden="true"
      />
    </>
  )
}
