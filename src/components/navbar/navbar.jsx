import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/">Inicio</a>
        </li>
        <li className="nav-item">
          <a href="/acerca-de">Acerca de</a>
        </li>
        <li className="nav-item">
          <a href="/contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;