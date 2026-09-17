
import { CTA } from '@/components/CTA'
import { CapabilitiesSection } from '@/components/hero/Capabilities'
import { ClientStrip } from '@/components/hero/ClientStrip'
import { Hero } from '@/components/hero/Hero'
import { IndustrySection } from '@/components/hero/Industries'
import { IntroSection } from '@/components/hero/IntroSection'
import { PrinciplesSection } from '@/components/hero/Principles'
import { ProcessSection } from '@/components/hero/Process'
import { StatementSection } from '@/components/hero/Statement'
import { TestimonialSection } from '@/components/hero/Testimonial'
import { WorkSection } from '@/components/hero/WorkSection'

export default function Page() {
  return (
    <main>
      <Hero />

      <ClientStrip />

      <CapabilitiesSection />

      <ProcessSection />

      <IntroSection />

      <WorkSection />

      <PrinciplesSection />

      <IndustrySection />

      <StatementSection />

      {/* <TestimonialSection /> */}

      <CTA />
    </main>
  )
}