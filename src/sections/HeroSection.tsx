import { motion, useReducedMotion } from 'motion/react';
import { ButtonLink } from '../components/ui/ButtonLink';
import type { HeroContent } from '../types/homepage';

interface HeroSectionProps {
  content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={content.image.src}
          alt={content.image.alt}
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          referrerPolicy="no-referrer"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(44,34,29,0.82),rgba(44,34,29,0.36),rgba(217,119,87,0.32))]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-6 pb-14 pt-32 md:px-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-16 xl:px-24">
        <div className="max-w-4xl">
          <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/90 backdrop-blur">
            {content.eyebrow}
          </span>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-4xl text-5xl font-bold leading-[0.95] text-white md:text-7xl"
          >
            {content.headline}
          </motion.h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/86 md:text-xl"
          >
            {content.subheadline}
          </motion.p>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <ButtonLink href={content.primaryCta.href}>{content.primaryCta.label}</ButtonLink>
            <ButtonLink
              href={content.secondaryCta.href}
              variant="outline"
              className="border-white text-white hover:border-white hover:bg-white hover:text-primary"
            >
              {content.secondaryCta.label}
            </ButtonLink>
          </motion.div>
        </div>

        <motion.aside
          initial={reduceMotion ? false : { opacity: 0, x: 24 }}
          animate={reduceMotion ? {} : { opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="self-end rounded-[2rem] border border-white/15 bg-white/12 p-6 text-white backdrop-blur-xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/65">At a glance</p>
          <div className="mt-6 grid gap-5">
            {content.stats.map((stat) => (
              <div key={stat.label} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
