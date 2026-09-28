'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#studio', label: 'Studio' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="glass-strong mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full pl-6 pr-2">
        <Link href="#top" className="flex items-center gap-2" aria-label="Redraptor Studios home">
          <span aria-hidden="true" className="size-2.5 rounded-full bg-primary shadow-[0_0_16px_2px] shadow-primary/70" />
          <span className="font-serif text-2xl leading-none">Redraptor Studios</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_8px_30px_-8px] shadow-primary/70 transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Start a project
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full hover:bg-white/5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="glass-strong mx-auto mt-2 max-w-6xl rounded-3xl md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {[...navItems, { href: '#contact', label: 'Start a project' }].map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)} className="block py-3 font-serif text-2xl">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
