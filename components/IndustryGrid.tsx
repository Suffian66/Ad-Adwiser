import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownRight } from 'lucide-react'

import { industries } from '@/lib/site-data'

type IndustryGridProps = {
    limit?: number
}

export function IndustryGrid({
    limit,
}: IndustryGridProps) {
    const list = limit
        ? industries.slice(0, limit)
        : industries

    return (
        <div className="industry-grid">
            {list.map((item) => (
                <Link
                    href="/industries"
                    className="industry-card"
                    key={item.title}
                >
                    <Image
                        src={item.image}
                        alt={`${item.title} brand environment`}
                        fill
                        sizes="(max-width: 700px) 100vw, 33vw"
                    />

                    <div className="industry-overlay">
                        <span>
                            Industry
                        </span>

                        <h3>
                            {item.title}
                        </h3>

                        <p>
                            {item.text}
                        </p>

                        <ArrowDownRight size={20} />
                    </div>
                </Link>
            ))}
        </div>
    )
}