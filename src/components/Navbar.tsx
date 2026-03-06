import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Propiedades', href: '#properties' },
    { name: 'Experiencias', href: '#experiences' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-warm-bg/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className={`flex flex-col transition-colors duration-500 ${
            isScrolled ? 'text-primary' : 'text-white'
          }`}>
            <span className="text-2xl font-serif font-bold leading-none tracking-tighter">LOBBY</span>
            <span className={`text-[8px] uppercase tracking-[0.4em] font-bold ${isScrolled ? 'text-accent' : 'text-accent/80'}`}>Property Management</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm uppercase tracking-widest font-medium transition-colors duration-500 hover:text-accent ${
                  isScrolled ? 'text-warm-text' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-500 ${
              isScrolled 
                ? 'bg-primary text-white hover:bg-accent' 
                : 'bg-white text-primary hover:bg-accent hover:text-white'
            }`}>
              Reservar Ahora
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 transition-colors duration-500 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left"
          style={{ scaleX }}
        />
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-warm-text transition-transform duration-500 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-2xl text-warm-bg font-serif uppercase tracking-widest font-light hover:text-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-primary text-white px-10 py-4 rounded-full text-lg font-bold uppercase tracking-widest">
            Reservar Ahora
          </button>
        </div>
      </div>
    </>
  );
};
