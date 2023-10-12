
function Register(props) {

    return (

    <div className="form-container">
      <h2 className='form-title'>Registrar</h2>

      <form onSubmit={functAutenticacion}>

        <Label className="info-label" infoLabel="Ingrese email"/>
        <input className='input-field' type='text' placeholder='Ingresar email' id='email'/>
                    
        <Label className="info-label" infoLabel="Ingrese contraseña"/>
        <input className='input-field' type='password' placeholder='Ingresar contraseña ' id='password'/>
        
        <button className='button'>Registrar</button>
        
      </form>

      <h4 className='form-title'> Ya tienes cuenta?
          <Link to='/Login' className='button'>
              Inicia Sesion
          </Link>
      </h4>

      </div>
    );
    }
    export default Register;