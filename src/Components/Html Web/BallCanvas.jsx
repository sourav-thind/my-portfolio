import React, {  Suspense} from 'react'
import { Canvas} from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'




const Ball = (props) => {
    const source = props.icon;
    const [decal] = useTexture([source]);

    return (

        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            
            <mesh scale={2.75}>
                <icosahedronGeometry  args={[1,1]}/>
                <meshStandardMaterial
                color="#ffffff" 
                flatShading/>
                <Decal
                position={[0,0,1]}
                map={decal}
                rotation={[2*Math.PI, 0, 6.25]}
                />
               
            </mesh>
        </Float>

    )
}

const BallCanvas= ({icon}) => {
    return (
        <Canvas
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={null}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.35}/>
                <directionalLight position={[1,1,1]} intensity={1}/>
                <Ball icon={icon} />
            
            </Suspense>
            <Preload all />
        </Canvas>
    )
}
export default BallCanvas