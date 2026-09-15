import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { SectionHeading } from '@/components/SectionHeading'
import { ProjectGrid } from '@/components/ProjectGrid'

export function WorkSection() {
    return (
        <section className="section work-section">
            <div className="container">

                <div className="section-heading-row">
                    <SectionHeading
                        eyebrow="Selected work"
                        title="Work that speaks for the brand."
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