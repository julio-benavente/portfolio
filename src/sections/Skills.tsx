import Section from "@/ui/Section";
import Reveal from "@/ui/Reveal";
import { skills } from "@/data/skills";

const Skills = () => {
  return (
    <Section id="skills" title="Skills" step={2}>
      <Reveal>
        <dl className="grid gap-4">
          {skills.map((skill) => (
            <div key={skill.group} className="grid gap-1 sm:grid-cols-[6rem_1fr] sm:gap-4">
              <dt className="text-base text-muted-foreground">{skill.group}</dt>
              <dd className="text-base leading-relaxed">{skill.items}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
};

export default Skills;
