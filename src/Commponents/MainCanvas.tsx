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
      shadows
      camera={{ position: [0,-16,3], fov: 30 } }
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loading/>}>
        <hemisphereLight intensity={1} groundColor="black" />
        <pointLight intensity={1} />
        <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={15} intensity={1} castShadow shadow-mapsize={1024} />
        <spotLight position={[0, 0, 0]} angle={0.12} penumbra={15} intensity={1} castShadow shadow-mapsize={1024} />
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