import React from 'react'
import MainCanvas from './MainCanvas'

type Props = {}

const CanvasLoader = (props: Props) => {
  return (
    <div className='h-screen overflow-hidden scrollbar-none ' >
    
    <MainCanvas />

    </div>

  )
  
}

export default CanvasLoader