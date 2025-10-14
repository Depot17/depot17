
import * as THREE from "three";
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
        // useEffect(() => {
        //     set({
        //         fillMix: 1,
        //         dash: true,
        //         squeeze: true,
        //         thickness: 0.14
        //     })
        // })
        });

        return <primitive object={obj} scale={12} rotation={[-0.5, 0,0]} />

    };

    export default function App(){
        return (
            <Canvas orthographic camera={{zoom:100, position: [0,0,10],}} style={{ width: "1000px", height: "900px"}}>
        
                <ambientLight intensity={0.9} />
                <directionalLight color="white" position={[0, 10, 0]} />
                <Scene />
                {/* <Shader /> */}

                <OrbitControls 
                enableZoom={false} 
                minPolarAngle={Math.PI /3}
                maxPolarAngle={Math.PI / 1.5}
                minAzimuthAngle={-Math.PI / 4}
                maxAzimuthAngle={Math.PI / 4}/>
        
            </Canvas>
    );
}
