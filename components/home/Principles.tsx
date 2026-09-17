import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'

const principles = [
    [
        '01',
        'Strategy',
        'We begin with understanding the brand, audience and objective.',
    ],
    [
        '02',
        'Creativity',
        'We transform strategic thinking into distinctive visual experiences.',
    ],
    [
        '03',
        'Execution',
        'We turn concepts into physical, visible brand experiences.',
    ],
    [
        '04',
        'Consistency',
        'We maintain brand quality across every touchpoint.',
    ],
]

export function PrinciplesSection() {
    return (
        <section className="dark-section principles-section">
            <div className="principles-bg" />

            <div className="container principles-container">
                <div className="principles-heading">
                    <SectionHeading
                        light
                        eyebrow="Our point of view"
                        title="From idea to impact."
                    />

                    <span className="principles-label">
                        04 PRINCIPLES / ONE STANDARD
                    </span>
                </div>

                <div className="principles-grid">
                    {principles.map(([number, title, text]) => (
                        <article
                            className="principle"
                            key={number}
                        >
                            <div className="principle-top">
                                <span className="principle-number">
                                    {number}
                                </span>

                                <ArrowUpRight
                                    className="principle-arrow"
                                    size={20}
                                />
                            </div>

                            <div className="principle-content">
                                <h3>{title}</h3>

                                <p>{text}</p>
                            </div>

                            <span className="principle-watermark">
                                {number}
                            </span>

                            <span className="principle-line" />
                        </article>
                    ))}
                </div>

                <div className="principles-footer">
                    <span>STRATEGY</span>
                    <i />
                    <span>CREATIVITY</span>
                    <i />
                    <span>EXECUTION</span>
                    <i />
                    <span>CONSISTENCY</span>
                </div>
            </div>
        </section>
    )
}