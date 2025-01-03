import React from 'react'
import {  useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Plane } from "@react-three/drei";


const PreloadScene = () => {
    const texture = useLoader(TextureLoader, "/textures/rocktexture.jpg");
    return (
        <>
            {/* <fog attach="fog" args={["#475569", 10, 50]} /> */}
            <Plane
                args={[100, 100, 1, 1]} 
                rotation={[-Math.PI / 2, 0, 0]} 
                position={[0, -6.5, 0]} 
            >
                 <meshStandardMaterial  />
            </Plane>
        </>
    )
}

export default PreloadScene