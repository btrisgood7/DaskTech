import Section, { SectionHeading } from '../components/Section'
import FeatureCard from '../components/FeatureCard'
import { reasons } from '../utils/siteData'

export default function WhyUs() {
  return (
    <Section id="why-us">
      <SectionHeading
        eyebrow="¿Por qué elegirnos?"
        title="Razones para confiar en DaskTech"
        subtitle="No solo entregamos proyectos: construimos relaciones de largo plazo basadas en resultados y confianza."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason) => (
          <FeatureCard key={reason.title} {...reason} />
        ))}
      </div>
    </Section>
  )
}
