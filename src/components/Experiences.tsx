import React from 'react';
import { motion } from 'motion/react';
import { Section } from './Common';
import { EXPERIENCES } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Experiences: React.FC = () => {
  return (
    <Section id="experiences" className="bg-white py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Vida Local</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-warm-text mb-6">Experiencias y Actividades</h2>
          <p className="text-warm-muted max-w-2xl mx-auto leading-relaxed">
            No solo te ofrecemos un lugar donde dormir, sino una puerta de entrada a lo mejor de Mérida y la península de Yucatán.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[400px] rounded-warm overflow-hidden mb-6">
                <img 
                  src={exp.image} 
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-white/80 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {exp.description}
                  </p>
                  <a 
                    href={exp.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest"
                  >
                    Explorar <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-warm-sand rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-warm-text mb-6">¿Buscas algo especial?</h3>
            <p className="text-warm-muted text-lg mb-8 leading-relaxed">
              Nuestro servicio de concierge local está listo para personalizar tu estancia. Desde chefs privados hasta tours exclusivos en cenotes.
            </p>
            <button className="btn-primary">
              Contacta al equipo
            </button>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-40 rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=400&q=80" alt="Beach" className="w-full h-full object-cover" />
              </div>
              <div className="h-60 rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" alt="Ocean" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-60 rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1544735018-3fd393618f6d?auto=format&fit=crop&w=400&q=80" alt="Pool" className="w-full h-full object-cover" />
              </div>
              <div className="h-40 rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=400&q=80" alt="Jungle" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
