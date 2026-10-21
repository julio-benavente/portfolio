import Image from "next/image";
import { Mail } from "@/ui/icons";
import Reveal from "@/ui/Reveal";
import CopyEmail from "@/ui/CopyEmail";
import { buttonVariants } from "@/components/ui/button";
import HeroImage from "@/../public/assets/images/ProfileHero.png";
import { site } from "@/data/site";

const Hero = () => {
  return (
    <section id="home" className="pb-12 pt-28 md:pb-16 md:pt-36">
      <div className="container-narrow flex flex-col gap-8 sm:flex-row sm:items-start">
        <Reveal className="shrink-0">
          <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full bg-card">
            <Image
              src={HeroImage}
              alt={site.name}
              fill
              priority
              sizes="150px"
              className="origin-[50%_20%] scale-[1.7] object-cover object-top"
            />
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.1}>
            <h1 className="text-4xl font-medium leading-tight tracking-tight md:text-5xl">{site.name}</h1>
            <p className="mt-1 text-xl text-muted-foreground md:text-2xl">Software engineer</p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              I ship production products with React and Next.js, think beyond the deadline, and speak up early when a
              decision will cost us later. Always learning, and happiest when the whole team gets
              stronger.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${site.email}`} className={buttonVariants()}>
                <Mail />
              Get in touch
              </a>
              <CopyEmail />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
