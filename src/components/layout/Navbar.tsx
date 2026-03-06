import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { SiteSettings } from '../../types/homepage';

interface NavbarProps {
  site: SiteSettings;
}

const navLinks = [
  { label: 'Inicio', href: '#top' },
  { label: 'Propiedades', href: '#properties' },
  { label: 'Experiencias', href: '#experiences' },
  { label: 'Por qué elegirnos', href: '#why-us' },
  { label: 'Contacto', href: '#contact' },
];

export function Navbar({ site }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-warm-bg/95 py-4 shadow-sm backdrop-blur-xl' : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 lg:px-16 xl:px-24">
          <a href="#top" className={isScrolled ? 'text-primary' : 'text-white'}>
            <span className="block text-2xl font-bold tracking-tight">{site.siteName}</span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.38em] text-accent">
              gestión de propiedades
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold uppercase tracking-[0.24em] ${
                  isScrolled ? 'text-warm-text hover:text-primary' : 'text-white hover:text-accent'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/admin"
              className={`rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] ${
                isScrolled
                  ? 'border-primary bg-primary text-white hover:bg-accent hover:border-accent'
                  : 'border-white/40 bg-white text-primary hover:border-accent hover:bg-accent hover:text-white'
              }`}
            >
              Admin
            </a>
          </nav>

          <button
            type="button"
            className={`rounded-full p-2 md:hidden ${isScrolled ? 'text-primary' : 'text-white'}`}
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Abrir navegación"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-warm-text/95 px-8 pb-10 pt-28 text-white transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/admin"
            className="mt-4 inline-flex w-fit rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white"
          >
            Admin
          </a>
        </div>
      </div>
    </>
  );
}
