import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const LENGUAJES = ["TypeScript", "C#", "Rust"] as const;
const LenguajeEnum = z.enum(LENGUAJES);

export function retoNumero(id: string): string | null {
  return id.match(/^(\d+)/)?.[1] ?? null;
}

export function compararRetos(a: string, b: string): number {
  const na = retoNumero(a);
  const nb = retoNumero(b);
  if (na === null && nb === null) return a.localeCompare(b);
  if (na === null) return 1;
  if (nb === null) return -1;
  return parseInt(na, 10) - parseInt(nb, 10);
}

const retos = defineCollection({
  loader: glob({
    pattern: "*/reto.md",
    base: "./src/content/retos",
    // "01-ejercicio/reto.md" -> id "01-ejercicio"
    generateId: ({ entry }) => entry.split("/")[0],
  }),
  schema: z.object({
    titulo: z.string(),
    resumen: z.string(),
    lenguajes: z
      .array(LenguajeEnum)
      .default(["TypeScript", "C#", "Rust"]),
    dificultad: z.enum(["Fácil", "Intermedio", "Difícil"]),
    fecha: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const soluciones = defineCollection({
  loader: glob({
    pattern: ["*/typescript.md", "*/csharp.md", "*/rust.md"],
    base: "./src/content/retos",
    // "01-ejercicio/typescript.md" -> id "01-ejercicio/typescript"
    generateId: ({ entry }) => entry.replace(/\.md$/, ""),
  }),
  schema: z.object({
    lenguaje: LenguajeEnum,
  }),
});

export const collections = { retos, soluciones };
