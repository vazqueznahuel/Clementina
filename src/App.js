import './App.css';
import ThreeScene from './components/ThreeScene';
import Sphere from './components/Sphere';
//threejs
import { Suspense } from 'react';
import { OrbitControls, Stars } from '@react-three/drei';
import Model from './3DModels/model';


function App() {
  return (
    <div style={
      {height: '100vh'
    , overflow: 'hidden'}
    }>
      <ThreeScene>
        <color attach="background" args={['#0a1034']} />
        <ambientLight />
        <OrbitControls />
        <Sphere color={"#00ff00"} position={[-2, 0, 0]}/>
        
        <Sphere color={"#00ffff"} position={[2, 0, 0]}/>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Stars count={1000} factor={10} />
      </ThreeScene>
    </div>
  );
}

export default App;
