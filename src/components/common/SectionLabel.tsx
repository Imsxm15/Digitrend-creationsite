import { cn } from "@/lib/utils"

interface SectionLabelProps {
  number?: string
  label: string
  className?: string
}

export function SectionLabel({ number, label, className }: SectionLabelProps) {
  return (
    <div className={cn("mb-3 flex items-center gap-2", className)}>
      <span className="system-eyebrow" style={{ color: "var(--copper)" }}>
        {number ? `${number} — ${label}` : label}
      </span>
    </div>
  )
}
