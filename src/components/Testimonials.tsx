import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Section } from './Common';
import { TESTIMONIALS } from '../constants';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <Section id="testimonials" className="bg-warm-sand/30 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Reseñas de Huéspedes</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-warm-text mb-6">Lo Que Dicen Nuestros Huéspedes</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 -left-10 text-primary/10">
            <Quote size={120} fill="currentColor" />
          </div>
          
          <div className="relative z-10 bg-white p-12 md:p-20 rounded-[3rem] card-shadow">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-xl md:text-3xl font-serif italic text-warm-text mb-10 leading-relaxed">
                  "{TESTIMONIALS[activeIndex].text}"
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-warm-sand mb-4 overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/150?u=${TESTIMONIALS[activeIndex].name}`} 
                      alt={TESTIMONIALS[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-warm-text">{TESTIMONIALS[activeIndex].name}</h4>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-12">
              <button 
                onClick={prev}
                className="w-12 h-12 rounded-full border border-warm-sand flex items-center justify-center text-warm-text hover:bg-primary hover:text-white transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={next}
                className="w-12 h-12 rounded-full border border-warm-sand flex items-center justify-center text-warm-text hover:bg-primary hover:text-white transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
