import '../../App.css';
import appFirebase from '../../firebase/firebaseConfig';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import Nav from '../nav/nav';

const auth = getAuth(appFirebase);

function Home() {
    return (
        <>
          <Nav/>
        </>
    );
}

export default Home;
