import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return setMessage('Token no válido');
    try {
      await axios.post('http://localhost:5001/api/forgot-password/reset-password', { token, newPassword: password });
      setMessage('Contraseña actualizada. Redirigiendo al login...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setMessage('Error al restablecer la contraseña. Intenta de nuevo.');
    }
  };

  return (
    <div className="container mx-auto p-4 flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Nueva Contraseña</h2>
        {message && <p className={message.includes('Error') ? 'text-red-500' : 'text-green-500'}>{message}</p>}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Nueva Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Restablecer</button>
        <button onClick={() => navigate('/login')} className="mt-2 text-blue-500 underline">Volver al Login</button>
      </form>
    </div>
  );
};

export default ResetPassword;