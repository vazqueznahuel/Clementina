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
    <div className="imgContainer">
    <img src={img1} className='imagen-widi'/>  
    </div>
    <div className="form-container">
      
      <div className='div-center'>
          <h2 className='form-title'>Resetear contraseña</h2>
        </div>
        <hr className='Line-separator' />
       <div className='div-center'>
          <input
          className="input-field"
          type="email"
          placeholder="Correo electrónico"
          onChange={(e) => setEmail(e.target.value)}
        />
       </div>
       {errorMessage && <p style={{ color: "red" , marginBottom: "-5px"}}>{errorMessage}</p>}
       <div className='div-center'>
       <button className="button" onClick={handleResetPassword}>
         Restablecer contraseña
       </button>
      </div>
      
    </div>
    </>
    
  );
}

export default ResetPassword;
