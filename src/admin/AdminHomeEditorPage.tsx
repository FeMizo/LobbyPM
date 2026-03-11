import { useState, type ReactNode } from 'react';
import { TextAreaField, TextInputField } from '../components/ui/FormControls';
import { getHomepageContent, saveHomepageContent } from '../lib/cms/homepageStore';
import type { HomepageContent } from '../types/homepage';
import { AdminLayout } from './AdminLayout';

function SectionField({
  label,
  value,
  onChange,
  multiline = false,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-warm-text">{label}</span>
      {multiline ? (
        <TextAreaField
          tone="admin"
          rows={4}
          value={value}
          placeholder={placeholder}
          className="resize-none"
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <TextInputField
          tone="admin"
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
    </label>
  );
}

function EditorSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="admin-card p-7">
      <h2 className="text-2xl font-bold text-warm-text">{title}</h2>
      <p className="text-sm leading-7 text-warm-muted">{description}</p>
      <div className="grid gap-4">{children}</div>
    </section>
  );
}

export function AdminHomeEditorPage() {
  const [draft, setDraft] = useState<HomepageContent>(() => getHomepageContent());
  const [savedAt, setSavedAt] = useState<string | null>(null);

  const savedSnapshot = JSON.stringify(getHomepageContent());
  const draftSnapshot = JSON.stringify(draft);
  const hasChanges = savedSnapshot !== draftSnapshot;

  function handleSave() {
    saveHomepageContent(draft);
    setSavedAt(new Date().toLocaleTimeString());
  }

  return (
    <AdminLayout
      title="Editar home | Lobby PM Admin"
      description="Campos editables para hero, propiedades destacadas, experiencias y CTA final."
    >
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-6">
          <EditorSection
            title="Hero"
            description="Sección principal de SEO y conversión. Estos cambios actualizan el homepage al guardar."
          >
            <SectionField
              label="Titular principal"
              value={draft.hero.headline}
              onChange={(value) => setDraft({ ...draft, hero: { ...draft.hero, headline: value } })}
            />
            <SectionField
              label="Subtítulo"
              multiline
              value={draft.hero.subheadline}
              onChange={(value) => setDraft({ ...draft, hero: { ...draft.hero, subheadline: value } })}
            />
            <SectionField
              label="Texto CTA principal"
              value={draft.hero.primaryCta.label}
              onChange={(value) =>
                setDraft({
                  ...draft,
                  hero: { ...draft.hero, primaryCta: { ...draft.hero.primaryCta, label: value } },
                })
              }
            />
            <SectionField
              label="URL CTA principal"
              value={draft.hero.primaryCta.href}
              onChange={(value) =>
                setDraft({
                  ...draft,
                  hero: { ...draft.hero, primaryCta: { ...draft.hero.primaryCta, href: value } },
                })
              }
            />
            <SectionField
              label="Texto CTA secundaria"
              value={draft.hero.secondaryCta.label}
              onChange={(value) =>
                setDraft({
                  ...draft,
                  hero: { ...draft.hero, secondaryCta: { ...draft.hero.secondaryCta, label: value } },
                })
              }
            />
            <SectionField
              label="URL CTA secundaria"
              value={draft.hero.secondaryCta.href}
              onChange={(value) =>
                setDraft({
                  ...draft,
                  hero: { ...draft.hero, secondaryCta: { ...draft.hero.secondaryCta, href: value } },
                })
              }
            />
            <SectionField
              label="URL imagen hero"
              value={draft.hero.image.src}
              onChange={(value) =>
                setDraft({
                  ...draft,
                  hero: { ...draft.hero, image: { ...draft.hero.image, src: value } },
                })
              }
            />
          </EditorSection>

          <EditorSection
            title="Propiedades destacadas"
            description="Contenido de sección para el showcase. Las tarjetas siguen viniendo desde datos centralizados y quedan listas para CRUD."
          >
            <SectionField
              label="Título"
              value={draft.featuredProperties.heading.title}
              onChange={(value) =>
                setDraft({
                  ...draft,
                  featuredProperties: {
                    ...draft.featuredProperties,
                    heading: { ...draft.featuredProperties.heading, title: value },
                  },
                })
              }
            />
            <SectionField
              label="Subtítulo"
              multiline
              value={draft.featuredProperties.heading.description}
              onChange={(value) =>
                setDraft({
                  ...draft,
                  featuredProperties: {
                    ...draft.featuredProperties,
                    heading: { ...draft.featuredProperties.heading, description: value },
                  },
                })
              }
            />
            <SectionField
              label="Texto CTA"
              value={draft.featuredProperties.cta.label}
              onChange={(value) =>
                setDraft({
                  ...draft,
                  featuredProperties: {
                    ...draft.featuredProperties,
                    cta: { ...draft.featuredProperties.cta, label: value },
                  },
                })
              }
            />
            <SectionField
              label="URL CTA"
              value={draft.featuredProperties.cta.href}
              onChange={(value) =>
                setDraft({
                  ...draft,
                  featuredProperties: {
                    ...draft.featuredProperties,
                    cta: { ...draft.featuredProperties.cta, href: value },
                  },
                })
              }
            />
          </EditorSection>

          <EditorSection
            title="Experiencias"
            description="Título, texto de apoyo y CTA de la sección de experiencias."
          >
            <SectionField
              label="Título"
              value={draft.experiences.heading.title}
              onChange={(value) =>
                setDraft({
                  ...draft,
                  experiences: {
                    ...draft.experiences,
                    heading: { ...draft.experiences.heading, title: value },
                  },
                })
              }
            />
            <SectionField
              label="Subtítulo"
              multiline
              value={draft.experiences.heading.description}
              onChange={(value) =>
                setDraft({
                  ...draft,
                  experiences: {
                    ...draft.experiences,
                    heading: { ...draft.experiences.heading, description: value },
                  },
                })
              }
            />
            <SectionField
              label="Texto CTA"
              value={draft.experiences.cta.label}
              onChange={(value) =>
                setDraft({
                  ...draft,
                  experiences: {
                    ...draft.experiences,
                    cta: { ...draft.experiences.cta, label: value },
                  },
                })
              }
            />
            <SectionField
              label="URL CTA"
              value={draft.experiences.cta.href}
              onChange={(value) =>
                setDraft({
                  ...draft,
                  experiences: {
                    ...draft.experiences,
                    cta: { ...draft.experiences.cta, href: value },
                  },
                })
              }
            />
          </EditorSection>

          <EditorSection
            title="CTA final"
            description="Bloque de conversión al final de la página para contacto directo o futura reserva."
          >
            <SectionField
              label="Título"
              value={draft.finalCta.title}
              onChange={(value) => setDraft({ ...draft, finalCta: { ...draft.finalCta, title: value } })}
            />
            <SectionField
              label="Texto"
              multiline
              value={draft.finalCta.text}
              onChange={(value) => setDraft({ ...draft, finalCta: { ...draft.finalCta, text: value } })}
            />
            <SectionField
              label="Texto del botón"
              value={draft.finalCta.button.label}
              onChange={(value) =>
                setDraft({
                  ...draft,
                  finalCta: { ...draft.finalCta, button: { ...draft.finalCta.button, label: value } },
                })
              }
            />
            <SectionField
              label="URL del botón"
              value={draft.finalCta.button.href}
              onChange={(value) =>
                setDraft({
                  ...draft,
                  finalCta: { ...draft.finalCta, button: { ...draft.finalCta.button, href: value } },
                })
              }
            />
          </EditorSection>
        </div>

        <aside className="flex h-full flex-col gap-6">
          <section className="admin-card p-7">
            <h2 className="text-2xl font-bold text-warm-text">Publicación</h2>
            <p className="leading-7 text-warm-muted">
              El contenido se guarda localmente mediante un repositorio estilo CMS. Eso deja una interfaz limpia para migrar después a API o SQLite.
            </p>

            <div>
              <button
                type="button"
                onClick={handleSave}
                className="inline-flex w-full justify-center rounded-2xl bg-primary px-5 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white hover:bg-[#c46648]"
              >
                Guardar homepage
              </button>
            </div>

            <div className="rounded-[1.5rem] bg-warm-sand/50 p-4 text-sm text-warm-muted">
              <p>Estado: {hasChanges ? 'Cambios sin guardar' : 'Guardado'}</p>
              <p className="mt-1">Último guardado: {savedAt ?? 'Sin guardar en esta sesión'}</p>
            </div>
          </section>

          <section className="admin-card p-7">
            <h2 className="text-2xl font-bold text-warm-text">Editable ahora</h2>
            <ul className="grid gap-3 text-sm leading-7 text-warm-muted">
              <li>Hero: titular, subtítulo, CTAs, URLs e imagen.</li>
              <li>Propiedades destacadas: título, subtítulo y CTA.</li>
              <li>Experiencias: título, subtítulo y CTA.</li>
              <li>CTA final: título, texto, botón y URL.</li>
            </ul>
          </section>

          <section className="admin-card mt-auto p-7">
            <h2 className="text-2xl font-bold text-warm-text">Siguientes módulos CMS</h2>
            <ul className="grid gap-3 text-sm leading-7 text-warm-muted">
              <li>CRUD de propiedades con amenidades, galerías y estado.</li>
              <li>Gestión de experiencias y guías locales.</li>
              <li>Testimonials, blog y settings globales.</li>
              <li>Media manager y adapter de persistencia backend.</li>
            </ul>
          </section>
        </aside>
      </section>
    </AdminLayout>
  );
}
