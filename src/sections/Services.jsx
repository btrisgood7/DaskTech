import Section, { SectionHeading } from '../components/Section'
import ServiceCard from '../components/ServiceCard'
import { services } from '../utils/siteData'

export default function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="servicios"
        title="Esto es lo que sabemos hacer"
        subtitle="Entre los cuatro cubrimos desde el desarrollo de software hasta el soporte técnico del día a día. Cuéntanos qué necesitas y vemos cómo ayudarte."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </Section>
  )
}
