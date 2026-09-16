'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/site-data'

export function ServiceList() {
    const duplicatedServices = [...services, ...services]

    return (
        <div className="services-marquee">
            <div className="services-marquee-window">
                <div className="services-marquee-track">
                    {duplicatedServices.map((item, index) => (
                        <Link
                            href="/services"
                            key={`${item.number}-${index}`}
                            className="service-slide"
                        >
                            <div className="service-slide-image">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="340px"
                                />

                                <div className="service-slide-overlay" />
                            </div>

                            <div className="service-slide-content">
                                <div className="service-slide-top">
                                    <span>{item.number}</span>

                                    <span className="service-slide-arrow">
                                        <ArrowUpRight size={19} />
                                    </span>
                                </div>

                                <div className="service-slide-bottom">
                                    <h3>{item.title}</h3>

                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}