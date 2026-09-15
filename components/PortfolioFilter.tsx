'use client'

import { useState } from 'react'

import { projects } from '@/lib/site-data'
import { ProjectGrid } from './ProjectGrid'

const filters = [
    'ALL',
    'BRANDING',
    'RETAIL',
    'ARCHITECTURAL',
    'OOH',
    'EVENTS',
    '3D DESIGN',
    'INTERIORS',
]

export function PortfolioFilter() {
    const [filter, setFilter] = useState('ALL')

    const filtered =
        filter === 'ALL'
            ? projects
            : projects.filter((project) =>
                project.category
                    .toUpperCase()
                    .includes(
                        filter
                            .replace('3D DESIGN', '3D')
                            .replace('ARCHITECTURAL', 'ARCHITECTURAL')
                            .replace('OOH', 'OOH')
                    )
            )

    return (
        <>
            <div
                className="filter-bar"
                role="tablist"
                aria-label="Portfolio filters"
            >
                {filters.map((item) => (
                    <button
                        key={item}
                        role="tab"
                        aria-selected={filter === item}
                        className={
                            filter === item
                                ? 'selected'
                                : ''
                        }
                        onClick={() => setFilter(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {filtered.length ? (
                <ProjectGrid projects={filtered} />
            ) : (
                <p className="empty-filter">
                    More work in this category is being prepared.{' '}
                    <a href="/contact">
                        Talk to the team
                    </a>
                    .
                </p>
            )}
        </>
    )
}