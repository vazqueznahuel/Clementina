import React, { useEffect, useState } from 'react';
import ModelViewer from './ModelViewer';
import Info from './modelDescription';
import infoMascota from './InfoMascota';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import appFirebase from '../../firebase/firebaseConfig.js';

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

function FirstModel() {
  const mascota = infoMascota();
  const firstModel = mascota[0];
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setIsUnlocked(docSnap.data().FirstModel);
        } else {
          console.log("No such document!");
        }
      }
    });

    return () => unsubscribe();
  }, []);
  

  return (
    <div className='cont-widi'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.210324494949!2d-68.09031262461434!3d-38.964865200698085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33b795c819a7%3A0x65c00b69eb2c3f1d!2sE.P.E.T.N%C2%B0%2020!5e0!3m2!1ses!2sar!4v1698933368264!5m2!1ses!2sar" className='mapa' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      {isUnlocked ? (
        <>
          <ModelViewer modelo={firstModel.route} unlockState={firstModel.unlock} />
          <Info
            title={firstModel.title}
            school={firstModel.school}
            description={firstModel.description}
          />
        </>
      ) : (
        <p>Este personaje está bloqueadoooo.</p>
      )}
    </div>
  );
}

export default FirstModel;
