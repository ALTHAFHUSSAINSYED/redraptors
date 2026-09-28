import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionLabel } from './section-label'

const projects = [
  {
    title: 'Osteria Verde',
    client: 'Hospitality group',
    tags: ['Interior', 'Branding'],
    year: '2026',
    image: '/images/project-restaurant.png',
    alt: 'Boutique restaurant interior with curved banquettes in terracotta and green',
    span: 'md:col-span-7',
  },
  {
    title: 'The Fins Residences',
    client: 'Harbour Developments',
    tags: ['Arch Viz', 'Sales campaign'],
    year: '2025',
    image: '/images/project-tower.png',
    alt: 'Dusk render of a residential tower with vertical timber fins',
    span: 'md:col-span-5',
  },
  {
    title: 'Maré Skincare',
    client: 'D2C beauty brand',
    tags: ['Identity', 'Packaging'],
    year: '2025',
    image: '/images/graphic-design.png',
    alt: 'Maré brand stationery and packaging flat lay',
    span: 'md:col-span-5',
  },
  {
    title: 'Say It Louder',
    client: 'Civic arts festival',
    tags: ['OOH', 'Social', 'Paid media'],
    year: '2026',
    image: '/images/marketing.png',
    alt: 'Festival billboard and matching social post',
    span: 'md:col-span-7',
  },
]

export function SelectedWork() {
  return (
    <section id="work" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel index="02">Selected work</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">Recent projects</h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            A cross-section of briefs where multiple disciplines worked as one team.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-12" role="list">
          {projects.map((project) => (
            <li key={project.title} className={cn('group', project.span)}>
              <a
                href="#contact"
                className="relative block aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 sm:aspect-[4/3] md:aspect-auto md:h-[30rem]"
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent transition-colors group-hover:from-primary/40"
                />

                <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-4 rounded-3xl glass p-5">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl">{project.title}</h3>
                    <p className="mt-1 text-sm text-foreground/70">
                      {project.client} <span className="tabular-nums">· {project.year}</span>
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
