import { MessageCircle, Phone, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface WhatsAppContact {
  label: string;
  phone: string;
  href: string;
}

interface FloatingWhatsAppProps {
  contacts: WhatsAppContact[];
}

export function FloatingWhatsApp({ contacts }: FloatingWhatsAppProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="fixed bottom-4 right-4 z-[95] md:bottom-6 md:right-6">
      <div
        className={[
          'mb-3 w-[min(84vw,320px)] rounded-2xl border border-warm-sand bg-white/95 p-3 shadow-[0_18px_45px_rgba(74,63,53,0.18)] backdrop-blur transition-all duration-300',
          open ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-2 scale-95 opacity-0',
        ].join(' ')}
        aria-hidden={!open}
      >
        <p className="px-1 text-[11px] font-bold uppercase tracking-[0.2em] text-warm-muted">WhatsApp</p>
        <div className="mt-2 space-y-2">
          {contacts.map((contact) => (
            <a
              key={contact.phone}
              href={contact.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-center justify-between rounded-xl border border-warm-sand/90 bg-warm-bg px-3 py-3 transition-colors hover:border-primary/40 hover:bg-primary/8"
            >
              <div>
                <p className="text-sm font-semibold text-warm-text">{contact.label}</p>
                <p className="text-xs text-warm-muted">{contact.phone}</p>
              </div>
              <Phone size={16} className="text-primary transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label={open ? 'Cerrar opciones de WhatsApp' : 'Abrir opciones de WhatsApp'}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_35px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366] active:scale-95"
      >
        {open ? <X size={20} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
