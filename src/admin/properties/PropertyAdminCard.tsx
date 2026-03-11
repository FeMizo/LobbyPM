import { PencilLine } from 'lucide-react';
import { PropertyImage } from '../../components/ui/PropertyImage';
import type { ManagedProperty } from '../../types/properties';

interface PropertyAdminCardProps {
  property: ManagedProperty;
  onEdit: (propertyId: string) => void;
}

function getCurrencyLabel(currency: ManagedProperty['currency'], amount: number) {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function PropertyAdminCard({ property, onEdit }: PropertyAdminCardProps) {
  const stats = [
    { label: 'Tarifa', value: getCurrencyLabel(property.currency, property.nightlyRateFrom) },
    { label: 'Recamaras', value: String(property.bedrooms) },
    { label: 'Banos', value: String(property.bathrooms) },
    { label: 'Huespedes', value: String(property.guests) },
    { label: 'Rating', value: property.rating.toFixed(1) },
    { label: 'Visible', value: property.featured ? 'Destacada' : 'Normal' },
  ];

  return (
    <article className="admin-card overflow-hidden">
      <div className="grid h-full gap-0 md:grid-cols-[220px_minmax(0,1fr)]">
        <PropertyImage
          image={property.coverImage}
          size="free"
          hover="soft"
          className="h-full min-h-56"
          imageClassName="h-full"
          sizes="(max-width: 768px) 100vw, 220px"
        />

        <div className="flex h-full flex-col gap-5 p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-bold text-warm-text">{property.name}</h2>
            <div className="flex items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] ${
                  property.status === 'published' ? 'bg-secondary/15 text-secondary' : 'bg-accent/15 text-accent'
                }`}
              >
                {property.status === 'published' ? 'Publicado' : 'Borrador'}
              </span>
              <button
                type="button"
                onClick={() => onEdit(property.id)}
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-white"
              >
                <PencilLine size={14} />
                Editar
              </button>
            </div>
          </div>

          <p className="text-sm uppercase tracking-[0.18em] text-warm-muted">{property.location}</p>
          <p className="leading-7 text-warm-muted">{property.shortDescription}</p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {stats.map((stat) => (
              <div key={`${property.id}-${stat.label}`} className="rounded-2xl bg-warm-sand/55 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.16em] text-warm-muted">{stat.label}</p>
                <p className="break-words pt-1 text-sm font-semibold text-warm-text">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3 border-t border-warm-sand pt-4">
            <div className="flex flex-wrap gap-2">
              {property.amenities.map((amenity) => (
                <span
                  key={amenity.id}
                  className="rounded-full bg-warm-sand px-3 py-2 text-xs font-medium text-warm-text"
                >
                  {amenity.label}
                </span>
              ))}
            </div>
            {property.externalAmenities.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {property.externalAmenities.map((amenity) => (
                  <span
                    key={`${property.id}-${amenity}`}
                    className="rounded-full border border-primary/20 bg-primary/10 px-3 py-2 text-xs font-semibold text-primary"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
