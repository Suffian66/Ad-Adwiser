import { CTA } from "@/components/CTA";
import { IndustryGrid } from "@/components/IndustryGrid";
import { PageIntro } from "@/components/PageIntro";
import { SectionHeading } from "@/components/SectionHeading";

export default function IndustriesPage() { return <main><PageIntro eyebrow="Our perspective" title="Built for different industries." accent="Designed for impact." description="Every sector has its own language. We find it, sharpen it and build it into the experience." image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85" /><section className="section"><div className="container"><SectionHeading eyebrow="Where we create" title="A wider view of the brand." /><IndustryGrid /></div></section><CTA /></main> }
