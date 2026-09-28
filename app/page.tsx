import { AmbientBackdrop } from '@/components/site/ambient-backdrop'
import { SiteHeader } from '@/components/site/site-header'
import { Hero } from '@/components/site/hero'
import { Services } from '@/components/site/services'
import { SelectedWork } from '@/components/site/selected-work'
import { Process } from '@/components/site/process'
import { Studio } from '@/components/site/studio'
import { Testimonials } from '@/components/site/testimonials'
import { Contact } from '@/components/site/contact'
import { SiteFooter } from '@/components/site/site-footer'

export default function Page() {
  return (
    <div className="relative isolate">
      <AmbientBackdrop />
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <SelectedWork />
        <Process />
        <Studio />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
