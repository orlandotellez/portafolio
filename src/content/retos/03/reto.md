---
titulo: "Eliminar K Dígitos"
resumen: "El clásico problema de la pila monótona para construir el número más pequeño posible. Resuelto en TypeScript, C# y Rust."
lenguajes: ["TypeScript", "C#", "Rust"]
dificultad: "Intermedio"
fecha: "2026-08-07"
tags: ["pilas", "greedy", "strings"]
---

## Enunciado
Dada una cadena `num` que representa un entero no negativo, y un entero `k`, devuelve el entero más pequeño posible después de eliminar `k` dígitos de `num`.

**Ejemplo 1:**
```
Entrada: num = "1432219", k = 3
Salida: "1219"
Explicación: Eliminando los dígitos 4, 3 y 2 se forma el número 1219, que es el más pequeño posible.
```

**Ejemplo 2:**
```
Entrada: num = "10200", k = 1
Salida: "200"
Explicación: Se elimina el 1 inicial y el número queda como 200. Nótese que el resultado no debe tener ceros a la izquierda.
```

**Ejemplo 3:**
```
Entrada: num = "10", k = 2
Salida: "0"
Explicación: Se eliminan todos los dígitos y queda 0.
```

## La idea central
La estrategia **greedy** es simple de enunciar: si un dígito es mayor que el que le sigue, conviene eliminarlo, porque colocarlo antes de un dígito más pequeño solo hace más grande el número resultante.

Esto se implementa con una **pila monótona creciente**:
- Recorremos `num` dígito por dígito.
- Mientras el tope de la pila sea **mayor** que el dígito actual y todavía nos queden eliminaciones (`k > 0`), sacamos el tope de la pila (lo "eliminamos") y decrementamos `k`.
- Apilamos el dígito actual.

Al terminar el recorrido, si aún queda `k > 0` (por ejemplo, si el número era estrictamente creciente, como `"12345"` con `k = 2`), simplemente eliminamos los últimos `k` dígitos de la pila, ya que son los más grandes.

Por último, se limpian los **ceros a la izquierda** y, si el resultado queda vacío, se devuelve `"0"`.

## Complejidad
Es **O(n)** en los tres lenguajes: cada dígito se apila y se desapila como máximo una vez, así que el trabajo total es lineal, aunque el bucle `while` interno pueda parecer sugerir algo más costoso. El espacio también es O(n) por la pila auxiliar.

**¿Cómo lo mejorarías?** Prueba a resolverlo sin pila explícita, usando un `StringBuilder` (o `String` mutable) como si fuera la pila — misma lógica, sin la sobrecarga de una estructura de datos adicional.
