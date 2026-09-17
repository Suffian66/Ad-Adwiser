import { Plus, ArrowUpRight } from 'lucide-react'

import { process } from '@/lib/site-data'
import { SectionHeading } from '@/components/SectionHeading'

export function ProcessSection() {
    return (
        <section className="section process-section">
            <div className="container">
                <SectionHeading
                    eyebrow="Our method"
                    title="How we bring ideas to life"
                />

                <div className="process-intro">
                    <p>
                        From the first idea to the final installation, every
                        stage is carefully planned, designed and executed.
                    </p>

                    <span className="process-intro-label">
                        06 STEPS / ONE COMPLETE EXPERIENCE
                    </span>
                </div>

                <div className="process-timeline">
                    <div className="process-line">
                        <span className="process-line-progress" />
                    </div>

                    {process.map(([number, title, text], index) => (
                        <div
                            className="process-step"
                            key={number}
                            style={{
                                '--step-index': index,
                            }}
                        >
                            <div className="process-step-top">
                                <span className="process-number">
                                    {number}
                                </span>

                                {index !== process.length - 1 && (
                                    <Plus
                                        className="process-plus"
                                        size={16}
                                    />
                                )}
                            </div>

                            <div className="process-marker">
                                <span />
                            </div>

                            <div className="process-content">
                                <div className="process-title-row">
                                    <h3>{title}</h3>

                                    <ArrowUpRight
                                        className="process-arrow"
                                        size={18}
                                    />
                                </div>

                                <p>{text}</p>
                            </div>

                            <span className="process-watermark">
                                {number}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}