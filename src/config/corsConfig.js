const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:5173', // (por si acaso)
    'http://localhost:3001'  // Por si React/Vite usa el 3001
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

module.exports = corsOptions;