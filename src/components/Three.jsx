
import * as THREE from "three";
import React, { useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { EffectComposer, Outline } from '@react-three/postprocessing';
import { DDSLoader } from "three-stdlib";
// import { Suspense } from "react";
import { Shader } from "./Shader";


    const Scene = () => {
        const materials = useLoader(MTLLoader, "/Claw.mtl")
        const obj = useLoader(OBJLoader, '/Claw.obj', (loader) => {
            materials.preload();
            loader.setMaterials(materials);


        // useRef(() => {
        //     obj.traverse((child) => {
        //     if (child.isMesh) outlineRefs.current.push(child);
        //     });
        // });
});
        useEffect(() => {
            const box = new THREE.Box3().setFromObject(obj);
            const center = new THREE.Vector3();
            box.getCenter(center);

            obj.position.x -= center.x;
            obj.position.y -= center.y;
            obj.position.z -= center.z;
            }, [obj]);
        

        return <primitive object={obj} scale={12} rotation={[-0.8, 0.5,0.2]} />

    };     
     

    export default function App(){
        return (
            <Canvas orthographic camera={{zoom:100, position: [0,0,10],}} style={{ width: "1000px", height: "900px"}}>
        
                <ambientLight intensity={0.7} />
                <directionalLight color="white" position={[0, 0, 6]} intensity={2} />
                <Suspense fallback={null}>
                <Scene />

                </Suspense>
  
                <OrbitControls enableZoom={false}></OrbitControls>
            </Canvas>
    );
}
