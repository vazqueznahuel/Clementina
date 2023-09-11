import React, { useState } from 'react'
import 'firebase/auth'
import { useFirebaseApp } from 'reactfire'
import Label from '../label/label.jsx'
import Button from '../button/button.jsx'
import Input from '../input/input.jsx'
import '../../App.css'

import appFirebase from '../../firebase/firebaseConfig.js'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase);

function Form(props) {
    
  const [registrando, setRegistrando] = useState(false);

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
    return (

    <div className="form-container">
        <h2 className='form-title'> {registrando ? "Iniciar Sesion" : "Registrate"} </h2>

        <form onSubmit={functAutenticacion}>

          <Label className="info-label" infoLabel="Ingrese email"/>
          <input className='input-field' type='text' placeholder='Ingresar email' id='email'/>
                       
          <Label className="info-label" infoLabel="Ingrese contraseña"/>
          <input className='input-field' type='password' placeholder='Ingresar contraseña ' id='password'/>
           
          <button className='button'>{registrando ? "Registrate" : "Inicia Sesion"}</button>
          
        </form>
                  
        <h4> {registrando ? "Si ya tienes cuenta" : "No tienes cuenta"} <button className='button' onClick={()=>setRegistrando(!registrando)}>{registrando ? "Iniciar Sesion" : "Registrate"}</button></h4>
      </div>
    );
    }
    export default Form;