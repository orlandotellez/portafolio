---
titulo: "Revelar Cartas en Orden Creciente"
resumen: "Simulación inversa de una cola con un truco de índices para reconstruir el orden original del mazo. Resuelto en TypeScript, C# y Rust."
lenguajes: ["TypeScript", "C#", "Rust"]
dificultad: "Intermedio"
fecha: "2026-08-07"
tags: ["colas", "simulación", "ordenamiento"]
---

## Enunciado
Se te da un arreglo de enteros `deck`. Hay un mazo de cartas donde cada carta tiene un entero único. El entero de la carta `i` es `deck[i]`. Puedes ordenar el mazo como quieras. Inicialmente, todas las cartas están boca abajo (sin revelar) en un solo mazo.

Repetirás los siguientes pasos hasta que todas las cartas estén reveladas:

1. Toma la carta superior del mazo, revélala y sácala del mazo.
2. Si aún quedan cartas en el mazo, coloca la nueva carta superior al final del mazo.
3. Si todavía hay cartas sin revelar, vuelve al paso 1. Si no, detente.

Devuelve un orden del mazo que revele las cartas en orden creciente. Ten en cuenta que la primera entrada de la respuesta se considera la parte superior del mazo.

**Ejemplo 1:**
```
Entrada: deck = [17,13,11,2,3,5,7]
Salida: [2,13,3,11,5,17,7]
Explicación: Tomamos el mazo en el orden [17,13,11,2,3,5,7] (este orden no importa) y lo reordenamos.
Después de reordenar, el mazo comienza como [2,13,3,11,5,17,7], donde 2 es la parte superior.
Revelamos 2, y movemos 13 al fondo. El mazo queda [3,11,5,17,7,13].
Revelamos 3, y movemos 11 al fondo. El mazo queda [5,17,7,13,11].
Revelamos 5, y movemos 17 al fondo. El mazo queda [7,13,11,17].
Revelamos 7, y movemos 13 al fondo. El mazo queda [11,17,13].
Revelamos 11, y movemos 17 al fondo. El mazo queda [13,17].
```

## La idea central
La clave es darse la vuelta al problema: en vez de pensar en *qué carta poner en cada posición*, simulamos el **proceso de revelar/mover con índices vacíos** en lugar de cartas reales.

1. Ordenamos `deck` de menor a mayor — así sabemos que la primera carta revelada será la más pequeña, la segunda la siguiente, etc.
2. Creamos una cola con los índices `0, 1, 2, ..., n-1` (las posiciones del mazo resultante).
3. Simulamos el proceso original usando **solo índices**: sacamos un índice de la cola y lo marcamos como "el próximo lugar donde va la siguiente carta más pequeña"; si quedan índices, movemos el siguiente al fondo de la cola.
4. Como la simulación con índices sigue exactamente la misma mecánica que el problema real, el índice que se revela en el paso `i` es la posición donde debe ir la carta con el `i`-ésimo valor más pequeño.

Así, en una sola pasada con una cola (`deque`), reconstruimos el orden exacto que produce la secuencia creciente deseada, sin necesidad de probar órdenes ni retroceder.

## Complejidad
Es **O(n log n)** en los tres lenguajes, dominado por el ordenamiento inicial del arreglo `deck`; la simulación con la cola es O(n). El uso de una estructura de **doble cola** (`Deque` en Rust y C#, o un arreglo simulando cola en TypeScript) es lo que permite que el paso de "mover al fondo" sea O(1) en lugar de O(n).

**¿Cómo lo mejorarías?** Intenta visualizar el proceso con un array circular y punteros en vez de una cola real — puede ahorrar la sobrecarga de las estructuras de cola en Rust y C#, aunque a costa de claridad en el código.
