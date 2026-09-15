import { Plus } from 'lucide-react'

import { process } from '@/lib/site-data'
import { SectionHeading } from '@/components/SectionHeading'

export function ProcessSection() {
    return (
        <section className="section process-section">
            <div className="container">

                <SectionHeading
                    eyebrow="Our method"
                    title="How we bring ideas to life"
                />

                <div className="process-grid">
                    {process.map(
                        ([number, title, text]) => (
                            <div
                                className="process-step"
                                key={number}
                            >
                                <span>{number}</span>

                                <div>
                                    <h3>{title}</h3>
                                    <p>{text}</p>
                                </div>

                                {number !== '06' && (
                                    <Plus
                                        className="process-plus"
                                        size={17}
                                    />
                                )}
                            </div>
                        )
                    )}
                </div>

            </div>
        </section>
    )
}