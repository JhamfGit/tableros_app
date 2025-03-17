import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeBoard, setActiveBoard] = useState(null);
  const [username, setUsername] = useState('');
  
  const handleLogin = (user, password) => {
    // Aquí implementarías la lógica real de autenticación
    // Este es solo un ejemplo simplificado
    if (user && password) {
      setIsLoggedIn(true);
      setUsername(user);
    }
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setActiveBoard(null);
  };
  
  const selectBoard = (boardId) => {
    setActiveBoard(boardId);
  };

  return (
    <div className="app-container">
      <Header 
        isLoggedIn={isLoggedIn} 
        username={username}
        onLogin={handleLogin} 
        onLogout={handleLogout} 
      />
      <div className="content-container">
        <Sidebar 
          isLoggedIn={isLoggedIn} 
          onSelectBoard={selectBoard} 
        />
        <MainPanel 
          activeBoard={activeBoard} 
          isLoggedIn={isLoggedIn} 
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
