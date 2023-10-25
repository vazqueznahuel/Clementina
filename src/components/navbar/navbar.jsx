import React from 'react';
import imagen1 from '../../Imagenes/imagen1.jpeg';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/"><img src="/"/>Foto usuario</a>
        </li>
        <li className="nav-item">
          <a href="/">Nombre usuario</a>
        </li>
        <li className="nav-item">
          <a href="/menú hamburguesa"><img src={imagen1}/></a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;