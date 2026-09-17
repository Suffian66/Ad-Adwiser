
import { CTA } from '@/components/CTA'
import { CapabilitiesSection } from '@/components/home/Capabilities'
import { ClientStrip } from '@/components/home/ClientStrip'
import { Hero } from '@/components/home/Hero'
import { IndustrySection } from '@/components/home/Industries'
import { IntroSection } from '@/components/home/IntroSection'
import { PrinciplesSection } from '@/components/home/Principles'
import { ProcessSection } from '@/components/home/Process'
import { StatementSection } from '@/components/home/Statement'
import { WorkSection } from '@/components/home/WorkSection'

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