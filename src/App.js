import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { useGLTF } from '@react-three/drei';
import ModelViewer from './components/ModelViewer';

//threejs


function App() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>

    <ModelViewer/>
    </div>
  );
}

export default App;
