import Section from "@/ui/Section";
import { Download } from "@/ui/icons";
import Reveal from "@/ui/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { experience } from "@/data/experience";
import { site } from "@/data/site";

const Experience = () => {
  return (
    <Section id="experience" title="Experience" step={2}>
      <Reveal className="mb-2">
        <a href={site.resume} download className={buttonVariants({ size: "lg" })}>
          <Download />
          Download resume
        </a>
      </Reveal>

      <ul className="list-divided">
        {experience.map((job) => (
          <li key={`${job.date}-${job.company}`}>
            <Reveal className="py-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-base font-medium">
                  {job.position} <span className="text-muted-foreground">· {job.company}</span>
                </h3>
                <p className="text-base text-muted-foreground">{job.date}</p>
              </div>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{job.summary}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Experience;
