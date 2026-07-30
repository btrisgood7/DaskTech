import Section, { SectionHeading } from '../components/Section'
import TeamCard from '../components/TeamCard'
import { team } from '../utils/siteData'

export default function Team() {
  return (
    <Section id="team" className="surface-soft">
      <SectionHeading
        eyebrow="el equipo"
        title="Nuestro Equipo"
        subtitle="Nos conocemos desde hace tiempo, nos gusta la tecnología y un día decidimos juntar lo que sabemos hacer para ayudarte a resolver problemas reales."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>
    </Section>
  )
}
