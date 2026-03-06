import React from 'react';
import { motion } from 'motion/react';
import { Section } from './Common';

export const About: React.FC = () => {
  return (
    <Section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80" 
                alt="Luxury Villa Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-warm-sand rounded-[3rem] -z-0 hidden md:block" />
            <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-white p-8 rounded-3xl shadow-xl z-20 hidden md:block max-w-[200px]">
              <p className="text-4xl font-serif font-bold text-primary mb-2">100%</p>
              <p className="text-xs uppercase tracking-widest text-warm-muted font-bold">Casas Verificadas</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Sobre Lobby PM</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-warm-text mb-8 leading-tight">
              Redefiniendo las Rentas Vacacionales de Lujo
            </h2>
            <p className="text-warm-muted text-lg mb-6 leading-relaxed">
              En Lobby PM, creemos que unas vacaciones perfectas comienzan con el lugar adecuado. No somos solo una plataforma de reservas; somos tus anfitriones locales dedicados a hacerte sentir en casa.
            </p>
            <p className="text-warm-muted text-lg mb-10 leading-relaxed">
              Nuestra colección en Mérida ha sido seleccionada a mano, asegurando que cada propiedad ofrezca no solo lujo, sino calidez, alma y una conexión auténtica con el destino.
            </p>
            
            <div className="grid grid-cols-2 gap-10 mb-12">
              <div>
                <p className="text-4xl font-serif font-bold text-warm-text mb-2">25+</p>
                <p className="text-sm uppercase tracking-widest text-warm-muted font-bold">Propiedades</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-warm-text mb-2">500+</p>
                <p className="text-sm uppercase tracking-widest text-warm-muted font-bold">Huéspedes Felices</p>
              </div>
            </div>

            <button className="btn-primary">
              Nuestra Historia
            </button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
