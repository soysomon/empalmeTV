const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const youtubeRoutes = require('./routes/youtubeRoutes');
const forgotPasswordRoutes = require('./routes/forgotPasswordRoutes');
const auth = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
require('dotenv').config();

// Configuración de CORS más robusta
const corsOptions = {
  origin: [
    'http://localhost:5173', 
    'http://localhost:3000', 
    'http://localhost:4173', 
    'https://empalme-tv.vercel.app',  // Tu frontend en Vercel
    'https://empalme-tv.vercel.app/', // Con slash final también
    process.env.FRONTEND_URL 
  ].filter(Boolean), 
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ 
    message: 'API de Empalme TV funcionando correctamente',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
    allowedOrigins: corsOptions.origin
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/youtube', youtubeRoutes); 
app.use('/api/forgot-password', forgotPasswordRoutes);

app.use(errorHandler);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/empalmetv')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error conectando a MongoDB:', err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`🌍 Entorno: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 Orígenes permitidos:`, corsOptions.origin);
});