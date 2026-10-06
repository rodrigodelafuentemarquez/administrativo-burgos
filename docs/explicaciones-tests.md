# Explicaciones de preguntas tipo test

## Función preparada el 6 de octubre de 2026

La corrección muestra la explicación de las preguntas incorrectas y sin responder.
Se conservan las explicaciones en fallos y dudosas. Al abrir esos repasos, se intenta
actualizar la explicación desde el banco por ID, conservando el orden guardado de
opciones y el progreso. Solo se actualiza si coinciden enunciado, opciones y respuesta
correcta; si no hay conexión se utiliza el texto guardado.

## Regla para preguntas nuevas y revisión del banco

Cada pregunta nueva debe incluir `explicacion`, texto plano sin HTML. El campo heredado
`explicación` sigue siendo compatible. En arrays, el cuarto elemento es la explicación.
Escribir normalmente 2–4 frases (orientación: 40–90 palabras, no una cuota rígida):
explicar el fundamento de la respuesta y el matiz que distingue las opciones equivocadas.
Citar norma y artículo cuando sea pertinente, verificándolos en fuentes oficiales vigentes.
En informática utilizar documentación oficial del producto cuando la respuesta dependa
de versiones. No inventar referencias ni sustituir el razonamiento por «es la correcta».

Editar siempre `data/tests`, nunca solo la copia pública. Conservar IDs, etiquetas,
orden de opciones y respuesta correcta salvo error demostrado y documentado.
Revisar también textos existentes demasiado breves o genéricos. Si una pregunta es
ambigua o está desactualizada, corregirla con fuente y dejar constancia.

## Revisión automática por grupos

Inventario inicial real: 1.808 preguntas en 42 temas. Todas contienen algún texto;
esto no implica que sus explicaciones estén revisadas.

| Grupo | Temas internos | Preguntas iniciales | Estado |
| --- | --- | ---: | --- |
| I | 1–9 | 444 | Pendiente |
| II | 10–21 | 514 | Pendiente |
| III | 22–26 | 218 | Pendiente |
| IV | 27–31 | 165 | Pendiente |
| V | 32–42 | 467 | Pendiente |

La automatización vuelve a este chat cada 30 minutos y consulta el límite real de
Codex de 300 minutos. No hay un disparador nativo por reinicio del límite. El control
periódico puede empezar algo después del reinicio y requiere ordenador encendido y
Codex abierto. No utiliza los créditos de reinicio ni cambia el plan.

El archivo `estado-explicaciones-tests.json` registra el reinicio esperado, la ventana
ya atendida, el grupo actual, las preguntas revisadas y las fuentes. No comenzar antes
del primer reinicio registrado ni revisar más de un grupo por ventana. Procesar I,
II, III, IV y V. Si una ejecución se interrumpe, reanudar el grupo pendiente en la
siguiente ventana antes de avanzar. No marcar un grupo completado hasta revisar todas
sus preguntas, validar datos y completar el build. No recuperar varios grupos de golpe
si el ordenador estuvo apagado. Tras cerrar los cinco grupos, desactivar la automatización.

En cada bloque: revisar el programa correspondiente, verificar fuentes, editar las
explicaciones, registrar IDs revisados y fuentes, ejecutar `npm run prepare:data`,
validar JSON, IDs únicos, opciones y respuesta correcta, ejecutar `npm run build` y
`git diff --check`. Respetar cambios ajenos y publicar solo archivos de este trabajo
siguiendo el flujo documentado del repositorio. Avisar al completar un grupo, al terminar
todo o si se requiere una decisión; permanecer en silencio cuando no haya trabajo nuevo.
