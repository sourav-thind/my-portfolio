import React from 'react'
import { OrbitControls, useGLTF,Html } from "@react-three/drei";
import { Leva, useControls } from 'leva';

const MainSetup = () => {

    const { scene } = useGLTF("/MainSetup.glb");
    const { rotationX, rotationY, rotationZ , positionX, positionY, positionZ, distanceFactor} = useControls({
        rotationX: { value: 0, min: -15, max: 15, step: 0.001 },
        rotationY: { value: 0, min: -15, max: 15, step: 0.001 },
        rotationZ: { value: 0, min: -15, max: 15, step: 0.001 },
        positionX: { value: 0.36, min: -15, max: 15, step: 0.001 },
        positionY: { value: 1.37, min: -15, max: 15, step: 0.001 },
        positionZ: { value: -0.03, min: -15, max: 15, step: 0.001 },
        distanceFactor: { value: 0.34, min: -15, max: 15, step: 0.001 },
      
      });

    return (
        <>
            <ambientLight intensity={5} />
            <primitive object={scene} >
           
            <Html 
                transform
                occlude
                rotation={[0,4.69,0]}
                 position={[0.36,1.37,-0.03]}
                style={{
                  width: '1024px',
                  height: '536px',
                  
                }}
                distanceFactor={0.34}
              >
                <iframe src="https://protfolio-html.vercel.app/"
                  style={{ width: '1024px', height: '536px', border: 'none', overflow:'hidden' }}
                
                />
              </Html>

            </primitive>

            <OrbitControls /></>
    )
}

export default MainSetup