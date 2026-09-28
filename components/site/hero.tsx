import Image from 'next/image'
import { ArrowDownRight, Sparkles } from 'lucide-react'

const disciplines = ['Graphic Design', 'Interior Design', 'Arch Viz', 'Digital & Print Marketing']

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pt-28">
        <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
          <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
          Multidisciplinary design studio — HYDERABAD
        </div>

        <h1 className="mt-8 max-w-5xl text-balance font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-[7.5rem]">
          We shape brands, spaces <em className="text-gradient-red pr-2">&amp;</em> the stories that sell them.
        </h1>

        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            One studio for identity, interiors, photoreal visualization and campaigns — so your brand looks the same
            on a business card, a billboard and a finished room.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-10px] shadow-primary transition-transform hover:-translate-y-0.5"
            >
              Start a project
              <ArrowDownRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#work"
              className="glass inline-flex items-center rounded-full px-7 py-3.5 text-sm font-medium transition-colors hover:bg-white/10"
            >
              View selected work
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <figure className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 sm:aspect-[21/9]">
          <Image
            src="/images/hero-archviz.png"
            alt="Photoreal architectural visualization of a concrete and timber house with a reflecting pool at golden hour"
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-primary/10" />

          <figcaption className="glass absolute left-4 top-4 rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] sm:left-6 sm:top-6">
            Casa Alvor — Arch Viz / 2026
          </figcaption>

          <ul
            aria-label="Disciplines"
            className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2 sm:inset-x-6 sm:bottom-6"
          >
            {disciplines.map((d) => (
              <li key={d} className="glass rounded-full px-4 py-2 text-sm">
                {d}
              </li>
            ))}
          </ul>

          <div className="glass-red absolute bottom-6 right-6 hidden w-64 rounded-3xl p-5 lg:block">
            <p className="font-serif text-5xl leading-none">340+</p>
            <p className="mt-2 text-sm text-foreground/80">Projects delivered across 14 countries since 2025.</p>
          </div>
        </figure>
      </div>
    </section>
  )
}
