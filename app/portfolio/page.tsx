import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import { projects } from '@/lib/site-data'
import { PageIntro } from '@/components/PageIntro'
import { CTA } from '@/components/CTA'

export default function PortfolioPage() {
    return (
        <main className="portfolio-page">

            {/* HERO */}
            <PageIntro
                eyebrow="Selected work"
                title="Our work"
                accent="in the real world."
                description="A selection of brand environments, campaigns and physical experiences shaped with our clients."
                image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85"
            />


            {/* PORTFOLIO INTRO */}
            <section className="portfolio-intro">

                <div className="container">

                    <div className="portfolio-intro-top">
                        <p className="eyebrow">
                            Selected projects
                        </p>

                        <span>
                            {String(projects.length).padStart(2, '0')} PROJECTS
                        </span>
                    </div>

                    <div className="portfolio-intro-content">

                        <h2>
                            Ideas become
                            <br />
                            <em>visible.</em>
                        </h2>

                        <p>
                            From large-scale advertising environments to
                            architectural details and branded spaces, our work
                            is designed to exist beyond the screen.
                        </p>

                    </div>

                </div>

            </section>


            {/* PROJECT GALLERY */}
            <section className="portfolio-gallery">

                <div className="container">

                    {projects.map((project, index) => {

                        /*
                         * If your project currently has only `image`,
                         * the component will still work.
                         *
                         * Once you add `images: []` to your project data,
                         * those additional images will automatically appear.
                         */

                        const galleryImages =
                            project.images && project.images.length > 0
                                ? project.images
                                : [project.image]

                        const isReversed = index % 2 !== 0

                        return (
                            <article
                                className={`portfolio-project ${isReversed ? 'portfolio-project-reverse' : ''}`}
                                key={project.title}
                            >

                                {/* PROJECT HEADER */}

                                <div className="portfolio-project-header">

                                    <div className="portfolio-project-number">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    <div className="portfolio-project-meta">
                                        <span>
                                            {project.category}
                                        </span>

                                        <span>
                                            SELECTED WORK
                                        </span>
                                    </div>

                                </div>


                                {/* PROJECT CONTENT */}

                                <div className="portfolio-project-grid">

                                    {/* MAIN IMAGE */}

                                    <div className="portfolio-main-image">

                                        <img
                                            src={galleryImages[0]}
                                            alt={`${project.title} main project image`}
                                        />

                                        <div className="portfolio-image-label">
                                            <span>
                                                {String(index + 1).padStart(2, '0')}
                                            </span>

                                            <span>
                                                AD ADWISER
                                            </span>
                                        </div>

                                    </div>


                                    {/* PROJECT INFORMATION */}

                                    <div className="portfolio-project-info">

                                        <p className="eyebrow">
                                            {project.category}
                                        </p>

                                        <h2>
                                            {project.title}
                                        </h2>

                                        <p className="portfolio-project-description">
                                            {project.description ||
                                                'A considered physical brand experience shaped through creative thinking, careful design and precise execution.'}
                                        </p>


                                        {/* IMAGE THUMBNAILS */}

                                        {galleryImages.length > 1 && (
                                            <div className="portfolio-thumbnails">

                                                {galleryImages
                                                    .slice(1, 4)
                                                    .map((image, imageIndex) => (
                                                        <div
                                                            className="portfolio-thumbnail"
                                                            key={`${image}-${imageIndex}`}
                                                        >
                                                            <img
                                                                src={image}
                                                                alt={`${project.title} detail ${imageIndex + 2}`}
                                                            />

                                                            <span>
                                                                0{imageIndex + 2}
                                                            </span>
                                                        </div>
                                                    ))}

                                            </div>
                                        )}


                                        <Link
                                            href="/contact"
                                            className="text-link portfolio-project-link"
                                        >
                                            Discuss a similar project
                                            <ArrowUpRight size={17} />
                                        </Link>

                                    </div>

                                </div>


                                {/* ADDITIONAL GALLERY */}

                                {galleryImages.length > 4 && (
                                    <div className="portfolio-extra-gallery">

                                        {galleryImages
                                            .slice(4)
                                            .map((image, imageIndex) => (
                                                <div
                                                    className="portfolio-extra-image"
                                                    key={`${image}-${imageIndex}`}
                                                >
                                                    <img
                                                        src={image}
                                                        alt={`${project.title} project image ${imageIndex + 5}`}
                                                    />
                                                </div>
                                            ))}

                                    </div>
                                )}


                                {/* PROJECT FOOTER */}

                                <div className="portfolio-project-footer">

                                    <span>
                                        PROJECT / {String(index + 1).padStart(2, '0')}
                                    </span>

                                    <span className="portfolio-footer-line" />

                                    <span>
                                        {galleryImages.length} IMAGES
                                    </span>

                                </div>

                            </article>
                        )
                    })}

                </div>

            </section>


            {/* CLOSING STATEMENT */}

            <section className="portfolio-statement">

                <div className="container">

                    <p className="eyebrow">
                        The work continues
                    </p>

                    <h2>
                        Your brand
                        <br />
                        <em>belongs out there.</em>
                    </h2>

                    <Link
                        href="/contact"
                        className="button button-red"
                    >
                        Start a project
                        <ArrowUpRight size={18} />
                    </Link>

                </div>

            </section>


            <CTA />

        </main>
    )
}