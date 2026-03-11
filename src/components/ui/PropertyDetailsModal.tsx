import { ExternalLink, MapPin, Star, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { PropertySummary } from '../../types/homepage';
import { ButtonLink } from './ButtonLink';
import { PropertyImage } from './PropertyImage';

interface PropertyDetailsModalProps {
  property: PropertySummary | null;
  onClose: () => void;
}

const fallbackAmenities = ['Wifi de alta velocidad', 'Atención concierge', 'Check-in ágil'];

export function PropertyDetailsModal({ property, onClose }: PropertyDetailsModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!property) {
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
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [property, onClose]);

  if (!property) {
    return null;
  }

  const amenities = property.amenities?.length ? property.amenities : fallbackAmenities;
  const externalLink = property.externalLink ?? { label: 'Ver disponibilidad', href: property.href };

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 px-4 py-6" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="property-details-title"
        className="max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_85px_rgba(0,0,0,0.35)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-warm-sand px-5 py-4 md:px-7">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary">Detalle de propiedad</p>
          <button
            type="button"
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Cerrar detalle de propiedad"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-warm-sand text-warm-text transition-colors hover:bg-warm-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <X size={18} />
          </button>
        </div>

        <div className="grid max-h-[82vh] overflow-y-auto lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <PropertyImage
            image={property.image}
            size="modal"
            hover="none"
            className="h-full min-h-64 border-b border-warm-sand lg:border-b-0 lg:border-r"
            imageClassName="h-full"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />

          <div className="p-6 md:p-7">
            <div className="flex items-start justify-between gap-3">
              <h2 id="property-details-title" className="text-3xl font-bold text-warm-text">
                {property.name}
              </h2>
              <span className="inline-flex items-center gap-1 rounded-full bg-warm-sand px-3 py-1 text-xs font-semibold text-warm-text">
                <Star size={13} className="fill-accent text-accent" />
                {property.rating.toFixed(1)}
              </span>
            </div>

            <p className="mt-3 flex items-center gap-2 text-sm text-warm-muted">
              <MapPin size={16} />
              {property.location}
            </p>
            <p className="mt-5 text-sm leading-7 text-warm-muted">{property.description}</p>

            <div className="mt-6 rounded-2xl border border-warm-sand bg-warm-bg/65 px-4 py-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-warm-muted">Tarifa</p>
              <p className="mt-1 text-xl font-bold text-primary">{property.price}</p>
            </div>

            <div className="mt-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-warm-muted">Amenidades</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {amenities.map((amenity) => (
                  <li
                    key={`${property.id}-${amenity}`}
                    className="rounded-full border border-warm-sand bg-warm-bg px-3 py-2 text-xs font-semibold text-warm-text"
                  >
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={externalLink.href}
                target="_blank"
                rel="noreferrer noopener"
                width="fit"
                className="px-6 py-3 text-xs uppercase tracking-[0.16em]"
              >
                {externalLink.label}
                <ExternalLink size={14} />
              </ButtonLink>
              <ButtonLink
                href="#properties"
                variant="outline"
                width="fit"
                className="px-6 py-3 text-xs uppercase tracking-[0.16em]"
                onClick={(event) => {
                  event.preventDefault();
                  onClose();
                }}
              >
                Cerrar
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
