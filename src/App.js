import {Imagen} from './components/imagen/img'
import imagen1 from './Imagenes/1.jpeg'
import imagen2 from './Imagenes/2.webp'
import imagen3 from './Imagenes/3.jpg'
import { Adrianvazquez } from './components/button/button'
import './App.css';

function App() {
  return (
    <div className="App">
      <Adrianvazquez textoBoton="Enviar" textP="adios" colorfondo="blue" fuente="Arial"/>
      <Adrianvazquez textoBoton="cancelar" textP="chau" colorfondo="red" fuente="Calibri"/>
    </div>
  );
}

export default App;
