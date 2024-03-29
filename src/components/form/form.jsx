import React, { useState } from 'react'
import { useFirebaseApp } from 'reactfire'
import Label from '../label/label.jsx'
import Button from '../button/button.jsx'
import Input from '../input/input.jsx'
import '../../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle,faGithub } from '@fortawesome/free-brands-svg-icons';

import appFirebase from '../../firebase/firebaseConfig.js'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
const auth = getAuth(appFirebase);

function Form(props) {
    
  const [registrando, setRegistrando] = useState(false);
  console.log(registrando)
  const functAutenticacion = async (e) =>{  
      e.preventDefault();
      const correo = e.target.email.value;
      const contraseña = e.target.password.value;
      
      if(registrando){
        try {
          await createUserWithEmailAndPassword(auth, correo, contraseña);   
        } catch (error) {
          alert("Asegurese que la contraseña tenga 8 caracteres")
        }
          
      }
      else{
      
        try {
          await signInWithEmailAndPassword(auth, correo, contraseña);
        } catch (error) {
          alert ("El correo es incorrecto");
        }
      }
  }

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);  // Puedes acceder a la información del usuario aquí
      }).catch((error) => {
        console.log(error.message);
      });
  };
  
  const signInWithGithub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);  // Puedes acceder a la información del usuario aquí
      }).catch((error) => {
        console.log(error.message);
      });
  };

    return (

    <div className="form-container">
        <h2 className='form-title'> {registrando ? "Registrate" : "Iniciar Sesion"} </h2>

        <form onSubmit={functAutenticacion}>

          <Label className="info-label" infoLabel="Ingrese email"/>
          <input className='input-field' type='text' placeholder='Ingresar email' id='email'/>
                       
          <Label className="info-label" infoLabel="Ingrese contraseña"/>
          <input className='input-field' type='password' placeholder='Ingresar contraseña ' id='password'/>
           
          <button className='button'>{registrando ? "Registrate" : "Inicia Sesion"}</button>
          
        </form>

        <button onClick={signInWithGoogle} className='google-signin-button'>
          <FontAwesomeIcon icon={faGoogle} />
          <span>Iniciar sesión con Google</span>
        </button>    

        <button onClick={signInWithGithub} className='google-signin-button'>
          <FontAwesomeIcon icon={faGithub} />
          <span>Iniciar sesión con GitHub</span>
        </button>
        <h4 className='form-title'> {registrando ? "Si ya tienes cuenta" : "No tienes cuenta"} <button className='button' onClick={()=>setRegistrando(!registrando)}>{registrando ? "Iniciar Sesion" : "Registrate"}</button></h4>
      </div>
    );
    }
    export default Form;