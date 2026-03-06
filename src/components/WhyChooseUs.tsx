import React from 'react';
import { motion } from 'motion/react';
import { Section } from './Common';
import { Home, MapPin, UserCheck, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Home size={32} />,
    title: "Casas Verificadas",
    description: "Cada propiedad en nuestro portafolio ha sido inspeccionada personalmente para garantizar los más altos estándares de calidad y confort."
  },
  {
    icon: <MapPin size={32} />,
    title: "Ubicaciones Premium",
    description: "Desde el corazón del Centro Histórico hasta las zonas más exclusivas del norte, nuestras casas están donde quieres estar."
  },
  {
    icon: <UserCheck size={32} />,
    title: "Concierge Local",
    description: "Nuestro equipo está disponible 24/7 para ayudarte con cualquier necesidad, desde transporte hasta recomendaciones locales."
  },
  {
    icon: <Sparkles size={32} />,
    title: "Experiencias Auténticas",
    description: "Te conectamos con el alma de Yucatán a través de tours y actividades curadas que no encontrarás en ningún otro lugar."
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <Section id="about" className="bg-warm-sand/20 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">La Diferencia Lobby PM</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-warm-text mb-6">¿Por Qué Elegirnos?</h2>
          <p className="text-warm-muted max-w-2xl mx-auto leading-relaxed">
            Nos apasiona crear estancias memorables. Combinamos la calidez de un hogar con la excelencia de un servicio de clase mundial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center text-primary mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-warm-text mb-4">{feature.title}</h3>
              <p className="text-warm-muted leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <button className="btn-primary">
            Explorar casas disponibles
          </button>
        </div>
      </div>
    </Section>
  );
};
