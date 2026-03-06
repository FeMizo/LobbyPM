import { ArrowRight } from 'lucide-react';
import { memo } from 'react';
import { ButtonLink } from '../components/ui/ButtonLink';
import { Reveal } from '../components/ui/Reveal';
import { SectionShell } from '../components/ui/SectionShell';
import { SectionIntro } from '../components/ui/SectionIntro';
import type { ExperienceSummary, ExperiencesContent } from '../types/homepage';

interface ExperiencesSectionProps {
  content: ExperiencesContent;
}

const ExperienceCard = memo(function ExperienceCard({
  item,
  index,
}: {
  item: ExperienceSummary;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.05} className="group">
      <a href={item.href} className="block overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_rgba(74,63,53,0.08)]">
        <div className="relative">
          <img
            src={item.image.src}
            alt={item.image.alt}
            className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            sizes="(max-width: 1024px) 100vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/80">{item.description}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-accent">
              Explorar <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  );
});

export function ExperiencesSection({ content }: ExperiencesSectionProps) {
  return (
    <SectionShell id="experiences" className="bg-warm-sand/25">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionIntro heading={content.heading} />
        <ButtonLink href={content.cta.href} variant="outline" className="w-fit">
          {content.cta.label}
        </ButtonLink>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {content.items.map((item, index) => (
          <ExperienceCard key={item.id} item={item} index={index} />
        ))}
      </div>

      <Reveal className="mt-16 grid gap-8 overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-[0_25px_60px_rgba(74,63,53,0.08)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:p-12">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Planeación personalizada</p>
          <h3 className="mt-5 text-4xl font-bold leading-tight text-warm-text">{content.concierge.title}</h3>
          <p className="mt-5 text-base leading-8 text-warm-muted">{content.concierge.description}</p>
          <div className="mt-8">
            <ButtonLink href={content.concierge.cta.href}>{content.concierge.cta.label}</ButtonLink>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {content.concierge.imageGrid.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={`h-full min-h-40 w-full rounded-[1.75rem] object-cover ${
                index % 2 === 1 ? 'translate-y-6' : ''
              }`}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              sizes="(max-width: 1024px) 50vw, 20vw"
            />
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}
