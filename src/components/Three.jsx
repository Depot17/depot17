import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three-stdlib";
import React, { useRef, useEffect, Suspense } from "react";

function Model() {

  const gltf = useLoader(GLTFLoader, "/3d/claw.gltf");
  const modelClaw = useRef();





  useEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene);
    const center = box.getCenter(new THREE.Vector3());
    gltf.scene.position.sub(center);
  }, [gltf]);

  useFrame(({ clock }) => {
    if (modelClaw.current) {
      modelClaw.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
    
  })


    if(window.innerWidth < 1024){
        return (
        <group ref={modelClaw}>
        <primitive object={gltf.scene} scale={8} rotation={[-0.8, 0.5,0.2]} />
        </group> )
        }
            
    else {
        return (
        <group ref={modelClaw}>
        <primitive object={gltf.scene} scale={12} rotation={[-0.8, 0.5,0.2]} />
        </group> )
    }


};

export default function App() {
  return (
    <div className="App">
      <Canvas orthographic camera={{zoom:100, position: [0,0,10],}} style={{ width: "1000px", height: "700px"}}>
        <ambientLight intensity={1} />
        <directionalLight color="white" position={[0, 0, 10]} intensity={0.8} />
        <Suspense fallback={null}>
          <Model />
            <OrbitControls enableZoom={false}></OrbitControls>        
            </Suspense>
      </Canvas>
    </div>
  );
}
