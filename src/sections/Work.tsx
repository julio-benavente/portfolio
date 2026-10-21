import Image from "next/image";
import Section from "@/ui/Section";
import Reveal from "@/ui/Reveal";
import { works } from "@/data/works";

const Work = () => {
  const hasEmptySlot = works.length % 2 === 1;

  return (
    <Section id="work" title="Work" step={1}>
      <div className="grid border-l border-t border-border sm:grid-cols-2">
        {works.map((work, i) => (
          <Reveal key={work.name} delay={i * 0.1} className="grid-cell">
            <a href={work.websiteLink} target="_blank" rel="noreferrer" className="group project-card">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-border bg-card">
                <Image
                  src={work.image}
                  alt={`${work.name} homepage`}
                  fill
                  sizes="(min-width: 672px) 320px, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="text-center">
                <h3 className="text-base font-medium">{work.name}</h3>
                <p className="mt-1 text-base text-muted-foreground">{work.stack.join(" / ")}</p>
              </div>
            </a>
          </Reveal>
        ))}

        {hasEmptySlot && (
          <Reveal delay={works.length * 0.1} className="grid-cell hidden sm:block">
            <div className="relative h-full min-h-[200px] bg-background" aria-hidden="true">
              <div className="bg-stripes absolute inset-0" />
            </div>
          </Reveal>
        )}
      </div>
    </Section>
  );
};

export default Work;
