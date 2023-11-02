import React, { useState } from 'react';
import Label from '../label/label.jsx';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../../imagenes/img1.png'
import appFirebase from '../../firebase/firebaseConfig.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

function Register(props) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const functAutenticacion = async (e) =>{  
      e.preventDefault();
      const correo = e.target.email.value;
      const contraseña = e.target.password.value;
      const confirmarContraseña = e.target['con-password'].value;
      const nombre = e.target.nombre.value;
      const apellido = e.target.apellido.value;
      const dni = e.target.dni.value;

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
    
    if (contraseña !== confirmarContraseña) {
      setErrorMessage("Las contraseñas no coinciden");
      return;
    }
    
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, correo, contraseña);  
        alert("Registradoo!!") 
        navigate("/Main");

        // Guardar el nombre, apellido y DNI en la base de datos
        await setDoc(doc(db, "users", userCredential.user.uid), {
          nombre: nombre,
          apellido: apellido,
          dni: dni,
          FirstModel: true,
          Calamaria: true
        });
        
      } catch (error) {
        setErrorMessage("Hubo un error inesperado, por favor intente más tarde")        
      }
      
  }


    return (
    <>
      <img src={img1} className='imagen-widi'/>  
      <div className="form-container">
        <div className='div-center'>
          <h2 className='form-title'>Registrar</h2>
        </div>
        <hr className='Line-separator' />
        <form onSubmit={functAutenticacion}>

          <Label className="info-label" infoLabel="Ingrese nombre"/>
          <input className='input-field' type='text' placeholder='Ingresar nombre' id='nombre'/>

          <Label className="info-label" infoLabel="Ingrese apellido"/>
          <input className='input-field' type='text' placeholder='Ingresar apellido' id='apellido'/>

          <Label className="info-label" infoLabel="Ingrese DNI"/>
          <input className='input-field' type='text' placeholder='Ingresar DNI' id='dni'/>

          <Label className="info-label" infoLabel="Ingrese email"/>
          <input className='input-field' type='text' placeholder='Ingresar email' id='email'/>
                      
          <Label className="info-label" infoLabel="Ingrese contraseña"/>
          <input className='input-field' type='password' placeholder='Ingresar contraseña ' id='password'/>
          
          <Label className="info-label" infoLabel="Confirmar contraseña"/>
          <input className='input-field' type='password' placeholder='Confirmar contraseña ' id='con-password'/>
          
          {errorMessage && <p style={{ color: "red" , marginBottom: "-5px"}}>{errorMessage}</p>}
    
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