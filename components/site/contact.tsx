'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionLabel } from './section-label'

const STUDIO_EMAIL = 'enquiries@redraptorstudios.com'
const serviceOptions = ['Graphic Design', 'Interior Design', 'Arch Viz', 'Digital Marketing', 'Print & OOH']
const budgets = ['< $10k', '$10–25k', '$25–75k', '$75k+']

const chip = 'rounded-full border px-4 py-2 text-sm transition-all'
const chipOn = 'border-primary bg-primary text-primary-foreground shadow-[0_6px_24px_-6px] shadow-primary'
const chipOff = 'border-white/15 bg-white/5 hover:border-white/40'

export function Contact() {
  const [selected, setSelected] = useState<string[]>([])
  const [budget, setBudget] = useState<string>('')

  function toggle(service: string) {
    setSelected((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Services: ${selected.join(', ') || 'Not sure yet'}`,
      `Budget: ${budget || 'Not specified'}`,
      '',
      message,
    ].join('\n')
    window.location.href = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(
      `New project enquiry — ${name}`,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 mx-auto h-[28rem] max-w-4xl -translate-y-1/2 rounded-full bg-primary/30 blur-[120px]"
      />
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <SectionLabel index="06">Contact</SectionLabel>
          <h2 className="mt-6 text-balance font-serif text-5xl leading-[1.02] sm:text-7xl">
            Have a brief? <span className="text-gradient-red">Let&apos;s build it.</span>
          </h2>
          <p className="mt-6 max-w-sm text-muted-foreground">
            Tell us a little about your project and we&apos;ll reply within two working days with next steps.
          </p>

          <dl className="mt-10 flex flex-col gap-3 text-sm">
            <div className="glass rounded-2xl px-5 py-4">
              <dt className="text-muted-foreground">Email</dt>
              <dd className="mt-1 text-lg">
                <a href={`mailto:${STUDIO_EMAIL}`} className="hover:text-primary">
                  {STUDIO_EMAIL}
                </a>
              </dd>
            </div>
            <div className="glass rounded-2xl px-5 py-4">
              <dt className="text-muted-foreground">Phone</dt>
              <dd className="mt-1 text-lg">
                <a href="tel:+918500223222" className="hover:text-primary">
                  +91 8500223222
                </a>
              </dd>
            </div>
            <div className="glass rounded-2xl px-5 py-4">
              <dt className="text-muted-foreground">Studios</dt>
              <dd className="mt-1 text-lg">Hyderabad - Warangal - Narasaraopet</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass flex flex-col gap-8 rounded-[2rem] p-6 sm:p-10 lg:col-span-7"
        >
          <fieldset>
            <legend className="text-sm text-muted-foreground">What do you need?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {serviceOptions.map((s) => {
                const on = selected.includes(s)
                return (
                  <button
                    key={s}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(s)}
                    className={cn(chip, on ? chipOn : chipOff)}
                  >
                    {s}
                  </button>
                )
              })}
            </div>
          </fieldset>

          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Your name" name="name" autoComplete="name" />
            <Field label="Email" name="email" type="email" autoComplete="email" />
          </div>

          <fieldset>
            <legend className="text-sm text-muted-foreground">Budget</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {budgets.map((b) => (
                <button
                  key={b}
                  type="button"
                  aria-pressed={budget === b}
                  onClick={() => setBudget(budget === b ? '' : b)}
                  className={cn(chip, 'tabular-nums', budget === b ? chipOn : chipOff)}
                >
                  {b}
                </button>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="message" className="text-sm text-muted-foreground">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Timeline, location, goals…"
              className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:bg-white/[0.07]"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-3 self-start rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-10px] shadow-primary transition-transform hover:-translate-y-0.5"
          >
            Send enquiry
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  autoComplete,
}: {
  label: string
  name: string
  type?: string
  autoComplete?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base outline-none transition-colors focus:border-primary focus:bg-white/[0.07]"
      />
    </div>
  )
}
