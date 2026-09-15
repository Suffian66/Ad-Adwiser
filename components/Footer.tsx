import Link from 'next/link'

import { logoUrl } from '@/lib/site-data'

export function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-grid">

                {/* Brand */}
                <div>
                    <Link
                        href="/"
                        className="footer-logo"
                    >
                        <img
                            src='/logo2.png'
                            alt="AD ADWISER"
                        />
                    </Link>

                    <p className="footer-tagline">
                        Transforming ideas
                        <br />
                        into reality.
                    </p>
                </div>

                {/* Explore */}
                <div>
                    <p className="eyebrow footer-label">
                        Explore
                    </p>

                    <div className="footer-links">
                        {[
                            'About',
                            'Services',
                            'Portfolio',
                            'Industries',
                            'Case Studies',
                            'Contact',
                        ].map((x) => (
                            <Link
                                key={x}
                                href={`/${x === 'About'
                                    ? 'about'
                                    : x.toLowerCase().replaceAll(' ', '-')
                                    }`}
                            >
                                {x}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Capabilities */}
                <div>
                    <p className="eyebrow footer-label">
                        Capabilities
                    </p>

                    <div className="footer-links">
                        <span>Branding & Retail</span>
                        <span>Architectural Branding</span>
                        <span>OOH Advertising</span>
                        <span>Events & 3D Design</span>
                        <span>Commercial Execution</span>
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <p className="eyebrow footer-label">
                        Find us
                    </p>

                    <p className="footer-contact">
                        Karachi, Pakistan
                        <br />

                        <a href="mailto:info@adadwiser.com.pk">
                            info@adadwiser.com.pk
                        </a>

                        <br />

                        <a href="tel:+923118283345">
                            +92 311 8283345
                        </a>
                    </p>

                    <div className="socials">
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
                    </div>
                </div>

            </div>

            <div className="container footer-bottom">
                <span>
                    © 2026 AD ADWISER. All Rights Reserved.
                </span>

                <span>
                    Branding · Retail · Experience · Execution
                </span>
            </div>
        </footer>
    )
}