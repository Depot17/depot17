import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { useEffect, Suspense } from "react";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/3d/claw.gltf");
//   return <primitive object={gltf.scene} scale={10} />

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene);
    const center = box.getCenter(new THREE.Vector3());
    gltf.scene.position.sub(center);
  }, [gltf]);

    if(window.innerWidth < 1024){
        console.log('okay small');
        return <primitive object={gltf.scene} scale={8} rotation={[-0.8, 0.5,0.2]} />
        }
            
            else {
                        console.log('okay big');

        return <primitive object={gltf.scene} scale={12} rotation={[-0.8, 0.5,0.2]} />

            }


};

export default function App() {
  return (
    <div className="App">
      <Canvas orthographic camera={{zoom:100, position: [0,0,10],}} style={{ width: "1000px", height: "700px"}}>
        <ambientLight intensity={0.8} />
        <directionalLight color="yellow" position={[0, 0, 10]} intensity={1.2} />
        <Suspense fallback={null}>
          <Model />
            <OrbitControls enableZoom={false}></OrbitControls>        
            </Suspense>
      </Canvas>
    </div>
  );
}
