import './App.css';
import Form from './components/form/form.jsx';

function App() {
  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await getDocs(collection('usuarios', db));
      console.log(datos.docs[0].data(data));
    };

    obtenerDatos();
  }, []);

  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
