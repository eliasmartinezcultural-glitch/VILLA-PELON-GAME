# ARCHITECTURE — PEQUEÑO CHAÑAR V0.1

## Principio

Estructura fuerte por debajo, experiencia simple por arriba.

## Capas

- DATA: descubrimientos y escenas.
- STATE: progreso y configuración.
- GAME: reglas de interacción.
- UI: portada, HUD, overlays.
- AUDIO: sonidos generados sin archivos pesados en el prototipo.
- STORAGE: localStorage.
- STYLE: CSS responsive.

## Decisión V0.1

Se usa HTML + CSS + JavaScript vanilla.

No hay frameworks.

No hay backend.

No hay base de datos.

No hay dependencia externa.

## Futuro

La estructura permitirá separar:
- escenas;
- assets;
- audio;
- datos históricos;
- componentes de interfaz;
- accesibilidad.

## Regla de cambios

No parchear síntomas. Corregir causa, probar y congelar.
