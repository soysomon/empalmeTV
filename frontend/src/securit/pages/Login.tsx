import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useApi } from '../../hooks/useApi';

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const { getApiUrl } = useApi();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(getApiUrl('/auth/login'), credentials);
      login(response.data.token);
      navigate('/admin');
    } catch (err) {
      setError('Credenciales incorrectas. Intenta de nuevo.');
    }
  };

  const showAdminView = () => {
    setShowAdminPanel(true);
  };

  const showLoginView = () => {
    setShowAdminPanel(false);
    setCredentials({ username: '', password: '' });
    setError('');
  };

  return (
    <>
      <style>
        {`
          .login-container {
            font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', sans-serif;
            background: #f5f5f7;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: relative;
          }

          .main-content {
            width: 100%;
            max-width: 400px;
            padding: 40px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            animation: fadeIn 0.5s ease-out;
            display: ${showAdminPanel ? 'none' : 'block'};
          }

          .admin-panel {
            width: 100%;
            max-width: 400px;
            padding: 40px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            animation: slideUp 0.5s ease-out;
            display: ${showAdminPanel ? 'block' : 'none'};
          }

          .logo {
            width: 100px;
            height: 100px;
            margin: 0 auto 30px;
            animation: scaleIn 0.5s ease-out;
          }

          .title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1d1d1f;
            text-align: center;
            margin-bottom: 20px;
            animation: fadeIn 0.5s ease-out 0.2s both;
          }

          .input-group {
            margin-bottom: 15px;
          }

          .input-field {
            width: 100%;
            padding: 12px;
            border: 2px solid #d2d2d7;
            border-radius: 8px;
            font-size: 14px;
            color: #1d1d1f;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
          }

          .input-field:focus {
            border-color: #0071e3;
            outline: none;
            box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.2);
          }

          .input-field::placeholder {
            color: #86868b;
          }

          .login-button {
            width: 100%;
            padding: 12px;
            background: #0071e3;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            transition: background 0.3s ease, transform 0.2s ease;
            animation: fadeIn 0.5s ease-out 0.4s both;
          }

          .login-button:hover {
            background: #005bb5;
            transform: translateY(-1px);
          }

          .login-button:disabled {
            background: #b0b0b4;
            cursor: not-allowed;
          }

          .back-button {
            position: absolute;
            top: 20px;
            left: 20px;
            background: rgba(255, 255, 255, 0.2);
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            color: #1d1d1f;
            cursor: pointer;
            transition: all 0.3s ease;
            display: ${showAdminPanel ? 'flex' : 'none'};
            align-items: center;
            justify-content: center;
            font-size: 18px;
          }

          .back-button:hover {
            background: #e8e8ea;
          }

          .forgot-password {
            display: block;
            text-align: center;
            color: #0066cc;
            text-decoration: none;
            font-size: 13px;
            margin-top: 10px;
            transition: color 0.3s ease;
            animation: fadeIn 0.5s ease-out 0.6s both;
          }

          .forgot-password:hover {
            color: #003087;
          }

          .error-message {
            background: #fff5f5;
            color: #dc3545;
            padding: 10px;
            border-radius: 8px;
            margin-bottom: 15px;
            text-align: center;
            animation: shake 0.5s ease-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes scaleIn {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }

          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
            100% { transform: translateX(0); }
          }

          @media (max-width: 480px) {
            .main-content, .admin-panel {
              padding: 20px;
              max-width: 90%;
            }
            .logo {
              width: 80px;
              height: 80px;
            }
            .title {
              font-size: 1.2rem;
            }
          }
        `}
      </style>

      <div className="login-container">
        <button className="back-button" onClick={showLoginView}>
          ←
        </button>

        <div className="main-content">
          <img src="../../img/logoempalmeTV.png" alt="Empalme Logo" className="logo" />
          <h2 className="title">Iniciar sesión en Empalme</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Usuario"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="input-field"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Contraseña"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="input-field"
                required
              />
            </div>
            <button type="submit" className="login-button">Iniciar Sesión</button>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/forgot-password'); }} className="forgot-password">
              ¿Olvidaste la contraseña?
            </a>
          </form>
        </div>

        <div className="admin-panel">
          <img src="../../img/logoempalmeTV.png" alt="Empalme Logo" className="logo" />
          <h2 className="title">Iniciar sesión como Administrador</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Usuario"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="input-field"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Contraseña"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="input-field"
                required
              />
            </div>
            <button type="submit" className="login-button">Administrar Contenido</button>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/forgot-password'); }} className="forgot-password">
              ¿Olvidaste la contraseña?
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;