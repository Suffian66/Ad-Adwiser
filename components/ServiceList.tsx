'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

import { services } from '@/lib/site-data'

export function ServiceList() {
    const [active, setActive] = useState(0)

    return (
        <div className="service-list">
            {services.map((item, index) => (
                <Link
                    href="/services"
                    key={item.number}
                    className={`service-row ${active === index ? 'is-active' : ''
                        }`}
                    onMouseEnter={() => setActive(index)}
                >
                    <span className="service-number">
                        {item.number}
                    </span>

                    <span className="service-title">
                        {item.title}
                    </span>

                    <span className="service-desc">
                        {item.text}
                    </span>

                    <ArrowUpRight
                        className="service-arrow"
                        size={22}
                    />

                    <div className="service-preview">
                        <Image
                            src={item.image}
                            alt=""
                            fill
                            sizes="300px"
                        />
                    </div>
                </Link>
            ))}
        </div>
    )
}