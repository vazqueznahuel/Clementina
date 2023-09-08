import React from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "react-three-fiber";
import model from './widi.gltf'


const Model = () => {
    const geom = useLoader(GLTFLoader, model);
    return <primitive object={geom} />
}

export default Model;