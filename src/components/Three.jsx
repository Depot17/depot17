
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

        return <primitive object={obj} scale={7.5} />

    };

    export default function App(){
        return (
            <Canvas style={{ width: "800px", height: "800px",}}>
        
                <ambientLight intensity={0.8} />
                <directionalLight color="red" position={[0, 0, 0]} />
                <Scene />
                {/* <Shader /> */}

                <OrbitControls enableZoom={false} />
        
            </Canvas>
    );
}
