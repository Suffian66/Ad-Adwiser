import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

type CTAProps = {
    title?: string
    description?: string
}

export function CTA({
    title = "Have an idea? Let's build it.",
    description = "Tell us what you're building, launching or transforming. We'll help turn the idea into something people remember.",
}: CTAProps) {
    return (
        <section className="cta-band">

            <div className="cta-orbit orbit-blue" />
            <div className="cta-orbit orbit-yellow" />
            <div className="cta-orbit orbit-red" />
            <div className="cta-orbit orbit-green" />
            <div className="cta-orbit orbit-purple" />
            <div className="cta-orbit orbit-navy" />

            <div className="cta-dot dot-blue" />
            <div className="cta-dot dot-yellow" />
            <div className="cta-dot dot-red" />
            <div className="cta-dot dot-green" />
            <div className="cta-dot dot-purple" />

            <div className="container cta-inner">

                <div className="cta-content">

                    <p className="eyebrow">
                        Start a conversation
                    </p>

                    <h2>
                        {title}
                    </h2>

                    <p className="cta-description">
                        {description}
                    </p>

                    <Link
                        href="/contact"
                        className="cta-button"
                    >
                        <span>Start a project</span>
                        <ArrowUpRight size={19} />
                    </Link>

                </div>

            </div>
        </section>
    )
}