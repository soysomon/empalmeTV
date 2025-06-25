const jwt = require('jsonwebtoken');
const User = require('../models/User');
const secret = process.env.JWT_SECRET || 'X7k9pLm2qRw4vTy8uZa3jBc5nXd6yHo1';

const resetToken = async (req, res, next) => {
  const { token } = req.query;
  if (!token) return res.status(400).json({ message: 'Token no proporcionado' });

  try {
    const decoded = jwt.verify(token, secret);
    const user = await User.findOne({ _id: decoded.id, resetToken: token, resetExpires: { $gt: Date.now() } });
    if (!user) return res.status(400).json({ message: 'Token inválido o expirado' });
    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Token inválido o expirado' });
  }
};

module.exports = resetToken;