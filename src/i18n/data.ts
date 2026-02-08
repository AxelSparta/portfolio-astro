import blogApp from '../assets/blog-app.png';
import movieApp from '../assets/movie-app.png';
import personalBlog from '../assets/personal-blog.png';
import usdTracker from '../assets/usd-tracker.png';

export const PROJECTS = {
  es: [
    {
      title: "Página de blogs",
      description:
        "Plataforma de blog full-stack donde los usuarios pueden iniciar sesión o registrarse para crear, editar y eliminar posts.",
      imageSrc: blogApp,
      linkPage: "https://blog-app-sparta.vercel.app/",
      linkGithub: "https://github.com/AxelSparta/blog-app",
      tags: ["Nextjs", "Tailwind", "Node.js", "Express", "Turborepo"],
    },
    {
      title: "App de películas",
      description:
        "Aplicación web para buscar películas, obtener información y ver sus trailers.",
      imageSrc: movieApp,
      linkPage: "https://moviesparta.netlify.app/",
      linkGithub: "https://github.com/AxelSparta/movie-app",
      tags: ["ReactJS", "Tailwind", "React Router", "Typescript"],
    },
    {
      title: "Blog personal",
      description:
        "Blog personal donde puedo compartir mis proyectos, conocimientos y experiencias.",
      imageSrc: personalBlog,
      linkPage: "https://axel-sparta-blog.netlify.app/",
      linkGithub: "https://github.com/AxelSparta/personal-blog",
      tags: ["Astro", "Tailwind", "Typescript"],
    },
    {
      title: 'Compras de USD Argentina',
      description: 'Aplicación web para consultar y registrar las compras de dólares en Argentina.',
      imageSrc: usdTracker,
      linkPage: 'https://usd-tracker.vercel.app',
      linkGithub: 'https://github.com/AxelSparta/usd-tracker',
      tags: ['NextJS', 'Tailwind', 'TypeScript', 'Zustand'],
    }
  ],
  en: [
    {
      title: "Blog Page",
      description:
        "Full-stack blog platform where users can log in or register to create, edit, and delete posts.",
      imageSrc: blogApp,
      linkPage: "https://blog-app-sparta.vercel.app/",
      linkGithub: "https://github.com/AxelSparta/blog-app",
      tags: ["Nextjs", "Tailwind", "Node.js", "Express", "Turborepo"],
    },
    {
      title: "Movie App",
      description:
        "Web application to search for movies, get information, and watch trailers.",
      imageSrc: movieApp,
      linkPage: "https://moviesparta.netlify.app/",
      linkGithub: "https://github.com/AxelSparta/movie-app",
      tags: ["ReactJS", "Tailwind", "React Router", "Typescript"],
    },
    {
      title: "Personal Blog",
      description:
        "Personal blog where I can share my projects, knowledge, and experiences.",
      imageSrc: personalBlog,
      linkPage: "https://axel-sparta-blog.netlify.app/",
      linkGithub: "https://github.com/AxelSparta/personal-blog",
      tags: ["Astro", "Tailwind", "Typescript"],
    },
    {
      title: 'USD Argentina Purchases',
      description: 'Web application to check and register USD purchases in Argentina.',
      imageSrc: usdTracker,
      linkPage: 'https://usd-tracker.vercel.app',
      linkGithub: 'https://github.com/AxelSparta/usd-tracker',
      tags: ['NextJS', 'Tailwind', 'TypeScript', 'Zustand'],
    }
  ]
};
