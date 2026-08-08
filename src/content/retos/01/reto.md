---
titulo: "Tiempo para Comprar Boletos"
resumen: "Simulación de una fila circular resuelta con una observación matemática que evita el bucle infinito. Resuelto en TypeScript, C# y Rust."
lenguajes: ["TypeScript", "C#", "Rust"]
dificultad: "Fácil"
fecha: "2026-08-07"
tags: ["arrays", "simulación", "colas"]
---

## Enunciado
Hay `n` personas en una fila para comprar boletos, donde la persona `0` está al frente de la fila y la persona `n - 1` está al final. Se te da un arreglo `tickets`, donde `tickets[i]` es la cantidad de boletos que la persona `i` desea comprar.

Cada persona tarda **1 segundo** en comprar un boleto. Solo puede comprar uno a la vez y debe volver al final de la fila para comprar otro. Si ya no le quedan boletos por comprar, abandona la fila.

Devuelve el tiempo que tarda la persona en la posición `k` en terminar de comprar todos sus boletos.

**Ejemplo 1:**
```
Entrada: tickets = [2,3,2], k = 2
Salida: 6
Explicación:
- En la primera vuelta la fila queda como [1, 2, 1].
- En la segunda vuelta la fila queda como [0, 1, 0].
La persona en la posición 2 tardó 3 + 3 = 6 segundos.
```

**Ejemplo 2:**
```
Entrada: tickets = [5,1,1,1], k = 0
Salida: 8
Explicación:
- En la primera vuelta la fila queda como [4, 0, 0, 0].
- En las siguientes 4 vueltas solo compra la persona 0.
La persona en la posición 0 tardó 4 + 1 + 1 + 1 + 1 = 8 segundos.
```

## La idea central
Simular la fila persona por persona sería `O(n * max(tickets))`, e innecesario: no importa cuántas vueltas dé la fila completa, solo importa **cuántas veces pasa cada persona por la ventanilla antes de que la persona `k` termine**.

La observación clave: la persona `k` termina justo cuando compra su boleto número `tickets[k]`. Para cada persona `i`, calculamos cuántas veces pasa por la ventanilla **antes de ese instante**:
- Si `i <= k` (está delante de `k` o es `k` mismo): pasa `min(tickets[i], tickets[k])` veces, porque en la última vuelta de `k` esa persona ya alcanzó a comprar.
- Si `i > k` (está detrás de `k`): pasa `min(tickets[i], tickets[k] - 1)` veces, porque en la vuelta final la fila ya no llega hasta ella — `k` compra su último boleto antes de que le toque el turno.

Sumando esas contribuciones para todo `i` se obtiene el tiempo total, sin simular ni un solo segundo de la fila real.

## Complejidad
Es **O(n)** en los tres lenguajes: un solo recorrido del arreglo, sumando el mínimo correspondiente para cada persona. Nada de simulación segundo a segundo, nada de estructuras auxiliares — solo aritmética.

**¿Cómo lo mejorarías?** Prueba una versión que use `reduce` en TypeScript, LINQ `Sum(...)` en C#, y `iter().sum()` en Rust, para expresar la misma fórmula sin bucles explícitos.
