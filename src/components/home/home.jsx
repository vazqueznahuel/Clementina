import { useState, useEffect } from 'react';
import '../../App.css';
import appFirebase from '../../firebase/firebaseConfig';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom
import Nav from '../nav/nav';

const auth = getAuth(appFirebase);

function Home({ correoUsuario }) {
    return (
        <>
          <Nav/>
        </>
    );
}

export default Home;
