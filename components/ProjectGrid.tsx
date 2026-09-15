import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

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

    return (
        <div className="project-grid">
            {list.map((project) => (
                <Link
                    href="/portfolio"
                    className={`project-card project-${project.size}`}
                    key={project.title}
                >
                    <Image
                        src={project.image}
                        alt={`${project.title} ${project.category}`}
                        fill
                        sizes="(max-width: 700px) 100vw, 50vw"
                    />

                    <div className="project-overlay">
                        <span>
                            {project.category}
                        </span>

                        <h3>
                            {project.title}
                        </h3>

                        <ArrowUpRight size={24} />
                    </div>
                </Link>
            ))}
        </div>
    )
}