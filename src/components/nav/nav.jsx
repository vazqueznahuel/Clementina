
function Nav(props) {  
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    
    const [usuario, setUsuario] = useState(null);
    const navigate = useNavigate(); // Obtiene la función navigate

    const toggleMenu = () => {
      setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    };
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
  
    useEffect(() => {
      function handleOutsideClick(event) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          closeMenu();
        }
      }
  
      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
            if (usuarioFirebase) {
                setUsuario(usuarioFirebase);
            } else {
                setUsuario(null);
                // Redirige al usuario a la página de inicio de sesión
                navigate('/Login'); // Reemplaza '/login' con la ruta real de inicio de sesión
            }
        });

        // Limpia la suscripción al desmontar el componente
        return () => unsubscribe();
    }, [navigate]);



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