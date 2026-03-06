import { Building2, PencilLine, Sparkles } from 'lucide-react';
import { AdminLayout } from './AdminLayout';

const roadmap = [
  {
    title: 'Editor del homepage',
    description: 'Editar hero, copies, CTAs y URLs desde una capa de contenido persistente.',
    href: '/admin/home',
    icon: PencilLine,
    available: true,
  },
  {
    title: 'Base de propiedades',
    description: 'Inventario inicial desacoplado, preparado para crecer a CRUD con amenidades, media y estado.',
    href: '/admin/properties',
    icon: Building2,
    available: true,
  },
  {
    title: 'Experiencias y guías',
    description: 'Siguiente fase para tours, lugares cercanos, contenido editorial y ofertas.',
    href: '#',
    icon: Sparkles,
    available: false,
  },
];

export function AdminDashboardPage() {
  return (
    <AdminLayout
      title="Dashboard Admin | Lobby PM"
      description="Base administrativa para gestionar el homepage y preparar los siguientes módulos CMS."
    >
      <section className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.6fr)]">
        <div className="admin-card p-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Fases activas</p>
          <h1 className="mt-4 text-4xl font-bold text-warm-text">Base CMS para el sitio de Lobby PM</h1>
          <p className="mt-5 max-w-2xl leading-8 text-warm-muted">
            La Fase 1 ya deja estructura, modularidad, SEO y mejoras visibles de performance. La Fase 2 deja el homepage editable. La Fase 3 prepara el módulo de propiedades para evolucionar a CRUD real sin rehacer la arquitectura.
          </p>
        </div>

        <div className="admin-card p-8">
          <h2 className="text-2xl font-bold text-warm-text">Lo que ya queda cubierto</h2>
          <ul className="mt-5 space-y-3 text-warm-muted">
            <li>Contenido del homepage tipado y centralizado.</li>
            <li>Persistencia local simple con patrón escalable.</li>
            <li>Home modular por secciones y desacoplado del JSX hardcodeado.</li>
            <li>SEO metadata y schema generados desde contenido estructurado.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        {roadmap.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="admin-card p-7">
              <div className="inline-flex rounded-2xl bg-warm-sand p-4 text-primary">
                <Icon size={24} />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-warm-text">{item.title}</h2>
              <p className="mt-3 min-h-20 leading-7 text-warm-muted">{item.description}</p>
              {item.available ? (
                <a href={item.href} className="mt-6 inline-flex btn-primary px-5 py-2 text-xs">
                  Abrir módulo
                </a>
              ) : (
                <span className="mt-6 inline-flex rounded-full bg-warm-sand px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-warm-muted">
                  Siguiente fase
                </span>
              )}
            </article>
          );
        })}
      </section>
    </AdminLayout>
  );
}
