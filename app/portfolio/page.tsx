import { CTA } from "@/components/CTA";
import { PageIntro } from "@/components/PageIntro";
import { PortfolioFilter } from "@/components/PortfolioFilter";

export default function PortfolioPage() { return <main><PageIntro eyebrow="Selected work" title="Our work" accent="in the real world." description="A selection of brand environments, campaigns and physical experiences shaped with our clients." image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85" /><section className="section portfolio-page"><div className="container"><PortfolioFilter /></div></section><CTA title="Your brand belongs out there." /></main> }
