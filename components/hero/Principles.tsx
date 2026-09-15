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
            <div className="container">

                <SectionHeading
                    light
                    eyebrow="Our point of view"
                    title="From idea to impact."
                />

                <div className="principles-grid">
                    {principles.map(
                        ([number, title, text]) => (
                            <div
                                className="principle"
                                key={number}
                            >
                                <span>{number}</span>

                                <h3>{title}</h3>

                                <p>{text}</p>
                            </div>
                        )
                    )}
                </div>

            </div>
        </section>
    )
}