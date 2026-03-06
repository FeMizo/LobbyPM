# Lobby PM

Base frontend para homepage y dashboard interno de una marca de rentas vacacionales en Playa del Carmen.

## Cómo correr el proyecto

1. Instala dependencias con `npm install`
2. Corre el entorno local con `npm run dev`
3. Abre `http://localhost:3131`

## Rutas principales

- `/` homepage público
- `/admin` panel principal
- `/admin/home` edición del homepage
- `/admin/properties` base del módulo de propiedades

## Fases ya implementadas

### Fase 1

- Refactor de estructura
- Homepage modular por secciones
- SEO base del homepage
- Mejoras visibles de performance

### Fase 2

- Dashboard inicial
- `/admin/home` con formulario editable
- Persistencia local simple y escalable

### Fase 3

- Tipos y datos centralizados de propiedades
- Repositorio desacoplado para evolucionar a CRUD
- Vista admin inicial para inventario

## Qué parte del home ya es editable

- Hero: titular, subtítulo, CTAs, URLs e imagen
- Propiedades destacadas: título, subtítulo y CTA
- Experiencias: título, subtítulo y CTA
- CTA final: título, texto, botón y URL
