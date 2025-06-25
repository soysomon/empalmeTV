const express = require('express');
const router = express.Router();
const User = require('../models/User');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const resetToken = require('../middlewares/resetToken');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'tuemail@gmail.com',
    pass: process.env.EMAIL_PASS || 'tuapppassword', // Contraseña de aplicación de Google
  },
});

const sendResetEmail = (email, token) => {
  const resetLink = `http://localhost:5173/reset-password?token=${token}`; // Cambia a tu dominio en producción
  const mailOptions = {
    from: process.env.EMAIL_USER || 'tuemail@gmail.com',
    to: email,
    subject: 'Recuperación de Contraseña - EMPALME TV',
    text: `Haz clic aquí para restablecer tu contraseña: ${resetLink}\nEl enlace expira en 1 hora.`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) console.error('Error enviando email:', error);
  });
};

router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ username: email }); // Ajusta si usas email como username
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    const token = crypto.randomBytes(32).toString('hex');
    await User.updateOne({ _id: user._id }, { resetToken: token, resetExpires: Date.now() + 3600000 });
    sendResetEmail(email, token);
    res.json({ message: 'Se ha enviado un enlace de recuperación a tu correo' });
  } catch (error) {
    res.status(500).json({ message: 'Error al procesar la solicitud', error });
  }
});

router.post('/reset-password', resetToken, async (req, res) => {
  const { newPassword } = req.body;
  try {
    req.user.password = await bcrypt.hash(newPassword, 10);
    req.user.resetToken = null;
    req.user.resetExpires = null;
    await req.user.save();
    res.json({ message: 'Contraseña actualizada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al restablecer la contraseña', error });
  }
});

module.exports = router;