'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { logoUrl, navItems } from '@/lib/site-data'

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  return <header className={`site-header ${pathname === '/' ? 'header-on-hero' : ''}`}>
    <div className="container nav-inner">
      <Link href="/" className="brand-lockup" aria-label="AD ADWISER home"><img src={logoUrl} alt="AD ADWISER — Transforming Ideas Into Reality" /></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
        {navItems.map((item) => <Link key={item.href} href={item.href} className={pathname.startsWith(item.href) ? 'active' : ''}>{item.label}</Link>)}
      </nav>
      <Link href="/contact" className="button button-red nav-cta">Start a project <ArrowUpRight size={16} /></Link>
      <button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <div className="mobile-nav"><div className="container mobile-nav-inner"><Link href="/" onClick={() => setOpen(false)}>Home</Link>{navItems.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}<Link href="/contact" className="button button-red" onClick={() => setOpen(false)}>Start a project <ArrowUpRight size={16} /></Link></div></div>}
  </header>
}

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div><Link href="/" className="footer-logo"><img src={logoUrl} alt="AD ADWISER" /></Link><p className="footer-tagline">Transforming ideas<br />into reality.</p></div><div><p className="eyebrow footer-label">Explore</p><div className="footer-links">{['About', 'Services', 'Portfolio', 'Industries', 'Case Studies', 'Contact'].map(x => <Link key={x} href={`/${x === 'About' ? 'about' : x.toLowerCase().replaceAll(' ', '-')}`}>{x}</Link>)}</div></div><div><p className="eyebrow footer-label">Capabilities</p><div className="footer-links"><span>Branding & Retail</span><span>Architectural Branding</span><span>OOH Advertising</span><span>Events & 3D Design</span><span>Commercial Execution</span></div></div><div><p className="eyebrow footer-label">Find us</p><p className="footer-contact">Karachi, Pakistan<br /><a href="mailto:info@adadwiser.com.pk">info@adadwiser.com.pk</a><br /><a href="tel:+923118283345">+92 311 8283345</a></p><div className="socials"><a href="#" aria-label="Instagram">IG</a><a href="#" aria-label="LinkedIn">LI</a><a href="#" aria-label="Facebook">FB</a></div></div></div><div className="container footer-bottom"><span>© 2026 AD ADWISER. All Rights Reserved.</span><span>Branding · Retail · Experience · Execution</span></div></footer>
}

export function PageIntro({ eyebrow, title, accent, description, image }: { eyebrow: string; title: string; accent?: string; description?: string; image?: string }) {
 return <section className={`page-intro ${image ? 'page-intro-image' : ''}`} style={image ? { backgroundImage: `linear-gradient(90deg, rgba(11,27,54,.95), rgba(11,27,54,.55)), url(${image})` } : undefined}><div className="container"><p className="eyebrow">{eyebrow}</p><h1>{title} {accent && <em>{accent}</em>}</h1>{description && <p className="intro-description">{description}</p>}</div></section>
}

export function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
 return <div className={`section-heading ${light ? 'light' : ''}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{description && <p>{description}</p>}</div>
}

export function CTA({ title = 'Have an idea? Let’s build it.', description = 'Tell us what you are building, launching or transforming. We will help turn the idea into an experience your audience remembers.' }: { title?: string; description?: string }) {
 return <section className="cta-band"><div className="blueprint-ring ring-one" /><div className="blueprint-ring ring-two" /><div className="container cta-inner"><div><p className="eyebrow">Start a conversation</p><h2>{title}</h2><p>{description}</p></div><Link href="/contact" className="button button-white">Start a project <ArrowUpRight size={18} /></Link></div></section>
}
