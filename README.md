# Pixel Arcade Store 🕹️

# 🎮 Pixel Arcade Store

### Tu próximo nivel comienza aquí.

Pixel Arcade Store es una tienda web de videojuegos desarrollada como proyecto escolar utilizando Next.js 16, React, TypeScript y Tailwind CSS.

Su diseño está inspirado en la estética gamer futurista, utilizando fondos oscuros y detalles en colores neón morado y verde.

---

## 🚀 Características principales

- 🏠 Página de inicio con videojuegos destacados.
- 🎮 Catálogo de videojuegos.
- 🔎 Buscador en tiempo real.
- 🗂️ Filtros por categorías.
- 💜 Sistema de videojuegos favoritos.
- 💾 Almacenamiento de favoritos con localStorage.
- 👾 Página de información de la tienda.
- ⏳ Pantalla de carga.
- ⚠️ Manejo de errores.

## 🛠️ Tecnologías utilizadas

| Tecnología | Descripción |
|---|---|
| Next.js 16 | Framework principal |
| React | Construcción de interfaces |
| TypeScript | Tipado del código |
| Tailwind CSS | Diseño y estilos |
| localStorage | Persistencia de favoritos |
| Vercel | Plataforma de despliegue |

## 📁 Estructura del proyecto

```text
pixel-arcade-store/
│
├── app/
│   ├── catalog/
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   └── error.tsx
│   │
│   ├── favorites/
│   │   └── page.tsx
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── GameCard.tsx
│   └── SectionTitle.tsx
│
├── hooks/
│   └── useFavorites.ts
│
├── data/
│   └── games.ts
│
├── VIBE_CODING.md
├── README.md
├── package.json
└── tsconfig.json
```

## 💻 Requisitos previos

Antes de instalar el proyecto necesitas:

- Node.js (versión compatible con Next.js 16).
- npm.
- Visual Studio Code (recomendado).
- Conexión a internet.

## 📥 Instalación

### 1. Clonar el repositorio

```bash
git clone URL_DE_TU_REPOSITORIO
```

### 2. Entrar a la carpeta

```bash
cd pixel-arcade-store
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar el proyecto

```bash
npm run dev
```

### 5. Abrir en el navegador

Visita la siguiente dirección:

http://localhost:3000

## 🌐 Páginas disponibles

| Página | Ruta |
|---|---|
| Inicio | / |
| Catálogo | /catalog |
| Favoritos | /favorites |
| Nosotros | /about |

## 🚀 Despliegue en Vercel

El proyecto puede publicarse utilizando Vercel.

### Pasos para desplegar

1. Sube el proyecto a un repositorio de GitHub.
2. Ingresa a https://vercel.com/
3. Inicia sesión con tu cuenta.
4. Selecciona Add New Project.
5. Importa el repositorio de Pixel Arcade Store.
6. Verifica la configuración de Next.js.
7. Presiona Deploy.
8. Espera a que finalice la compilación.

### Enlace de la aplicación desplegada

**URL de producción:**

PENDIENTE DE PUBLICACIÓN

Reemplazar este espacio con la URL proporcionada por Vercel.

Ejemplo de formato:

https://pixel-arcade-store.vercel.app

## 🤖 Uso de inteligencia artificial

Durante el desarrollo se utilizó ChatGPT como asistente de programación mediante la metodología Vibe Coding.

Se utilizó para:

- Diseñar la estructura inicial.
- Generar componentes reutilizables.
- Implementar funcionalidades.
- Corregir errores de importación y TypeScript.
- Mejorar el diseño visual.
- Documentar el proyecto.

Para conocer el proceso completo, consultar el archivo `VIBE_CODING.md`.

## 📌 Estado del proyecto

Proyecto escolar en desarrollo.

Las funcionalidades actuales se enfocan en la presentación del catálogo y la administración local de videojuegos favoritos.

No incluye todavía un sistema de pagos, autenticación de usuarios ni conexión a una base de datos.

## 👨‍💻 Autor

Proyecto académico: Pixel Arcade Store.

## 📄 Licencia

Proyecto desarrollado con fines educativos.
