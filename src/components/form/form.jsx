import React, { useState } from 'react'
import 'firebase/auth'
import { useFirebaseApp } from 'reactfire'
import Label from '../label/label.jsx'
import Button from '../button/button.jsx'
import Input from '../input/input.jsx'
import '../../App.css'

function Form(props) {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const submit = () => {
      console.log(email, password);
    }

    return (
        <div className="form-container">
          <h2 className="form-title">Formulario de Registro</h2>
          <Label className="info-label" infoLabel="Ingrese su correo electronico" />
          <input className='input-field' type='email' id='email' onChange={(ev) => setEmail(ev.target.value)}/>
          <Label className="info-label" infoLabel="Ingrese su Contraseña" />
          <input className='input-field' type='password' id='password' onChange={(ev) => setPassword(ev.target.value)}/>
          <button className="button" onClick={submit}>iniciar session</button>
          <Button
            className="button"
            typeButton="reset"
            nameButton="button-reset"
            valueButton="reset-form"
            contentButton="Restablecer"
          />
      </div>
    );
    }
    export default Form;