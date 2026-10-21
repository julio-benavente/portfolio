import Section from "@/ui/Section";
import Reveal from "@/ui/Reveal";
import { education } from "@/data/education";

const Education = () => {
  return (
    <Section id="education" title="Education" step={3}>
      <ul className="list-divided">
        {education.map((item) => (
          <li key={item.degree}>
            <Reveal className="py-6">
              <h3 className="text-base font-medium">{item.degree}</h3>
              {item.school && <p className="mt-1 text-base text-muted-foreground">{item.school}</p>}
              <p className="mt-1 text-base text-muted-foreground">{item.date}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Education;
