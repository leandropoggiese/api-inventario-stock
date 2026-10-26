# API de Inventario de Stock

Desarrollada por: Leandro Torres

## Descripción

API REST para gestionar un inventario de productos. Permite crear, consultar, actualizar y eliminar productos, además de filtrarlos por categoría o por nivel de stock y actualizar el stock de varios productos en una sola solicitud.

## Funcionalidades

- Registrar productos con nombre, descripción, precio, cantidad, categoría e imagen.
- Listar todos los productos y consultar uno por su ID.
- Actualizar o eliminar un producto por su ID.
- Filtrar productos por categoría (coincidencia parcial, sin distinguir mayúsculas).
- Consultar productos cuyo stock sea menor que un límite indicado.
- Actualizar el stock de varios productos en una sola solicitud.
- Consultar el estado de la API desde la ruta raíz.

## Tecnologías

- Node.js y Express
- MongoDB y Mongoose
- dotenv
- cors

## Requisitos

- Node.js y npm
- MongoDB local o accesible mediante una URI de conexión

## Instalación y configuración

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Opcionalmente, crea un archivo `.env` en la raíz del proyecto:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://127.0.0.1:27017/inventario-stock
   ```

   `PORT` es opcional y toma `3000` por defecto. `MONGODB_URI` también es opcional: si no se define, la API usa la URI local indicada arriba.

## Ejecución

Iniciar en modo desarrollo, con reinicio automático:

```bash
npm run dev
```

Iniciar normalmente:

```bash
npm start
```

La API espera a conectarse a MongoDB antes de iniciar el servidor. Si la conexión falla, el proceso termina.

## Endpoints

La URL base local es `http://localhost:3000`.

| Método | Ruta | Descripción |
| --- | --- | --- |
| GET | `/` | Comprueba que la API está en funcionamiento y devuelve rutas principales. |
| GET | `/api/productos` | Lista todos los productos, ordenados por fecha de ingreso descendente. |
| POST | `/api/productos` | Crea un producto. Requiere `nombre`, `precio` y `cantidad`. |
| GET | `/api/productos/:id` | Obtiene un producto por su ID. |
| PUT | `/api/productos/:id` | Actualiza un producto por su ID. |
| DELETE | `/api/productos/:id` | Elimina permanentemente un producto por su ID. |
| GET | `/api/productos/categoria/:categoria` | Filtra por coincidencia parcial de categoría, sin distinguir mayúsculas. |
| GET | `/api/productos/bajo-stock/:cantidad` | Devuelve productos con cantidad estrictamente menor que el límite. |
| PUT | `/api/productos/actualizar-stock` | Actualiza la cantidad de varios productos. |

### Ejemplos de solicitudes

Crear un producto (`Content-Type: application/json`):

```json
{
  "nombre": "galleta de arroz",
  "descripcion": "galleta sin tacc de arroz sin sal",
  "precio": 2000,
  "cantidad": 12,
  "categoria": "galletas",
  "imagen": "https://ejemplo.com/galleta.jpg"
}
```

Actualizar el stock de varios productos:

```json
{
  "productos": [
    { "id": "ID_DEL_PRODUCTO_1", "cantidad": 20 },
    { "id": "ID_DEL_PRODUCTO_2", "cantidad": 8 }
  ]
}
```

La categoría predeterminada es `Sin categoría`; la descripción y la imagen son opcionales. El precio y la cantidad deben ser números no negativos.

## Integración local y CORS

Las solicitudes desde estos orígenes locales están permitidas: `http://localhost:3000`, `http://localhost:3001`, `http://localhost:5173` y `http://localhost:5174`. Se admiten los métodos `GET`, `POST`, `PUT` y `DELETE`.

El cuerpo de las solicitudes JSON y de formularios se procesa con un límite de 10 MB.

## Autor

Leandro Torres
