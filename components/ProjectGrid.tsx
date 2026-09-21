'use client'

import Image from 'next/image'
import Link from 'next/link'

import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
} from 'lucide-react'

import { useEffect, useState } from 'react'

import { projects } from '@/lib/site-data'

type Project = (typeof projects)[number] & {
    images?: string[]
    description?: string
    location?: string
}

type ProjectGridProps = {
    limit?: number
    projects?: Project[]
}

export function ProjectGrid({
    limit,
    projects: projectList,
}: ProjectGridProps) {
    const source = projectList ?? (projects as Project[])

    const list = limit
        ? source.slice(0, limit)
        : source

    const [active, setActive] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    const project = list[active]

    /*
     * -------------------------------------------------------
     * AUTO SLIDER
     * -------------------------------------------------------
     */

    useEffect(() => {
        if (list.length <= 1 || isPaused) return

        const timer = setInterval(() => {
            setActive((current) => (current + 1) % list.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [list.length, isPaused])

    /*
     * -------------------------------------------------------
     * CONTROLS
     * -------------------------------------------------------
     */

    const nextProject = () => {
        setActive((current) => (current + 1) % list.length)
    }

    const previousProject = () => {
        setActive((current) =>
            current === 0
                ? list.length - 1
                : current - 1
        )
    }

    const goTo = (index: number) => {
        setActive(index)
    }

    if (!project) {
        return null
    }

    const projectImages =
        project.images?.length
            ? project.images.slice(0, 4)
            : [project.image]

    return (
        <div
            className="project-showcase"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >

            {/* =====================================================
                MAIN PROJECT
            ===================================================== */}

            <div className="project-showcase-stage">

                {/* BACKGROUND */}
                <div className="project-showcase-grid" />

                <div className="project-showcase-glow" />


                {/* =================================================
                    LEFT — IMAGE COMPOSITION
                ================================================= */}

                <div className="project-showcase-visual">

                    <div className="project-image-stack">

                        {projectImages.map(
                            (image, imageIndex) => (
                                <div
                                    key={`${image}-${imageIndex}`}
                                    className={`project-stack-image image-${imageIndex + 1}`}
                                >
                                    <Image
                                        src={image}
                                        alt={`${project.title} project image`}
                                        fill
                                        sizes="(max-width: 700px) 205px, 290px"
                                    />
                                </div>
                            )
                        )}

                        <div className="project-image-shadow" />

                    </div>

                    <div className="project-visual-number">
                        {String(active + 1).padStart(2, '0')}
                    </div>

                </div>


                {/* =================================================
                    RIGHT — CONTENT
                ================================================= */}

                <div className="project-showcase-content">

                    <div className="project-content-top">

                        <span className="project-category">
                            {project.category}
                        </span>

                        <span className="project-index">
                            {String(active + 1).padStart(2, '0')}
                            {' / '}
                            {String(list.length).padStart(2, '0')}
                        </span>

                    </div>


                    <h3>
                        {project.title}
                    </h3>


                    <div className="project-content-line" />


                    <p>
                        {(() => {
                            const description =
                                project.description ||
                                'A carefully crafted brand experience designed to create visibility, impact and lasting impressions.'

                            return description.length > 200
                                ? `${description.slice(0, 195)}...`
                                : description
                        })()}
                    </p>


                    {project.location && (
                        <div className="project-location">

                            <span>
                                Location
                            </span>

                            <strong>
                                {project.location}
                            </strong>

                        </div>
                    )}


                    <Link
                        href="/portfolio"
                        className="project-view-button"
                    >
                        <span className="project-view-label">
                            View project
                        </span>

                        <span className="project-view-icon">
                            <ArrowUpRight size={18} />
                        </span>
                    </Link>

                </div>

            </div>


            {/* =====================================================
                CONTROLS
            ===================================================== */}

            <div className="project-showcase-controls">

                <div className="project-showcase-progress">

                    {list.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={
                                active === index
                                    ? 'is-active'
                                    : ''
                            }
                            onClick={() => goTo(index)}
                            aria-label={`Show project ${index + 1}`}
                        />
                    ))}

                </div>


                <div className="project-showcase-arrows">

                    <button
                        type="button"
                        onClick={previousProject}
                        aria-label="Previous project"
                    >
                        <ArrowLeft size={18} />
                    </button>

                    <button
                        type="button"
                        onClick={nextProject}
                        aria-label="Next project"
                    >
                        <ArrowRight size={18} />
                    </button>

                </div>

            </div>

        </div>
    )
}