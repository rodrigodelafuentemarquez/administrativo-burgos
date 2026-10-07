# Revisión de explicaciones: grupo II

Revisión completa realizada el 7 de octubre de 2026. Se han leído y revisado las 514 preguntas, opciones y claves de los temas 10–21. Las explicaciones específicas tienen entre 40 y 87 palabras, por lo general en 2–4 frases, con el fundamento normativo y el matiz que descarta los distractores. Se usa el campo canónico `explicacion`.

| Tema | Preguntas revisadas |
| --- | ---: |
| 10 | 51 |
| 11 | 37 |
| 12 | 53 |
| 13 | 61 |
| 14 | 38 |
| 15 | 34 |
| 16 | 73 |
| 17 | 35 |
| 18 | 30 |
| 19 | 33 |
| 20 | 32 |
| 21 | 37 |
| **Total** | **514** |

## Correcciones justificadas

Se conservan los IDs y el orden de las preguntas y opciones. Se corrigieron enunciados o distractores solo cuando la fuente vigente demostraba un error o ambigüedad. El detalle exacto anterior y posterior se conserva en `estado-explicaciones-tests.json`.

| ID | Motivo |
| --- | --- |
| `pdf-2025-burgos-q13` | El enunciado original admitía dos opciones correctas conforme al artículo 35.1.d e i LPAC. Se precisa la pregunta al supuesto de la letra d para conservar una única respuesta válida. |
| `pdf-2024-burgos-est-q08` | El enunciado amplio podía solaparse con más de una categoría del artículo 4.1. Se delimita expresamente el supuesto de la letra a para que haya una respuesta única. |
| `t17-p013` | La LPAC no establece que presentar un recurso ante cualquier órgano de la misma Administración preserve automáticamente la fecha. Se sustituye la pregunta por la regla expresa del artículo 121.2 sobre presentación y remisión de la alzada. |
| `t17-p017` | El artículo 117.3 fija un mes, no treinta días; se sustituye esa unidad por el plazo legal exacto. |
| `pdf-2023-burgos-q38` | El distractor citaba el artículo 29 para las causas del recurso extraordinario; la referencia correcta es el artículo 125.1 LPAC. |
| `jcyl-adm-2026-q019` | El artículo 3.1 incluye el control y evaluación de los resultados de las políticas públicas. Se precisa el distractor para distinguir la formulación legal del enunciado genérico original. |
| `t27-p009` | El plazo anual corresponde a bienes patrimoniales, no a bienes de dominio público, que pueden recuperarse en cualquier momento conforme al artículo 82.a LRBRL. Se cambia el supuesto y se precisa el cómputo de un año desde el día siguiente a la usurpación. |

## Fuentes oficiales por tema

### Tema 10

- [Texto oficial](<https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229>)
- [Texto oficial](<https://www.boe.es/buscar/act.php?id=BOE-A-1889-4763>)
- [Texto oficial](<https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565>)
- [Texto oficial](<https://www.boe.es/buscar/act.php?id=BOE-A-2007-20635>)

### Tema 11

- [Texto oficial](<https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565>)
- [Texto oficial](<https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229>)

### Tema 12

- [Texto oficial](<https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565>)

### Tema 13

- [Texto oficial](<https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565>)
- [Texto oficial](<https://www.boe.es/buscar/act.php?id=BOE-A-1998-16718>)
- [Texto oficial](<https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229>)

### Tema 14

- [Texto oficial](<https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566>)
- [Texto oficial](<https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392>)
- [Texto oficial](<https://www.boe.es/buscar/act.php?id=BOE-A-2001-14243>)

### Tema 15

- [Texto oficial](<https://www.boe.es/eli/es/l/2015/10/01/40/con>)
- [Texto oficial](<https://www.boe.es/eli/es/l/2015/10/01/39/con>)

### Tema 16

- [Texto oficial](<https://www.boe.es/eli/es/l/2017/11/08/9/con>)

### Tema 17

- [Texto oficial](<https://www.boe.es/eli/es/l/2015/10/01/39/con>)
- [Texto oficial](<https://www.boe.es/eli/es/l/2015/10/01/40/con>)

### Tema 18

- [Texto oficial](<https://www.boe.es/eli/es/l/1985/04/02/7/con>)
- [Texto oficial](<https://www.boe.es/eli/es/rd/1986/06/13/1372/con>)

### Tema 19

- [Texto oficial](<https://www.boe.es/eli/es/lo/1978/12/27/1/con>)
- [Texto oficial](<https://www.boe.es/eli/es/l/1985/04/02/7/con>)

### Tema 20

- [Texto oficial](<https://www.boe.es/eli/es/l/1985/04/02/7/con>)
- [Texto oficial](<https://www.boe.es/eli/es/rd/1986/11/28/2568/con>)

### Tema 21

- [Texto oficial](<https://www.boe.es/eli/es/l/1985/04/02/7/con>)

## Validación y publicación

Se comprobó el número de preguntas, la unicidad de IDs, la validez de las claves, que cada opción permanece presente, que cada explicación supera 40 palabras y que la copia pública coincide byte a byte con `data/tests`. `npm run build` y `git diff --check` finalizaron correctamente. El estado registra 514/514 IDs y las fuentes utilizadas.
