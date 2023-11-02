import React, { useEffect, useState } from 'react';
import ModelViewer from './ModelViewer';
import Info from './modelDescription';
import infoMascota from './InfoMascota';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import appFirebase from '../../firebase/firebaseConfig.js';

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

function Calamaria() {
  const mascota = infoMascota();
  const calamaria = mascota[1];
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setIsUnlocked(docSnap.data().Calamaria);
        } else {
          console.log("No such document!");
        }
      }
    });

    return () => unsubscribe();
  }, []);
  

  return (
    <div className='cont-widi'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24822.68777201848!2d-68.1542199891602!3d-38.95057549999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33af200f4b07%3A0x70150e9f33495f26!2sBiblioteca%20E.P.E.T%20N%C2%B05!5e0!3m2!1ses!2sar!4v1698955607014!5m2!1ses!2sar" className='mapa' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      {isUnlocked ? (
        <>
          <ModelViewer modelo={calamaria.route} unlockState={calamaria.unlock} />
          <Info
            title={calamaria.title}
            school={calamaria.school}
            description={calamaria.description}
          />
        </>
      ) : (
        <p>Este personaje está bloqueadoooo.</p>
      )}
    </div>
  );
}

export default Calamaria;
