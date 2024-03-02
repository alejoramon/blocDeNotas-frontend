# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

MyNoteApp es una aplicación web para tomar notas de manera fácil y rápida.

Pasos para arrancar el proyecto

    Clona este repositorio en tu máquina local:
    Instala las dependencias del proyecto:
    Arranca el servidor local:
    La aplicación estará disponible en http://localhost:4000.

Endpoints de la API
Autenticación

    POST /login: Autenticación de usuarios. Requiere credenciales de usuario y devuelve un token de acceso.
    POST /register: Registro de nuevos usuarios. Requiere nombre de usuario, correo electrónico y contraseña.

Notas

    GET /notas: Obtiene todas las notas disponibles.
    GET /notas/:id: Obtiene una nota específica por su ID.
    POST /notas: Crea una nueva nota.
    PUT /notas/:id: Actualiza una nota existente por su ID.
    DELETE /notas/:id: Elimina una nota por su ID.

Categorías

    GET /categories: Obtiene todas las categorías disponibles.