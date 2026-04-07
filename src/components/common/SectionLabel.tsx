import { cn } from "@/lib/utils"

interface SectionLabelProps {
  number?: string
  label: string
  className?: string
}

export function SectionLabel({ number, label, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3 mb-6", className)}>
      {number && (
        <span
          className="font-mono text-xs tracking-widest"
          style={{ color: "var(--copper)" }}
        >
          {number}
        </span>
      )}
      <span
        className="font-mono text-xs tracking-widest uppercase"
        style={{ color: "var(--copper)" }}
      >
        {label}
      </span>
    </div>
  )
}
