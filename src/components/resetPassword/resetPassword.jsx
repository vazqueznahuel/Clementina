import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import img1 from '../../Imagenes/img1.png'
import { Link, useNavigate } from 'react-router-dom';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();
  const [errorMessage, setErrorMessage] = useState("");

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("¡Correo electrónico de restablecimiento de contraseña enviado!");
      alert("Se envio un correo para restablecer su contraseña  ")
      navigate("/Login")
    } catch (error) {
      setErrorMessage("Error al enviar correo, compruebe que sea correcto");
    }
  };

  return (
    <>
    <img src={img1} className='imagen-widi'/>  
    <div className="resetP">
      <div className='div-center'>
          <h2 className='form-title'>Resetear contraseña</h2>
        </div>
        <hr className='Line-separator' />
      </div>
      
    </div>
    </>
    
  );
}

export default ResetPassword;
