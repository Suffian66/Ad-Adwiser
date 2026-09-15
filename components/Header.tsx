'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

import { logoUrl, navItems } from '@/lib/site-data'

export function Header() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    return (
        <header
            className={`site-header ${pathname === '/' ? 'header-on-hero' : ''
                }`}
        >
            <div className="container nav-inner">
                <Link
                    href="/"
                    className="brand-lockup"
                    aria-label="AD ADWISER home"
                >
                    <img
                        src="/logo.png"
                        alt="AD ADWISER — Transforming Ideas Into Reality"
                    />
                </Link>

                <nav className="desktop-nav" aria-label="Primary navigation">
                    <Link
                        href="/"
                        className={pathname === '/' ? 'active' : ''}
                    >
                        Home
                    </Link>

                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={
                                pathname.startsWith(item.href) ? 'active' : ''
                            }
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <Link
                    href="/contact"
                    className="button button-red nav-cta"
                >
                    Start a project
                    <ArrowUpRight size={16} />
                </Link>

                <button
                    className="mobile-menu-button"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                >
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {open && (
                <div className="mobile-nav">
                    <div className="container mobile-nav-inner">
                        <Link
                            href="/"
                            onClick={() => setOpen(false)}
                        >
                            Home
                        </Link>

                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            className="button button-red"
                            onClick={() => setOpen(false)}
                        >
                            Start a project
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}