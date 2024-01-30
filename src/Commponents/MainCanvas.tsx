"use Client";
import  {Suspense}  from 'react'
import { Canvas} from '@react-three/fiber';
import { Preload, ScrollControls, Html, OrbitControls} from '@react-three/drei'
import MainSetup from './MainSetup';
import Loading from './Loading';
import { useGLTF } from '@react-three/drei';


type Props = {}

const MainCanvas = () => {
  //  const firstGltf = useGLTF("./threeProjects/MainSetup.glb");
  return (
<>
    <Canvas className='h-screen scrollbar-none'
    frameloop='demand'
      camera={{ position: [0,-16,3], fov: 30 } }
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loading/>}>
        
        <ambientLight intensity={0.5}  />
        <pointLight intensity={1} color={0xffffff} decay={2}/>
             <ScrollControls pages={3}>
                <MainSetup/>
        {/* <Html transform occlude wrapperclass="htmlScreen"   style={{
          border: 'none', pointerEvents: 'none', }} distanceFactor={7}>
          <iframe  src="https://protfolio-html.vercel.app/"  style={{ width: '1024px', height: '670px', position: 'sticky', border: 'none',
        pointerEvents: 'none', }}/></Html> */}
        </ScrollControls>
         
        </Suspense>
      <Preload />
    </Canvas>
    
    </>
  )
}

export default MainCanvas