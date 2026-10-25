const mongoose = require('mongoose');

//funcion para conectar a  mongoDB
const dbconnect = async () => {
    try {
        const dbURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/inventario-stock';
        await mongoose.connect(dbURI);
        console.log('Conexión exitosa a MongoDB Atlas');
    } catch (err) {
        console.error('Error en la conexión a la base de datos', err.message);
        process.exit(1); //detener la aplicacion si falla la conexión

        }
    }
    module.exports = dbconnect;


