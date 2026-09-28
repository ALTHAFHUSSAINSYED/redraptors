import Image from 'next/image'
import { SectionLabel } from './section-label'

const stats = [
  { value: '12', label: 'Years in practice' },
  { value: '340+', label: 'Projects delivered' },
  { value: '28', label: 'Designers, architects & marketers' },
  { value: '14', label: 'Countries served' },
]

export function Studio() {
  return (
    <section id="studio" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="glass grid gap-10 rounded-[2.5rem] p-4 sm:p-6 lg:grid-cols-12 lg:p-8">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] lg:aspect-auto lg:h-full lg:min-h-[32rem]">
              <Image
                src="/images/interior-design.png"
                alt="A calm living room designed by the Redraptor Studios interiors team"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay" />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-12 p-2 lg:col-span-7 lg:p-6">
            <div>
              <SectionLabel index="04">Studio</SectionLabel>
              <p className="mt-6 text-balance font-serif text-3xl leading-snug sm:text-4xl">
                We believe good design is felt before it&apos;s noticed — in how a logo reads at a glance, how a room
                holds the light, and how a campaign <span className="text-gradient-red">makes you stop.</span>
              </p>
              <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
                Redraptor Studios brings graphic designers, interior architects, 3D artists and marketers under one roof. That
                means fewer handoffs, one consistent vision, and a single partner accountable for the result.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <div key={stat.label} className={i === 1 ? 'glass-red rounded-3xl p-5' : 'glass rounded-3xl p-5'}>
                  <dt className="text-sm text-foreground/70">{stat.label}</dt>
                  <dd className="mt-2 font-serif text-5xl tabular-nums">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
