import Link from 'next/link'
import { ArrowUpRight, ArrowDown } from 'lucide-react'

import { serviceGroups } from '@/lib/site-data'
import { PageIntro } from '@/components/PageIntro'
import { CTA } from '@/components/CTA'

export default function ServicesPage() {
    return (
        <main className="services-page">

            {/* HERO */}
            <PageIntro
                eyebrow="Capabilities"
                title="The work behind"
                accent="the work."
                description="One integrated team for the strategic, creative and physical details that make brands matter."
                image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=85"
            />

            {/* CAPABILITY INDEX */}
            <section className="services-index">
                <div className="container">

                    <div className="services-index-top">
                        <p className="eyebrow">What we do</p>

                        <span>
                            {String(serviceGroups.length).padStart(2, '0')} /
                            CAPABILITY AREAS
                        </span>
                    </div>

                    <div className="services-index-list">
                        {serviceGroups.map((group) => (
                            <a
                                href={`#service-${group.number}`}
                                key={group.number}
                                className="services-index-item"
                            >
                                <span className="services-index-number">
                                    {group.number}
                                </span>

                                <span className="services-index-title">
                                    {group.title}
                                </span>

                                <ArrowDown
                                    className="services-index-arrow"
                                    size={17}
                                />
                            </a>
                        ))}
                    </div>

                </div>
            </section>


            {/* SERVICES */}
            <section className="services-showcase">

                {serviceGroups.map((group, index) => (
                    <section
                        className={`service-showcase ${index % 2 === 1 ? 'service-showcase-dark' : ''}`}
                        id={`service-${group.number}`}
                        key={group.number}
                    >

                        {/* background detail */}
                        <div className="service-showcase-grid" />

                        <div className="container">

                            <div className="service-showcase-header">

                                <div className="service-showcase-number">
                                    {group.number}
                                </div>

                                <div className="service-showcase-meta">
                                    <span>
                                        CAPABILITY / {group.number}
                                    </span>

                                    <span>
                                        AD ADWISER
                                    </span>
                                </div>

                            </div>


                            <div className="service-showcase-layout">

                                {/* IMAGE */}
                                <div className="service-showcase-image">

                                    <img
                                        src={group.image}
                                        alt={group.title}
                                    />

                                    <div className="service-image-overlay">
                                        <span>
                                            PHYSICAL / BRAND / EXPERIENCE
                                        </span>
                                    </div>

                                </div>


                                {/* CONTENT */}
                                <div className="service-showcase-content">

                                    <p className="eyebrow">
                                        {group.number} / Capabilities
                                    </p>

                                    <h2>{group.title}</h2>

                                    <p className="service-showcase-intro">
                                        {group.intro}
                                    </p>


                                    {/* SERVICE LIST */}
                                    <div className="service-list">

                                        {group.items.map((item, itemIndex) => (

                                            <div
                                                className="service-list-item"
                                                key={item}
                                            >

                                                <span className="service-list-number">
                                                    {String(itemIndex + 1).padStart(2, '0')}
                                                </span>

                                                <span className="service-list-name">
                                                    {item}
                                                </span>

                                                <ArrowUpRight
                                                    className="service-list-arrow"
                                                    size={17}
                                                />

                                            </div>

                                        ))}

                                    </div>


                                    <Link
                                        href="/contact"
                                        className={`text-link ${index % 2 === 1 ? 'light-link' : ''}`}
                                    >
                                        Discuss this capability
                                        <ArrowUpRight size={17} />
                                    </Link>

                                </div>

                            </div>


                            {/* BOTTOM META */}
                            <div className="service-showcase-footer">

                                <span>
                                    {group.items.length} SERVICES
                                </span>

                                <span className="service-footer-line" />

                                <span>
                                    STRATEGY / DESIGN / EXECUTION
                                </span>

                            </div>

                        </div>

                    </section>
                ))}

            </section>


            {/* CLOSING STATEMENT */}
            <section className="services-statement">

                <div className="container">

                    <div className="services-statement-number">
                        01
                    </div>

                    <h2>
                        One team.
                        <br />
                        <em>From idea to installation.</em>
                    </h2>

                    <div className="services-statement-bottom">

                        <p>
                            Different disciplines. One coordinated approach.
                            We bring creative thinking, technical expertise and
                            physical execution together to deliver complete
                            brand experiences.
                        </p>

                        <Link href="/contact" className="button button-red">
                            Start a project
                            <ArrowUpRight size={18} />
                        </Link>

                    </div>

                </div>

            </section>


            <CTA />

        </main>
    )
}