import { MapPin, Star } from 'lucide-react';
import { memo, useCallback, useState } from 'react';
import { ButtonLink } from '../components/ui/ButtonLink';
import { PropertyDetailsModal } from '../components/ui/PropertyDetailsModal';
import { PropertyImage } from '../components/ui/PropertyImage';
import { Reveal } from '../components/ui/Reveal';
import { SectionShell } from '../components/ui/SectionShell';
import { SectionIntro } from '../components/ui/SectionIntro';
import type { FeaturedPropertiesContent, PropertySummary } from '../types/homepage';

interface FeaturedPropertiesSectionProps {
  content: FeaturedPropertiesContent;
}

const PropertyCard = memo(function PropertyCard({
  item,
  index,
  onOpenDetails,
}: {
  item: PropertySummary;
  index: number;
  onOpenDetails: (property: PropertySummary) => void;
}) {
  return (
    <Reveal delay={index * 0.05} className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_50px_rgba(74,63,53,0.08)]">
      <PropertyImage image={item.image} size="card" hover="soft" sizes="(max-width: 1024px) 100vw, 33vw">
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-5 pt-12 text-white">
          <p className="flex items-center gap-2 text-sm">
            <MapPin size={16} /> {item.location}
          </p>
        </div>
        <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold text-warm-text shadow-sm">
          <Star size={14} className="fill-accent text-accent" />
          {item.rating.toFixed(1)}
        </div>
      </PropertyImage>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-warm-text">{item.name}</h3>
        <p className="mt-3 text-sm leading-7 text-warm-muted">{item.description}</p>
        <div className="mt-6 flex items-center justify-between gap-4 border-t border-warm-sand pt-5">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-warm-muted">Desde</p>
            <p className="mt-1 text-lg font-bold text-primary">{item.price}</p>
          </div>
          <ButtonLink
            href={item.href}
            variant="outline"
            width="fit"
            className="px-5 py-2 text-xs"
            onClick={(event) => {
              event.preventDefault();
              onOpenDetails(item);
            }}
          >
            Ver propiedad
          </ButtonLink>
        </div>
      </div>
    </Reveal>
  );
});

export function FeaturedPropertiesSection({ content }: FeaturedPropertiesSectionProps) {
  const [selectedProperty, setSelectedProperty] = useState<PropertySummary | null>(null);

  const openDetails = useCallback((property: PropertySummary) => {
    setSelectedProperty(property);
  }, []);

  const closeDetails = useCallback(() => {
    setSelectedProperty(null);
  }, []);

  return (
    <SectionShell id="properties" className="bg-warm-sand/35">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionIntro heading={content.heading} />
        <ButtonLink href={content.cta.href} variant="outline" width="fit">
          {content.cta.label}
        </ButtonLink>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {content.items.map((item, index) => (
          <PropertyCard key={item.id} item={item} index={index} onOpenDetails={openDetails} />
        ))}
      </div>

      <PropertyDetailsModal property={selectedProperty} onClose={closeDetails} />
    </SectionShell>
  );
}
