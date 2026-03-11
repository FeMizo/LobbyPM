import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { SelectField, TextAreaField, TextInputField } from '../../components/ui/FormControls';
import type { CreateManagedPropertyInput } from '../../types/properties';
import {
  getInitialPropertyFormValues,
  toCreateManagedPropertyInput,
  type PropertyFormValues,
} from './propertyFormModel';

interface PropertyCreateFormProps {
  mode: 'create' | 'edit';
  initialValues?: PropertyFormValues;
  propertyId?: string;
  onSubmit: (input: CreateManagedPropertyInput) => void;
  onCancel: () => void;
}

interface FieldProps {
  label: string;
  children: ReactNode;
}

function Field({ label, children }: FieldProps) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-warm-text">{label}</span>
      {children}
    </label>
  );
}

export function PropertyCreateForm({
  mode,
  initialValues,
  propertyId,
  onSubmit,
  onCancel,
}: PropertyCreateFormProps) {
  const [values, setValues] = useState<PropertyFormValues>(
    initialValues ? { ...initialValues } : getInitialPropertyFormValues(),
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setValues(initialValues ? { ...initialValues } : getInitialPropertyFormValues());
    setError(null);
  }, [initialValues, mode, propertyId]);

  const setField = <K extends keyof PropertyFormValues>(key: K, value: PropertyFormValues[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!values.name.trim() || !values.location.trim() || !values.shortDescription.trim()) {
      setError('Nombre, ubicacion y descripcion son obligatorios.');
      return;
    }

    if (!values.coverImageSrc.trim()) {
      setError('Agrega una URL de imagen principal para la propiedad.');
      return;
    }

    if (!values.routeState.trim() || !values.routeLocation.trim() || !values.routeSlug.trim()) {
      setError('Completa estado, lugar y slug SEO para generar la ruta jerarquica.');
      return;
    }

    setError(null);
    onSubmit(toCreateManagedPropertyInput(values));
  }

  const title = mode === 'edit' ? 'Editar propiedad' : 'Nueva propiedad';
  const subtitle =
    mode === 'edit'
      ? 'Actualiza todos los campos usados por el frontend desde el mismo repositorio compartido.'
      : 'Alta rapida de propiedad conectada al repositorio compartido.';
  const submitLabel = mode === 'edit' ? 'Guardar cambios' : 'Guardar propiedad';

  return (
    <section className="admin-card p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="grid gap-2">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">{title}</p>
          <h2 className="text-3xl font-bold text-warm-text">{values.name || 'Propiedad sin titulo'}</h2>
          {propertyId && (
            <p className="text-xs uppercase tracking-[0.18em] text-warm-muted">ID: {propertyId}</p>
          )}
          <p className="max-w-3xl text-sm leading-7 text-warm-muted">{subtitle}</p>
        </div>
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex rounded-full border-2 border-primary px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-white"
        >
          Cerrar
        </button>
      </div>

      <form className="grid gap-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 lg:grid-cols-2">
          <Field label="Titulo">
            <TextInputField tone="admin" value={values.name} onChange={(event) => setField('name', event.target.value)} />
          </Field>
          <Field label="Ubicacion">
            <TextInputField tone="admin" value={values.location} onChange={(event) => setField('location', event.target.value)} />
          </Field>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <Field label="Estado URL (ej: merida)">
            <TextInputField
              tone="admin"
              value={values.routeState}
              onChange={(event) => setField('routeState', event.target.value)}
            />
          </Field>
          <Field label="Lugar URL (ej: centro)">
            <TextInputField
              tone="admin"
              value={values.routeLocation}
              onChange={(event) => setField('routeLocation', event.target.value)}
            />
          </Field>
          <Field label="Slug URL (ej: casa-cocol)">
            <TextInputField
              tone="admin"
              value={values.routeSlug}
              onChange={(event) => setField('routeSlug', event.target.value)}
            />
          </Field>
        </div>

        <Field label="Descripcion breve">
          <TextAreaField
            tone="admin"
            rows={4}
            className="resize-none"
            value={values.shortDescription}
            onChange={(event) => setField('shortDescription', event.target.value)}
          />
        </Field>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <Field label="Tarifa por noche">
            <TextInputField
              tone="admin"
              type="number"
              min={0}
              step={50}
              value={values.nightlyRateFrom}
              onChange={(event) => setField('nightlyRateFrom', event.target.value)}
            />
          </Field>
          <Field label="Moneda">
            <SelectField
              tone="admin"
              value={values.currency}
              onChange={(event) => setField('currency', event.target.value as PropertyFormValues['currency'])}
            >
              <option value="MXN">MXN</option>
              <option value="USD">USD</option>
            </SelectField>
          </Field>
          <Field label="Recamaras">
            <TextInputField
              tone="admin"
              type="number"
              min={1}
              step={1}
              value={values.bedrooms}
              onChange={(event) => setField('bedrooms', event.target.value)}
            />
          </Field>
          <Field label="Banos">
            <TextInputField
              tone="admin"
              type="number"
              min={1}
              step={0.5}
              value={values.bathrooms}
              onChange={(event) => setField('bathrooms', event.target.value)}
            />
          </Field>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <Field label="Huespedes">
            <TextInputField
              tone="admin"
              type="number"
              min={1}
              step={1}
              value={values.guests}
              onChange={(event) => setField('guests', event.target.value)}
            />
          </Field>
          <Field label="Rating">
            <TextInputField
              tone="admin"
              type="number"
              min={1}
              max={5}
              step={0.1}
              value={values.rating}
              onChange={(event) => setField('rating', event.target.value)}
            />
          </Field>
          <Field label="Estado">
            <SelectField
              tone="admin"
              value={values.status}
              onChange={(event) => setField('status', event.target.value as PropertyFormValues['status'])}
            >
              <option value="published">Publicado</option>
              <option value="draft">Borrador</option>
            </SelectField>
          </Field>
          <label className="grid gap-2 rounded-2xl border border-warm-sand bg-white px-4 py-3 text-sm font-semibold text-warm-text">
            <span>Visibilidad</span>
            <span className="flex items-center gap-3">
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
                checked={values.featured}
                onChange={(event) => setField('featured', event.target.checked)}
              />
              Marcar como destacada
            </span>
          </label>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <Field label="Imagen principal (URL)">
            <TextInputField
              tone="admin"
              value={values.coverImageSrc}
              onChange={(event) => setField('coverImageSrc', event.target.value)}
            />
          </Field>
          <Field label="Alt de imagen principal">
            <TextInputField
              tone="admin"
              value={values.coverImageAlt}
              onChange={(event) => setField('coverImageAlt', event.target.value)}
            />
          </Field>
        </div>

        <Field label="Galeria de imagenes (una URL por linea)">
          <TextAreaField
            tone="admin"
            rows={4}
            className="resize-none"
            value={values.gallerySources}
            onChange={(event) => setField('gallerySources', event.target.value)}
          />
        </Field>

        <div className="grid gap-5 lg:grid-cols-2">
          <Field label="Amenidades internas (separadas por coma)">
            <TextInputField
              tone="admin"
              value={values.amenities}
              onChange={(event) => setField('amenities', event.target.value)}
            />
          </Field>
          <Field label="Amenidades externas (separadas por coma)">
            <TextInputField
              tone="admin"
              value={values.externalAmenities}
              onChange={(event) => setField('externalAmenities', event.target.value)}
            />
          </Field>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <Field label="Texto CTA externo">
            <TextInputField
              tone="admin"
              value={values.externalLinkLabel}
              onChange={(event) => setField('externalLinkLabel', event.target.value)}
            />
          </Field>
          <Field label="URL CTA externo (Airbnb u otro)">
            <TextInputField
              tone="admin"
              value={values.externalLinkHref}
              onChange={(event) => setField('externalLinkHref', event.target.value)}
            />
          </Field>
        </div>

        {error && (
          <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
        )}

        <div className="flex flex-wrap gap-3 border-t border-warm-sand pt-3">
          <button
            type="submit"
            className="inline-flex rounded-full bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#c46648]"
          >
            {submitLabel}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex rounded-full border-2 border-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
}
