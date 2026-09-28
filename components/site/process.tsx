import { SectionLabel } from './section-label'

const steps = [
  {
    title: 'Discover',
    body: 'Workshops, site visits and audits to understand your audience, space and commercial goals.',
  },
  {
    title: 'Define',
    body: 'A single creative direction — moodboards, brand strategy, spatial concept and campaign plan.',
  },
  {
    title: 'Design',
    body: 'Iterative design rounds with renders and mockups so you see the outcome before committing.',
  },
  {
    title: 'Deliver',
    body: 'Print-ready files, construction drawings, launched campaigns and on-site handover.',
  },
]

export function Process() {
  return (
    <section id="process" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel index="03">Process</SectionLabel>
        <h2 className="mt-6 max-w-2xl text-balance font-serif text-4xl leading-tight sm:text-6xl">
          A clear path from first sketch to <span className="text-gradient-red">final handover.</span>
        </h2>

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="glass group relative flex min-h-72 flex-col justify-between gap-10 overflow-hidden rounded-3xl p-7 transition-transform hover:-translate-y-1"
            >
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 size-40 rounded-full bg-primary/0 blur-3xl transition-colors duration-500 group-hover:bg-primary/40"
              />
              <span className="relative font-serif text-7xl leading-none text-primary tabular-nums">0{i + 1}</span>
              <div className="relative">
                <h3 className="text-xl font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
