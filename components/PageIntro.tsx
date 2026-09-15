type PageIntroProps = {
    eyebrow: string
    title: string
    accent?: string
    description?: string
    image?: string
}

export function PageIntro({
    eyebrow,
    title,
    accent,
    description,
    image,
}: PageIntroProps) {
    return (
        <section
            className={`page-intro ${image ? 'page-intro-image' : ''
                }`}
            style={
                image
                    ? {
                        backgroundImage: `
                  linear-gradient(
                    90deg,
                    rgba(11, 27, 54, 0.95),
                    rgba(11, 27, 54, 0.55)
                  ),
                  url(${image})
                `,
                    }
                    : undefined
            }
        >
            <div className="container">
                <p className="eyebrow">
                    {eyebrow}
                </p>

                <h1>
                    {title}{' '}

                    {accent && (
                        <em>{accent}</em>
                    )}
                </h1>

                {description && (
                    <p className="intro-description">
                        {description}
                    </p>
                )}
            </div>
        </section>
    )
}