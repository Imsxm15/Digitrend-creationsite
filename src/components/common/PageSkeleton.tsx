import { cn } from "@/lib/utils"

interface PageSkeletonProps {
  variant?: "default" | "services" | "diagnostic"
}

export function PageSkeleton({ variant = "default" }: PageSkeletonProps) {
  if (variant === "diagnostic") {
    return (
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-32">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <div className="skeleton-panel p-8">
              <div className="skeleton-bar w-28" />
              <div className="mt-5 space-y-3">
                <div className="skeleton-bar h-12 w-full max-w-md" />
                <div className="skeleton-bar h-12 w-4/5" />
              </div>
              <div className="mt-6 space-y-3">
                <div className="skeleton-bar w-full max-w-xl" />
                <div className="skeleton-bar w-5/6" />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="skeleton-panel p-5">
                  <div className="skeleton-bar w-24" />
                  <div className="mt-4 skeleton-bar h-6 w-20" />
                  <div className="mt-3 skeleton-bar w-11/12" />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="skeleton-panel p-8">
              <div className="skeleton-bar w-40" />
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className={cn("space-y-3", index > 1 && "md:col-span-2")}>
                    <div className="skeleton-bar w-28" />
                    <div className="skeleton-bar h-12 w-full" />
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                <div className="skeleton-bar w-32" />
                <div className="skeleton-bar h-32 w-full" />
              </div>
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-mineral-dark/80 pt-6">
                <div className="space-y-3">
                  <div className="skeleton-bar w-44" />
                  <div className="skeleton-bar w-52" />
                </div>
                <div className="skeleton-bar h-12 w-48" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === "services") {
    return (
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-32">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <div className="skeleton-panel p-8">
              <div className="skeleton-bar w-24" />
              <div className="mt-5 space-y-3">
                <div className="skeleton-bar h-11 w-full max-w-md" />
                <div className="skeleton-bar h-11 w-4/5" />
              </div>
              <div className="mt-6 space-y-3">
                <div className="skeleton-bar w-full max-w-xl" />
                <div className="skeleton-bar w-3/4" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-5 md:grid-cols-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className={cn("skeleton-panel p-6", index === 0 && "md:col-span-2")}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="skeleton-bar w-16" />
                    <div className="skeleton-bar w-28" />
                  </div>
                  <div className="mt-5 space-y-3">
                    <div className="skeleton-bar h-7 w-3/4" />
                    <div className="skeleton-bar w-full" />
                    <div className="skeleton-bar w-11/12" />
                    <div className="skeleton-bar w-4/5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="skeleton-page px-6 pt-32">
      <div className="skeleton-panel w-full max-w-3xl p-8">
        <div className="skeleton-bar w-40" />
        <div className="mt-6 space-y-3">
          <div className="skeleton-bar h-10 w-full" />
          <div className="skeleton-bar h-10 w-5/6" />
        </div>
        <div className="mt-6 space-y-3">
          <div className="skeleton-bar w-full" />
          <div className="skeleton-bar w-3/4" />
        </div>
      </div>
    </div>
  )
}
