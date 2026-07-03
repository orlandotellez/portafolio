# Portafolio Orlando Téllez

Construido con [Astro](https://astro.build) y diseñado con un enfoque moderno y minimalista.

## Stack

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tauri](https://img.shields.io/badge/Tauri-24C8DB?style=for-the-badge&logo=tauri&logoColor=FFC131)
![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![Rust](https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

## Estructura del proyecto

```text
/
├── public/
│   ├── logo.svg               # Favicon
│   ├── favicon.svg            # Favicon respaldo
│   └── cv-orlandotellez.pdf   # CV descargable
├── src/
│   ├── components/
│   │   ├── TopBar.astro       # Barra superior con logo
│   │   ├── SidebarLeft.astro  # Panel lateral izquierdo (perfil, redes, email)
│   │   ├── SidebarRight.astro # Panel lateral derecho (experiencia, stack técnico)
│   │   ├── MainFeed.astro     # Feed principal (proyectos, filtros, about)
│   │   ├── ProjectCard.astro  # Tarjeta de proyecto individual
│   │   └── MobileNav.astro    # Navegación inferior móvil
│   ├── layouts/
│   │   └── Layout.astro       # Layout base con estilos globales
│   ├── pages/
│   │   └── index.astro        # Página única (SPA)
│   ├── data/
│   │   ├── proyectos.js       # Datos de proyectos
│   │   ├── tecnologias.js     # Iconos de tecnologías
│   │   └── redesSociales.js   # Enlaces a redes sociales
│   └── assets/
│       └── iconos/            # Iconos SVG de tecnologías
└── package.json
```

## Características

- **Perfil profesional** con imagen, nombre y descripción
- **Proyectos destacados** con filtros por tecnología
- **Filtros principales:** React, TypeScript, Rust, Next.js, Astro, Node.js, Fastify, Dotfiles
- **Experiencia laboral** con panel lateral derecho
- **Stack técnico** organizado por categorías (Frontend, Backend, Herramientas)
- **Redes sociales:** GitHub, LinkedIn, YouTube
- **CV descargable** en PDF
- **Diseño responsive** con navegación móvil
- **Modo oscuro** con tema `data-theme="dark"`
- **Favicon** personalizado con icono de código `</>`

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                          |
| :------------------------ | :---------------------------------------------- |
| `pnpm install`             | Instala las dependencias                        |
| `pnpm dev`                 | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build`               | Compila el sitio de producción en `./dist/`     |
| `pnpm preview`             | Previsualiza el build localmente                |
| `pnpm astro ...`           | Ejecuta comandos de la CLI de Astro             |

## Redes

- [GitHub](https://github.com/orlandotellez)
- [LinkedIn](https://www.linkedin.com/in/orlando-gabriel-t%C3%A9llez)
- [YouTube](https://www.youtube.com/@landodev)
