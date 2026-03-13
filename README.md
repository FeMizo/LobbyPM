# Lobby PM

Base frontend y admin para una marca de rentas vacacionales.

## Como correr el proyecto

1. Instala dependencias con `npm install`
2. Corre el entorno local con `npm run dev`
3. Abre `http://localhost:3131`

## Rutas principales

- `/` homepage publico
- `/admin` panel principal
- `/admin/home` edicion del homepage
- `/admin/properties` base del modulo de propiedades

## Despliegue en Vercel

El proyecto ya incluye:

- Frontend Vite desplegable en Vercel
- API en `/api/homepage` y `/api/properties`
- Persistencia remota mediante Vercel Blob

Variables requeridas en Vercel:

- `BLOB_READ_WRITE_TOKEN`
- `BLOB_STORE_ACCESS=private`
- `ADMIN_API_TOKEN`

Notas:

- `GET` del contenido es publico para que el sitio cargue sin credenciales.
- `PUT` requiere `ADMIN_API_TOKEN` si esa variable esta configurada.
- El token de admin se captura desde `/admin` y se guarda solo en el navegador del editor.
