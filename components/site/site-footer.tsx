import Image from 'next/image'
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon, SOCIAL_LINKS } from './social-icons'

const columns = [
  {
    title: 'Services',
    items: [
      { label: 'Graphic Design', href: '#services' },
      { label: 'Interior Design', href: '#services' },
      { label: 'Architectural Visualization', href: '#services' },
      { label: 'Digital & Print Marketing', href: '#services' },
    ],
  },
  {
    title: 'Studio',
    items: [
      { label: 'Work', href: '#work' },
      { label: 'Process', href: '#process' },
      { label: 'About', href: '#studio' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Follow',
    items: [
      { label: 'Instagram', href: SOCIAL_LINKS.instagram, external: true },
      { label: 'Facebook', href: SOCIAL_LINKS.facebook, external: true },
      { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, external: true },
      { label: 'WhatsApp', href: SOCIAL_LINKS.whatsapp, external: true },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="px-4 pb-4">
      <div className="glass-strong mx-auto max-w-7xl rounded-[2.5rem] px-6 py-14 lg:px-12">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="relative h-28 w-52 sm:h-36 sm:w-64">
              <Image
                src="/images/logo.png"
                alt="Redraptor Studios"
                fill
                className="rounded-2xl object-contain object-left"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Graphic design, interiors, architectural visualization and marketing — under one roof.
            </p>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="md:col-span-2">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-2 text-sm">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="transition-colors hover:text-primary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>{`© ${new Date().getFullYear()} Redraptor Studios Private Limited. All rights reserved.`}</p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-emerald-500/15 hover:text-emerald-400"
              >
                <WhatsAppIcon className="size-4" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-pink-500/40 hover:bg-pink-500/15 hover:text-pink-400"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-blue-500/15 hover:text-blue-400"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-sky-500/40 hover:bg-sky-500/15 hover:text-sky-400"
              >
                <LinkedInIcon className="size-4" />
              </a>
            </div>
            <span>Hyderabad</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
