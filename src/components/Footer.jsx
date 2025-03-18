import React from 'react';
import '../Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="app-footer">
      <div>
        <p>© {currentYear} Jhamf Group. Todos los derechos reservados.</p>
        <p>Sistema de visualización de tableros Power BI</p>
      </div>
      <div className="footer-links">
        <a href="https://jhamfgroup.net/">Contactanos</a>
      </div>
    </footer>
  );
};

export default Footer;