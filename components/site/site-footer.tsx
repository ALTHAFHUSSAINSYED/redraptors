import Image from 'next/image'

const columns = [
  {
    title: 'Services',
    links: ['Graphic Design', 'Interior Design', 'Architectural Visualization', 'Digital & Print Marketing'],
    href: '#services',
  },
  { title: 'Studio', links: ['Work', 'Process', 'About', 'Contact'], href: '#studio' },
  { title: 'Follow', links: ['Instagram', 'Behance', 'LinkedIn', 'Pinterest'], href: '#' },
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
                {col.links.map((link) => (
                  <li key={link}>
                    <a href={col.href} className="transition-colors hover:text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-14 flex flex-col justify-between gap-2 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>{`© ${new Date().getFullYear()} Redraptor Studios Private Limited. All rights reserved.`}</p>
          <p>Hyderabad</p>
        </div>
      </div>
    </footer>
  )
}
