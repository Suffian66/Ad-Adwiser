import { SectionHeading } from '@/components/SectionHeading'
import { ServiceList } from '@/components/ServiceList'

export function CapabilitiesSection() {
    return (
        <section className="section capabilities-section">
            <div className="container">
                <SectionHeading
                    eyebrow="Our capabilities"
                    title="What we do"
                    description="The thinking, making and doing behind brands that live in the real world."
                />

                <ServiceList />
            </div>
        </section>
    )
}