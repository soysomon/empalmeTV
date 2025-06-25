import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/forgot-password/forgot-password', { email });
      setMessage('Se ha enviado un enlace de recuperación a tu correo.');
    } catch (err) {
      setMessage('Error al enviar la solicitud. Intenta de nuevo.');
    }
  };

  return (
    <div className="container mx-auto p-4 flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Recuperar Contraseña</h2>
        {message && <p className="text-green-500 mb-4">{message}</p>}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Enviar</button>
        <button onClick={() => navigate('/login')} className="mt-2 text-blue-500 underline">Volver al Login</button>
      </form>
    </div>
  );
};

export default ForgotPassword;