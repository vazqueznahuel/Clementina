import React, { useState } from 'react'
import 'firebase/auth'
import Label from '../label/label.jsx'
import Button from '../button/button.jsx'
import Input from '../input/input.jsx'
import '../../App.css'

function Form(props) {
    return (
        <div className="form-container">
        <form method="POST">
          <h2 className="form-title">Formulario de Registro</h2>
          <Label className="info-label" infoLabel="Ingrese su nombre" />
          <Input
            className="input-field"
            typeInput="text"
            nameInput="Name-User"
            placeHolderInput="Lionel"
          />
          <Label className="info-label" infoLabel="Ingrese su Apellido" />
          <Input
            className="input-field"
            typeInput="text"
            nameInput="LastName-User"
            placeHolderInput="Messi"
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