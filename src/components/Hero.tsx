import React from 'react';
import { motion } from 'motion/react';
import { Button } from './Common';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury Home" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight tracking-tight uppercase"
        >
          Rentas vacacionales en el <br />
          <span className="text-accent italic text-3xl md:text-6xl">Centro de la ciudad de Mérida Yucatán</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/95 mb-12 font-light leading-relaxed max-w-3xl mx-auto"
        >
          Casas vacacionales únicas con experiencias locales inolvidables. Siéntete como en casa, lejos de casa.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-3xl md:rounded-full shadow-2xl max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 items-center mb-12"
        >
          <div className="md:col-span-3 px-4 text-left border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0">
            <label className="block text-[10px] uppercase tracking-widest text-warm-muted font-bold mb-1">Destino</label>
            <input type="text" placeholder="¿A dónde vas?" className="w-full bg-transparent focus:outline-none text-warm-text font-medium" defaultValue="Mérida" />
          </div>
          <div className="md:col-span-4 px-4 text-left border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 flex gap-4">
            <div className="flex-1">
              <label className="block text-[10px] uppercase tracking-widest text-warm-muted font-bold mb-1">Entrada</label>
              <input type="date" className="w-full bg-transparent focus:outline-none text-warm-text font-medium text-sm" />
            </div>
            <div className="flex-1">
              <label className="block text-[10px] uppercase tracking-widest text-warm-muted font-bold mb-1">Salida</label>
              <input type="date" className="w-full bg-transparent focus:outline-none text-warm-text font-medium text-sm" />
            </div>
          </div>
          <div className="md:col-span-2 px-4 text-left border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0">
            <label className="block text-[10px] uppercase tracking-widest text-warm-muted font-bold mb-1">Huéspedes</label>
            <input type="number" min="1" placeholder="1" className="w-full bg-transparent focus:outline-none text-warm-text font-medium" />
          </div>
          <div className="md:col-span-3 px-2">
            <button className="w-full bg-primary text-white py-4 rounded-full font-bold hover:bg-accent transition-all shadow-lg shadow-primary/20">
              Buscar
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a href="#properties" className="btn-primary">
            Ver propiedades
          </a>
          <a href="#experiences" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
            Explorar experiencias
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
