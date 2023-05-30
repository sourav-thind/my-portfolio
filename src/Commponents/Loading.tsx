import React from 'react'
import HashLoader from "react-spinners/HashLoader";
type Props = {}

const Loading = (props: Props) => {
    
  return (
    <div className='h-screen bg-slate-800 flex flex-col items-center justify-center gap-y-5'>
    <HashLoader
      size={100}
      color='#43ffaf'/>
      <h1 className='text-3xl font-bold text-drfgclr'> Loading ...</h1>
      </div>
  )
}

export default Loading