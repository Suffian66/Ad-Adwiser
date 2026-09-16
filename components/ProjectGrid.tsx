// import Image from 'next/image'
// import Link from 'next/link'
// import { ArrowUpRight } from 'lucide-react'

// import { projects } from '@/lib/site-data'

// type ProjectGridProps = {
//     limit?: number
//     projects?: typeof projects
// }

// export function ProjectGrid({
//     limit,
//     projects: projectList,
// }: ProjectGridProps) {
//     const source = projectList ?? projects

//     const list = limit
//         ? source.slice(0, limit)
//         : source

//     return (
//         <div className="project-grid">
//             {list.map((project) => (
//                 <Link
//                     href="/portfolio"
//                     className={`project-card project-${project.size}`}
//                     key={project.title}
//                 >
//                     <Image
//                         src={project.image}
//                         alt={`${project.title} ${project.category}`}
//                         fill
//                         sizes="(max-width: 700px) 100vw, 50vw"
//                     />

//                     <div className="project-overlay">
//                         <span>
//                             {project.category}
//                         </span>

//                         <h3>
//                             {project.title}
//                         </h3>

//                         <ArrowUpRight size={24} />
//                     </div>
//                 </Link>
//             ))}
//         </div>
//     )
// }




// import Image from 'next/image'
// import Link from 'next/link'
// import { ArrowUpRight } from 'lucide-react'
// import { projects } from '@/lib/site-data'

// type ProjectGridProps = {
//     limit?: number
//     projects?: typeof projects
// }

// export function ProjectGrid({
//     limit,
//     projects: projectList,
// }: ProjectGridProps) {
//     const source = projectList ?? projects

//     const list = limit
//         ? source.slice(0, limit)
//         : source

//     return (
//         <div className="project-showcase">
//             <div className="project-showcase-line project-showcase-line-top" />

//             {list.map((project, index) => (
//                 <Link
//                     href="/portfolio"
//                     className={`project-feature project-feature-${index + 1} project-${project.size}`}
//                     key={project.title}
//                 >
//                     <div className="project-feature-image">
//                         <Image
//                             src={project.image}
//                             alt={`${project.title} ${project.category}`}
//                             fill
//                             sizes={
//                                 index === 0
//                                     ? "(max-width: 700px) 100vw, 70vw"
//                                     : "(max-width: 700px) 100vw, 40vw"
//                             }
//                         />
//                     </div>

//                     <div className="project-feature-shade" />

//                     <div className="project-feature-number">
//                         {String(index + 1).padStart(2, '0')}
//                     </div>

//                     <div className="project-feature-content">
//                         <div>
//                             <span className="project-feature-category">
//                                 {project.category}
//                             </span>

//                             <h3>{project.title}</h3>
//                         </div>

//                         <div className="project-feature-action">
//                             <span>View project</span>

//                             <span className="project-feature-arrow">
//                                 <ArrowUpRight size={20} />
//                             </span>
//                         </div>
//                     </div>

//                     <div className="project-feature-accent" />
//                 </Link>
//             ))}

//             <div className="project-showcase-line project-showcase-line-bottom" />
//         </div>
//     )
// }


'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { projects } from '@/lib/site-data'

type ProjectGridProps = {
    limit?: number
    projects?: typeof projects
}

export function ProjectGrid({
    limit,
    projects: projectList,
}: ProjectGridProps) {
    const source = projectList ?? projects

    const list = limit
        ? source.slice(0, limit)
        : source

    const [active, setActive] = useState(0)
    const [hovered, setHovered] = useState<number | null>(null)

    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setActive((current) => (current + 1) % list.length)
        }, 5000)

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [list.length])

    const getRelativePosition = (index: number) => {
        let difference = index - active

        if (difference > list.length / 2) {
            difference -= list.length
        }

        if (difference < -list.length / 2) {
            difference += list.length
        }

        return difference
    }

    const goTo = (index: number) => {
        setActive(index)

        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }

        intervalRef.current = setInterval(() => {
            setActive((current) => (current + 1) % list.length)
        }, 5000)
    }

    return (
        <div className="project-carousel">

            <div className="project-carousel-stage">

                <div className="project-carousel-glow" />

                <div className="project-carousel-grid" />

                {list.map((project, index) => {
                    const position = getRelativePosition(index)

                    const isActive = position === 0
                    const isHovered = hovered === index

                    return (
                        <Link
                            href="/portfolio"
                            key={project.title}
                            className={[
                                'project-carousel-card',
                                active === index ? 'is-center' : '',
                                hovered === index ? 'is-hovered' : '',
                            ].join(' ')}
                            style={{
                                '--card-position': getRelativePosition(index),
                            } as React.CSSProperties}
                            onMouseEnter={() => {
                                setHovered(index)

                                if (index !== active) {
                                    goTo(index)
                                }
                            }}
                            onMouseLeave={() => setHovered(null)}
                            onClick={() => goTo(index)}
                        >

                            <div className="project-carousel-image">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} ${project.category}`}
                                    fill
                                    sizes="(max-width: 700px) 82vw, 430px"
                                />
                            </div>

                            <div className="project-carousel-overlay" />

                            <div className="project-carousel-number">
                                {String(index + 1).padStart(2, '0')}
                            </div>

                            <div className="project-carousel-info">

                                <div>
                                    <span>
                                        {project.category}
                                    </span>

                                    <h3>
                                        {project.title}
                                    </h3>
                                </div>

                                <div className="project-carousel-arrow">
                                    <ArrowUpRight size={20} />
                                </div>

                            </div>

                            <div className="project-carousel-accent" />

                        </Link>
                    )
                })}

            </div>

            <div className="project-carousel-controls">

                <div className="project-carousel-progress">

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

                <div className="project-carousel-counter">
                    <span>
                        {String(active + 1).padStart(2, '0')}
                    </span>

                    <i>/</i>

                    {String(list.length).padStart(2, '0')}
                </div>

            </div>

        </div>
    )
}