import type { SectionHeading } from '../../types/homepage';

interface SectionIntroProps {
  heading: SectionHeading;
  align?: 'left' | 'center';
  theme?: 'default' | 'inverse';
}

export function SectionIntro({ heading, align = 'left', theme = 'default' }: SectionIntroProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : '';
  const titleClass = theme === 'inverse' ? 'text-white' : 'text-warm-text';
  const descriptionClass = theme === 'inverse' ? 'text-white/78' : 'text-warm-muted';

  return (
    <div className={`max-w-3xl ${alignment}`.trim()}>
      <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-primary">
        {heading.eyebrow}
      </span>
      <h2 className={`text-4xl font-bold leading-tight md:text-5xl ${titleClass}`}>{heading.title}</h2>
      <p className={`mt-5 text-base leading-8 md:text-lg ${descriptionClass}`}>{heading.description}</p>
    </div>
  );
}
