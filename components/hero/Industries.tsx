import { SectionHeading } from '@/components/SectionHeading'
import { IndustryGrid } from '@/components/IndustryGrid'

export function IndustrySection() {
    return (
        <section className="section industry-section">
            <div className="container">

                <SectionHeading
                    eyebrow="Where we work"
                    title="Different industries. One approach: make an impact."
                />

                <IndustryGrid limit={6} />

            </div>
        </section>
    )
}