
function Nav(props) {  
    return (
      <div
        ref={menuRef}
        className={`hamburger ${isMenuOpen ? "is-active" : ""}`}
        onClick={toggleMenu}
      >
      </div>
    );
  }
    export default Nav;