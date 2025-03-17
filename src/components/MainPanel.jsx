import React from 'react';
import '../MainPanel.css';

const MainPanel = ({ activeBoard, isLoggedIn }) => {
  return (
    <main className="main-panel">
      {!isLoggedIn ? (
        <div className="welcome-message">
          <h2>Bienvenido al Sistema de Tableros Power BI</h2>
          <p>Inicie sesión para ver los tableros disponibles.</p>
        </div>
      ) : !activeBoard ? (
        <div className="select-board-message">
          <h2>Seleccione un tablero del menú lateral</h2>
        </div>
      ) : (
        <div className="dashboard-container">
          <h2>{activeBoard.name}</h2>
          <iframe
            title={activeBoard.name}
            src={activeBoard.url}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </main>
  );
};

export default MainPanel;