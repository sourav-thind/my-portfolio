import React from 'react'
import MainCanvas from './MainCanvas'

type Props = {}

const CanvasLoader = (props: Props) => {
  return (
    <div className='h-screen overflow-hidden scrollbar-none'>
    <mesh>
    {/* <hemisphereLight intensity={1} />
    <ambientLight intensity={2}/>
    <pointLight intensity={1}/> */}
   {/* <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={15} intensity={1} castShadow  shadow-mapsize={1024}/> */}
    
    <MainCanvas />
  
   </mesh>

    </div>

  )
  
}

export default CanvasLoader