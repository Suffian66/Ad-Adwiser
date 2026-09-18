'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
    ArrowDown,
    ArrowUpRight,
    Plus,
} from 'lucide-react'

import { process } from '@/lib/site-data'
import { PageIntro } from '@/components/PageIntro'
import { CTA } from '@/components/CTA'

const beliefs = [
    {
        number: '01',
        title: 'Think beyond the screen.',
        short: 'Ideas become powerful when people can experience them.',
        text: 'We believe brands become more meaningful when they move beyond digital screens and become part of the physical world — through spaces, structures, materials and experiences.',
        image: '/about/belief-thinking.jpg',
    },
    {
        number: '02',
        title: 'Make it work.',
        short: 'Great ideas still have to survive reality.',
        text: 'A strong concept is only the beginning. We bring creative thinking together with technical understanding, materials, measurements and practical execution.',
        image: '/about/belief-technical.jpg',
    },
    {
        number: '03',
        title: 'Own the detail.',
        short: 'The difference is often in what people notice last.',
        text: 'From the smallest finish to the final installation, we pay attention to the details that turn an ordinary execution into something considered and memorable.',
        image: '/about/belief-detail.jpg',
    },
    {
        number: '04',
        title: 'Build with purpose.',
        short: 'Every element should have a reason to exist.',
        text: 'We create physical brand environments with a clear purpose — to communicate, attract attention, create recognition and give brands a stronger presence.',
        image: '/about/belief-purpose.jpg',
    },
]

const storyImages = [
    {
        src: '/about/story-main.jpg',
        alt: 'AD ADWISER team working on a project',
    },
    {
        src: '/about/story-detail.jpg',
        alt: 'AD ADWISER project execution detail',
    },
    {
        src: '/about/story-installation.jpg',
        alt: 'AD ADWISER team during installation',
    },
]

const missionVision = [
    {
        number: '01',
        label: 'Our mission',
        title: 'Turn ambitious ideas into physical experiences.',
        text: 'We bring strategy, creative thinking, technical expertise and execution together to help brands create a presence people can see, experience and remember.',
    },
    {
        number: '02',
        label: 'Our vision',
        title: 'Build what people remember.',
        text: 'We aim to be the trusted partner behind distinctive physical brand environments — creating work that combines imagination, precision and lasting impact.',
    },
]

const journeyFallback = [
    {
        number: '01',
        title: 'Discover',
        text: 'Understand the brand, the environment, the audience and the opportunity.',
    },
    {
        number: '02',
        title: 'Create',
        text: 'Turn the brief into a clear creative direction and physical experience.',
    },
    {
        number: '03',
        title: 'Produce',
        text: 'Translate the approved idea into materials, structures and finished components.',
    },
    {
        number: '04',
        title: 'Install',
        text: 'Bring everything together on site with careful coordination and execution.',
    },
    {
        number: '05',
        title: 'Deliver',
        text: 'Complete the project with attention to detail, quality and the final experience.',
    },
]

export default function AboutPage() {
    const [activeBelief, setActiveBelief] = useState(0)

    const journey = process?.slice(0, 5).map(
        ([number, title, text]) => ({
            number,
            title,
            text,
        })
    ) || journeyFallback

    return (
        <main className="about-page">

            {/* =====================================================
                HERO
            ===================================================== */}

            <PageIntro
                eyebrow="About AD ADWISER"
                title="We make brands"
                accent="visible in the real world."
                description="An integrated advertising, branding and execution partner for organizations that want their presence to be seen, experienced and remembered."
                image="/about/about-hero.jpg"
            />

            <section className="about-scroll-cue">
                <div className="container">
                    <a href="#our-story" className="about-scroll-link">
                        <span>Scroll to discover</span>
                        <ArrowDown size={17} />
                    </a>
                </div>
            </section>


            {/* =====================================================
                OUR STORY
            ===================================================== */}

            <section
                id="our-story"
                className="about-story section"
            >
                <div className="container">

                    <div className="about-section-top">
                        <p className="eyebrow">01 / Our story</p>

                        <span className="about-section-code">
                            PEOPLE / IDEAS / REALITY
                        </span>
                    </div>

                    <div className="story-layout">

                        <div className="story-visual">

                            <div className="story-main-image">
                                <img
                                    src={storyImages[0].src}
                                    alt={storyImages[0].alt}
                                />

                                <div className="story-image-caption">
                                    <span>AD ADWISER</span>
                                    <span>THE PEOPLE BEHIND THE WORK</span>
                                </div>
                            </div>

                            <div className="story-detail-image">
                                <img
                                    src={storyImages[1].src}
                                    alt={storyImages[1].alt}
                                />

                                <span className="story-image-number">
                                    02
                                </span>
                            </div>

                            <div className="story-installation-image">
                                <img
                                    src={storyImages[2].src}
                                    alt={storyImages[2].alt}
                                />

                                <span className="story-image-number">
                                    03
                                </span>
                            </div>

                            <span className="story-vertical-label">
                                BUILT IN THE REAL WORLD
                            </span>

                        </div>


                        <div className="story-content">

                            <p className="story-kicker">
                                Creative thinking,
                            </p>

                            <h2>
                                built to
                                <em> last.</em>
                            </h2>

                            <div className="story-copy">

                                <p className="story-lead">
                                    We work where strategy meets the
                                    physical world — shaping brands into
                                    spaces, structures, experiences and
                                    moments people can see, touch and
                                    remember.
                                </p>

                                <p>
                                    At AD ADWISER, an idea is never just
                                    something that lives on a screen.
                                    It has to work in the real world.
                                </p>

                                <p>
                                    That means understanding the brand,
                                    thinking through the environment,
                                    choosing the right materials,
                                    solving the technical challenges and
                                    making sure the final installation
                                    delivers what the idea promised.
                                </p>

                                <p>
                                    Our team brings these disciplines
                                    together — from the first conversation
                                    to the final detail on site.
                                </p>

                            </div>

                            <div className="story-signature">

                                <div className="story-signature-line" />

                                <div>
                                    <strong>
                                        Ideas are only the beginning.
                                    </strong>

                                    <span>
                                        We make them real.
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* =====================================================
                BELIEFS / DIFFERENCE
            ===================================================== */}

            <section className="about-beliefs">

                <div className="about-beliefs-grid-bg" />

                <div className="container">

                    <div className="about-section-top about-section-top-dark">
                        <p className="eyebrow">02 / What we believe</p>

                        <span className="about-section-code">
                            FOUR PRINCIPLES / ONE STANDARD
                        </span>
                    </div>


                    <div className="beliefs-intro">

                        <div>
                            <p className="eyebrow">Our difference</p>

                            <h2>
                                Different by
                                <em> design.</em>
                            </h2>
                        </div>

                        <p>
                            The work we produce is shaped by how we think,
                            how we build and how seriously we take the
                            details between an idea and its final reality.
                        </p>

                    </div>


                    <div className="beliefs-experience">

                        <div className="beliefs-list">

                            {beliefs.map((belief, index) => (
                                <button
                                    key={belief.number}
                                    type="button"
                                    className={`belief-item ${activeBelief === index
                                        ? 'is-active'
                                        : ''
                                        }`}
                                    onMouseEnter={() =>
                                        setActiveBelief(index)
                                    }
                                    onFocus={() =>
                                        setActiveBelief(index)
                                    }
                                    onClick={() =>
                                        setActiveBelief(index)
                                    }
                                >

                                    <span className="belief-number">
                                        {belief.number}
                                    </span>

                                    <span className="belief-title">
                                        {belief.title}
                                    </span>

                                    <span className="belief-short">
                                        {belief.short}
                                    </span>

                                    <span className="belief-plus">
                                        <Plus size={18} />
                                    </span>

                                </button>
                            ))}

                        </div>


                        <div className="belief-display">

                            {beliefs.map((belief, index) => (
                                <div
                                    key={belief.number}
                                    className={`belief-display-image ${activeBelief === index
                                        ? 'is-active'
                                        : ''
                                        }`}
                                >
                                    <img
                                        src={belief.image}
                                        alt={belief.title}
                                    />

                                    <div className="belief-display-overlay">
                                        <span>
                                            {belief.number}
                                        </span>

                                        <span>
                                            AD ADWISER
                                        </span>
                                    </div>
                                </div>
                            ))}

                            <div className="belief-display-copy">

                                <span>
                                    {beliefs[activeBelief].number}
                                </span>

                                <p>
                                    {beliefs[activeBelief].text}
                                </p>

                            </div>

                        </div>

                    </div>


                    <div className="beliefs-footer">

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

            <section className="about-journey section">

                <div className="container">

                    <div className="about-section-top">
                        <p className="eyebrow">03 / The journey</p>

                        <span className="about-section-code">
                            FROM CONCEPT TO REALITY
                        </span>
                    </div>


                    <div className="journey-intro">

                        <h2>
                            Ideas are only
                            <br />
                            the <em>beginning.</em>
                        </h2>

                        <div>
                            <p>
                                Every project moves through a considered
                                process that connects creative thinking
                                with precise physical execution.
                            </p>

                            <span className="journey-rule" />
                        </div>

                    </div>


                    <div className="journey-visual">

                        <div className="journey-image">

                            <img
                                src="/about/journey-main.jpg"
                                alt="AD ADWISER project team working on site"
                            />

                            <div className="journey-image-overlay">
                                <span>CONCEPT</span>
                                <span>→</span>
                                <span>REALITY</span>
                            </div>

                        </div>

                    </div>


                    <div className="journey-steps">

                        {journey.map((item, index) => (
                            <article
                                className="journey-step"
                                key={item.number}
                            >

                                <div className="journey-step-top">

                                    <span className="journey-step-number">
                                        {item.number}
                                    </span>

                                    <span className="journey-step-index">
                                        0{index + 1}
                                    </span>

                                </div>

                                <div className="journey-step-content">

                                    <h3>
                                        {item.title}
                                    </h3>

                                    <p>
                                        {item.text}
                                    </p>

                                </div>

                                {index < journey.length - 1 && (
                                    <span className="journey-step-arrow">
                                        →
                                    </span>
                                )}

                            </article>
                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                MISSION / VISION
            ===================================================== */}

            <section className="about-purpose">

                <div className="about-purpose-grid-bg" />

                <div className="container">

                    <div className="about-section-top about-section-top-dark">

                        <p className="eyebrow">
                            04 / Why we exist
                        </p>

                        <span className="about-section-code">
                            PURPOSE / DIRECTION
                        </span>

                    </div>


                    <div className="purpose-heading">

                        <h2>
                            Built with
                            <br />
                            <em>purpose.</em>
                        </h2>

                        <p>
                            Everything we do comes back to one simple
                            belief: physical brand experiences should
                            have meaning, not just presence.
                        </p>

                    </div>


                    <div className="purpose-grid">

                        {missionVision.map((item) => (
                            <article
                                className="purpose-card"
                                key={item.number}
                            >

                                <div className="purpose-card-number">
                                    {item.number}
                                </div>

                                <div className="purpose-card-label">
                                    {item.label}
                                </div>

                                <h3>
                                    {item.title}
                                </h3>

                                <p>
                                    {item.text}
                                </p>

                                <span className="purpose-card-line" />

                            </article>
                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                PEOPLE
            ===================================================== */}

            <section className="about-people section">

                <div className="container">

                    <div className="about-section-top">

                        <p className="eyebrow">
                            05 / The people
                        </p>

                        <span className="about-section-code">
                            PEOPLE MAKE THE DIFFERENCE
                        </span>

                    </div>


                    <div className="people-heading">

                        <h2>
                            Behind every
                            <br />
                            <em>build</em> is a team.
                        </h2>

                        <p>
                            The people behind the work are what turn
                            concepts into structures, spaces and
                            experiences that exist beyond the screen.
                        </p>

                    </div>


                    <div className="people-feature">

                        <img
                            src="/about/team-main.jpg"
                            alt="AD ADWISER team"
                        />

                        <div className="people-feature-caption">

                            <span>
                                AD ADWISER
                            </span>

                            <strong>
                                PEOPLE MAKE
                                <br />
                                THE DIFFERENCE.
                            </strong>

                            <span>
                                CREATIVE / TECHNICAL / EXECUTION
                            </span>

                        </div>

                    </div>


                    <div className="people-bottom">

                        <p>
                            From creative thinking to technical
                            execution, we work as one team with one
                            objective — to make the idea work in the
                            real world.
                        </p>

                        <Link
                            href="/contact"
                            className="text-link"
                        >
                            Work with us
                            <ArrowUpRight size={17} />
                        </Link>

                    </div>

                </div>

            </section>

            <CTA />

        </main>
    )
}