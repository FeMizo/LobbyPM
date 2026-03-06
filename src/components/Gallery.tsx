import React from 'react';
import { motion } from 'motion/react';
import { Section } from './Common';
import { GALLERY_IMAGES } from '../constants';

export const Gallery: React.FC = () => {
  return (
    <Section id="gallery" className="bg-warm-sand/20">
      <div className="text-center mb-20">
        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Viaje Visual</span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-warm-text">Inspiración para tu Estancia</h2>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        {GALLERY_IMAGES.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] overflow-hidden group break-inside-avoid shadow-lg"
          >
            <img 
              src={img} 
              alt={`Gallery ${index}`} 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
