# Personal Portfolio - Axel 🚀

[![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)

Mi portafolio personal construido con un enfoque en el rendimiento, la accesibilidad y el diseño moderno. Desarrollado con **Astro 5**, este sitio utiliza Static Site Generation (SSG) para garantizar una carga instantánea y un SEO óptimo.

## ✨ Características

- **🌐 Soporte Multi-idioma (i18n):** Implementación personalizada para Español (por defecto) e Inglés.
- **🎨 Diseño Moderno & Responsivo:** Estilizado con Tailwind CSS y animaciones fluidas.
- **🌙 Modo Oscuro:** Integración nativa con soporte para preferencias del sistema.
- **🚀 Rendimiento Extremo:** Puntuaciones perfectas en Lighthouse gracias a la arquitectura de Astro.
- **📱 Mobile First:** Optimizado para una experiencia perfecta en cualquier dispositivo.
- **📑 Gestión de Proyectos:** Galería de proyectos con detalles técnicos y enlaces directos.

## 🛠️ Tecnologías

- **Framework:** [Astro 5](https://astro.build/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) con [@midudev/tailwind-animations](https://github.com/midudev/tailwind-animations)
- **Tipografía:** [Onest Variable](https://fontsource.org/fonts/onest) via Fontsource
- **Iconos:** SVGs personalizados como componentes de Astro
- **Despliegue:** [Netlify](https://www.netlify.com/)

## 🚀 Inicio Rápido

### Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [pnpm](https://pnpm.io/) (recomendado)

### Instalación

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/AxelSparta/portfolio-astro.git
    cd portfolio-astro
    ```

2.  **Instalar dependencias:**
    ```bash
    pnpm install
    ```

3.  **Iniciar servidor de desarrollo:**
    ```bash
    pnpm run dev
    ```

### Comandos Disponibles

| Comando | Descripción |
| :--- | :--- |
| `pnpm run dev` | Inicia el servidor de desarrollo en `localhost:4321`. |
| `pnpm run build` | Genera una build de producción optimizada en `/dist`. |
| `pnpm run preview` | Previsualiza localmente la build de producción. |
| `pnpm run astro check` | Ejecuta chequeos de tipos y diagnóstico de Astro. |

## 📁 Estructura del Proyecto

```text
/
├── public/          # Assets estáticos (PDFs, Imágenes de banderas)
├── src/
│   ├── assets/      # Imágenes optimizadas para componentes
│   ├── components/  # Componentes de la UI (Hero, Projects, Card, etc.)
│   ├── i18n/        # Configuración y diccionarios de idiomas
│   ├── icons/       # Iconos SVG como componentes Astro
│   ├── layouts/     # Layout principal del sitio
│   └── pages/       # Rutas del sitio (index y [lang])
├── astro.config.mjs # Configuración de Astro e integraciones
└── package.json     # Dependencias y scripts
```

## 📄 Licencia

Este proyecto es de código abierto. Siéntete libre de usarlo como base para tu propio portafolio. 

---
Hecho con ❤️ por [Axel](https://www.linkedin.com/in/axel-sparta-web/)
