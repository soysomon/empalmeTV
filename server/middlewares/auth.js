const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'X7k9pLm2qRw4vTy8uZa3jBc5nXd6yHo1'; // Usa la clave generada

const auth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = auth;