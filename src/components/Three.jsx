
// import React from 'react';
import { Canvas } from '@react-three/fiber';
// import { createRoot } from 'react-dom/client';
// import { OrbitControls } from '@react-three/drei';

   export default function Test() {
    return (
        <Canvas>
            <mesh>
                <boxGeometry args={[5,5,5]} />
                <meshPhongMaterial />
            </mesh>
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
        </Canvas>
    );
   }
// createRoot(document.getElementById('root')).render(<Test />)