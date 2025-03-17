import React, { useState } from 'react';
import '../Header.css';
import logo from '../assets/logo.png';

const Header = ({ isLoggedIn, username, onLogin, onLogout }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(user, password);
    setPassword('');
  };
  
  return (
    <header className="app-header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="app-logo" />
        <h1>Tableros Clientes</h1>
      </div>
      
      {!isLoggedIn ? (
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuario"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Iniciar Sesión</button>
        </form>
      ) : (
        <div className="user-info">
          <span>Bienvenido, {username}</span>
          <button onClick={onLogout}>Cerrar Sesión</button>
        </div>
      )}
    </header>
  );
};

export default Header;