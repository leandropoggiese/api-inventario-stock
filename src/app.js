require('dotenv').config();
const express = require('express');
const cors = require('cors');
const corsOptions = require('./config/corsConfig');

const connectDB = require('./config/db');
const productoRoutes = require('./routes/productoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.get('/', (req, res) => {
  res.json({
    message: 'API de inventario de stock funcionando',
    endpoints: {
      productos: '/api/productos',
      categoria: '/api/productos/categoria/:categoria',
      bajoStock: '/api/productos/bajo-stock/:cantidad',
      actualizarStock: 'PUT /api/productos/actualizar-stock'
    }
  });
});

app.use('/api/productos', productoRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});