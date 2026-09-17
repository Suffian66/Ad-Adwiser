import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { clients } from '@/lib/site-data'

export function ClientStrip() {
    return (
        <section className="client-strip">
            <div className="container trust-inner">

                <div className="trust-heading">
                    <p className="eyebrow">
                        Trusted to bring brands to life
                    </p>

                    <h2>
                        Big names.
                        <br />
                        <em>Real presence.</em>
                    </h2>

                    <span className="trust-rule" />
                </div>

                <div className="client-showcase">
                    <p className="trust-note">
                        Selected brand relationships
                    </p>

                    <div className="client-row">
                        {clients.map((client, index) => (
                            <span
                                className={`client-chip chip-${index % 4}`}
                                key={client}
                            >
                                <i />
                                {client}
                            </span>
                        ))}
                    </div>

                    <div className="trust-bottom">
                        <span>
                            Brand confidence, built into every touchpoint.
                        </span>

                        <Link
                            href="/portfolio"
                            className="text-link"
                        >
                            See the work
                            <ArrowUpRight size={17} />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}