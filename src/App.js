import './App.css';
import ThreeScene from './components/ThreeScene';
import Sphere from './components/Sphere';
//threejs
import { OrbitControls } from '@react-three/drei';



function App() {
  return (
    <div style={
      {height: '100vh'
    , overflow: 'hidden'}
    }>
      <ThreeScene>
        <color attach="background" args={['#0a1034']} />
        <Sphere color="#00ff00" position={[-2, 0, 0]}/>
        <Sphere color="#00ffff" position={[2, 0, 0]}/>
        <ambientLight />
        <OrbitControls />
      </ThreeScene>
    </div>
  );
}

export default App;
