import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { SectionShell } from '../components/ui/SectionShell';
import { SectionIntro } from '../components/ui/SectionIntro';
import type { TestimonialsContent } from '../types/homepage';

interface TestimonialsSectionProps {
  content: TestimonialsContent;
}

export default function TestimonialsSection({ content }: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((current) => (current + 1) % content.items.length);
  const previous = () => setActiveIndex((current) => (current - 1 + content.items.length) % content.items.length);
  const activeItem = content.items[activeIndex];

  return (
    <SectionShell className="bg-white">
      <div className="mx-auto max-w-4xl">
        <SectionIntro heading={content.heading} align="center" />

        <div className="mt-12 rounded-[2.5rem] bg-warm-sand/40 p-8 text-center shadow-[0_25px_60px_rgba(74,63,53,0.08)] md:p-12">
          <div className="flex justify-center gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={20} className="fill-accent" />
            ))}
          </div>
          <p className="mt-8 text-2xl leading-10 text-warm-text md:text-3xl">“{activeItem.text}”</p>
          <p className="mt-8 text-lg font-bold text-warm-text">{activeItem.name}</p>
          <p className="text-sm uppercase tracking-[0.2em] text-warm-muted">{activeItem.location}</p>

          <div className="mt-8 flex justify-center gap-3">
            <button
              type="button"
              onClick={previous}
              className="rounded-full border border-warm-sand bg-white p-3 text-warm-text hover:border-primary hover:text-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={next}
              className="rounded-full border border-warm-sand bg-white p-3 text-warm-text hover:border-primary hover:text-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
