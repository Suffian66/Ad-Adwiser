import Link from 'next/link'
import { ArrowUpRight, Plus } from 'lucide-react'

export function IntroSection() {
    return (
        <section className="section intro-section">
            <div className="intro-grid container">

                <div className="intro-art">

                    <div className="intro-art-top">
                        <span>AD / 01</span>
                        <span>BRAND SYSTEM</span>
                    </div>

                    <div className="art-grid" />

                    <div className="art-circle art-circle-large" />
                    <div className="art-circle art-circle-small" />

                    <div className="art-line art-line-one" />
                    <div className="art-line art-line-two" />

                    <div className="intro-monogram">
                        AD
                        <br />
                        <span>AW</span>
                    </div>

                    <div className="intro-art-bottom">
                        <span>STRATEGY</span>
                        <span>DESIGN</span>
                        <span>EXECUTION</span>
                    </div>

                </div>

                <div className="intro-content">

                    <p className="eyebrow intro-eyebrow">
                        The real-world advantage
                    </p>

                    <h2>
                        We don’t just advertise brands.
                        <br />
                        <em>We build presence.</em>
                    </h2>

                    <p className="lead">
                        AD ADWISER brings strategy, creative thinking
                        and physical execution together to turn brand
                        ideas into experiences people can actually see,
                        touch and remember.
                    </p>

                    {/* <div className="intro-points">

                        <div>
                            <span>01</span>
                            <p>
                                From first concept to final execution,
                                we stay involved.
                            </p>
                        </div>

                        <div>
                            <span>02</span>
                            <p>
                                We connect creative ideas with
                                real-world environments.
                            </p>
                        </div>

                        <div>
                            <span>03</span>
                            <p>
                                Every touchpoint is designed to create
                                a stronger brand presence.
                            </p>
                        </div>

                    </div> */}

                    <Link href="/about" className="text-link intro-link">
                        More about AD ADWISER
                        <ArrowUpRight size={17} />
                    </Link>

                </div>

            </div>
        </section>
    )
}