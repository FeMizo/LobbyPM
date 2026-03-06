import { AdminLayout } from './AdminLayout';
import { propertiesRepository } from '../lib/repositories/propertiesRepository';

export function AdminPropertiesPage() {
  const properties = propertiesRepository.list();

  return (
    <AdminLayout
      title="Base de propiedades | Lobby PM Admin"
      description="Base inicial para evolucionar a CRUD de propiedades, amenidades, galerías y estado."
    >
      <section className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_320px]">
        <div className="admin-card p-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Fase 3</p>
          <h1 className="mt-4 text-4xl font-bold text-warm-text">Base preparada para CRUD de propiedades</h1>
          <p className="mt-5 max-w-3xl leading-8 text-warm-muted">
            Este módulo todavía no edita ni guarda cambios, pero ya separa tipos, datos y repositorio. Eso permite agregar formularios, media, amenidades y estados sin volver a tocar la arquitectura del homepage.
          </p>
        </div>

        <aside className="admin-card p-8">
          <h2 className="text-2xl font-bold text-warm-text">Incluye desde ahora</h2>
          <ul className="mt-5 space-y-3 text-warm-muted">
            <li>Tipo `ManagedProperty` desacoplado del home.</li>
            <li>Semillas centralizadas de propiedades.</li>
            <li>Repositorio listo para crecer a persistencia real.</li>
            <li>Estados `draft` y `published` para flujo editorial.</li>
          </ul>
        </aside>
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-2">
        {properties.map((property) => (
          <article key={property.id} className="admin-card overflow-hidden">
            <div className="grid gap-0 md:grid-cols-[220px_minmax(0,1fr)]">
              <img
                src={property.coverImage.src}
                alt={property.coverImage.alt}
                className="h-full min-h-56 w-full object-cover"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="p-7">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-bold text-warm-text">{property.name}</h2>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] ${
                    property.status === 'published'
                      ? 'bg-secondary/15 text-secondary'
                      : 'bg-accent/15 text-accent'
                  }`}>
                    {property.status === 'published' ? 'Publicado' : 'Borrador'}
                  </span>
                </div>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-warm-muted">{property.location}</p>
                <p className="mt-4 leading-7 text-warm-muted">{property.shortDescription}</p>

                <div className="mt-5 grid grid-cols-2 gap-4 text-sm text-warm-text md:grid-cols-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-warm-muted">Tarifa</p>
                    <p className="mt-1 font-semibold">
                      {property.currency} {property.nightlyRateFrom}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-warm-muted">Recámaras</p>
                    <p className="mt-1 font-semibold">{property.bedrooms}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-warm-muted">Baños</p>
                    <p className="mt-1 font-semibold">{property.bathrooms}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-warm-muted">Huéspedes</p>
                    <p className="mt-1 font-semibold">{property.guests}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {property.amenities.map((amenity) => (
                    <span key={amenity.id} className="rounded-full bg-warm-sand px-3 py-2 text-xs font-medium text-warm-text">
                      {amenity.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </AdminLayout>
  );
}
