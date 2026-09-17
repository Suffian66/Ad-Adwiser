'use client'

import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const heroImages = [
    {
        src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2200&q=90',
        alt: 'Modern architectural exterior',
    },
    {
        src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=2200&q=90',
        alt: 'Creative brand design',
    },
    {
        src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=90',
        alt: 'Branded commercial interior',
    },
    {
        src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2200&q=90',
        alt: 'Professional brand environment',
    },
    {
        src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=90',
        alt: 'Corporate brand experience',
    },
]

const SLIDE_DURATION = 6000

export function Hero() {
    const [activeSlide, setActiveSlide] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((current) =>
                (current + 1) % heroImages.length
            )
        }, SLIDE_DURATION)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="hero">

            {/* Background slides */}
            <div className="hero-slides">
                {heroImages.map((image, index) => (
                    <div
                        key={image.src}
                        className={`hero-slide ${activeSlide === index
                            ? 'is-active'
                            : ''
                            } `}
                        style={{
                            backgroundImage: `url(${image.src})`,
                        }}
                        aria-hidden={activeSlide !== index}
                    />
                ))}
            </div>

            {/* Dark cinematic overlay */}
            <div className="hero-overlay" />

            {/* Blueprint grid */}
            <div className="blueprint-grid" />

            {/* Content */}
            <div className="container hero-content">

                <p className="eyebrow eyebrow-red">
                    Branding · Retail · Experience · Execution
                </p>

                <h1>
                    Building brands
                    <br />
                    beyond the <em>ordinary.</em>
                </h1>

                <p className="hero-copy">
                    From brand environments and retail experiences to
                    architectural execution and high-impact advertising,
                    we turn ideas into experiences people remember.
                </p>

                <div className="hero-actions">

                    <Link
                        href="/contact"
                        className="button button-red"
                    >
                        Start a project
                        <ArrowUpRight size={18} />
                    </Link>

                    <Link
                        href="/portfolio"
                        className="text-link light-link"
                    >
                        Explore our work
                        <ArrowDown size={17} />
                    </Link>

                </div>

            </div>

            {/* Slide counter */}
            <div className="hero-index">
                {String(activeSlide + 1).padStart(2, '0')}
                <span>/</span>
                {String(heroImages.length).padStart(2, '0')}
            </div>

            {/* Slide progress */}
            <div className="hero-progress">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`hero - progress - item ${activeSlide === index
                            ? 'is-active'
                            : ''
                            } `}
                        onClick={() => setActiveSlide(index)}
                        aria-label={`Go to slide ${index + 1} `}
                        aria-current={
                            activeSlide === index
                                ? 'true'
                                : undefined
                        }
                    >
                        <span />
                    </button>
                ))}
            </div>

        </section>
    )
}
