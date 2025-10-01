
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { Suspense } from "react";


    const Scene = () => {
        const materials = useLoader(MTLLoader, "/Claw.mtl")
        const obj = useLoader(OBJLoader, '/Claw.obj', (loader) => {
            materials.preload();
            loader.setMaterials(materials);
        })
        return <primitive object={obj} scale={14} />

    };


    export default function App() {
    return (
        <Canvas style={{ width: "500px", height: "500px",}}>
      
            <ambientLight intensity={0.6} />
            <directionalLight color="red" position={[0, 0, 0]} />
            <Scene />
            <OrbitControls  />
        </Canvas>
    );
   }