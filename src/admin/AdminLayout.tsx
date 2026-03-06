import type { ReactNode } from 'react';
import { Seo } from '../lib/seo';

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
}

export function AdminLayout({ children, title, description }: AdminLayoutProps) {
  const canonical = `${window.location.origin}${window.location.pathname}`;

  return (
    <div className="min-h-screen bg-warm-sand/35 px-6 py-8 md:px-10 lg:px-16">
      <Seo
        title={title}
        description={description}
        canonical={canonical}
        image="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
        robots="noindex,nofollow"
      />

      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-4 rounded-[2rem] bg-white px-6 py-5 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <a href="/" className="text-2xl font-bold tracking-tight text-primary">
              Lobby PM
            </a>
            <p className="mt-1 text-sm text-warm-muted">Internal content dashboard foundation</p>
          </div>
          <div className="flex gap-3">
            <a href="/admin" className="btn-outline px-5 py-2 text-xs">
              Dashboard
            </a>
            <a href="/" className="btn-primary px-5 py-2 text-xs">
              View site
            </a>
          </div>
        </header>
        {children}
      </div>
    </div>
  );
}
