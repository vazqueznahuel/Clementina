import React, { useEffect, useRef } from 'react';
import * as THREE from 'three'; // Agrega esta línea
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
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
      controls.current.minPolarAngle = Math.PI / 4; // Ángulo mínimo (45 grados)
      controls.current.maxPolarAngle = (3 * Math.PI) / 4; // Ángulo máximo (135 grados)
      controls.current.enableDamping = true;
      controls.current.dampingFactor = 0.1;
      controls.current.enableZoom = true;
      controls.current.zoomSpeed = 1.2;
    }
  }, []);

  useFrame(() => {
    if (controls.current) {
      controls.current.update();
    }
  });

  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

const Model = () => {
  const gltf = useGLTF('/widiModelo.gltf');

  // Accede a la textura dentro del modelo GLTF
  const texture = gltf.scene.children[0].material.map; // Asegúrate de que la ruta correcta a la textura sea la adecuada

  // Aplica el filtro NearestFilter a la textura
  texture.magFilter = THREE.NearestFilter;

  return <primitive object={gltf.scene} />;
};

const ModelViewer = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      gl={{ antialias: true }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.outputEncoding = THREE.sRGBEncoding;
      }}
    >
      <ambientLight intensity={3.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <CameraControls /> {/* Usa los controles personalizados */}
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;
