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
    <div style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}>
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
