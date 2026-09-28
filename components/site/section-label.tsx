export function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="glass inline-flex items-center gap-3 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em]">
      <span className="tabular-nums text-primary">{index}</span>
      <span aria-hidden="true" className="h-3 w-px bg-white/20" />
      <span className="text-muted-foreground">{children}</span>
    </p>
  )
}
