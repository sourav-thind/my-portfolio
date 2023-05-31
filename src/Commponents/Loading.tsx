import { Html } from '@react-three/drei';
import React from 'react'
import HashLoader from "react-spinners/HashLoader";
type Props = {}

const Loading = (props: Props) => {
    
  return (
    <Html>
    <div className=' bg-transparent w-screen ml-[-60px] lg:ml-[-80px] gap-y-10'>
    <HashLoader
      size={120}
      color='#43ffaf'/>
      <h1 className='text-3xl font-bold text-drfgclr'> Loading...</h1>
      </div>
      </Html>
  )
}

export default Loading