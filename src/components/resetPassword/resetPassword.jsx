import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useEffect, useState } from 'react';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const auth = getAuth();

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("¡Correo electrónico de restablecimiento de contraseña enviado!");
    } catch (error) {
      console.error("Error al enviar el correo electrónico de restablecimiento de contraseña: ", error);
    }
  };

  return (
    <div className="resetP">
      <input
        type="email"
        placeholder="Correo electrónico"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleResetPassword}>
        Restablecer contraseña
      </button>
    </div>
  );
}

export default ResetPassword;
