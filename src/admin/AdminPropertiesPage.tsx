import { PencilLine, PlusCircle } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { CreateManagedPropertyInput } from '../types/properties';
import { AdminLayout } from './AdminLayout';
import { PropertyAdminCard } from './properties/PropertyAdminCard';
import { PropertyCreateForm } from './properties/PropertyCreateForm';
import { toPropertyFormValues } from './properties/propertyFormModel';
import {
  propertiesDataSource,
  propertiesRepository,
  useManagedProperties,
} from '../lib/repositories/propertiesRepository';

type EditorMode = 'create' | 'edit' | null;

export function AdminPropertiesPage() {
  const properties = useManagedProperties();
  const [editorMode, setEditorMode] = useState<EditorMode>(null);
  const [editingPropertyId, setEditingPropertyId] = useState<string | null>(null);

  const counters = useMemo(() => {
    const published = properties.filter((item) => item.status === 'published').length;
    const drafts = properties.length - published;
    const featured = properties.filter((item) => item.featured).length;

    return { total: properties.length, published, drafts, featured };
  }, [properties]);

  const editingProperty = useMemo(() => {
    if (!editingPropertyId) {
      return undefined;
    }

    return properties.find((item) => item.id === editingPropertyId);
  }, [editingPropertyId, properties]);

  function openCreateEditor() {
    setEditingPropertyId(null);
    setEditorMode('create');
  }

  function openEditEditor(propertyId: string) {
    setEditingPropertyId(propertyId);
    setEditorMode('edit');
  }

  function closeEditor() {
    setEditorMode(null);
    setEditingPropertyId(null);
  }

  function handleSubmit(input: CreateManagedPropertyInput) {
    if (editorMode === 'edit' && editingPropertyId) {
      propertiesRepository.update(editingPropertyId, input);
      closeEditor();
      return;
    }

    propertiesRepository.create(input);
    closeEditor();
  }

  return (
    <AdminLayout
      title="Base de propiedades | Lobby PM Admin"
      description="Modulo para listar, crear y editar propiedades con repositorio compartido entre admin y frontend."
    >
      <section className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_320px]">
        <div className="admin-card p-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Fase 3</p>
          <h1 className="text-4xl font-bold text-warm-text">Flujo base para administrar propiedades</h1>
          <p className="max-w-3xl leading-8 text-warm-muted">
            Este modulo separa tipos, datos, repositorio y UI. Ya permite listar, crear y editar
            propiedades sin tocar el homepage, y deja la base lista para media, amenidades avanzadas,
            estados y persistencia real.
          </p>
        </div>

        <aside className="admin-card p-8">
          <h2 className="text-2xl font-bold text-warm-text">Resumen rapido</h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl bg-warm-sand/60 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-warm-muted">Total</p>
              <p className="pt-1 text-2xl font-bold text-warm-text">{counters.total}</p>
            </div>
            <div className="rounded-2xl bg-secondary/12 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-secondary">Publicadas</p>
              <p className="pt-1 text-2xl font-bold text-secondary">{counters.published}</p>
            </div>
            <div className="rounded-2xl bg-accent/12 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-accent">Borradores</p>
              <p className="pt-1 text-2xl font-bold text-accent">{counters.drafts}</p>
            </div>
            <div className="rounded-2xl bg-primary/12 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-primary">Destacadas</p>
              <p className="pt-1 text-2xl font-bold text-primary">{counters.featured}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-warm-sand bg-white/70 p-4 text-xs leading-6 text-warm-muted">
            <p className="font-bold uppercase tracking-[0.14em] text-warm-text">Fuente de datos actual</p>
            <p>Seed: {propertiesDataSource.seedFile}</p>
            <p>
              Persistencia temporal: {propertiesDataSource.storageType} ({propertiesDataSource.storageKey})
            </p>
          </div>

          <button
            type="button"
            onClick={openCreateEditor}
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#c46648]"
          >
            <PlusCircle size={16} />
            Agregar propiedad
          </button>
        </aside>
      </section>

      {editorMode && (
        <section className="mt-8">
          <PropertyCreateForm
            mode={editorMode}
            propertyId={editingProperty?.id}
            initialValues={editingProperty ? toPropertyFormValues(editingProperty) : undefined}
            onSubmit={handleSubmit}
            onCancel={closeEditor}
          />
        </section>
      )}

      <section className="mt-8 grid gap-6 xl:grid-cols-2">
        {properties.length === 0 ? (
          <div className="admin-card col-span-full items-center p-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Inventario vacio</p>
            <h2 className="text-3xl font-bold text-warm-text">Aun no hay propiedades creadas</h2>
            <p className="text-warm-muted">
              Agrega la primera propiedad para poblar el homepage y el panel administrativo.
            </p>
            <button
              type="button"
              onClick={openCreateEditor}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#c46648]"
            >
              <PencilLine size={14} />
              Crear primera propiedad
            </button>
          </div>
        ) : (
          properties.map((property) => (
            <PropertyAdminCard key={property.id} property={property} onEdit={openEditEditor} />
          ))
        )}
      </section>
    </AdminLayout>
  );
}
