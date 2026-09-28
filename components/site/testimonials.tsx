import { Quote } from 'lucide-react'
import { SectionLabel } from './section-label'

const testimonials = [
  {
    quote:
      'Redraptor Studios designed our restaurant, our identity and the launch campaign. Having one team meant everything felt like it belonged together — we were fully booked in week two.',
    name: 'Giulia Moretti',
    role: 'Founder, Osteria Verde',
  },
  {
    quote:
      'Their renders sold 60% of units off-plan. Buyers kept telling us the images felt like real photographs of a finished building.',
    name: 'Daniel Okafor',
    role: 'Sales Director, Harbour Developments',
  },
  {
    quote:
      'From packaging to paid social, the brand finally looks premium everywhere. Our conversion rate doubled after the relaunch.',
    name: 'Amara Lind',
    role: 'CEO, Maré Skincare',
  },
]

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel index="05">Kind words</SectionLabel>
        <h2 id="testimonials-heading" className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">
          Clients who <span className="text-gradient-red">came back.</span>
        </h2>

        <ul className="mt-14 grid gap-4 md:grid-cols-3" role="list">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="glass flex h-full flex-col justify-between gap-8 rounded-3xl p-7">
                <Quote className="size-8 text-primary" aria-hidden="true" />
                <blockquote className="font-serif text-2xl leading-snug">
                  <p>{t.quote}</p>
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-white/10 pt-5">
                  <span
                    aria-hidden="true"
                    className="flex size-10 items-center justify-center rounded-full bg-primary/20 text-sm font-medium text-primary"
                  >
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                  <span>
                    <span className="block text-sm font-medium">{t.name}</span>
                    <span className="block text-sm text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
