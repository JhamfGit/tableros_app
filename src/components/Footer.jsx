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
        <a href="/contacto">Contacto</a>
        <a href="/ayuda">Ayuda</a>
        <a href="/terminos">Términos y Condiciones</a>
      </div>
    </footer>
  );
};

export default Footer;