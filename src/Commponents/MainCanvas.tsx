import { Suspense } from 'react'
import { Canvas} from '@react-three/fiber';
import { Preload, ScrollControls} from '@react-three/drei'
import MainSetup from './MainSetup';
import Loading from './Loading';

type Props = {}

const MainCanvas = () => {

  return (
<>
    <Canvas 
    className='h-screen scrollbar-none'
    frameloop='demand'
      
      camera={{ position: [0,-16,3], fov: 30 } }
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loading/>}>
        
        <ambientLight intensity={0.5}  />
        <pointLight intensity={1} color={0xffffff} decay={2}/>
        
        
        <ScrollControls  pages={3}>
        
        <MainSetup/>
       </ScrollControls>
        </Suspense>
      <Preload />
    </Canvas>
    
    </>
  )
}

export default MainCanvas