import blogApp from '../assets/blog-app.png';
import movieApp from '../assets/movie-app.png';
import personalBlog from '../assets/personal-blog.png';
import usdTracker from '../assets/usd-tracker.png';

export const PROJECTS = {
  es: [
    {
      title: "Plataforma de Blogs",
      description:
        "Este fue mi proyecto más ambicioso hasta el momento. Quería construir algo real de punta a punta: autenticación completa con JWT, un editor de texto enriquecido, gestión de imágenes con Cloudinary y un sistema de categorías. Usé Turborepo para organizar el código en una arquitectura monorepo, separando el frontend en Next.js del backend en Node.js y Express. Aprendí mucho sobre cómo escalar una aplicación y mantener el código organizado cuando crece.",
      imageSrc: blogApp,
      linkPage: "https://blog-app-sparta.vercel.app/",
      linkGithub: "https://github.com/AxelSparta/blog-app",
      tags: ["Nextjs", "Tailwind", "Node.js", "Express", "Turborepo"],
    },
    {
      title: "Seguimiento de Compras USD",
      description:
        "Este proyecto nació de un problema real en Argentina: llevar registro de cuántos dólares compraste y a qué precio. Lo construí con Next.js y TypeScript, y usé Zustand para el manejo de estado global. Me gustó especialmente el desafío de pensar en algo útil para el contexto local y llevarlo a una app funcional.",
      imageSrc: usdTracker,
      linkPage: 'https://usd-tracker.vercel.app',
      linkGithub: 'https://github.com/AxelSparta/usd-tracker',
      tags: ['NextJS', 'Tailwind', 'TypeScript', 'Zustand'],
    },
    {
      title: "Movie App",
      description:
        "Quería practicar el consumo de APIs externas y el manejo de rutas en React. Conecté la API de TMDb para obtener datos en tiempo real, implementé React Router para la navegación entre secciones y agregué soporte para modo oscuro y claro. Fue un proyecto muy útil para afianzar mis bases en React y TypeScript.",
      imageSrc: movieApp,
      linkPage: "https://moviesparta.netlify.app/",
      linkGithub: "https://github.com/AxelSparta/movie-app",
      tags: ["ReactJS", "Tailwind", "React Router", "Typescript"],
    },
    {
      title: "Blog Personal",
      description:
        "Construí este blog como un espacio para documentar lo que voy aprendiendo. Elegí Astro porque es ideal para sitios con mucho contenido estático y quería experimentar con algo fuera del ecosistema de React. Acá publico artículos técnicos, reflexiones y cosas que me resultan útiles en mi camino como desarrollador.",
      imageSrc: personalBlog,
      linkPage: "https://axel-sparta-blog.netlify.app/",
      linkGithub: "https://github.com/AxelSparta/personal-blog",
      tags: ["Astro", "Tailwind", "Typescript"],
    },
  ],
  en: [
    {
      title: "Blog Platform",
      description:
        "This was my most ambitious project so far. I wanted to build something real end-to-end: full JWT authentication, a rich text editor, image management with Cloudinary, and a category system. I used Turborepo to organize the codebase as a monorepo, separating the Next.js frontend from the Node.js/Express backend. It taught me a lot about how to scale an application and keep code organized as it grows.",
      imageSrc: blogApp,
      linkPage: "https://blog-app-sparta.vercel.app/",
      linkGithub: "https://github.com/AxelSparta/blog-app",
      tags: ["Nextjs", "Tailwind", "Node.js", "Express", "Turborepo"],
    },
    {
      title: "USD Purchase Tracker",
      description:
        "This project came from a real problem in Argentina: keeping track of how many dollars you've bought and at what price. I built it with Next.js and TypeScript, using Zustand for global state management. I especially enjoyed the challenge of identifying a locally relevant problem and turning it into a working application.",
      imageSrc: usdTracker,
      linkPage: 'https://usd-tracker.vercel.app',
      linkGithub: 'https://github.com/AxelSparta/usd-tracker',
      tags: ['NextJS', 'Tailwind', 'TypeScript', 'Zustand'],
    },
    {
      title: "Movie App",
      description:
        "I wanted to practice consuming external APIs and handling routing in React. I connected the TMDb API to fetch real-time data, implemented React Router for navigation, and added dark/light mode support. It was a great project for solidifying my React and TypeScript fundamentals.",
      imageSrc: movieApp,
      linkPage: "https://moviesparta.netlify.app/",
      linkGithub: "https://github.com/AxelSparta/movie-app",
      tags: ["ReactJS", "Tailwind", "React Router", "Typescript"],
    },
    {
      title: "Personal Blog",
      description:
        "I built this blog as a space to document what I'm learning along the way. I chose Astro because it's ideal for content-heavy static sites and I wanted to experiment outside the React ecosystem. Here I publish technical articles, reflections, and things I find useful on my path as a developer.",
      imageSrc: personalBlog,
      linkPage: "https://axel-sparta-blog.netlify.app/",
      linkGithub: "https://github.com/AxelSparta/personal-blog",
      tags: ["Astro", "Tailwind", "Typescript"],
    },
  ]
};
