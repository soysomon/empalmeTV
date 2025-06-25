import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useApi } from '../../hooks/useApi';

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const { getApiUrl } = useApi();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(getApiUrl('/auth/login'), credentials);
      login(response.data.token);
      navigate('/admin');
    } catch (err) {
      setError('Credenciales incorrectas. Intenta de nuevo.');
    } finally {
      setIsLoading(false);
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
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          .login-container {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: #ffffff;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
          }

          .login-container::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, 
              rgba(99, 102, 241, 0.05) 0%, 
              rgba(168, 85, 247, 0.05) 25%, 
              rgba(236, 72, 153, 0.05) 50%, 
              rgba(59, 130, 246, 0.05) 75%, 
              rgba(99, 102, 241, 0.05) 100%);
            animation: gradientShift 15s ease infinite;
            z-index: 0;
          }

          .main-content, .admin-panel {
            position: relative;
            z-index: 1;
            width: 100%;
            max-width: 420px;
            padding: 48px 40px;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 24px;
            box-shadow: 
              0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
            animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .main-content {
            display: ${showAdminPanel ? 'none' : 'block'};
          }

          .admin-panel {
            display: ${showAdminPanel ? 'block' : 'none'};
          }

          .back-button {
            position: absolute;
            top: 24px;
            left: 24px;
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid rgba(0, 0, 0, 0.08);
            border-radius: 12px;
            width: 44px;
            height: 44px;
            color: #374151;
            cursor: pointer;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            display: ${showAdminPanel ? 'flex' : 'none'};
            align-items: center;
            justify-content: center;
            font-size: 18px;
            font-weight: 500;
            z-index: 2;
          }

          .back-button:hover {
            background: rgba(255, 255, 255, 1);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }

          .brand-section {
            text-align: center;
            margin-bottom: 40px;
          }

          .brand-icon {
            width: 64px;
            height: 64px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 16px;
            margin: 0 auto 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            font-weight: 700;
            color: white;
            letter-spacing: -0.5px;
            animation: scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
          }

          .title {
            font-size: 28px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 8px;
            letter-spacing: -0.5px;
            animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
          }

          .subtitle {
            font-size: 16px;
            color: #6b7280;
            font-weight: 400;
            animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
          }

          .form-section {
            animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
          }

          .input-group {
            margin-bottom: 24px;
          }

          .input-label {
            display: block;
            font-size: 14px;
            font-weight: 500;
            color: #374151;
            margin-bottom: 8px;
          }

          .input-field {
            width: 100%;
            padding: 16px;
            border: 2px solid #e5e7eb;
            border-radius: 12px;
            font-size: 16px;
            color: #111827;
            background: #ffffff;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            font-family: inherit;
          }

          .input-field:focus {
            border-color: #667eea;
            outline: none;
            box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
            transform: translateY(-1px);
          }

          .input-field::placeholder {
            color: #9ca3af;
          }

          .login-button {
            width: 100%;
            padding: 16px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            margin-bottom: 20px;
          }

          .login-button:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 12px 24px rgba(102, 126, 234, 0.3);
          }

          .login-button:active:not(:disabled) {
            transform: translateY(0);
          }

          .login-button:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
          }

          .login-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
          }

          .login-button:hover::before {
            left: 100%;
          }

          .spinner {
            width: 20px;
            height: 20px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: #ffffff;
            animation: spin 1s ease-in-out infinite;
            margin-right: 8px;
            display: inline-block;
          }

          .forgot-password {
            display: block;
            text-align: center;
            color: #667eea;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            transition: color 0.2s ease;
            animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both;
          }

          .forgot-password:hover {
            color: #4f46e5;
          }

          .error-message {
            background: linear-gradient(135deg, #fee2e2, #fecaca);
            color: #dc2626;
            padding: 16px;
            border-radius: 12px;
            margin-bottom: 24px;
            text-align: center;
            font-size: 14px;
            font-weight: 500;
            border: 1px solid #fca5a5;
            animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .admin-toggle {
            position: fixed;
            bottom: 24px;
            right: 24px;
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid rgba(0, 0, 0, 0.08);
            border-radius: 12px;
            padding: 12px 16px;
            color: #6b7280;
            font-size: 14px;
            cursor: pointer;
            transition: all 0.2s ease;
            display: ${showAdminPanel ? 'none' : 'block'};
          }

          .admin-toggle:hover {
            background: rgba(255, 255, 255, 1);
            color: #374151;
            transform: translateY(-2px);
          }

          @keyframes gradientShift {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(180deg); }
          }

          @keyframes slideUp {
            from { 
              opacity: 0; 
              transform: translateY(30px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }

          @keyframes slideDown {
            from { 
              opacity: 0; 
              transform: translateY(-10px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }

          @keyframes fadeInUp {
            from { 
              opacity: 0; 
              transform: translateY(20px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }

          @keyframes scaleIn {
            from { 
              opacity: 0; 
              transform: scale(0.8); 
            }
            to { 
              opacity: 1; 
              transform: scale(1); 
            }
          }

          @keyframes spin {
            to { 
              transform: rotate(360deg); 
            }
          }

          @media (max-width: 480px) {
            .main-content, .admin-panel {
              margin: 20px;
              padding: 32px 24px;
              max-width: none;
            }
            
            .title {
              font-size: 24px;
            }
            
            .brand-icon {
              width: 56px;
              height: 56px;
              font-size: 20px;
            }
            
            .back-button {
              top: 16px;
              left: 16px;
              width: 40px;
              height: 40px;
              font-size: 16px;
            }

            .admin-toggle {
              bottom: 16px;
              right: 16px;
              font-size: 13px;
              padding: 10px 14px;
            }
          }
        `}
      </style>

      <div className="login-container">
        <button className="back-button" onClick={showLoginView}>
          ←
        </button>

        <div className="main-content">
          <div className="brand-section">
            <div className="brand-icon">E</div>
            <h1 className="title">Bienvenido</h1>
            <p className="subtitle">Accede a tu cuenta de Empalme</p>
          </div>

          <div className="form-section">
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label className="input-label">Usuario</label>
                <input
                  type="text"
                  placeholder="Ingresa tu usuario"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  className="input-field"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="input-group">
                <label className="input-label">Contraseña</label>
                <input
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="input-field"
                  required
                  disabled={isLoading}
                />
              </div>
              <button type="submit" className="login-button" disabled={isLoading}>
                {isLoading && <span className="spinner"></span>}
                {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
              </button>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/forgot-password'); }} className="forgot-password">
                ¿Olvidaste tu contraseña?
              </a>
            </form>
          </div>
        </div>

        <div className="admin-panel">
          <div className="brand-section">
            <div className="brand-icon">A</div>
            <h1 className="title">Panel de Admin</h1>
            <p className="subtitle">Acceso administrativo al sistema</p>
          </div>

          <div className="form-section">
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label className="input-label">Usuario Admin</label>
                <input
                  type="text"
                  placeholder="Ingresa tu usuario admin"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  className="input-field"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="input-group">
                <label className="input-label">Contraseña Admin</label>
                <input
                  type="password"
                  placeholder="Ingresa tu contraseña admin"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="input-field"
                  required
                  disabled={isLoading}
                />
              </div>
              <button type="submit" className="login-button" disabled={isLoading}>
                {isLoading && <span className="spinner"></span>}
                {isLoading ? 'Accediendo...' : 'Administrar Contenido'}
              </button>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/forgot-password'); }} className="forgot-password">
                ¿Olvidaste tu contraseña?
              </a>
            </form>
          </div>
        </div>

        <button className="admin-toggle" onClick={showAdminView}>
          Acceso Admin
        </button>
      </div>
    </>
  );
};

export default Login;