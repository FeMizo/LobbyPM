import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS, WHATSAPP_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-warm-text text-warm-bg pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h2 className="text-3xl font-serif font-bold tracking-tighter leading-none">LOBBY</h2>
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mt-1">Property Management</p>
            </div>
            <p className="text-warm-bg/70 leading-relaxed mb-8">
              Tu hogar en Mérida. Ofrecemos las mejores rentas vacacionales y experiencias locales curadas para una estancia inolvidable.
            </p>
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-warm-bg/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-8">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              {['Inicio', 'Propiedades', 'Experiencias', 'Sobre Nosotros', 'Contacto'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-warm-bg/70 hover:text-accent transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-8">Contáctanos</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-accent shrink-0" size={20} />
                <span className="text-warm-bg/70">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-accent shrink-0" size={20} />
                <div className="flex flex-col">
                  <a href={WHATSAPP_LINKS.phone1} target="_blank" rel="noopener noreferrer" className="text-warm-bg/70 hover:text-accent">{CONTACT_INFO.phone1}</a>
                  <a href={WHATSAPP_LINKS.phone2} target="_blank" rel="noopener noreferrer" className="text-warm-bg/70 hover:text-accent">{CONTACT_INFO.phone2}</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-accent shrink-0" size={20} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-warm-bg/70 hover:text-accent">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-8">Boletín Informativo</h4>
            <p className="text-warm-bg/70 mb-6">Suscríbete para recibir ofertas exclusivas y guías de viaje.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="w-full bg-warm-bg/10 border border-warm-bg/20 rounded-full py-4 px-6 focus:outline-none focus:border-accent transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary text-white px-6 rounded-full font-bold text-sm hover:bg-accent transition-colors">
                Unirse
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-warm-bg/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-warm-bg/50">
          <p>© {new Date().getFullYear()} Lobby Property Management. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-accent">Política de Privacidad</a>
            <a href="#" className="hover:text-accent">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
