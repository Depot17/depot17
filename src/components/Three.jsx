
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { EffectComposer, Outline } from '@react-three/postprocessing';
import { DDSLoader } from "three-stdlib";
import { Suspense } from "react";


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
        })
        return <primitive object={obj} scale={8} />

    };


    export default function App() {
    return (
        <Canvas style={{ width: "600px", height: "500px",}}>
      
            <ambientLight intensity={0.8} />
            <directionalLight color="red" position={[0, 0, 0]} />
            <Scene />
            <OrbitControls enableZoom={false} />
                {/* <EffectComposer autoClear={false}>
                    <Outline
                        selection={[ref0, ref1, ref2, ref3]}
                        blur={config.blur}
                        visibleEdgeColor={config.visibleEdgeColor}
                        hiddenEdgeColor={config.hiddenEdgeColor}
                        edgeStrength={config.edgeStrength}
                    />
                </EffectComposer>         */}
                </Canvas>
    );
   }