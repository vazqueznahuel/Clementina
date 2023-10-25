import React from 'react';
import imagen1 from '../../Imagenes/imagen1.jpeg';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
            {/* el link redirigiria al perfil de usuario, es decir, si toco la foto
            de perfil me deberia llevar al perfil del usuario.
            Esa imagen la puse para probar pero obvio iria una que elija el usuario */}
          <a href="/"><img src={imagen1} height={90} width={90} style={{ borderRadius: '50%' }}/></a>
        </li>
        <li className="nav-item">
            {/* nombre del usuario */}
          <a href="/">Nombre usuario</a>
        </li>
        <li className="nav-item">
            {/* el link deberia desplejar el menú y la imagen en
            realidad seria un menú hamburguesa */}
          <a href="/menú hamburguesa"><img src={imagen1} height={50} width={50}/></a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;