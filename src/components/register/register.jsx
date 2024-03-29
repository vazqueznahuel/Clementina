import React, { useState } from 'react';
import Label from '../label/label.jsx';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
// Actualiza la importación de la imagen en tu componente Register
import img1 from '../../Imagenes/img1.png';
import appFirebase from '../../firebase/firebaseConfig.js';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDocs, collection, query, where } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

function Register(props) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const validEmailExtensions = ["gmail.com", "outlook.com", "hotmail.com"];

  const functAutenticacion = async (e) =>{  
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    const confirmarContraseña = e.target['con-password'].value;
    const nombre = e.target.nombre.value;
    const apellido = e.target.apellido.value;
    const dni = e.target.dni.value;

    // Validación de campos completados
    if (!correo || !contraseña || !confirmarContraseña || !nombre || !apellido || !dni) {
      setErrorMessage("Todos los campos deben estar completados.");
      return;
    }

    // Validación del DNI (solo números)
    if (!/^\d+$/.test(dni) || dni.length !== 8) {
      setErrorMessage("El DNI debe contener exactamente 8 números.");
      return;
    }

    // Validación de nombre y apellido (sin números)
    if (!/^[A-Za-zÁáÉéÍíÓóÚúÑñÜü\s]+$/.test(nombre) || !/^[A-Za-zÁáÉéÍíÓóÚúÑñÜü\s]+$/.test(apellido)) {
      setErrorMessage("El nombre y el apellido no deben contener números ni caracteres especiales.");
      return;
    }

    if (nombre.length < 3 || nombre.length > 20 || apellido.length < 3 || apellido.length > 20) {
      setErrorMessage("El nombre y el apellido deben tener entre 3 y 20 caracteres.");
      return;
    }

    // Validación de la contraseña
    if (contraseña.length < 6) {
      setErrorMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    
    if (!/[A-Z]/.test(contraseña)) {
      setErrorMessage("La contraseña debe contener al menos una letra mayúscula.");
      return;
    }
    
    if (!/[0-9]/.test(contraseña)) {
      setErrorMessage("La contraseña debe contener al menos un número.");
      return;
    }
    
    if (contraseña !== confirmarContraseña) {
      setErrorMessage("Las contraseñas no coinciden.");
      return;
    }

    const emailExtension = correo.split('@')[1];
    if (!validEmailExtensions.includes(emailExtension)) {
      setErrorMessage("Por favor, use una dirección de correo válida.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, correo, contraseña);  
      navigate("/Main");

      // Guardar el nombre, apellido y DNI en la base de datos
      await setDoc(doc(db, "users", userCredential.user.uid), {
        nombre: nombre,
        apellido: apellido,
        dni: dni,
        email: correo,
        Widi: false,
        Calamaria: false,
        Dozer: false,
        Jeison: false,
        Recipablo: false,
        Gato: false,
        Anguila: false 
      });
    } catch (error) {
      setErrorMessage("Hubo un error inesperado, por favor intente más tarde.");
    }
  }


    return (
    <>
      <div className='imgContainer'><img src={img1} className='imagen-widi'/></div>  
      <div className="form-container">
        <div className='div-center'>
          <h2 className='form-title'>Registrar</h2>
        </div>
        <hr className='Line-separator' />
        <form onSubmit={functAutenticacion}>
          <div className='inputBlock'>
          <div><input className='input-field inputMitad' type='text' placeholder='Nombre' id='nombre'/></div>
          <div><input className='input-field inputMitad' type='text' placeholder='Apellido' id='apellido'/></div>

          
          
          </div>
          <input className='input-field' type='text' placeholder='DNI' id='dni'/>

          <input className='input-field' type='text' placeholder='E-mail' id='email'/>
                      
          <input className='input-field' type='password' placeholder='Contraseña ' id='password'/>
          
          <input className='input-field' type='password' placeholder='Confirmar contraseña ' id='con-password'/>
          
          {errorMessage && <p style={{ color: "red" , marginBottom: "-5px"}}>{errorMessage}</p>}
          <div className='div-center'>
          <button className='button'>Registrarse</button>
          </div>
        </form>
        <div className='div-center'>
        <hr className='Line-separator'/>
        <h6 className=''> Ya tienes cuenta?
            <Link to='/Login' className='link-enlace'>
                Inicia Sesion
            </Link>
        </h6>
        <hr className='Line-separator'/>
        </div>
      </div>
    </>
    );
    }
    export default Register;