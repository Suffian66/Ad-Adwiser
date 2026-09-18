import Image from 'next/image'

const gallery = [
    {
        image: '/about/story-installation.jpg',
        label: '01 — INSTALLATION',
        location: 'Karachi',
        className: 'gallery-image-large',
    },
    {
        image: '/about/story-detail.jpg',
        label: '02 — FABRICATION',
        location: 'Lahore',
        className: 'gallery-image-small',
    },
    {
        image: '/about/team-main.jpg',
        label: '03 — SITE TEAM',
        location: 'Gujrat',
        className: 'gallery-image-wide',
    },
    {
        image: '/about/journey-main.jpg',
        label: '04 — EXECUTION',
        location: 'Islamabad',
        className: 'gallery-image-small',
    },
]

export function StatementSection() {
    return (
        <section className="work-gallery-section">
            <div className="container">

                <div className="work-gallery-heading">
                    <div>
                        <p className="eyebrow eyebrow-light work-gallery-h-people">
                            The People
                        </p>

                        <h2>
                            Behind The Impact
                            {/* <br />
                            <em>behind the impact.</em> */}
                        </h2>
                    </div>

                    <p className="work-gallery-intro">
                        From fabrication and installation to the final
                        experience, our people are at the heart of every
                        project we deliver.
                    </p>
                </div>

                <div className="work-gallery">
                    {gallery.map((item) => (
                        <figure
                            key={item.image}
                            className={`work-gallery-item ${item.className}`}
                        >
                            <div className="work-gallery-photo">
                                <Image
                                    src={item.image}
                                    alt={item.label}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            <figcaption>
                                <span>{item.label}</span>
                                <small>{item.location}</small>
                            </figcaption>
                        </figure>
                    ))}
                </div>

            </div>
        </section>
    )
}