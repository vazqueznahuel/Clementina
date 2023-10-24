import React, { useState } from 'react'
import Label from '../label/label.jsx'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../../imagenes/img1.png';
import appFirebase from '../../firebase/firebaseConfig.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
const auth = getAuth(appFirebase);


function Register(props) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const functAutenticacion = async (e) =>{  
      e.preventDefault();
      const correo = e.target.email.value;
      const contraseña = e.target.password.value;
      
      // Validación de la contraseña
    if (contraseña.length < 6) {
      setErrorMessage("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    
    if (!/[A-Z]/.test(contraseña)) {
      setErrorMessage("La contraseña debe contener al menos una letra mayúscula");
      return;
    }
    
    if (!/[0-9]/.test(contraseña)) {
      setErrorMessage("La contraseña debe contener al menos un número");
      return;
    }
    
    try {
        await createUserWithEmailAndPassword(auth, correo, contraseña);  
        alert("Registradoo!!") 
        navigate("/Home");
      } catch (error) {
        setErrorMessage("Hubo un error inesperado, por favor intente más tarde")        
      }
      
  }


    return (
    <>
      <img src={img1} className='imagen-widi'/>  
      <div className="form-container">
        <h2 className='form-title'>Registrar</h2>

        <form onSubmit={functAutenticacion}>

          <Label className="info-label" infoLabel="Ingrese email"/>
          <input className='input-field' type='text' placeholder='Ingresar email' id='email'/>
                      
          <Label className="info-label" infoLabel="Ingrese contraseña"/>
          <input className='input-field' type='password' placeholder='Ingresar contraseña ' id='password'/>
          
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    
          <button className='button'>Registrar</button>
          
        </form>

        <h6 className=''> Ya tienes cuenta?
            <Link to='/Login' className='link-enlace'>
                Inicia Sesion
            </Link>
        </h6>

      </div>
    </>
    );
    }
    export default Register;