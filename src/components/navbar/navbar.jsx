import React from 'react';
import img1 from '../../Imagenes/img1.png'
import '../../css/main.css'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-ftUsuario">
            {/* el link redirigiria al perfil de usuario, es decir, si toco la foto
            de perfil me deberia llevar al perfil del usuario.
            Esa imagen la puse para probar pero obvio iria una que elija el usuario */}
          <a href="/" className='nav-link'><img className='fotoUsuario' src={img1}/></a>
        </li>
        <li className="nav-item nameUsuario">
            {/* nombre del usuario */}
          <a href="/" className='nav-link'> <b>Bienvenido</b> Nombre usuario</a>
        </li>
        <li className="nav-item">
            {/* el link deberia desplejar el menú y la imagen en
            realidad seria un menú hamburguesa */}
          <a href="/menú hamburguesa" className='nav-link'><img className='menuHamburguesa' src={img1}/></a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;