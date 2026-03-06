import { ButtonLink } from '../components/ui/ButtonLink';
import { Reveal } from '../components/ui/Reveal';
import { SectionShell } from '../components/ui/SectionShell';
import { SectionIntro } from '../components/ui/SectionIntro';
import type { AboutContent } from '../types/homepage';

interface AboutSectionProps {
  content: AboutContent;
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <SectionShell id="about" className="bg-white">
      <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img
              src={content.image.src}
              alt={content.image.alt}
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 hidden rounded-[2rem] bg-warm-sand p-7 md:block">
            <p className="text-3xl font-bold text-primary">{content.stats[0].value}</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.25em] text-warm-muted">
              {content.stats[0].label}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionIntro heading={content.heading} />
          <div className="mt-8 space-y-5 text-lg leading-8 text-warm-muted">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {content.stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.75rem] bg-warm-sand/45 p-6">
                <p className="text-4xl font-bold text-warm-text">{stat.value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.24em] text-warm-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <ButtonLink href={content.cta.href}>{content.cta.label}</ButtonLink>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
