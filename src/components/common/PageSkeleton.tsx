export function PageSkeleton() {
  return (
    <div className="skeleton-page pt-32">
      <div className="skeleton-bar w-48" />
      <div className="skeleton-bar w-96" style={{ height: "2rem" }} />
      <div className="skeleton-bar w-72" />
      <div className="skeleton-bar w-64 opacity-50" />
    </div>
  )
}
