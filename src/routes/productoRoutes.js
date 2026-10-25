const express = require('express');
const router = express.Router();
const {
  getAllProductos,
  getAllProductosEliminados,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto,
  actualizarStockMultiple,
  getProductosByCategoria,
  getProductosBajoStock
} = require('../controllers/productoController');

router.get('/', getAllProductos);
router.get('/eliminados', getAllProductosEliminados);
router.post('/', createProducto);
router.put('/actualizar-stock', actualizarStockMultiple);
router.get('/categoria/:categoria', getProductosByCategoria);
router.get('/bajo-stock/:cantidad', getProductosBajoStock);
router.get('/:id', getProductoById);
router.put('/:id', updateProducto);
router.delete('/:id', deleteProducto);

module.exports = router;