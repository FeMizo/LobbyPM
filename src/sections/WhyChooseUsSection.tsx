import { Home, MapPin, Sparkles, UserCheck } from 'lucide-react';
import { ButtonLink } from '../components/ui/ButtonLink';
import { Reveal } from '../components/ui/Reveal';
import { SectionShell } from '../components/ui/SectionShell';
import { SectionIntro } from '../components/ui/SectionIntro';
import type { FeatureItem, WhyChooseUsContent } from '../types/homepage';

interface WhyChooseUsSectionProps {
  content: WhyChooseUsContent;
}

const iconMap = {
  home: Home,
  'map-pin': MapPin,
  'user-check': UserCheck,
  sparkles: Sparkles,
} satisfies Record<FeatureItem['icon'], typeof Home>;

export function WhyChooseUsSection({ content }: WhyChooseUsSectionProps) {
  return (
    <SectionShell id="why-us" className="bg-white">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionIntro heading={content.heading} />
        <ButtonLink href={content.cta.href}>{content.cta.label}</ButtonLink>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {content.items.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <Reveal
              key={item.id}
              delay={index * 0.05}
              className="rounded-[2rem] border border-warm-sand bg-warm-bg p-7"
            >
              <div className="inline-flex rounded-[1.5rem] bg-white p-4 text-primary shadow-sm">
                <Icon size={28} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-warm-text">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-warm-muted">{item.description}</p>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
