import React from 'react';
import { motion } from 'motion/react';
import { Section } from './Common';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_LINKS } from '../constants';

export const ContactCTA: React.FC = () => {
  return (
    <Section id="contact" className="bg-warm-bg py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-[3rem] overflow-hidden shadow-2xl relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <div className="relative z-10 grid lg:grid-cols-2">
            <div className="p-12 md:p-20">
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Atención Personalizada</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                ¿Tienes alguna duda? Estamos aquí para ayudarte
              </h2>
              <p className="text-white/80 text-lg mb-12 leading-relaxed">
                Nuestro equipo de concierge está disponible para ayudarte a planear cada detalle de tu viaje. Desde transporte privado hasta cenas exclusivas.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a href={WHATSAPP_LINKS.phone1} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-accent transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">WhatsApp 1</p>
                    <p className="text-lg font-serif">{CONTACT_INFO.phone1}</p>
                  </div>
                </a>
                <a href={WHATSAPP_LINKS.phone2} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-accent transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">WhatsApp 2</p>
                    <p className="text-lg font-serif">{CONTACT_INFO.phone2}</p>
                  </div>
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 text-white hover:text-accent transition-colors group sm:col-span-2">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Escríbenos</p>
                    <p className="text-lg font-serif">{CONTACT_INFO.email}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white/5 p-12 md:p-20 flex items-center justify-center border-l border-white/10">
              <div className="w-full max-w-md">
                <h3 className="text-2xl font-serif font-bold text-white mb-8">Envíanos un mensaje</h3>
                <form className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Nombre completo" 
                      className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-6 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Correo electrónico" 
                      className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-6 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="¿En qué podemos ayudarte?" 
                      rows={4}
                      className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-6 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full bg-accent text-primary font-bold py-5 rounded-2xl hover:bg-white transition-all flex items-center justify-center gap-3">
                    <MessageSquare size={20} />
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
