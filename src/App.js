import React from 'react';
import ModelViewer from './components/ModelViewer';

//threejs

//Se pasan bien los props solo que por alguna razon no lee bien la ruta en modelViewer
function App() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
       <ModelViewer modelo="/epet8.gltf"/>
    </div>
  );
}

export default App;
