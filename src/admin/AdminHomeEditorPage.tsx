import { useEffect, useState, type ReactNode } from 'react';
import { homepageSeed } from '../data/homepage';
import { getHomepageContent, resetHomepageContent, saveHomepageContent } from '../lib/cms/homepageStore';
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
        <textarea
          rows={4}
          value={value}
          placeholder={placeholder}
          className="input-base resize-none"
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <input
          value={value}
          placeholder={placeholder}
          className="input-base"
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
      <p className="mt-2 text-sm leading-7 text-warm-muted">{description}</p>
      <div className="mt-6 grid gap-4">{children}</div>
    </section>
  );
}

export function AdminHomeEditorPage() {
  const [draft, setDraft] = useState<HomepageContent>(() => getHomepageContent());
  const [savedAt, setSavedAt] = useState<string | null>(null);

  useEffect(() => {
    setDraft(getHomepageContent());
  }, []);

  const savedSnapshot = JSON.stringify(getHomepageContent());
  const draftSnapshot = JSON.stringify(draft);
  const hasChanges = savedSnapshot !== draftSnapshot;

  function handleSave() {
    saveHomepageContent(draft);
    setSavedAt(new Date().toLocaleTimeString());
  }

  function handleReset() {
    resetHomepageContent();
    setDraft(structuredClone(homepageSeed));
    setSavedAt(null);
  }

  return (
    <AdminLayout
      title="Edit homepage | Lobby PM Admin"
      description="Editable homepage fields for hero, featured properties, experiences and final call to action."
    >
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-6">
          <EditorSection
            title="Hero"
            description="Primary SEO and conversion section above the fold. These values update the live homepage immediately after saving."
          >
            <SectionField
              label="Headline"
              value={draft.hero.headline}
              onChange={(value) => setDraft({ ...draft, hero: { ...draft.hero, headline: value } })}
            />
            <SectionField
              label="Subheadline"
              multiline
              value={draft.hero.subheadline}
              onChange={(value) => setDraft({ ...draft, hero: { ...draft.hero, subheadline: value } })}
            />
            <SectionField
              label="Primary CTA label"
              value={draft.hero.primaryCta.label}
              onChange={(value) =>
                setDraft({
                  ...draft,
                  hero: { ...draft.hero, primaryCta: { ...draft.hero.primaryCta, label: value } },
                })
              }
            />
            <SectionField
              label="Primary CTA URL"
              value={draft.hero.primaryCta.href}
              onChange={(value) =>
                setDraft({
                  ...draft,
                  hero: { ...draft.hero, primaryCta: { ...draft.hero.primaryCta, href: value } },
                })
              }
            />
            <SectionField
              label="Secondary CTA label"
              value={draft.hero.secondaryCta.label}
              onChange={(value) =>
                setDraft({
                  ...draft,
                  hero: { ...draft.hero, secondaryCta: { ...draft.hero.secondaryCta, label: value } },
                })
              }
            />
            <SectionField
              label="Secondary CTA URL"
              value={draft.hero.secondaryCta.href}
              onChange={(value) =>
                setDraft({
                  ...draft,
                  hero: { ...draft.hero, secondaryCta: { ...draft.hero.secondaryCta, href: value } },
                })
              }
            />
            <SectionField
              label="Hero image URL"
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
            title="Featured properties"
            description="Section-level content for the property showcase. The inventory cards remain data-driven and ready for future CRUD."
          >
            <SectionField
              label="Title"
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
              label="Subtitle"
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
              label="CTA label"
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
              label="CTA URL"
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
            title="Experiences"
            description="Headline, supporting copy and CTA for the experiences section."
          >
            <SectionField
              label="Title"
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
              label="Subtitle"
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
              label="CTA label"
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
              label="CTA URL"
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
            title="Final CTA"
            description="Bottom-of-page conversion block for direct inquiries or future booking flow handoff."
          >
            <SectionField
              label="Title"
              value={draft.finalCta.title}
              onChange={(value) => setDraft({ ...draft, finalCta: { ...draft.finalCta, title: value } })}
            />
            <SectionField
              label="Text"
              multiline
              value={draft.finalCta.text}
              onChange={(value) => setDraft({ ...draft, finalCta: { ...draft.finalCta, text: value } })}
            />
            <SectionField
              label="Button label"
              value={draft.finalCta.button.label}
              onChange={(value) =>
                setDraft({
                  ...draft,
                  finalCta: { ...draft.finalCta, button: { ...draft.finalCta.button, label: value } },
                })
              }
            />
            <SectionField
              label="Button URL"
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

        <aside className="space-y-6">
          <section className="admin-card p-7">
            <h2 className="text-2xl font-bold text-warm-text">Publishing</h2>
            <p className="mt-3 leading-7 text-warm-muted">
              Content is stored locally through a CMS-style repository service. That keeps the integration surface narrow for a future API or SQLite backend.
            </p>

            <div className="mt-6 space-y-3">
              <button
                type="button"
                onClick={handleSave}
                className="inline-flex w-full justify-center rounded-2xl bg-primary px-5 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white hover:bg-[#c46648]"
              >
                Save homepage
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex w-full justify-center rounded-2xl border border-warm-sand bg-white px-5 py-4 text-sm font-bold uppercase tracking-[0.2em] text-warm-text hover:border-primary hover:text-primary"
              >
                Reset defaults
              </button>
            </div>

            <div className="mt-6 rounded-[1.5rem] bg-warm-sand/50 p-4 text-sm text-warm-muted">
              <p>Status: {hasChanges ? 'Unsaved changes' : 'Saved'}</p>
              <p className="mt-1">Last save: {savedAt ?? 'Not saved in this session'}</p>
            </div>
          </section>

          <section className="admin-card p-7">
            <h2 className="text-2xl font-bold text-warm-text">Editable now</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-warm-muted">
              <li>Hero headline, subheadline, both CTAs, URLs and image.</li>
              <li>Featured properties section title, subtitle and CTA.</li>
              <li>Experiences section title, subtitle and CTA.</li>
              <li>Final CTA title, text, button and URL.</li>
            </ul>
          </section>

          <section className="admin-card p-7">
            <h2 className="text-2xl font-bold text-warm-text">Next CMS modules</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-warm-muted">
              <li>Property CRUD with amenities, galleries and status.</li>
              <li>Experience and local guide management.</li>
              <li>Testimonials, blog and site settings.</li>
              <li>Media manager and backend persistence adapter.</li>
            </ul>
          </section>
        </aside>
      </section>
    </AdminLayout>
  );
}
