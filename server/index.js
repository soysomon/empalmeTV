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

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/youtube', youtubeRoutes); 
app.use('/api/forgot-password', forgotPasswordRoutes);

app.use(errorHandler); // Manejo global de errores

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/empalmetv')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error conectando a MongoDB:', err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));