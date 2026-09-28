export function AmbientBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-40 -top-40 size-[42rem] rounded-full bg-primary/25 blur-[140px] animate-float-slow" />
      <div className="absolute -right-48 top-1/3 size-[36rem] rounded-full bg-primary/15 blur-[160px] animate-float-slow [animation-delay:-6s]" />
      <div className="absolute -bottom-56 left-1/4 size-[40rem] rounded-full bg-[oklch(0.45_0.2_15)]/20 blur-[160px] animate-float-slow [animation-delay:-12s]" />
      <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
    </div>
  )
}
