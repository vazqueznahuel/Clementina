import React, { useEffect, useRef } from 'react';
import * as THREE from 'three'; // Agrega esta línea
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useThree, useFrame } from 'react-three-fiber';
import { useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

// Extiende OrbitControls para personalizar los controles
extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef();

  // Configura las restricciones de los controles
  useEffect(() => {
    if (controls.current) {
      controls.current.minPolarAngle = (Math.PI / 180) * 90; // Mínimo en grados (60 grados)
      controls.current.maxPolarAngle = (Math.PI / 180) * 90; // Máximo en grados (120 grados)   
      controls.current.minDistance = 2.5; // Distancia mínima (valor determinado)
      controls.current.maxDistance = 2.5; // Distancia máxima (valor determinado)
      controls.current.enableDamping = true;
      controls.current.dampingFactor = 0.1;
      controls.current.enableZoom = true;
      controls.current.zoomSpeed = 1.2;
      controls.current.enablePan = false; // Deshabilitar el panning
    }
  }, []);

  useFrame(() => {
    if (controls.current) {
      controls.current.update();
    }
  });

  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

const Model = ({ modelo, position}) => {
  const gltf = useGLTF(modelo);
  console.log(gltf);

  gltf.scene.position.set(position ? position[0] : 0, position ? position[1] : 0, position ? position[2] : 0);



  const texture = gltf.scene.children[0].material.map; 

  texture.magFilter = THREE.NearestFilter;

  return <primitive object={gltf.scene} />;
};

const ModelViewer = ({ modelo, modelPosition  }) => {
  return (
<Canvas
  camera={{ position: [0, 2, -5] }} // Establece la posición de la cámara aquí
  gl={{ antialias: true }}
  onCreated={({ gl }) => {
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.outputEncoding = THREE.sRGBEncoding;
  }}
>
      <ambientLight intensity={3.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <CameraControls />
      <Suspense fallback={null}>
        <Model modelo={modelo} position={modelPosition}/>
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;
