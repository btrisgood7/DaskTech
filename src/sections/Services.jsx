import Section, { SectionHeading } from '../components/Section'
import ServiceCard from '../components/ServiceCard'
import { services } from '../utils/siteData'

export default function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Servicios"
        title="Lo que podemos hacer por ti"
        subtitle="Desde el desarrollo de software hasta la infraestructura física, cubrimos las necesidades tecnológicas de tu empresa en un solo lugar."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </Section>
  )
}
