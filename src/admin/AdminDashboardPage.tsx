import { PencilLine, Settings, Sparkles } from 'lucide-react';
import { AdminLayout } from './AdminLayout';

const roadmap = [
  {
    title: 'Homepage editor',
    description: 'Edit hero, section copy, CTAs and URLs from a persistent content layer.',
    href: '/admin/home',
    icon: PencilLine,
    available: true,
  },
  {
    title: 'Properties CMS',
    description: 'Future CRUD for inventory, amenities, pricing, media and availability metadata.',
    href: '#',
    icon: Settings,
    available: false,
  },
  {
    title: 'Experiences & guides',
    description: 'Future management for tours, local places, blog-like content and offers.',
    href: '#',
    icon: Sparkles,
    available: false,
  },
];

export function AdminDashboardPage() {
  return (
    <AdminLayout
      title="Lobby PM Admin Dashboard"
      description="Internal dashboard foundation for managing homepage content and future CMS modules."
    >
      <section className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.6fr)]">
        <div className="admin-card p-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Current scope</p>
          <h1 className="mt-4 text-4xl font-bold text-warm-text">CMS foundation for the Lobby PM homepage</h1>
          <p className="mt-5 max-w-2xl leading-8 text-warm-muted">
            This admin area is intentionally narrow in v1. The goal is to validate an editable content model, local persistence and a clean separation between presentation and data before adding full CRUD modules.
          </p>
        </div>

        <div className="admin-card p-8">
          <h2 className="text-2xl font-bold text-warm-text">What is already covered</h2>
          <ul className="mt-5 space-y-3 text-warm-muted">
            <li>Homepage content is typed and centralized.</li>
            <li>Changes persist locally via a CMS-style storage service.</li>
            <li>The home reads from that content layer instead of hardcoded JSX.</li>
            <li>SEO metadata and schema are generated from structured content.</li>
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
                  Open module
                </a>
              ) : (
                <span className="mt-6 inline-flex rounded-full bg-warm-sand px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-warm-muted">
                  Next phase
                </span>
              )}
            </article>
          );
        })}
      </section>
    </AdminLayout>
  );
}
