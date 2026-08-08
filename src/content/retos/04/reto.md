---
titulo: "Atrapar Agua de Lluvia"
resumen: "El problema clásico de los dos punteros para calcular cuánta agua queda atrapada entre barras de distinta altura. Resuelto en TypeScript, C# y Rust."
lenguajes: ["TypeScript", "C#", "Rust"]
dificultad: "Difícil"
fecha: "2026-08-07"
tags: ["dos-punteros", "arrays", "greedy"]
---

## Enunciado
Dados `n` enteros no negativos que representan un mapa de elevación donde el ancho de cada barra es `1`, calcula cuánta agua puede quedar atrapada después de llover.

**Ejemplo 1:** https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png
```
Entrada: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Salida: 6
Explicación: El mapa de elevación de arriba (sección negra) está representado por el arreglo [0,1,0,2,1,0,1,3,2,1,2,1]. En este caso, quedan atrapadas 6 unidades de agua de lluvia (sección azul).
```

**Ejemplo 2:**
```
Entrada: height = [4,2,0,3,2,5]
Salida: 9
```

## La idea central
El agua atrapada sobre cada barra `i` depende de la barra **más alta a su izquierda** y la barra **más alta a su derecha**: la cantidad de agua es `min(maxIzquierda, maxDerecha) - height[i]`.

Calcular esos máximos con arreglos auxiliares funciona, pero requiere espacio extra `O(n)`. El truco elegante es usar **dos punteros** (`izquierda` y `derecha`) que avanzan uno hacia el otro, junto con dos variables `maxIzquierda` y `maxDerecha`:

- Si `maxIzquierda < maxDerecha`, entonces sabemos con certeza que el nivel de agua en la posición `izquierda` está limitado por `maxIzquierda` (porque en algún punto entre `izquierda` y `derecha` hay una barra al menos tan alta como `maxDerecha`). Procesamos esa posición y avanzamos `izquierda`.
- En caso contrario, hacemos lo simétrico con `derecha`.

Esta observación evita necesitar los arreglos completos de máximos: en cada paso, **solo uno de los dos lados** determina el resultado, y siempre es el lado con el máximo más pequeño hasta ese momento.

## Complejidad
Es **O(n)** en tiempo y **O(1)** en espacio en los tres lenguajes, ya que los dos punteros recorren el arreglo una sola vez en total y no se necesita ninguna estructura auxiliar más allá de un puñado de variables.

**¿Cómo lo mejorarías?** Prueba primero la versión con arreglos `maxIzquierda[]` y `maxDerecha[]` precomputados (O(n) espacio) para entender la intuición, y luego refactoriza a la versión de dos punteros — ver la transformación ayuda a interiorizar por qué funciona la reducción de espacio.
