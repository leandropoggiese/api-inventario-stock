const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true },
  descripcion: { type: String, default: '' },
  precio: { type: Number, required: true, min: 0 },
  cantidad: { type: Number, required: true, min: 0 },
  categoria: { type: String, default: 'Sin categoría', trim: true },
  imagen: { type: String, default: '' },
  fechaIngreso: { type: Date, default: Date.now }
}, {
  timestamps: true
});

module.exports = mongoose.model('Producto', productoSchema);