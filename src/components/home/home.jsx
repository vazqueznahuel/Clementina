import '../../App.css';
import appFirebase from '../../firebase/firebaseConfig';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import Nav from '../nav/nav';
import ModelSlider from '../SliderModels/ModelSlider';

const auth = getAuth(appFirebase);

function Home() {
    return (
        <>
          <Nav/>
          <ModelSlider />
        </>
    );
}

export default Home;
