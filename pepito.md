# One Code: JavaScript Playground

## ¿Cómo funciona One Code?

One Code es un moderno playground de JavaScript diseñado para facilitar la escritura, ejecución y compartición de código JavaScript de manera sencilla e intuitiva. A continuación, se explica cómo funciona la aplicación:

### Componentes principales

#### Editor de código
- Utiliza Monaco Editor (el mismo motor que VS Code) para proporcionar una experiencia de edición profesional
- Soporta sintaxis JavaScript/TypeScript con resaltado de código
- Incluye funciones como autocompletado, formato de código y numeración de líneas
- El código escrito se guarda automáticamente en el almacenamiento local del navegador

#### Consola JavaScript
- Muestra los resultados de la ejecución del código en tiempo real
- Captura todos los mensajes de `console.log`, `console.error` y otros métodos de la consola
- Proporciona retroalimentación inmediata sobre errores y resultados

#### Barra de navegación
- Ofrece controles para ejecutar el código (`Run code`)
- Permite compartir el código mediante URL
- Incluye opciones para limpiar el editor
- Proporciona configuraciones como ejecución automática, guardado en URL y visualización de números de línea
- Permite ajustar el tamaño de la fuente

### Características principales

1. **Ejecución de código**: El código JavaScript se ejecuta en un entorno seguro y aislado dentro del navegador.

2. **Ejecución automática**: Opción para ejecutar el código automáticamente mientras escribes (con un pequeño retraso para evitar ejecuciones constantes).

3. **Compartir código**: Genera URLs que contienen el código codificado, permitiendo compartir fácilmente tus ejemplos con otros.

4. **Almacenamiento local**: Guarda automáticamente tu código en el almacenamiento local del navegador para que no pierdas tu trabajo.

5. **Versión de escritorio**: Disponible como aplicación de escritorio para Windows gracias a Tauri, que proporciona una experiencia nativa.

6. **Soporte para ES6+**: Compatible con características modernas de JavaScript.

7. **Formato de código**: Integración con Prettier para formatear automáticamente el código.

8. **Interfaz personalizable**: Permite ajustar el tamaño de los paneles, mostrar/ocultar números de línea y cambiar el tamaño de la fuente.

9. **Soporte para TypeScript**: Permite escribir y ejecutar código TypeScript.

10. **Fetch API**: Incluye soporte para realizar peticiones HTTP mediante la API fetch.

### Tecnologías utilizadas

One Code está construido con tecnologías modernas como:
- React para la interfaz de usuario
- TypeScript para tipado estático
- Monaco Editor para la edición de código
- Tailwind CSS para el diseño
- Vite como bundler y servidor de desarrollo
- Tauri para la versión de escritorio

### Cómo empezar

1. Escribe tu código JavaScript en el editor
2. Presiona el botón de reproducción o utiliza la ejecución automática
3. Observa los resultados en la consola
4. Comparte tu código utilizando la función de compartir

One Code es perfecto para experimentar con JavaScript, crear ejemplos de código, probar ideas o enseñar conceptos de programación de manera rápida y sencilla.