export function toSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const proyectos = [
  {
    subtitulo: "CajoraPos",
    tecnologias: ["TS", "Rust", "Fastify", "Tauri", "CSS"],
    texto: "Sistema POS (Point of Sale) moderno con backend en Fastify y Rust para gestión de ventas e inventario.",
    img: "/img/proyecto-pos-system.png",
    url: "https://cajorapos.com",
    github: "https://github.com/orlandotellez/cajora-pos",
    destacado: true,
    app: true,
    activeApp: true,
    releases: "https://github.com/orlandotellez/cajora-pos/releases"
  },
  {
    subtitulo: "Fwinit",
    tecnologias: ["TS", "Astro", "CLI"],
    texto: "CLI para crear proyectos desde templates. Instalás una vez y scaffoldás proyectos con un comando.",
    img: "/img/proyecto-restix.png",
    url: "https://fwinit.vercel.app",
    github: "https://github.com/orlandotellez/fwinit",
    destacado: true
  },


  {
    subtitulo: "Bookteka",
    tecnologias: ["Astro", "React", "React Native", "TS", "NodeJs"],
    texto: "Tu biblioteca digital personal con lector integrado.",
    img: "/img/proyecto-bookteka.png",
    github: "https://github.com/OrlandoTellez/bookteka",
    destacado: true,
    app: true,
    activeApp: true,
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
    destacado: false
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
];
