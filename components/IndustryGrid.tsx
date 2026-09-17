import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { industries } from '@/lib/site-data'

type IndustryGridProps = {
    limit?: number
}

export function IndustryGrid({ limit }: IndustryGridProps) {
    const list = limit ? industries.slice(0, limit) : industries

    return (
        <div className="industry-list">
            {list.map((item, index) => (
                <Link
                    href="/industries"
                    className="industry-row"
                    key={item.title}
                >
                    <div className="industry-number">
                        {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="industry-info">
                        <span>Industry</span>

                        <h3>{item.title}</h3>

                        <p>{item.text}</p>
                    </div>

                    <div className="industry-image">
                        <Image
                            src={item.image}
                            alt={`${item.title} brand environment`}
                            fill
                            sizes="(max-width: 900px) 40vw, 280px"
                        />
                    </div>

                    <div className="industry-arrow">
                        <ArrowUpRight size={24} />
                    </div>
                </Link>
            ))}
        </div>
    )
}