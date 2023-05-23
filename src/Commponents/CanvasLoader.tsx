import React from 'react'
import MainCanvas from './MainCanvas'
import { Html } from '@react-three/drei'
import Header from './Header'
type Props = {}

const CanvasLoader = (props: Props) => {
  return (
    <div className='h-screen'>
    <mesh>
    <hemisphereLight intensity={1} />
    <ambientLight intensity={2}/>
    <pointLight intensity={1}/>
   <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={15} intensity={1} castShadow  shadow-mapsize={1024}/>

    <MainCanvas />
    {/* <Html><Header/></Html> */}
   </mesh>

    </div>

  )
  
}

export default CanvasLoader