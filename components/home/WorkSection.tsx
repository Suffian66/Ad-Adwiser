import Link from 'next/link'

import { ArrowUpRight } from 'lucide-react'

import { SectionHeading } from '@/components/SectionHeading'
import { ProjectGrid } from '@/components/ProjectGrid'

export function WorkSection() {
    return (
        <section className="section work-section">
            <div className="work-background-word">
                WORK
            </div>

            <div className="work-blueprint work-blueprint-one" />

            <div className="container">
                <div className="section-heading-row work-heading">
                    <SectionHeading
                        eyebrow="Selected work"
                        title="Work that speaks for the brand."
                        description="A selection of environments, campaigns and physical brand experiences created to be seen, remembered and experienced."
                    />

                    <Link
                        href="/portfolio"
                        className="text-link"
                    >
                        View all projects
                        <ArrowUpRight size={17} />
                    </Link>
                </div>

                <ProjectGrid limit={5} />
            </div>
        </section>
    )
}