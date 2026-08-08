---
titulo: "Suma de Hojas Izquierdas"
resumen: "Recorrido de árbol binario prestando atención a la posición del nodo, no solo a su valor. Resuelto en TypeScript, C# y Rust."
lenguajes: ["TypeScript", "C#", "Rust"]
dificultad: "Fácil"
fecha: "2026-08-07"
tags: ["árboles", "recursión", "dfs"]
---

## Enunciado
Dada la raíz `root` de un árbol binario, devuelve la suma de todas las **hojas izquierdas**. Una hoja es un nodo sin hijos. Una hoja izquierda es una hoja que es hijo izquierdo de otro nodo.

**Ejemplo 1:** ![](https://assets.leetcode.com/uploads/2021/04/08/leftsum-tree.jpg)
```
Entrada: root = [3,9,20,null,null,15,7]
Salida: 24
Explicación: Hay dos hojas izquierdas en el árbol binario, con valores 9 y 15 respectivamente.
```

**Ejemplo 2:**
```
Entrada: root = [1]
Salida: 0
```

**Restricciones:**
* El número de nodos del árbol está en el rango `[1, 1000]`.
* `-1000 <= Node.val <= 1000`

## La idea central
La trampa de este problema no está en el recorrido en sí (un DFS clásico), sino en **cómo identificar correctamente una "hoja izquierda"**. No basta con revisar si `node.left` existe y no tiene hijos — hay que verificar explícitamente que ese hijo izquierdo sea, además, una **hoja** (que no tenga ni `left` ni `right`).

La función recursiva viaja por el árbol llevando **contexto sobre la posición del nodo actual** (si es hijo izquierdo o derecho de su padre), algo que no es necesario en un DFS típico de suma de valores:

- En cada llamada recursiva, si el nodo actual es una hoja **y** llegamos a él como hijo izquierdo, sumamos su valor.
- Si no, seguimos bajando recursivamente por `left` y por `right`, acumulando el resultado.

Un error común es sumar cualquier nodo que simplemente *no tenga hijo derecho*, en lugar de verificar que sea una hoja verdadera (sin hijos en absoluto). Por ejemplo, un nodo con solo hijo izquierdo no es una hoja, aunque "parezca" estar a la izquierda de algo.

## Complejidad
Es **O(n)** en tiempo en los tres lenguajes, donde `n` es el número de nodos, ya que cada nodo se visita exactamente una vez. El espacio es **O(h)**, donde `h` es la altura del árbol, debido a la pila de recursión (en el peor caso, un árbol degenerado en línea, `O(n)`).

**¿Cómo lo mejorarías?** Prueba una versión iterativa usando una pila explícita (o una cola para BFS) en lugar de recursión — útil en los tres lenguajes para evitar el riesgo de *stack overflow* en árboles muy profundos.
