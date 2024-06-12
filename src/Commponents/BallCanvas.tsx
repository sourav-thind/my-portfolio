import React, {  Suspense} from 'react'
import { Canvas} from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'

type Props = {
    icon: string;
};


const Ball: React.FC<Props> = (props) => {
    const source = props.icon;
    const [decal] = useTexture([source]);

    return (

        // <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        //     <ambientLight intensity={0.35}/>
        //     <directionalLight position={[0,0,0.05]}/>
        //     <mesh castShadow receiveShadow scale={2.75}>
        //         <icosahedronGeometry  args={[1,1]}/>
        //         <meshStandardMaterial
        //         color="#fff8eb"
        //         polygonOffset
        //         polygonOffsetFactor={-5}
        //         flatShading/>
        //         <Decal
        //         position={[0,0,1]}
        //         map={decal}
        //         rotation={[2*Math.PI, 0, 6.25]}
        //         flatShading/>
        //         <Decal
        //         position={[0,0,-1]}
        //         rotation={[0, Math.PI, 6.25]}
        //         map={decal}
        //         flatShading/>  
        //     </mesh>
        // </Float>
<></>
   )
}

const BallCanvas: React.FC<Props>  = ({icon}) => {
    return (
    //     <Canvas
    //         frameloop='demand'
    //         gl={{ preserveDrawingBuffer: true }}>
    //         <Suspense fallback={null}>
    //             <OrbitControls enableZoom={false} />
             
    //             <Ball icon={icon} />
            
    //         </Suspense>
    //         <Preload all />
    //     </Canvas>
    <></>
     )

    
}
export default BallCanvas