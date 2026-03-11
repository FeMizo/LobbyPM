import { MapPin, Star, X } from 'lucide-react';
import { useEffect } from 'react';
import type { PropertySummary } from '../../types/homepage';
import { ButtonLink } from './ButtonLink';
import { PropertyImage } from './PropertyImage';

interface PropertiesPopupProps {
  isOpen: boolean;
  properties: PropertySummary[];
  onClose: () => void;
}

export function PropertiesPopup({ isOpen, properties, onClose }: PropertiesPopupProps) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/55 px-4 py-6" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Propiedades destacadas"
        className="max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.3)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-warm-sand px-6 py-5 md:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Disponibilidad</p>
            <h2 className="mt-2 text-3xl font-bold text-warm-text">Propiedades destacadas</h2>
            <p className="mt-2 text-sm text-warm-muted">Nombre, ubicación, precio, rating y descripción.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar popup"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-warm-sand text-warm-text transition-colors hover:bg-warm-sand"
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-6 py-6 md:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {properties.length > 0 ? (
              properties.map((property) => {
                const externalLink = property.externalLink ?? { label: 'Solicitar', href: property.href };

                return (
                  <article key={property.id} className="overflow-hidden rounded-3xl border border-warm-sand bg-warm-bg/45">
                    <PropertyImage
                      image={property.image}
                      size="card"
                      hover="soft"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-2xl font-bold text-warm-text">{property.name}</h3>
                        <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-warm-text shadow-sm">
                          <Star size={13} className="fill-accent text-accent" />
                          {property.rating.toFixed(1)}
                        </span>
                      </div>
                      <p className="mt-2 flex items-center gap-2 text-sm text-warm-muted">
                        <MapPin size={15} /> {property.location}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-warm-muted">{property.description}</p>
                      <div className="mt-5 flex items-center justify-between gap-3">
                        <p className="text-sm font-bold text-primary">{property.price}</p>
                        <ButtonLink
                          href={externalLink.href}
                          variant="outline"
                          width="fit"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="px-4 py-2 text-[11px] uppercase tracking-[0.14em]"
                        >
                          {externalLink.label}
                        </ButtonLink>
                      </div>
                    </div>
                  </article>
                );
              })
            ) : (
              <div className="rounded-3xl border border-dashed border-warm-muted/35 bg-white/80 p-8 text-center text-warm-muted md:col-span-2">
                Aun no hay propiedades publicadas para mostrar.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
