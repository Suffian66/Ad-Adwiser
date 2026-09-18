import Link from 'next/link'
import { ArrowUpRight, ArrowDown, ArrowRight } from 'lucide-react'

import { services } from '@/lib/site-data'
import { PageIntro } from '@/components/PageIntro'
import { CTA } from '@/components/CTA'

const serviceCategories = [
    {
        number: '01',
        title: 'Facade & Structure',
        services: [
            'Curtain Wall / Spider Fitting',
            'Aluminium Composite Panel Cladding',
            'Aluminium Doors & Windows',
            'Automatic Rolling Shutter',
        ],
    },
    {
        number: '02',
        title: 'Interior & Finishing',
        services: [
            'Gypsum Ceiling',
            'Electrical Work',
            'Paint Work',
            'Tile Fixing / Flooring',
            'SS/MS Stairs Work',
        ],
    },
    {
        number: '03',
        title: 'Brand & Retail',
        services: ['3D Designing', 'Retail Solutions'],
    },
    {
        number: '04',
        title: 'Advertising & Experiences',
        services: ['OOH Advertising', 'Events'],
    },
]

export default function ServicesPage() {
    return (
        <main className="services-page">

            {/* =========================================================
          HERO
      ========================================================= */}
            <PageIntro
                eyebrow="Capabilities / 13 Services"
                title="We build what"
                accent="brands need."
                description="From architectural systems and interior finishing to retail environments, outdoor advertising and events — we turn ideas into physical experiences."
                image="/services/services-hero.jpg"
            />

            {/* =========================================================
          WHAT WE BUILD
      ========================================================= */}
            <section className="services-build">
                <div className="services-build-grid" />

                <div className="container">

                    <div className="services-build-intro">
                        <div>
                            <span className="services-label">01 / What we build</span>
                        </div>

                        <div className="services-build-heading">
                            <h2>
                                Different disciplines.
                                <br />
                                <em>One execution partner.</em>
                            </h2>

                            <p>
                                We bring architectural fabrication, interior finishing,
                                retail solutions and physical advertising together under
                                one coordinated team.
                            </p>
                        </div>
                    </div>

                    <div className="services-category-list">
                        {serviceCategories.map((category) => (
                            <div
                                className="services-category"
                                key={category.number}
                            >
                                <div className="services-category-number">
                                    {category.number}
                                </div>

                                <div className="services-category-main">
                                    <h3>{category.title}</h3>

                                    <div className="services-category-items">
                                        {category.services.map((service) => (
                                            <span key={service}>
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <ArrowUpRight
                                    className="services-category-arrow"
                                    size={24}
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* =========================================================
          SERVICES
      ========================================================= */}
            <section className="services-list-section">

                {/* <div className="services-section-heading">
                    <div className="container">
                        <div className="services-heading-row">
                            <span className="services-label">
                                02 / Our services
                            </span>

                            <span className="services-heading-count">
                                {String(services.length).padStart(2, '0')} SERVICES
                            </span>
                        </div>

                        <h2>
                            Built for the
                            <br />
                            <em>real world.</em>
                        </h2>
                    </div>
                </div> */}

                {services.map((service, index) => {
                    const isReversed = index % 2 === 1

                    return (
                        <section
                            className={`service-editorial ${isReversed ? 'service-editorial-reverse' : ''
                                }`}
                            id={`service-${service.number}`}
                            key={service.number}
                        >

                            {/* Architectural background detail */}
                            <div className="service-editorial-grid" />

                            <div className="container">

                                {/* Top metadata */}
                                <div className="service-editorial-top">
                                    <span>
                                        SERVICE / {service.number}
                                    </span>

                                    <span>
                                        AD ADWISER
                                    </span>
                                </div>

                                <div className="service-editorial-layout">

                                    {/* IMAGE */}
                                    <div className="service-editorial-image-wrap">

                                        <div className="service-editorial-number">
                                            {service.number}
                                        </div>

                                        <div className="service-editorial-image">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                            />

                                            <div className="service-image-caption">
                                                <span>
                                                    DESIGN
                                                </span>

                                                <span>
                                                    FABRICATION
                                                </span>

                                                <span>
                                                    INSTALLATION
                                                </span>
                                            </div>
                                        </div>

                                    </div>

                                    {/* CONTENT */}
                                    <div className="service-editorial-content">

                                        <span className="services-label">
                                            {service.number} / Capability
                                        </span>

                                        <h3>
                                            {service.title}
                                        </h3>

                                        <p className="service-editorial-description">
                                            {service.text}
                                        </p>

                                        <div className="service-editorial-rule" />

                                        <div className="service-editorial-bottom">

                                            <span className="service-editorial-small">
                                                AD ADWISER
                                                <br />
                                                PHYSICAL BRAND
                                                <br />
                                                EXECUTION
                                            </span>

                                            <Link
                                                href="/contact"
                                                className="service-editorial-link"
                                            >
                                                Discuss this service
                                                <ArrowUpRight size={18} />
                                            </Link>

                                        </div>

                                    </div>

                                </div>

                                {/* Bottom metadata */}
                                <div className="service-editorial-footer">
                                    <span>
                                        {service.number}
                                    </span>

                                    <span className="service-footer-line" />

                                    <span>
                                        PHYSICAL / BRAND / EXPERIENCE
                                    </span>
                                </div>

                            </div>
                        </section>
                    )
                })}

            </section>

            {/* =========================================================
          MID-PAGE STATEMENT
      ========================================================= */}
            <section className="services-break">

                <div className="services-break-grid" />

                <div className="container">

                    <div className="services-break-top">
                        <span className="services-break-number">
                            13
                        </span>

                        <span className="services-label light">
                            Services / One team
                        </span>
                    </div>

                    <div className="services-break-content">

                        <h2>
                            One team.
                            <br />
                            <em>Endless possibilities.</em>
                        </h2>

                        <p>
                            From the structure that carries a brand to the details
                            people experience every day, we bring the right
                            disciplines together to make the work happen.
                        </p>

                    </div>

                    <div className="services-break-bottom">

                        <div className="services-break-line" />

                        <span>
                            DESIGN
                        </span>

                        <span>
                            FABRICATION
                        </span>

                        <span>
                            INSTALLATION
                        </span>

                        <span>
                            EXECUTION
                        </span>

                    </div>

                </div>
            </section>

            <CTA />

        </main>
    )
}