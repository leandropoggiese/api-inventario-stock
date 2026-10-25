const Producto = require('../models/producto');

const getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.find().sort({ fechaIngreso: -1 });
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos', error: error.message });
  }
};

const getAllProductosEliminados = async (req, res) => {
  try {
    const { id } = req.params;


    const productoEliminado = await Producto.findByIdAndUpdate(
      id,
      { eliminado: true },
      { new: true }
    );

    if (!productoEliminado) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.status(200).json({ message: 'Producto eliminado correctamente', producto: productoEliminado });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el producto', error: error.message });
  }
};

const getProductoById = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);

    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener producto', error: error.message });
  }
};

const createProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, cantidad, categoria, imagen } = req.body;

    if (!nombre || precio === undefined || cantidad === undefined) {
      return res.status(400).json({
        message: 'Los campos nombre, precio y cantidad son obligatorios'
      });
    }

    const nuevoProducto = new Producto({
      nombre,
      descripcion,
      precio,
      cantidad,
      categoria,
      imagen
    });

    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear producto', error: error.message });
  }
};

const updateProducto = async (req, res) => {
  try {
    const productoActualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!productoActualizado) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.status(200).json(productoActualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar producto', error: error.message });
  }
};

const deleteProducto = async (req, res) => {
  try {
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id);

    if (!productoEliminado) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.status(200).json(productoEliminado);
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar producto', error: error.message });
  }
};

const actualizarStockMultiple = async (req, res) => {
  try {
    const { productos } = req.body;

    if (!Array.isArray(productos) || productos.length === 0) {
      return res.status(400).json({
        message: 'Debes enviar un array de productos con id y cantidad.'
      });
    }

    const updates = await Promise.all(
      productos.map(async ({ id, cantidad }) => {
        if (!id || cantidad === undefined) {
          throw new Error('Cada producto debe incluir id y cantidad');
        }

        const producto = await Producto.findByIdAndUpdate(
          id,
          { cantidad },
          { new: true, runValidators: true }
        );

        if (!producto) {
          throw new Error(`Producto con id ${id} no encontrado`);
        }

        return producto;
      })
    );

    res.status(200).json({
      message: 'Stock actualizado correctamente',
      productos: updates
    });
  } catch (error) {
    res.status(400).json({ message: error.message || 'Error al actualizar el stock' });
  }
};

const getProductosByCategoria = async (req, res) => {
  try {
    const { categoria } = req.params;
    const productos = await Producto.find({ categoria: new RegExp(categoria, 'i') });

    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al filtrar por categoría', error: error.message });
  }
};

const getProductosBajoStock = async (req, res) => {
  try {
    const { cantidad } = req.params;
    const limite = Number(cantidad);

    if (Number.isNaN(limite)) {
      return res.status(400).json({ message: 'La cantidad debe ser un número válido' });
    }

    const productos = await Producto.find({ cantidad: { $lt: limite } });

    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos con bajo stock', error: error.message });
  }
};

module.exports = {
  getAllProductos,
  getAllProductosEliminados,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto,
  actualizarStockMultiple,
  getProductosByCategoria,
  getProductosBajoStock
};