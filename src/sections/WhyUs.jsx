import Section, { SectionHeading } from '../components/Section'
import FeatureCard from '../components/FeatureCard'
import { reasons } from '../utils/siteData'

export default function WhyUs() {
  return (
    <Section id="why-us" className="surface-soft">
      <SectionHeading
        eyebrow="por qué nosotros"
        title="Razones para darnos una oportunidad"
        subtitle="Somos un equipo pequeño buscando construir confianza, un proyecto a la vez. Esto es lo que puedes esperar de nosotros."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason) => (
          <FeatureCard key={reason.title} {...reason} />
        ))}
      </div>
    </Section>
  )
}
