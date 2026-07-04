export function toSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const proyectos = [
  {
    subtitulo: "Bookteka",
    tecnologias: ["Astro", "React", "React Native", "TS", "NodeJs"],
    texto: "Tu biblioteca digital personal con lector integrado.",
    img: "/img/proyecto-bookteka.png",
    github: "https://github.com/OrlandoTellez/bookteka",
    destacado: true,
    app: true,
    activeApp: false,
    releases: "https://github.com/OrlandoTellez/bookteka/releases"
  },
  {
    subtitulo: "TechComponents",
    tecnologias: ["Rust", "NextJs", "TS"],
    texto: "Ecommerce de componentes de hardware.",
    img: "/img/proyecto-techcomponents.png",
    url: "https://techcomponents.vercel.app/",
    github: "https://github.com/OrlandoTellez/techcomponents",
  },
  {
    subtitulo: "POS System",
    tecnologias: ["TS", "Rust", "Fastify", "Tauri", "CSS"],
    texto: "Sistema POS (Point of Sale) moderno con backend en Fastify y Rust para gestión de ventas e inventario.",
    img: "/img/proyecto-pos-system.png",
    url: "https://github.com/orlandotellez/pos-system",
    github: "https://github.com/orlandotellez/pos-system",
    destacado: true,
    app: true,
    activeApp: true,
    releases: "https://github.com/orlandotellez/pos-system/releases"
  },

  {
    subtitulo: "Anteny App",
    tecnologias: ["React Native", "TS", "Matrix"],
    texto: "Aplicación de mensajería construida con React Native y Matrix.",
    img: "/img/proyecto-anteny.png",
    github: "https://github.com/OrlandoTellez/anteny-app",
    destacado: true,
    app: true,
    activeApp: false,
    releases: "https://github.com/OrlandoTellez/anteny-app/releases"
  },
  {
    subtitulo: "Restix",
    tecnologias: ["Rust", "Redis", "CLI"],
    texto: "Explorador de Redis en terminal con soporte para keys, TTL e interactividad.",
    img: "/img/proyecto-restix.png",
    url: "https://github.com/OrlandoTellez/restix",
    github: "https://github.com/OrlandoTellez/restix",
    destacado: true
  },
  {
    subtitulo: "Rasflow",
    tecnologias: ["Rust", "React", "TS"],
    texto: "Aplicación web para gestión y organización de tareas.",
    img: "/img/proyecto-rasflow.png",
    url: "https://rasflow.vercel.app/",
    github: "https://github.com/OrlandoTellez/rasflow"
  },
  {
    subtitulo: "VertiCollage",
    tecnologias: ["NextJs", "TS", "Canvas"],
    texto: "Creador de collages verticales.",
    img: "/img/proyecto-verticollage.png",
    url: "https://verticollage.vercel.app/",
    github: "https://github.com/OrlandoTellez/verticollage"
  },
  {
    subtitulo: "Planificator",
    tecnologias: ["NextJs", "TS"],
    texto: "Aplicación web para planificar rutinas y gestionar tareas.",
    img: "/img/proyecto-planificator.png",
    url: "https://planificator.vercel.app/",
    github: "https://github.com/OrlandoTellez/planificator"
  },
  {
    subtitulo: "Manuals",
    tecnologias: ["Rust"],
    texto: "Colección de manuales y documentación sobre desarrollo.",
    img: "/img/proyecto-manuals.png",
    url: "https://manuals.vercel.app/",
    github: "https://github.com/OrlandoTellez/manuals"
  },
  {
    subtitulo: "Dotfiles",
    tecnologias: ["Dotfiles", "Lua", "Shell", "Config"],
    texto: "Configuración personal de Neovim, Ghostty y Zed.",
    img: "/img/proyecto-dotfiles.png",
    url: "https://github.com/OrlandoTellez/dotfiles",
    github: "https://github.com/OrlandoTellez/dotfiles"
  },
  {
    subtitulo: "Arquitectura",
    tecnologias: ["Astro", "CSS", "TS"],
    texto: "Plantillas de páginas web enfocadas en arquitectura y diseño moderno.",
    img: "/img/proyecto-arquitectura.png",
    url: "https://arquitectura-template.vercel.app/",
    github: "https://github.com/OrlandoTellez/arquitectura-template"
  },
  {
    subtitulo: "Dashboards",
    tecnologias: ["Fastify", "NextJs", "TS", "Full Stack"],
    texto: "Plantillas Full Stack para paneles administrativos.",
    img: "/img/proyecto-dashboards.png",
    url: "https://dashboards-template.vercel.app/",
    github: "https://github.com/OrlandoTellez/dashboards-template"
  },

  // Proyectos antiguos
  {
    subtitulo: "Formatted Time",
    tecnologias: ["Astro", "TS"],
    texto: "Formateador de tiempo en JavaScript para crear y mostrar fechas personalizadas.",
    img: "/img/proyecto-formateador.png",
    url: "https://formatted-time.vercel.app/",
    github: "https://github.com/OrlandoTellez/formatted-time"
  },
  {
    subtitulo: "Hardware Web",
    tecnologias: ["NextJs", "TS"],
    texto: "Página web que enseña sobre hardware, explicando sus componentes, aplicaciones y curiosidades.",
    img: "/img/proyecto-hardwareWeb.png",
    url: "https://hardware-web.vercel.app/",
    github: "https://github.com/OrlandoTellez/hardware-web"
  },
  {
    subtitulo: "Filtro de imágenes con JS",
    tecnologias: ["NodeJs", "CSS", "JS", "HTML"],
    texto: "Aplicación que permite aplicar filtros personalizados a imágenes directamente en el navegador.",
    img: "/img/proyecto-filtroImagenes.png",
    url: "https://filtro-imagenes-production.up.railway.app/",
    github: "https://github.com/OrlandoTellez/filtro-imagenes"
  },
  {
    subtitulo: "CatPedia",
    tecnologias: ["NodeJs", "CSS", "JS"],
    texto: "Aplicación web para consultar información y curiosidades sobre gatos.",
    img: "/img/proyecto-catPedia.png",
    url: "https://pagina-de-gatos-node-js.vercel.app/",
    github: "https://github.com/OrlandoTellez/pagina-de-gatos-NodeJs"
  },
  {
    subtitulo: "Trello App",
    tecnologias: ["HTML", "CSS", "JS"],
    texto: "Aplicación web que simula el comportamiento de Trello, ofreciendo una interfaz sencilla y eficiente.",
    img: "/img/proyecto-trelloApp.png",
    url: "https://orlandotellez.github.io/trello-app/",
    github: "https://github.com/OrlandoTellez/trello-app"
  },
  {
    subtitulo: "Twitter Clon",
    tecnologias: ["HTML", "CSS", "JS"],
    texto: "Clon de la interfaz de Twitter(X), replicando su diseño y funcionalidades principales.",
    img: "/img/proyecto-twiterClon.png",
    url: "https://twiter-clon.onrender.com/",
    github: "https://github.com/OrlandoTellez/twiter-clon"
  },

];
