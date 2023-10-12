
function Nav(props) {  
    return (
      <div
        ref={menuRef}
        className={`hamburger ${isMenuOpen ? "is-active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="_layer -top"></div>
        <div className="_layer -mid"></div>
        <div className="_layer -bottom"></div>
   
        <nav className={`menuppal ${isMenuOpen ? "is_active" : ""}`}>
          <ul>
            <li><button onClick={() => {
                    signOut(auth);
                }}>Cerrar Sesion</button></li>
            <li><a href="generarNota">.</a></li>
            <li><a href="comunicaciones">.</a></li>
            <li><a href="personales">.</a></li>
            <li><a href="retiro">.</a></li>
          </ul>
        </nav>

      </div>
    );
  }
    export default Nav;