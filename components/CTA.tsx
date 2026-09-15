import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

type CTAProps = {
    title?: string
    description?: string
}

export function CTA({
    title = 'Have an idea? Let’s build it.',
    description = 'Tell us what you are building, launching or transforming. We will help turn the idea into an experience your audience remembers.',
}: CTAProps) {
    return (
        <section className="cta-band">
            <div className="blueprint-ring ring-one" />
            <div className="blueprint-ring ring-two" />

            <div className="container cta-inner">
                <div>
                    <p className="eyebrow">
                        Start a conversation
                    </p>

                    <h2>
                        {title}
                    </h2>

                    <p>
                        {description}
                    </p>
                </div>

                <Link
                    href="/contact"
                    className="button button-white"
                >
                    Start a project
                    <ArrowUpRight size={18} />
                </Link>
            </div>
        </section>
    )
}