
# VIBE CODING - PIXEL ARCADE STORE

## 1. Introducción

Pixel Arcade Store es un proyecto escolar de desarrollo web que consiste en la creación de una tienda virtual de videojuegos.

Para desarrollar este proyecto se utilizó la metodología conocida como **Vibe Coding**, que consiste en trabajar con herramientas de inteligencia artificial para generar código, resolver problemas, mejorar funcionalidades y tomar decisiones durante el proceso de programación.

Se utilizó ChatGPT como asistente de desarrollo para proponer estructuras, generar componentes reutilizables, corregir errores y mejorar la experiencia visual de la aplicación.

## 2. Objetivo del proyecto

Desarrollar una tienda web de videojuegos con una interfaz moderna, intuitiva y atractiva, que permita visualizar un catálogo de productos, buscar videojuegos, filtrarlos por categoría y guardar títulos favoritos.

## 3. Tecnologías utilizadas

- Next.js 16: Framework de desarrollo web basado en React.
- React: Biblioteca para construir interfaces interactivas.
- TypeScript: Lenguaje utilizado para mejorar la seguridad y organización del código.
- Tailwind CSS: Framework de estilos para diseñar la interfaz.
- localStorage: Almacenamiento local para conservar los videojuegos favoritos.
- ChatGPT: Asistente de inteligencia artificial utilizado durante el desarrollo.
- Vercel: Plataforma prevista para el despliegue de la aplicación.

## 4. Prompts principales utilizados

Durante el desarrollo se utilizaron diferentes instrucciones (prompts) para orientar a la inteligencia artificial.

### Prompt 1: Creación de la estructura principal

"Actúa como un experto en Next.js 16 con App Router y Tailwind CSS. Necesito que me ayudes a crear 4 páginas distintas para una tienda web de videojuegos llamada Pixel Arcade Store con un diseño oscuro, moderno y estilo gamer, utilizando neones en tonos morados y verdes. Necesito las páginas de inicio, catálogo, favoritos y quiénes somos. Dame código limpio en TypeScript utilizando componentes reutilizables."

**Resultado obtenido:**

- Estructura inicial del proyecto.
- Creación de las cuatro páginas principales.
- Componentes reutilizables.
- Configuración de navegación y diseño visual.
- Implementación inicial de favoritos.

### Prompt 2: Corrección de errores

"Me aparece un error Module not found: Can't resolve '@/hooks/useFavorites'. Soluciónalo, dime qué hacer y dame el script corregido para copiar y pegar."

**Resultado obtenido:**

- Identificación del problema de importación.
- Corrección de la estructura de carpetas.
- Creación del archivo hooks/useFavorites.ts.
- Revisión del código de la página principal.

### Prompt 3: Catálogo interactivo

"Ahora ayúdame a crear un componente interactivo para el catálogo de juegos (app/catalog/page.tsx) que sea un Client Component ('use client'). Debe incluir una barra de búsqueda en tiempo real, un botón de Agregar a Favoritos que use useState y useEffect, y estados de carga (loading.tsx) y de error (error.tsx) por si algo falla."

**Resultado obtenido:**

- Barra de búsqueda en tiempo real.
- Filtros por categoría.
- Botones para administrar favoritos.
- Implementación de estados de carga.
- Implementación de manejo de errores.

## 5. Interacción con inteligencia artificial

La inteligencia artificial se utilizó como herramienta de apoyo durante las diferentes etapas del desarrollo.

El proceso de trabajo consistió en:

1. Definir el objetivo y las características de la tienda.
2. Describir mediante prompts las funcionalidades deseadas.
3. Solicitar ejemplos de código en TypeScript.
4. Integrar los códigos generados dentro del proyecto.
5. Ejecutar la aplicación y comprobar su funcionamiento.
6. Compartir los mensajes de error con ChatGPT.
7. Aplicar las correcciones propuestas y volver a probar.

### Corrección de errores de TypeScript y Next.js

Durante el desarrollo se presentó un error relacionado con la importación del hook useFavorites.

El mensaje indicaba que Next.js no podía encontrar el módulo:

`@/hooks/useFavorites`

Para resolverlo se revisó la estructura de directorios y se identificó la necesidad de crear correctamente la carpeta hooks y el archivo useFavorites.ts.

También se revisaron las importaciones y la ubicación de los componentes para mantener una estructura organizada.

Este proceso permitió comprender la importancia de las rutas de importación, la organización de archivos y el uso correcto de componentes cliente en Next.js.

## 6. Decisiones de diseño

Se eligió una temática gamer con una estética futurista y tecnológica.

### Paleta de colores

- Fondo principal: #090914 (negro azulado).
- Fondo secundario: #151525 (oscuro).
- Morado neón: #A855F7.
- Verde neón: #A3E635.
- Texto principal: #FFFFFF.
- Texto secundario: #9CA3AF.

### Características visuales

- Diseño oscuro para transmitir una estética gamer.
- Colores morados y verdes para generar contraste.
- Tarjetas con bordes redondeados.
- Efectos hover en botones y tarjetas.
- Gradientes y fondos luminosos.
- Tipografía moderna y títulos destacados.
- Diseño adaptable a diferentes tamaños de pantalla.

### Decisiones técnicas

Se eligió Tailwind CSS para facilitar la personalización visual y reducir la necesidad de escribir estilos CSS repetitivos.

Se implementaron componentes reutilizables para mantener consistencia entre las diferentes páginas.

También se utilizó localStorage para guardar los videojuegos favoritos sin necesidad de una base de datos.

## 7. Funcionalidades desarrolladas

- Página de inicio con banner principal.
- Catálogo de videojuegos.
- Búsqueda en tiempo real.
- Filtros por categorías.
- Sistema de favoritos.
- Persistencia de favoritos mediante localStorage.
- Página de información de la tienda.
- Pantalla de carga.
- Pantalla de errores.

## 8. Aprendizajes obtenidos

Durante el desarrollo del proyecto se reforzaron conocimientos sobre:

- Estructura de proyectos Next.js.
- Uso de App Router.
- Desarrollo de componentes React.
- Uso de TypeScript.
- Manejo de estados con useState.
- Uso de efectos con useEffect.
- Optimización de filtros con useMemo.
- Estilos con Tailwind CSS.
- Manejo de errores.
- Uso de inteligencia artificial como apoyo a la programación.

## 9. Conclusión

El desarrollo de Pixel Arcade Store permitió aplicar conocimientos de desarrollo web y experimentar con herramientas de inteligencia artificial mediante la metodología Vibe Coding.

La interacción con ChatGPT facilitó la generación de código, la identificación de errores y la implementación de nuevas funcionalidades.

Sin embargo, fue necesario revisar, integrar y probar cada solución para comprobar su funcionamiento.

Este proyecto representa una experiencia de aprendizaje en el desarrollo de aplicaciones web modernas, combinando programación, creatividad y herramientas de inteligencia artificial.
