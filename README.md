# API de Inventario de Stock

Desarrollada por: Leandro Torres

## Descripción
Esta API fue creada como entrega del módulo de Node.js para gestionar un inventario de productos. Permite registrar, consultar, actualizar y eliminar productos, además de consultar stock y categorías.

La idea del proyecto es facilitar el control de un almacén o negocio, manteniendo la información de los productos de forma ordenada y accesible a través de endpoints HTTP.

## Funcionalidades
- Registrar nuevos productos
- Ver todos los productos
- Buscar un producto por su ID
- Actualizar información de un producto
- Eliminar productos
- Filtrar productos por categoría
- Consultar productos con bajo stock
- Actualizar stock de varios productos a la vez

## Tecnologías utilizadas
- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- cors

## Requisitos
- Node.js instalado
- MongoDB en funcionamiento
- Archivo .env configurado con la conexión a la base de datos

## Instalación
1. Clonar o descargar el proyecto
2. Abrir la carpeta del proyecto en la terminal
3. Ejecutar:

```bash
npm install
```

4. Crear un archivo `.env` con la configuración de la base de datos, por ejemplo:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/inventario
```

## Ejecución
Para iniciar la API en modo desarrollo:

```bash
npm run dev
```

Para iniciar la API en modo producción:

```bash
npm start
```

## Endpoints principales
- GET `/api/productos` → lista todos los productos
- POST `/api/productos` → crea un producto
- GET `/api/productos/:id` → obtiene un producto por ID
- PUT `/api/productos/:id` → actualiza un producto
- DELETE `/api/productos/:id` → elimina un producto
- GET `/api/productos/categoria/:categoria` → filtra por categoría
- GET `/api/productos/bajo-stock/:cantidad` → muestra productos con stock bajo
- PUT `/api/productos/actualizar-stock` → actualiza el stock de varios productos

## Observación
Este proyecto fue desarrollado como práctica de backend con Node.js, con enfoque en la gestión de inventario y la conexión con una base de datos NoSQL. Es una solución simple, funcional y fácil de entender, pensada para una entrega académica del módulo.

## Autor
Leandro Torres
