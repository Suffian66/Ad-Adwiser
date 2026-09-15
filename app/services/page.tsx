import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { serviceGroups } from '@/lib/site-data'
import { PageIntro } from '@/components/PageIntro'
import { CTA } from '@/components/CTA'

export default function ServicesPage() { return <main><PageIntro eyebrow="Capabilities" title="The work behind" accent="the work." description="One integrated team for the strategic, creative and physical details that make brands matter." image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=85" /><section className="service-groups">{serviceGroups.map(group => <section className="service-group" key={group.number}><div className="container service-group-grid"><div className="service-group-image"><img src={group.image} alt={group.title} /></div><div className="service-group-content"><p className="eyebrow">{group.number} / Capabilities</p><h2>{group.title}</h2><p className="lead">{group.intro}</p><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul><Link href="/contact" className="text-link">Explore this capability <ArrowUpRight size={17} /></Link></div></div></section>)}</section><CTA /></main> }
