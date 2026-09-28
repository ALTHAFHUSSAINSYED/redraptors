'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionLabel } from './section-label'

const services = [
  {
    id: 'graphic',
    title: 'Graphic Design',
    summary: 'Identities with a point of view — built into systems your team can actually use.',
    items: ['Brand identity & logo', 'Packaging & labels', 'Editorial & print', 'Signage & wayfinding'],
    image: '/images/graphic-design.png',
    alt: 'Brand identity stationery and packaging flat lay',
  },
  {
    id: 'interior',
    title: 'Interior Design',
    summary: 'Residential and hospitality spaces that feel calm, considered and made to last.',
    items: ['Concept & space planning', 'Material & FF&E selection', 'Joinery & lighting design', 'Site coordination'],
    image: '/images/interior-design.png',
    alt: 'Serene living room with limewash walls, oak furniture and linen sofa',
  },
  {
    id: 'archviz',
    title: 'Architectural Visualization',
    summary: 'Photoreal stills, animations and virtual tours that sell projects before they are built.',
    items: ['Exterior & interior renders', '3D walkthrough animation', '360° virtual tours', 'Planning & sales imagery'],
    image: '/images/project-tower.png',
    alt: 'Render of a slender timber-finned residential tower at dusk',
  },
  {
    id: 'marketing',
    title: 'Digital & Traditional Marketing',
    summary: 'Campaigns that run from feed to billboard — strategy, content and media in one plan.',
    items: ['Campaign strategy', 'Social & paid media', 'Web & email content', 'Print, OOH & brochures'],
    image: '/images/marketing.png',
    alt: 'Billboard and matching social media post from a typographic campaign',
  },
]

export function Services() {
  const [active, setActive] = useState(services[0].id)
  const current = services.find((s) => s.id === active) ?? services[0]

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel index="01">Services</SectionLabel>
            <h2 className="mt-6 max-w-2xl text-balance font-serif text-4xl leading-tight sm:text-6xl">
              Four disciplines, <span className="text-gradient-red">one creative direction.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Engage us for a single service or bring us in end-to-end — from naming the brand to styling the room.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <ul className="flex flex-col gap-3 lg:col-span-7" role="list">
            {services.map((service, i) => {
              const isActive = service.id === active
              return (
                <li
                  key={service.id}
                  className={cn(
                    'rounded-3xl transition-all duration-300',
                    isActive ? 'glass-red' : 'glass hover:bg-white/[0.07]',
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setActive(service.id)}
                    onMouseEnter={() => setActive(service.id)}
                    onFocus={() => setActive(service.id)}
                    aria-expanded={isActive}
                    aria-controls={`service-${service.id}`}
                    className="flex w-full items-center gap-5 px-6 py-5 text-left"
                  >
                    <span
                      className={cn(
                        'flex size-10 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums',
                        isActive ? 'border-white/30 bg-white/10' : 'border-white/10 text-muted-foreground',
                      )}
                    >
                      0{i + 1}
                    </span>
                    <span className="flex-1 font-serif text-2xl sm:text-3xl">{service.title}</span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className={cn('size-5 transition-transform', isActive ? 'rotate-45' : 'text-muted-foreground')}
                    />
                  </button>
                  <div
                    id={`service-${service.id}`}
                    className={cn(
                      'grid transition-all duration-300',
                      isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 sm:pl-[5.25rem]">
                        <p className="max-w-lg text-foreground/80">{service.summary}</p>
                        <ul className="mt-4 flex flex-wrap gap-2 text-sm">
                          {service.items.map((item) => (
                            <li key={item} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 lg:sticky lg:top-28">
              {services.map((service) => (
                <Image
                  key={service.id}
                  src={service.image}
                  alt={service.id === current.id ? service.alt : ''}
                  aria-hidden={service.id !== current.id}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className={cn(
                    'object-cover transition-opacity duration-500',
                    service.id === current.id ? 'opacity-100' : 'opacity-0',
                  )}
                />
              ))}
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <p className="glass absolute inset-x-4 bottom-4 rounded-2xl px-5 py-4 text-sm">
                <span className="block text-xs uppercase tracking-[0.2em] text-primary">Now viewing</span>
                <span className="mt-1 block font-serif text-2xl">{current.title}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
