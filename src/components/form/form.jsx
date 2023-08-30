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
    return (
        <div className="form-container">
        <form method="POST">
          <h2 className="form-title">Formulario de Registro</h2>
          <Label className="info-label" infoLabel="Ingrese su correo electronico" />
          <Input
            className="input-field"
            typeInput="email"
            nameInput="Name-Email"
            placeHolderInput="Lionel"
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <Label className="info-label" infoLabel="Ingrese su Contraseña" />
          <Input
            className="input-field"
            typeInput="text"
            nameInput="LastName-User"
            placeHolderInput="Messi"
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <Button
            className="button"
            typeButton="submit"
            nameButton="button-submit"
            valueButton="submit-form"
            contentButton="Enviar"
          />
          <Button
            className="button"
            typeButton="reset"
            nameButton="button-reset"
            valueButton="reset-form"
            contentButton="Restablecer"
          />
        </form>
      </div>
    );
    }
    export default Form;