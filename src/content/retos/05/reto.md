---
titulo: "Rectángulo Máximo"
resumen: "Reduce una matriz binaria a múltiples problemas de 'mayor área en histograma' resueltos con pila monótona. Resuelto en TypeScript, C# y Rust."
lenguajes: ["TypeScript", "C#", "Rust"]
dificultad: "Difícil"
fecha: "2026-08-07"
tags: ["pilas", "programación-dinámica", "matrices"]
---

## Enunciado
Dada una matriz binaria `matrix` de tamaño `rows x cols` llena de `0`s y `1`s, encuentra el rectángulo más grande que contenga solo `1`s y devuelve su área.

**Ejemplo 1:** ![](https://assets.leetcode.com/uploads/2020/09/14/maximal.jpg)
```
Entrada: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Salida: 6
Explicación: El rectángulo máximo se muestra en la imagen de arriba.
```

**Ejemplo 2:**
```
Entrada: matrix = [["0"]]
Salida: 0
```

**Ejemplo 3:**
```
Entrada: matrix = [["1"]]
Salida: 1
```

## La idea central
La clave es **reducir este problema a uno que ya sabemos resolver**: el de "área máxima en un histograma" (Largest Rectangle in Histogram).

1. Recorremos la matriz **fila por fila**, manteniendo un arreglo `alturas` del mismo ancho que la matriz.
2. Para cada fila, actualizamos `alturas[j]`: si `matrix[i][j] == '1'`, incrementamos `alturas[j]` en 1 (la columna de barras crece); si es `'0'`, reseteamos `alturas[j]` a `0` (la barra se rompe).
3. Con ese arreglo `alturas` actualizado, cada fila representa un **histograma**, y calculamos el área máxima de rectángulo en ese histograma usando una **pila monótona creciente** de índices: cuando encontramos una barra más baja que el tope de la pila, vamos "resolviendo" hacia atrás las barras más altas, calculando el área que cada una podría cubrir hasta ese punto.
4. Nos quedamos con el máximo de todas las filas procesadas.

La intuición es que cualquier rectángulo de `1`s en la matriz tiene un límite inferior en alguna fila, y en esa fila las alturas acumuladas hacia arriba forman exactamente el histograma cuyo rectángulo máximo coincide con el rectángulo buscado.

## Complejidad
Es **O(rows × cols)** en tiempo en los tres lenguajes: por cada fila se recalculan las alturas en O(cols) y se resuelve el histograma en O(cols) (cada columna se apila y desapila como máximo una vez). El espacio es O(cols) para el arreglo de alturas y la pila.

**¿Cómo lo mejorarías?** Intenta implementar una variante con programación dinámica que mantenga, además de las alturas, los límites izquierdo y derecho de cada columna en cada fila — evita la pila explícita a cambio de tres arreglos auxiliares.
