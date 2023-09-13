import './App.css';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import Model from './3DModels/model';




import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Model(props) {
  const { nodes, materials } = useGLTF('/widi2.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0.438, 1.125, 0]}>
        <mesh geometry={nodes.cuboid_1.geometry} material={nodes.cuboid_1.material} position={[-0.438, -1.125, 0]} />
      </group>
      <group position={[-0.438, 1.125, 0]}>
        <mesh geometry={nodes.cuboid_2.geometry} material={nodes.cuboid_2.material} position={[0.438, -1.125, 0]} />
      </group>
      <mesh geometry={nodes.cuboid.geometry} material={nodes.cuboid.material} />
      <group position={[0.25, 0.5, 0]}>
        <group position={[0.25, 0, 0]}>
          <mesh geometry={nodes.cuboid_7.geometry} material={nodes.cuboid_7.material} position={[-0.813, -0.375, 0]} />
        </group>
        <group position={[0.5, 0, 0]}>
          <mesh geometry={nodes.cuboid_8.geometry} material={nodes.cuboid_8.material} position={[-1.063, -0.375, 0]} />
        </group>
        <mesh geometry={nodes.cuboid_6.geometry} material={nodes.cuboid_6.material} position={[-0.563, -0.375, 0]} />
      </group>
      <group position={[-0.188, 0.5, 0]}>
        <group position={[-0.313, 0, 0]}>
          <group position={[-0.279, 0.003, 0]}>
            <mesh geometry={nodes.cuboid_11.geometry} material={nodes.cuboid_11.material} position={[1.092, -0.378, 0]} />
          </group>
          <mesh geometry={nodes.cuboid_10.geometry} material={nodes.cuboid_10.material} position={[0.813, -0.375, 0]} />
        </group>
        <mesh geometry={nodes.cuboid_9.geometry} material={nodes.cuboid_9.material} position={[0.5, -0.375, 0]} />
      </group>
      <mesh geometry={nodes.cuboid_3.geometry} material={nodes.cuboid_3.material} />
      <mesh geometry={nodes.cuboid_4.geometry} material={nodes.cuboid_4.material} />
      <mesh geometry={nodes.cuboid_5.geometry} material={nodes.cuboid_5.material} />
    </group>
  )
}


function App() {
  return (
    <div style={
      {height: '100vh'
    , overflow: 'hidden'}
    }>

    </div>
  );
}

export default App;
