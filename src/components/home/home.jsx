import '../../App.css'
import appFirebase from '../../firebase/firebaseConfig';
import { getAuth, signOut } from 'firebase/auth';
const auth = getAuth(appFirebase);

function Home ({correoUsuario}){
    return (
        <div className='container'>
           <h1 className='text-center'>HOLA {correoUsuario}<button onClick={()=>signOut(auth)}>Logout</button></h1>
        </div>
    );
}
export default Home;