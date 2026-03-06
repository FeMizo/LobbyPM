import { ButtonLink } from '../components/ui/ButtonLink';
import type { FinalCtaContent } from '../types/homepage';

interface FinalCtaSectionProps {
  content: FinalCtaContent;
}

export default function FinalCtaSection({ content }: FinalCtaSectionProps) {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-16 xl:px-24">
      <div className="absolute inset-0">
        <img
          src={content.image.src}
          alt={content.image.alt}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(44,34,29,0.82),rgba(44,34,29,0.4),rgba(242,153,74,0.25))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">{content.title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85">{content.text}</p>
        <div className="mt-10">
          <ButtonLink href={content.button.href}>{content.button.label}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
