import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const exploreLinks = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    // { label: 'Industries', href: '/industries' },
    // { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
]

const capabilities = [
    'Branding & Retail',
    'Architectural Branding',
    'OOH Advertising',
    'Events & 3D Design',
    'Commercial Execution',
]

export function Footer() {
    return (
        <footer className="site-footer">

            <div className="container">

                <div className="footer-main">

                    {/* Brand */}

                    <div className="footer-brand">

                        <Link
                            href="/"
                            className="footer-logo"
                        >
                            <img
                                src="/logo-dark.png"
                                alt="AD ADWISER"
                            />
                        </Link>

                        <p>
                            Transforming ideas into reality
                            {/* <br />
                            into reality. */}
                        </p>

                    </div>


                    {/* Explore */}

                    <div className="footer-column">

                        <p className="footer-label">
                            Explore
                        </p>

                        <nav className="footer-links">
                            {exploreLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                >
                                    {item.label}
                                    <ArrowUpRight size={12} />
                                </Link>
                            ))}
                        </nav>

                    </div>


                    {/* Capabilities */}

                    <div className="footer-column">

                        <p className="footer-label">
                            Capabilities
                        </p>

                        <div className="footer-links footer-services">
                            {capabilities.map((item) => (
                                <span key={item}>
                                    {item}
                                </span>
                            ))}
                        </div>

                    </div>


                    {/* Contact */}

                    <div className="footer-column">

                        <p className="footer-label">
                            Find us
                        </p>

                        <address className="footer-contact">
                            <span>Image Tower, 2nd Floor</span>
                            <span>FL 36, Block B, Gulshan-e-Jamal</span>
                            <span>Near Nueplex Cinemas, Karachi</span>
                            <span>Pakistan</span>

                            <span className="footer-contact-gap">
                                info@adadwiser.com.pk
                            </span>

                            <span>+92 311 8283345</span>
                            <span>+92 336 2175824</span>
                            <span>+92 342 2800610</span>
                        </address>

                        {/* <div className="socials">

                            <a
                                href="#"
                                aria-label="Instagram"
                            >
                                IG
                            </a>

                            <a
                                href="#"
                                aria-label="LinkedIn"
                            >
                                LI
                            </a>

                            <a
                                href="#"
                                aria-label="Facebook"
                            >
                                FB
                            </a>

                        </div> */}

                    </div>

                </div>


                {/* Brand colour line */}

                <div className="footer-color-line">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>


                {/* Bottom */}

                <div className="footer-bottom">

                    <span>
                        © 2026 AD ADWISER. All Rights Reserved.
                    </span>

                    <span>
                        Branding · Retail · Experience · Execution
                    </span>

                </div>

            </div>

        </footer>
    )
}