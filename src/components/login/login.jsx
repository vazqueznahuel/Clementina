import React, { useState } from 'react'
import Label from '../label/label.jsx'
import '../../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash, faUserSecret  } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import appFirebase from '../../firebase/firebaseConfig.js'
import img1 from '../../Imagenes/img1.png'
import { getAuth, signInWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signInAnonymously } from 'firebase/auth'
const auth = getAuth(appFirebase);


function Login(props) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  const functAutenticacion = async (e) =>{  
      e.preventDefault();
      const correo = e.target.email.value;
      const contraseña = e.target.password.value;
       
      try {
          await signInWithEmailAndPassword(auth, correo, contraseña);
          navigate("/Main");
      } catch (error) {
          setError("El correo o la contraseña son incorrectos");
      }
  }
  

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);  // Puedes acceder a la información del usuario aquí
        navigate("/Main");
      }).catch((error) => {
        console.log(error.message);
      });
  };
  
  const signInWithGithub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);  // Puedes acceder a la información del usuario aquí
        navigate("/Main");
      }).catch((error) => {
        console.log(error.message);
      });
  };

  const signInAnonimo = () => {
    signInAnonymously(auth)
      .then(() => {
        navigate("/Main");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

    return (
    <>
    <img src={img1} className='imagen-widi'/>
    <div className="form-container">
      <div className='div-center'>
        <h2 className='form-title'>Iniciar Sesion</h2>
      </div>
        <form onSubmit={functAutenticacion}>

          <Label className="info-label" infoLabel="Email"/>
          <input className='input-field' type='text' placeholder='Ingresar email' id='email'/>
                       
          <Label className="info-label" infoLabel="Contraseña"/>
          <div style={{position: 'relative'}}>
            <input className='input-field' type={showPassword ? "text" : "password"} placeholder='Ingresar contraseña ' id='password'/>
            <button onClick={toggleShowPassword} type="button" style={{position: 'absolute', right: 25, top: 10, border: 'none', backgroundColor: 'transparent'}}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {error ? 
            <h6 className='olvidar-contraseña-error'>
              <Link to='/Recuper-Contraseña' className='link-enlace'>
              ¿Olvidaste tu contraseña?
              </Link>
            </h6> : 
            <h6 className='olvidar-contraseña'>
              <Link to='/Recuper-Contraseña' className='link-enlace'>
              ¿Olvidaste tu contraseña?
              </Link>
            </h6>}
          </div>
          <button className='button'>Inicia Sesion</button>
        </form>
      <div className='div-center'>
      <hr className='Line-separator' />
        <h6 className=''> ¿No tienes cuenta?
                    <Link to='/Registro' className='link-enlace'>
                        Registrate
                    </Link>
        </h6>
      <hr className='Line-separator' /> 
      </div>
     
      <div className='div-botones'>
         <button onClick={signInWithGoogle} className='signin-button'>
          <FontAwesomeIcon icon={faGoogle} />
        </button>    

        <button onClick={signInWithGithub} className='signin-button'>
          <FontAwesomeIcon icon={faGithub} />
        </button>

        <button onClick={signInAnonimo} className='signin-button'>
          <FontAwesomeIcon icon={faUserSecret} />
        </button>
      </div>
      </div>
    </>
    );
    }
    export default Login;