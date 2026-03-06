import React from 'react';
import { motion } from 'motion/react';
import { Section } from './Common';
import { PROPERTIES } from '../constants';
import { MapPin, Star } from 'lucide-react';

export const FeaturedProperties: React.FC = () => {
  return (
    <Section id="properties" className="bg-warm-sand/30 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Nuestra Colección</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-warm-text">Propiedades Destacadas</h2>
        </div>
        <p className="text-warm-muted max-w-md leading-relaxed">
          Seleccionamos cuidadosamente cada propiedad para garantizar una estancia acogedora, auténtica y llena de comodidades.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROPERTIES.slice(0, 6).map((prop, index) => (
          <motion.div
            key={prop.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            className="bg-white rounded-warm overflow-hidden card-shadow group"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img 
                src={prop.image} 
                alt={prop.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <Star size={14} className="text-accent fill-accent" />
                <span className="text-xs font-bold text-warm-text">{prop.rating}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-sm font-medium flex items-center gap-1">
                  <MapPin size={14} /> {prop.location}
                </p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif font-bold text-warm-text mb-2">{prop.name}</h3>
              <p className="text-warm-muted text-sm line-clamp-2 mb-6 leading-relaxed">
                {prop.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-warm-sand">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-warm-muted font-bold">Precio</p>
                  <p className="text-lg font-bold text-primary">{prop.price}</p>
                </div>
                <a 
                  href={prop.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-warm-sand text-warm-text px-6 py-2 rounded-full text-xs font-bold hover:bg-primary hover:text-white transition-colors"
                >
                  Ver propiedad
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <button className="btn-outline">
          Ver Todas las Propiedades
        </button>
      </div>
    </Section>
  );
};
