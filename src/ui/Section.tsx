import { ReactNode } from "react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

interface SectionProps {
  id: string;
  title?: string;
  /** Section number shown by the filled squares in the title */
  step?: number;
  children: ReactNode;
}

const Section = ({ id, title, step, children }: SectionProps) => {
  return (
    <section id={id} className="py-12 md:py-16">
      <div className="container-narrow">
        {title && (
          <Reveal>
            <SectionTitle step={step} className="mb-6">
              {title}
            </SectionTitle>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
