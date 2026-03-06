import React from 'react';
import { motion } from 'motion/react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80" 
          alt="Sunset Beach" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight"
        >
          Planea tu próxima escapada a <span className="text-accent italic">Mérida</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Estamos listos para recibirte y hacer que te sientas como en casa. Reserva hoy y vive una experiencia inolvidable.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button className="btn-primary">
            Ver propiedades
          </button>
          <button className="btn-outline border-white text-white hover:bg-white hover:text-primary">
            Contacta al equipo
          </button>
        </motion.div>
      </div>
    </section>
  );
};
