import React from "react";
import { Canvas } from "@react-three/fiber";
import MainSetup from "../MainSetup";



function MainCanvas() {
  return (
 
    <Canvas style={{ height: '100vh' }} color="#475569">
      <MainSetup/>
    </Canvas>
   
  );
}

export default MainCanvas;
