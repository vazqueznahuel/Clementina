import React, { useState } from 'react'
import Label from '../label/label.jsx'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom';

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
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    
    if (!/[A-Z]/.test(contraseña)) {
      alert("La contraseña debe contener al menos una letra mayúscula");
      return;
    }
    
    if (!/[0-9]/.test(contraseña)) {
      alert("La contraseña debe contener al menos un número");
      return;
    }
    
    try {
        await createUserWithEmailAndPassword(auth, correo, contraseña);  
        alert("Registradoo!!") 
        navigate("/Home");
      } catch (error) {
        alert("Asegurese que la contraseña tenga 8 caracteres")
      }
      
  }


    return (

    <div className="form-container">
      <h2 className='form-title'>Registrar</h2>

      <form onSubmit={functAutenticacion}>

        <Label className="info-label" infoLabel="Ingrese email"/>
        <input className='input-field' type='text' placeholder='Ingresar email' id='email'/>
                    
        <Label className="info-label" infoLabel="Ingrese contraseña"/>
        <input className='input-field' type='password' placeholder='Ingresar contraseña ' id='password'/>
        
        <button className='button'>Registrar</button>
        
      </form>

      <h4 className='form-title'> Ya tienes cuenta?
          <Link to='/Login' className='button'>
              Inicia Sesion
          </Link>
      </h4>

      </div>
    );
    }
    export default Register;