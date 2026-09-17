import Link from 'next/link'
import {
    ArrowDown,
    ArrowUpRight,
} from 'lucide-react'

import { industries, process } from '@/lib/site-data'
import { PageIntro } from '@/components/PageIntro'
import { SectionHeading } from '@/components/SectionHeading'
import { CTA } from '@/components/CTA'

const differences = [
    {
        number: '01',
        title: 'Creative thinking',
        text: 'Ideas that make brands visible, memorable and meaningful.',
    },
    {
        number: '02',
        title: 'Technical expertise',
        text: 'Design backed by the technical knowledge to make it work.',
    },
    {
        number: '03',
        title: 'End-to-end execution',
        text: 'From concept and production to installation and completion.',
    },
    {
        number: '04',
        title: 'Attention to detail',
        text: 'Every material, finish and installation considered with purpose.',
    },
    {
        number: '05',
        title: 'Brand understanding',
        text: 'Physical experiences shaped around what the brand stands for.',
    },
    {
        number: '06',
        title: 'Reliable delivery',
        text: 'Clear coordination, disciplined execution and dependable results.',
    },
]

export default function AboutPage() {
    return (
        <main className="about-page">

            {/* =====================================================
                HERO
            ===================================================== */}

            <PageIntro
                eyebrow="About AD ADWISER"
                title="We turn ideas into"
                accent="real-world impact."
                description="An integrated advertising, branding and execution partner for organizations that want their presence to be felt."
                image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85"
            />


            {/* =====================================================
                OUR STORY / MANIFESTO
            ===================================================== */}

            <section className="section about-manifesto">

                <div className="container">

                    <div className="manifesto-top">

                        <p className="eyebrow">
                            Our story
                        </p>

                        <span className="manifesto-label">
                            IDEAS / SPACES / EXPERIENCES
                        </span>

                    </div>


                    <div className="manifesto-grid">

                        <div className="manifesto-title">

                            <h2>
                                Creative thinking,
                                <br />
                                <em>built to last.</em>
                            </h2>

                        </div>


                        <div className="manifesto-copy">

                            <p className="lead">
                                We work where strategy meets the physical
                                world — shaping brands into spaces,
                                experiences and moments people can see,
                                touch and remember.
                            </p>

                            <p>
                                From the first conversation to the final
                                installation, our team brings together brand
                                understanding, design intelligence and
                                technical expertise. The result is work that
                                is not only beautiful, but built for purpose.
                            </p>


                            <div className="manifesto-stat">

                                <span>01</span>

                                <p>
                                    Strategy, creativity and execution
                                    brought together under one roof.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                DIFFERENCE
            ===================================================== */}

            <section className="dark-section about-difference">

                <div className="about-difference-bg" />

                <div className="container">

                    <div className="difference-heading">

                        <SectionHeading
                            light
                            eyebrow="Our difference"
                            title="Built differently."
                        />

                        <span className="difference-label">
                            06 PRINCIPLES / ONE STANDARD
                        </span>

                    </div>


                    <div className="difference-grid">

                        {differences.map((item) => (

                            <article
                                className="difference-card"
                                key={item.number}
                            >

                                <div className="difference-card-top">

                                    <span>
                                        {item.number}
                                    </span>

                                    <ArrowUpRight
                                        className="difference-arrow"
                                        size={20}
                                    />

                                </div>


                                <div className="difference-card-content">

                                    <h3>
                                        {item.title}
                                    </h3>

                                    <p>
                                        {item.text}
                                    </p>

                                </div>


                                <span className="difference-watermark">
                                    {item.number}
                                </span>


                                <span className="difference-card-line" />

                            </article>

                        ))}

                    </div>


                    <div className="difference-footer">

                        <span>THINK</span>

                        <i />

                        <span>DESIGN</span>

                        <i />

                        <span>BUILD</span>

                        <i />

                        <span>DELIVER</span>

                    </div>

                </div>

            </section>


            {/* =====================================================
                JOURNEY
            ===================================================== */}

            <section className="section about-journey">

                <div className="container">

                    <div className="journey-heading">

                        <SectionHeading
                            eyebrow="The journey"
                            title="From idea to impact."
                        />

                        <p className="journey-intro">
                            Every project moves through a considered process
                            that connects creative thinking with precise
                            physical execution.
                        </p>

                    </div>


                    <div className="journey-list">

                        {process.slice(0, 5).map(
                            ([number, title, text], index) => (

                                <article
                                    className="journey-item"
                                    key={number}
                                >

                                    <div className="journey-number">
                                        <span>{number}</span>
                                    </div>


                                    <div className="journey-main">

                                        <div className="journey-title">

                                            <h3>
                                                {title}
                                            </h3>

                                            <ArrowUpRight
                                                className="journey-arrow"
                                                size={21}
                                            />

                                        </div>

                                        <p>
                                            {text}
                                        </p>

                                    </div>


                                    <span className="journey-index">
                                        0{index + 1}
                                    </span>

                                </article>

                            )
                        )}

                    </div>

                </div>

            </section>


            {/* =====================================================
                REACH / INDUSTRIES
            ===================================================== */}

            <section className="section about-reach">

                <div className="container">

                    <div className="reach-heading">

                        <SectionHeading
                            eyebrow="Our reach"
                            title="Built for ambition."
                        />

                        <p>
                            Our work adapts to the environments where brands
                            need to be seen, experienced and remembered.
                        </p>

                    </div>


                    <div className="about-industries">

                        {industries.slice(0, 4).map(
                            (industry, index) => (

                                <Link
                                    href="/industries"
                                    className="industry-panel"
                                    key={industry.title}
                                >

                                    <span className="industry-panel-number">
                                        0{index + 1}
                                    </span>

                                    <div className="industry-panel-content">

                                        <p className="eyebrow">
                                            {industry.title}
                                        </p>

                                        <p>
                                            {industry.text}
                                        </p>

                                    </div>


                                    <ArrowUpRight
                                        className="industry-panel-arrow"
                                        size={23}
                                    />

                                    <span className="industry-panel-watermark">
                                        0{index + 1}
                                    </span>

                                </Link>

                            )
                        )}

                    </div>


                    <div className="reach-bottom">

                        <Link
                            href="/industries"
                            className="text-link"
                        >
                            Explore industries
                            <ArrowUpRight size={17} />
                        </Link>

                        <span>
                            WHERE BRANDS MEET THE REAL WORLD
                        </span>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CLOSING CTA
            ===================================================== */}

            <CTA
                title="Let’s make the idea real."
            />

        </main>
    )
}