import { useEffect, useState, type ReactNode } from 'react';
import { ButtonLink } from '../components/ui/ButtonLink';
import { clearAdminApiToken, getAdminApiToken, setAdminApiToken, subscribeToAdminApiToken } from '../lib/api/adminApi';
import { Seo } from '../lib/seo';

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
}

export function AdminLayout({ children, title, description }: AdminLayoutProps) {
  const canonical = `${window.location.origin}${window.location.pathname}`;
  const [adminToken, setAdminTokenValue] = useState('');
  const [savedToken, setSavedToken] = useState('');

  useEffect(() => {
    const syncToken = () => {
      const token = getAdminApiToken();
      setSavedToken(token);
      setAdminTokenValue(token);
    };

    syncToken();
    return subscribeToAdminApiToken(syncToken);
  }, []);

  function handleTokenSave() {
    setAdminApiToken(adminToken);
  }

  function handleTokenClear() {
    clearAdminApiToken();
  }

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
        <header className="mb-8 flex flex-col gap-6 rounded-[2rem] bg-white px-6 py-5 shadow-sm xl:flex-row xl:items-start xl:justify-between">
          <div className="min-w-0">
            <a href="/" className="text-2xl font-bold tracking-tight text-primary">
              Lobby PM
            </a>
            <p className="mt-1 text-sm text-warm-muted">Base administrativa de contenido y operacion</p>
          </div>

          <div className="grid gap-4 xl:min-w-[440px]">
            <div className="rounded-[1.5rem] border border-warm-sand bg-warm-sand/35 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Token de escritura</p>
              <p className="mt-2 text-sm leading-6 text-warm-muted">
                Necesario para guardar cambios cuando `ADMIN_API_TOKEN` este configurado en Vercel.
              </p>

              <div className="mt-3 flex flex-col gap-3 md:flex-row">
                <input
                  type="password"
                  value={adminToken}
                  onChange={(event) => setAdminTokenValue(event.target.value)}
                  placeholder="Pega aqui el token de admin"
                  className="min-w-0 flex-1 rounded-2xl border border-[#e2d8cb] bg-white px-4 py-3 text-sm text-warm-text outline-none transition-colors focus:border-primary"
                />

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handleTokenSave}
                    className="inline-flex rounded-full bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#c46648]"
                  >
                    Guardar token
                  </button>
                  <button
                    type="button"
                    onClick={handleTokenClear}
                    className="inline-flex rounded-full border-2 border-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-white"
                  >
                    Limpiar
                  </button>
                </div>
              </div>

              <p className="mt-3 text-xs text-warm-muted">
                Estado: {savedToken ? 'Token listo para escrituras protegidas.' : 'Sin token guardado en este navegador.'}
              </p>
            </div>

            <div className="flex gap-3">
              <ButtonLink href="/admin" variant="outline" width="fit" className="px-5 py-2 text-xs">
                Panel
              </ButtonLink>
              <ButtonLink href="/" width="fit" className="px-5 py-2 text-xs">
                Ver sitio
              </ButtonLink>
            </div>
          </div>
        </header>

        {children}
      </div>
    </div>
  );
}
