const statements = [
    {
        title: 'END-TO-END',
        text: 'Creative to execution',
    },
    {
        title: 'MULTI-SECTOR',
        text: 'Brand experiences across industries',
    },
    {
        title: 'CONCEPT TO COMPLETION',
        text: 'One partner from idea to installation',
    },
    {
        title: 'NATIONWIDE',
        text: 'Local expertise with broad capability',
    },
]

export function StatementSection() {
    return (
        <section className="statement-section">
            <div className="container statement-grid">

                <div>
                    <p className="eyebrow eyebrow-red">
                        What scale looks like
                    </p>

                    <h2>
                        One partner.
                        <br />
                        <em>Every touchpoint.</em>
                    </h2>
                </div>

                <div className="statements">
                    {statements.map((statement) => (
                        <div key={statement.title}>
                            <strong>{statement.title}</strong>
                            <span>{statement.text}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}