# Proyecto de Aplicación de Meetup

Este proyecto es una aplicación de Meetup basada en React que permite a los usuarios ver una lista de meetups, añadir nuevos meetups y marcar meetups como favoritos. El proyecto se encontraba en un estado inicial y he completado las siguientes funcionalidades y requisitos adicionales.

Enunciado de los ejercicios:

https://we.tl/t-x3fhPahuSR

## Funcionalidades Implementadas

### Ejercicio 1: Revisión y Mejora del Pseudocódigo

1. Identificación de problemas en el pseudocódigo proporcionado.
2. Propuesta de una solución alternativa en pseudocódigo.

Para más detalles sobre el ejercicio 1, consulta [Ejercicio1.js](Ejercicio1.js).

### Ejercicio 2: Desarrollo de la Aplicación de Meetup

1. **Pantalla Inicial**: Muestra todos los meetups disponibles, tanto los iniciales como los nuevos añadidos por el usuario.
2. **Formulario para Añadir Nuevos Meetups**: Permite a los usuarios añadir nuevos meetups a la lista.
3. **Pantalla de Favoritos**: Muestra todos los meetups marcados como favoritos por el usuario.
4. **Navegación**: Implementación de navegación reflejada en la URL para mejorar el SEO.
5. **Animación del Header**: El header se oculta al hacer scroll hacia abajo y vuelve a aparecer al hacer scroll hacia arriba.
6. **Funcionalidad de Favoritos**: Implementación de la lógica para añadir y quitar meetups de la lista de favoritos.
7. **Tests**: Añadido de pruebas unitarias para los componentes.

## Configuración del Proyecto

### Requisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

### Instalación

1. Clona el repositorio:
   ```sh
   git clone git@github.com:alvarogarciaabasolo/React-Meetups.git
   cd React-Meetups
   ```
2. Instala las dependencias:

```sh
npm install
```

### Ejecución

#### Para iniciar la aplicación en modo desarrollo, ejecuta:

```sh
npm start
```

La aplicación estará disponible en http://localhost:3000.

#### Construye la aplicación para producción:

```sh
npm run build
```

### Scripts Disponibles

- `start`: Inicia la aplicación en modo desarrollo.
- `build`: Construye la aplicación para producción.
- `test`: Ejecuta las pruebas unitarias usando Jest.

## Funcionalidades Adicionales

### Añadir Nuevo Meetup:

- El formulario para añadir meetups incluye campos para el título, imagen, dirección y descripción.
- La imagen por defecto se establece si el usuario no proporciona una.

## Pruebas

Se han añadido pruebas básicas para los componentes `NewMeetupForm` y `MeetupItem` utilizando Jest y Enzyme.

Para ejecutar las pruebas, usa:

```bash
npm test
```

## Autor

Álvaro García Abásolo García Orta
