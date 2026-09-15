'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { useState } from 'react'
import { industries, projects, services } from '@/lib/site-data'

export function ServiceList() { const [active, setActive] = useState(0); return <div className="service-list">{services.map((item, index) => <Link href="/services" key={item.number} className={`service-row ${active === index ? 'is-active' : ''}`} onMouseEnter={() => setActive(index)}><span className="service-number">{item.number}</span><span className="service-title">{item.title}</span><span className="service-desc">{item.text}</span><ArrowUpRight className="service-arrow" size={22} /><div className="service-preview"><Image src={item.image} alt="" fill sizes="300px" /></div></Link>)}</div> }

export function ProjectGrid({ limit, projects: projectList }: { limit?: number; projects?: typeof projects }) { const source = projectList ?? projects; const list = limit ? source.slice(0, limit) : source; return <div className="project-grid">{list.map(project => <Link href="/portfolio" className={`project-card project-${project.size}`} key={project.title}><Image src={project.image} alt={`${project.title} ${project.category}`} fill sizes="(max-width: 700px) 100vw, 50vw" /><div className="project-overlay"><span>{project.category}</span><h3>{project.title}</h3><ArrowUpRight size={24} /></div></Link>)}</div> }

export function IndustryGrid({ limit }: { limit?: number }) { const list = limit ? industries.slice(0, limit) : industries; return <div className="industry-grid">{list.map(item => <Link href="/industries" className="industry-card" key={item.title}><Image src={item.image} alt={`${item.title} brand environment`} fill sizes="(max-width: 700px) 100vw, 33vw" /><div className="industry-overlay"><span>Industry</span><h3>{item.title}</h3><p>{item.text}</p><ArrowDownRight size={20} /></div></Link>)}</div> }

export function PortfolioFilter() { const [filter, setFilter] = useState('ALL'); const filters = ['ALL', 'BRANDING', 'RETAIL', 'ARCHITECTURAL', 'OOH', 'EVENTS', '3D DESIGN', 'INTERIORS']; const filtered = filter === 'ALL' ? projects : projects.filter(project => project.category.toUpperCase().includes(filter.replace('3D DESIGN', '3D').replace('ARCHITECTURAL', 'ARCHITECTURAL').replace('OOH', 'OOH'))); return <><div className="filter-bar" role="tablist" aria-label="Portfolio filters">{filters.map(item => <button key={item} role="tab" aria-selected={filter === item} className={filter === item ? 'selected' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div>{filtered.length ? <ProjectGrid projects={filtered} /> : <p className="empty-filter">More work in this category is being prepared. <a href="/contact">Talk to the team</a>.</p>}</> }
